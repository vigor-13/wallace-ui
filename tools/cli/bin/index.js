const { run } = require('../dist/index.js');

run().catch(() => {
  console.error(e);
  process.exit(1);
});
