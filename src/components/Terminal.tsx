'use client';
import { useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";
import type { Terminal as XTerm } from "@xterm/xterm";
import type { FitAddon as FitAddonType } from "@xterm/addon-fit";

const Terminal = () => {
    const terminalRef = useRef<HTMLDivElement>(null);
    const terminalInstance = useRef<XTerm | null>(null);
    const fitAddon = useRef<FitAddonType | null>(null);
    const socketRef = useRef<Socket | null>(null);

    useEffect(() => {
        const initializeTerminal = async () => {
            if (!terminalRef.current || terminalInstance.current) return;
            try {
                const [{ Terminal }, { FitAddon }] = await Promise.all([
                    import('@xterm/xterm'),
                    import('@xterm/addon-fit'),
                ]);

                socketRef.current = io('https://xn-backend.onrender.com', {
                    reconnection: true,
                    reconnectionAttempts: 5,
                    reconnectionDelay: 1000,
                });

                const term = new Terminal({
                    rows: 24,
                    cols: 80,
                    cursorBlink: true,
                    fontSize: 14,
                    fontFamily: 'Menlo, Monaco, "Courier New", monospace',
                    theme: {
                        background: '#1e1e1e',
                        foreground: '#ffffff'
                    }
                });

                fitAddon.current = new FitAddon();
                term.loadAddon(fitAddon.current);
                terminalInstance.current = term;

                if (terminalRef.current) {
                    term.open(terminalRef.current);
                    fitAddon.current.fit();

                    term.onData((data: string) => {
                        if (socketRef.current) {
                            socketRef.current.emit("terminal:write", data);
                        }
                    });

                    const handleResize = () => {
                        if (fitAddon.current) {
                            fitAddon.current.fit();
                            const cols = term.cols;
                            const rows = term.rows;
                            if (socketRef.current) {
                                socketRef.current.emit("terminal:resize", { cols, rows });
                            }
                        }
                    };

                    socketRef.current.on("terminal:data", (data: { data: string }) => {
                        if (terminalInstance.current && data?.data) {
                            terminalInstance.current.write(data.data);
                        }
                    });

                    window.addEventListener("resize", handleResize);
                    handleResize();
                    term.write("\x1B[1;3;32mTerminal Connected\x1B[0m\r\n$ ");
                }
            } catch (error) {
                console.error("Error initializing terminal:", error);
            }
        };

        initializeTerminal();

        return () => {
            if (socketRef.current) {
                socketRef.current.disconnect();
            }
            if (terminalInstance.current) {
                terminalInstance.current.dispose();
            }
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div 
            ref={terminalRef}
            style={{
                height: "100%",
                width: "100%",
                backgroundColor: "#1e1e1e",
                padding: "12px",
                borderRadius: "4px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
            }}
        />
    );
};

export default Terminal;

function handleResize() {
    throw new Error("Function not implemented.");
}