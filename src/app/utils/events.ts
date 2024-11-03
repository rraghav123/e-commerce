
function subscribe(eventName: string, listener: () => unknown) {
    document.addEventListener(eventName, listener);
}

function unsubscribe(eventName: string, listener: () => unknown) {
    document.removeEventListener(eventName, listener);
}

function publish(eventName: string, data: unknown) {
    const event = new CustomEvent(eventName, { detail: data });
    document.dispatchEvent(event);
}

export {
    subscribe,
    unsubscribe,
    publish
}