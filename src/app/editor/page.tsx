'use client';
import React, { useEffect, useState, useRef, Suspense } from 'react';
import io, { Socket } from 'socket.io-client';
import { debounce } from 'lodash';
import FileTree from '@/components/Tree'; // Import FileTree component

interface FileTree {
    [key: string]: FileTree | null;
}

const Page: React.FC = () => {
    const [fileTree, setFileTree] = useState<FileTree>({});
    const [selectedFile, setSelectedFile] = useState<string | null>(null);
    const [fileContent, setFileContent] = useState<string>('');
    const [terminalOutput, setTerminalOutput] = useState<string>('');
    const [socket, setSocket] = useState<Socket | null>(null);
    const terminalInputRef = useRef<HTMLInputElement>(null);

    // Fetch file tree
    useEffect(() => {
        fetch(`https://xn-backend.onrender.com/files?userId=testuser`)
            .then((res) => res.json())
            .then((data) => {
                if (data && data.tree) {
                    setFileTree(data.tree);
                } else {
                    console.error('Unexpected response format:', data);
                    setFileTree({});
                }
            })
            .catch((error) => {
                console.error('Error fetching file tree:', error);
                setFileTree({});
            });
    }, []);

    // Initialize socket
    useEffect(() => {
        const newSocket = io('https://xn-backend.onrender.com', {
            reconnection: true,
            reconnectionAttempts: 5,
            reconnectionDelay: 1000,
            transports: ['websocket'], // Ensure WebSocket transport is used
        });
        setSocket(newSocket);
        newSocket.on('terminal:data', (data) => {
            if (data && data.data) {
                setTerminalOutput((prev) => prev + data.data);
            }
        });
        newSocket.on('file:refresh', (filePath) => {
            console.log('File changed:', filePath);
        });
        return () => {
            newSocket.disconnect();
        };
    }, []);

    // Fetch file content
    useEffect(() => {
        if (!selectedFile) return;
        fetch(`https://xn-backend.onrender.com/files/content?path=${encodeURIComponent(selectedFile)}&userId=testuser`)
            .then((res) => res.json())
            .then((data) => {
                if (data && data.content) {
                    setFileContent(data.content);
                } else {
                    console.error('Unexpected response format:', data);
                }
            })
            .catch((error) => console.error('Error fetching file content:', error));
    }, [selectedFile]);

    const handleFileChange = debounce((newContent: string) => {
        if (!selectedFile || !socket) return;
        socket.emit('file:change', { path: selectedFile, content: newContent, userId: 'testuser' });
    }, 500);

    const handleTerminalInput = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && terminalInputRef.current) {
            const inputValue = terminalInputRef.current.value;
            socket?.emit('terminal:write', inputValue + '\n');
            setTerminalOutput((prev) => prev + inputValue + '\n');
            terminalInputRef.current.value = '';
        }
    };

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="h-screen bg-gray-900 text-white grid grid-cols-[1fr_2fr_1fr]">
                {/* File Explorer */}
                <div className="bg-gray-800 p-4 overflow-y-auto border-r border-gray-700">
                    <h2 className="text-lg font-bold mb-4">File Explorer</h2>
                    <FileTree tree={fileTree} onSelect={setSelectedFile} />
                </div>

                {/* File Editor */}
                <div className="p-4 bg-gray-900 flex flex-col">
                    <h2 className="text-lg font-bold mb-4">File Editor</h2>
                    <div className="flex-1 relative">
                        {selectedFile ? (
                            <textarea
                                className="w-full h-full bg-gray-800 text-white border-none p-4 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                                value={fileContent}
                                onChange={(e) => {
                                    setFileContent(e.target.value);
                                    handleFileChange(e.target.value);
                                }}
                            />
                        ) : (
                            <p className="text-gray-500 text-center mt-16">Select a file to edit</p>
                        )}
                    </div>
                </div>

                {/* Terminal */}
                <div className="p-4 bg-gray-800 flex flex-col">
                    <h2 className="text-lg font-bold mb-4">Terminal</h2>
                    <div className="flex-1 bg-gray-900 border border-gray-700 p-4 rounded-md overflow-y-auto">
                        <pre className="whitespace-pre-wrap">{terminalOutput}</pre>
                    </div>
                    <input
                        type="text"
                        ref={terminalInputRef}
                        className="w-full mt-4 bg-gray-800 text-white border-none p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                        onKeyDown={handleTerminalInput}
                        placeholder="Type a command"
                    />
                </div>
            </div>
        </Suspense>
    );
};

export default Page;