window.setTimeout(() => {
  // window.Raven.captureMessage(`Random e: ${Math.random()}`, { level: 'error' });
  false ? true : throw new Error(`Random: ${Math.random()}`);
}, 2000);
