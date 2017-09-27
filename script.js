window.setTimeout(() => {
  // window.Raven.captureMessage(`Random e: ${Math.random()}`, { level: 'error' });
  console.log('a')
  throw new Error(`Random: ${Math.random()}`);
}, 1000);
