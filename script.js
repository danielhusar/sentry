window.setTimeout(() => {
  window.Raven.captureMessage(`Random e: ${Math.radon}`, { level: 'error' });
}, 2000);
