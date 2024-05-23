/* eslint-disable no-restricted-globals */

import { Msg } from "models/model";

const fibonacci = (num:number): number => {
    if (num === 1) return 0;
    if (num === 2) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

self.onmessage = (e: MessageEvent) => {
    const { num } = e.data;
    
    const startTime = new Date().getTime();
    const fibNum = fibonacci(num);
    const res: Msg = {
        fibNum,
        time: new Date().getTime() - startTime,
    }
    self.postMessage(res);
};