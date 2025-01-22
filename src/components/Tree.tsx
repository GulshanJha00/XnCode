// FileTree.tsx
import React, { useState, useEffect } from 'react';

interface FileTreeProps {
    tree: { [key: string]: any };
    onSelect: (path: string) => void;
}

const FileTree: React.FC<FileTreeProps> = ({ tree, onSelect }) => {
    const [expandedPaths, setExpandedPaths] = useState<Set<string>>(new Set(['.'])); // Start with the root expanded

    const toggleExpand = (path: string) => {
        setExpandedPaths((prevPaths) => {
            const newPaths = new Set(prevPaths);
            if (newPaths.has(path)) {
                newPaths.delete(path);
            } else {
                newPaths.add(path);
            }
            return newPaths;
        });
    };

    const renderTree = (node: { [key: string]: any }, basePath = '.') => {
        if (!node || typeof node !== 'object') return [];
        return Object.entries(node).map(([key, value]) => {
            const fullPath = `${basePath}/${key}`;
            const isDir = !!value;
            return (
                <div key={fullPath} className="group">
                    <div 
                        onClick={(e) => {
                            e.stopPropagation();
                            if (isDir) {
                                toggleExpand(fullPath);
                            } else {
                                onSelect(fullPath);
                            }
                        }} 
                        className={`
                            flex items-center gap-2 px-2 py-1 rounded
                            ${!isDir ? 'hover:bg-gray-700 cursor-pointer' : 'cursor-default'}
                            group-hover:bg-gray-800/50
                        `}
                    >
                        <span className="text-gray-400">
                            {isDir ? (expandedPaths.has(fullPath) ? '📁' : '📂') : '📄'}
                        </span>
                        <span className="text-gray-300 text-sm">
                            {key}
                        </span>
                    </div>
                    {isDir && expandedPaths.has(fullPath) && key !== 'node_modules' && (
                        <div className="ml-4 border-l border-gray-700">
                            {renderTree(value, fullPath)}
                        </div>
                    )}
                </div>
            );
        });
    };

    useEffect(() => {
        // Log the current file tree for debugging
        console.log('Current file tree:', tree);
    }, [tree]);

    if (!tree || Object.keys(tree).length === 0) {
        return (
            <div className="flex items-center justify-center h-full text-gray-400">
                Loading file tree...
            </div>
        );
    }

    return (
        <div className="h-full overflow-auto p-2 bg-[#1E1E1E]">
            {renderTree(tree)}
        </div>
    );
};

export default FileTree;
