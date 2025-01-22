'use client';
import React, { useEffect, useState, useRef, Suspense } from 'react';
import io, { Socket } from 'socket.io-client';
import { debounce } from 'lodash';
import FileTree from './FileTree'; // Import FileTree component

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
        const userId = 'testuser'; // Use a specific user ID for testing
        fetch(`https://xn-backend.onrender.com/files?userId=${userId}`)
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
        const userId = 'testuser'; // Use a specific user ID for testing
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
        const userId = 'testuser'; // Use a specific user ID for testing
        fetch(`https://xn-backend.onrender.com/files/content?path=${encodeURIComponent(selectedFile)}&userId=${userId}`)
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
        const userId = 'testuser'; // Use a specific user ID for testing
        socket.emit('file:change', { path: selectedFile, content: newContent, userId });
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
            <div className="flex flex-row h-screen bg-gray-100">
                {/* File Explorer */}
                <div className="w-1/4 p-4 bg-white border-r overflow-y-auto">
                    <h2 className="text-lg font-bold mb-4">File Explorer</h2>
                    <FileTree tree={fileTree} onSelect={setSelectedFile} />
                </div>
                {/* File Editor */}
                <div className="w-1/2 p-4">
                    <h2 className="text-lg font-bold mb-4">File Editor</h2>
                    {selectedFile ? (
                        <textarea
                            className="w-full h-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={fileContent}
                            onChange={(e) => {
                                setFileContent(e.target.value);
                                handleFileChange(e.target.value);
                            }}
                        />
                    ) : (
                        <p className="text-gray-500">Select a file to edit</p>
                    )}
                </div>
                {/* Terminal */}
                <div className="w-1/4 p-4 bg-black text-white flex flex-col">
                    <h2 className="text-lg font-bold mb-4">Terminal</h2>
                    <div className="flex-1 overflow-y-auto border p-2 bg-gray-800 rounded">
                        <pre className="whitespace-pre-wrap">{terminalOutput}</pre>
                    </div>
                    <input
                        type="text"
                        ref={terminalInputRef}
                        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onKeyDown={handleTerminalInput}
                        placeholder="Type a command"
                    />
                </div>
            </div>
        </Suspense>
    );
};

export default Page;
