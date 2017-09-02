export class Rand {
    static randomInteger() {
        return Math.ceil(Math.random() * 10);
    }

    static randomRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}