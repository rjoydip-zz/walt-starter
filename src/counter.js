let counter = 0;

export function decrement() {
    counter -= 1;
    return counter;
}

export function increment() {
    counter += 1;
    return counter;
}

export default {
    decrement,
    increment,
};