exports.onListening = (server) => {
  const { address, port } = server.address();
  console.log(`solve-API running at http://${address}:${port}`);
};

exports.onError = (err, port) => {
  const errorMessage = `Is not possible to access port ${port} - `;

  switch (err.code) {
    case 'EACCES':
      console.log(`${errorMessage} Requires elevated privileges.`);
      process.exit(1);
      break;

    case 'EADDRINUSE':
      console.log(`${errorMessage} It's already in use.`);
      process.exit(1);
      break;

    default:
      throw err;
  }
};
