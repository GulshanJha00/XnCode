import React, { useState } from 'react';

// Define a more specific type for nodes instead of using any
interface FileTreeNode {
    [key: string]: FileTreeNode | null;
}

interface FileTreeNodeProps {
    fileName: string;
    nodes?: FileTreeNode | null; // Allow nodes to be FileTreeNode, null, or undefined
    onSelect: (path: string) => void;
    path: string;
}

const FileTreeNode: React.FC<FileTreeNodeProps> = ({ fileName, nodes, onSelect, path }) => {
    const [isExpanded, setIsExpanded] = useState(true);
    const isDir = !!nodes;

    return (
        <div 
            onClick={(e) => {
                e.stopPropagation();
                if (isDir) {
                    setIsExpanded(!isExpanded);
                } else {
                    onSelect(path);
                }
            }} 
            className="group"
        >
            <div className={`
                flex items-center gap-2 px-2 py-1 rounded
                ${!isDir ? 'hover:bg-gray-700 cursor-pointer' : 'cursor-default'}
                group-hover:bg-gray-800/50
            `}>
                <span className="text-gray-400">
                    {isDir ? (isExpanded ? '📁' : '📂') : '📄'}
                </span>
                <span className="text-gray-300 text-sm">
                    {fileName}
                </span>
            </div>
            
            {isDir && isExpanded && fileName !== 'node_modules' && (
                <div className="ml-4 border-l border-gray-700">
                    {Object.keys(nodes).map((child) => (
                        <FileTreeNode
                            key={child}
                            onSelect={onSelect}
                            path={`${path}/${child}`}
                            fileName={child}
                            nodes={nodes[child]}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

interface FileTreeProps {
    tree: FileTreeNode; // Use the specific type defined above
    onSelect: (path: string) => void;
}

const FileTree: React.FC<FileTreeProps> = ({ tree, onSelect }) => {
    if (!tree || Object.keys(tree).length === 0) {
        return (
            <div className="flex items-center justify-center h-full text-gray-400">
                Loading file tree...
            </div>
        );
    }

    return (
        <div className="h-full overflow-auto p-2 bg-[#1E1E1E]">
            <FileTreeNode
                onSelect={onSelect}
                fileName="/"
                path="."
                nodes={tree}
            />
        </div>
    );
};

export default FileTree;