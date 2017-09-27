window.setTimeout(() => {
  // window.Raven.captureMessage(`Random e: ${Math.random()}`, { level: 'error' });
  throw new Error(`Random e: ${Math.random()}`);
}, 2000);
