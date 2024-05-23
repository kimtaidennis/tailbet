
// eslint-disable-next-line no-restricted-globals
self.onconnect  = (e) => {
    const port = e.ports;
    let { num1,num2} = e.data
    port.onmessage = (e) => {
      const workerResult = `Result: ${num1 * num2}`;
      port.postMessage(workerResult);
    };
};
  
