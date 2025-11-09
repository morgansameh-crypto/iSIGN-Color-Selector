// Vercel serverless function entry point
import('../dist/index.js').then(module => {
  module.default;
});
