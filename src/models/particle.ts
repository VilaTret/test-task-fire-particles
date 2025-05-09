import { PARTICLES_SETTINGS } from '../utils/constants';
import { MathHelper } from '../utils/helpers';

export class Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    alpha: number;
    g: number;
    color: string;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = MathHelper.randomBetween(
            PARTICLES_SETTINGS.MIN_SIZE,
            PARTICLES_SETTINGS.MAX_SIZE,
        );
        this.speedX = MathHelper.randomBetween(
            PARTICLES_SETTINGS.MIN_SEED_X,
            PARTICLES_SETTINGS.MAX_SEED_X,
        );
        this.speedY = MathHelper.randomBetween(
            PARTICLES_SETTINGS.MIN_SEED_Y,
            PARTICLES_SETTINGS.MAX_SEED_Y,
        );
        this.alpha = PARTICLES_SETTINGS.MAX_AIPHA;
        this.g = PARTICLES_SETTINGS.G;
        this.color = `rgb(${PARTICLES_SETTINGS.R}, ${this.g}, ${PARTICLES_SETTINGS.B})`;
    }

    update() {
        this.x += this.speedX;
        this.y -= this.speedY;
        this.alpha *= PARTICLES_SETTINGS.ALPHA_RATE;
        this.size *= PARTICLES_SETTINGS.SIZE_RATE;
        this.g =
            this.g > PARTICLES_SETTINGS.MIN_G
                ? this.g * PARTICLES_SETTINGS.COLOR_RATE
                : this.g;
        this.color = `rgb(${PARTICLES_SETTINGS.R}, ${this.g}, ${PARTICLES_SETTINGS.B})`;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
    }
}
