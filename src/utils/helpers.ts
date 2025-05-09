export class MathHelper {
    public static randomBetween(min: number, max: number) {
        return Math.random() * (max - min) + min;
    }
}
