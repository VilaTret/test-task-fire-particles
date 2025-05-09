import './style.css';
import { Particle } from './models/particle';
import { CANVAS_SETTING, PARTICLES_SETTINGS } from './utils/constants';
import { MathHelper } from './utils/helpers';

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;

const particles: Particle[] = [];

function createParticles() {
    for (let i = 0; i < CANVAS_SETTING.COUNT_PARTICELS; i++) {
        const x = canvas.width / 2 + MathHelper.randomBetween(-25, 25);
        const y = canvas.height - 10;
        particles.push(new Particle(x, y));
    }
}

function animate() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    createParticles();

    for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        p.update();
        p.draw(ctx);
        if (
            p.alpha <= PARTICLES_SETTINGS.MIN_ALPHA ||
            p.size < PARTICLES_SETTINGS.MIN_SIZE
        ) {
            particles.splice(i, 1);
        }
    }

    requestAnimationFrame(animate);
}

animate();
