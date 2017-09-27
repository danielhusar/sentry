window.setTimeout(() => {
  window.Raven.captureMessage(`Random e: ${Math.random()}`, { level: 'error' });
}, 2000);
