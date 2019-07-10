export function networkIsOnline() {
    const state = window.navigator.onLine ? true : false;
    return state;
}
