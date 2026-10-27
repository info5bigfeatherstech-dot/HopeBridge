export const waitForMockApi = (data) => new Promise((resolve) => {
  window.setTimeout(() => resolve(data), 280);
});
