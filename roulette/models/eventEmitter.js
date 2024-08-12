// eventEmitter.js
export class EventEmitter {
    #listeners = {}
    #getCallbacksFor(eventName) {
        return this.#listeners[eventName] ?? [];
    };
    #setCallbacksFor(eventName, listeners) {
        if (listeners.length === 0) {
            delete this.#listeners[eventName];
        } else {
            this.#listeners[eventName] = listeners;
        }
    };
    subscribe(eventName, callback) {
        const subs = this.#getCallbacksFor(eventName);
        subs.push(callback);
        this.#setCallbacksFor(eventName, subs);
        return () => this.unsubscribe(eventName, callback);
    };
    unsubscribe(eventName, callback) {
        const subs = this.#getCallbacksFor(eventName).filter(item => item !== callback);
        this.#setCallbacksFor(eventName, subs);
    };
    dispatch(eventName, ...args) {
        const callbacks = this.#getCallbacksFor(eventName);
        callbacks.forEach(callback => callback(...args));
    };
    once(eventName, callback) {
        const wrapper = (data) => {
            callback(data);
            this.unsubscribe(eventName, wrapper); // Убираем обратный вызов после выполнения
        };
        this.subscribe(eventName, wrapper);
    };
};
export const eventEmitter = new EventEmitter();