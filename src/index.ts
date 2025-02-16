// import { Strapi } from '@strapi/types';
import WebSocket from 'ws';

export default async ({ strapi }: { strapi: any }) => {
  // Start the Strapi server
  await strapi.start();

  // Create a WebSocket server
  const wss = new WebSocket.Server({ port: 8080 });

  wss.on('connection', (ws) => {
    console.log('Client connected');

    // Handle incoming messages
    ws.on('message', (message: string) => {
      console.log(`Received: ${message}`);

      // Echo the message back to the client
      ws.send(`Server: ${message}`);
    });

    // Handle client disconnection
    ws.on('close', () => {
      console.log('Client disconnected');
    });
  });

  console.log('WebSocket server is running on ws://localhost:8080');
};