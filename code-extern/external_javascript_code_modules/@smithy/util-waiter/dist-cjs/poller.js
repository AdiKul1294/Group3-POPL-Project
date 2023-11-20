"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runPolling = void 0;
const sleep_1 = require("./utils/sleep");
const waiter_1 = require("./waiter");
const exponentialBackoffWithJitter = (minDelay, maxDelay, attemptCeiling, attempt) => {
    if (attempt > attemptCeiling)
        return maxDelay;
    const delay = minDelay * 2 ** (attempt - 1);
    return randomInRange(minDelay, delay);
};
const randomInRange = (min, max) => min + Math.random() * (max - min);
const runPolling = async ({ minDelay, maxDelay, maxWaitTime, abortController, client, abortSignal }, input, acceptorChecks) => {
    var _a;
    const { state, reason } = await acceptorChecks(client, input);
    if (state !== waiter_1.WaiterState.RETRY) {
        return { state, reason };
    }
    let currentAttempt = 1;
    const waitUntil = Date.now() + maxWaitTime * 1000;
    const attemptCeiling = Math.log(maxDelay / minDelay) / Math.log(2) + 1;
    while (true) {
        if (((_a = abortController === null || abortController === void 0 ? void 0 : abortController.signal) === null || _a === void 0 ? void 0 : _a.aborted) || (abortSignal === null || abortSignal === void 0 ? void 0 : abortSignal.aborted)) {
            return { state: waiter_1.WaiterState.ABORTED };
        }
        const delay = exponentialBackoffWithJitter(minDelay, maxDelay, attemptCeiling, currentAttempt);
        if (Date.now() + delay * 1000 > waitUntil) {
            return { state: waiter_1.WaiterState.TIMEOUT };
        }
        await (0, sleep_1.sleep)(delay);
        const { state, reason } = await acceptorChecks(client, input);
        if (state !== waiter_1.WaiterState.RETRY) {
            return { state, reason };
        }
        currentAttempt += 1;
    }
};
exports.runPolling = runPolling;
