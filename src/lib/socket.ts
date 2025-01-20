// lib/socket.ts
import { io } from "socket.io-client";

const SOCKET_URL =  'https://xn-backend.onrender.com';

const getSocket = async () => {
  const socket = io(SOCKET_URL, {
    transports: ['websocket', 'polling'],
    reconnectionAttempts: 5,
    reconnectionDelay: 1000,
  });

  return new Promise((resolve, reject) => {
    socket.on('connect', () => {
      console.log('Socket connected!');
      resolve(socket);
    });

    socket.on('connect_error', (error) => {
      console.error('Socket connection error:', error);
      reject(error);
    });

    // Add a timeout
    setTimeout(() => {
      if (!socket.connected) {
        reject(new Error('Socket connection timeout'));
      }
    }, 5000);
  });
};

export default getSocket;