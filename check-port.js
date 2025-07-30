import { createServer } from 'net';

const server = createServer();

server.once('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log('Port 5000 is already in use');
    process.exit(1);
  } else {
    console.error('Unexpected error:', err);
    process.exit(1);
  }
});

server.once('listening', () => {
  console.log('Port 5000 is available');
  server.close();
  process.exit(0);
});

server.listen(5000);