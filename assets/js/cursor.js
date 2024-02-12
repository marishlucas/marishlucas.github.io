const lerp = (a, b, n) => (1 - n) * a + n * b;

class Cursor {
    constructor() {
        // config
        this.target = { x: 0.5, y: 0.5 }; // mouse position
        this.cursor = { x: 0.5, y: 0.5 }; // cursor position
        this.multiplier = 1;
        this.textElements = document.querySelectorAll('[data-cursor]');
        this.speed = 0.2;
        this.init();
    }
    bindAll() {
        ["onMouseMove", "render"].forEach((fn) => (this[fn] = this[fn].bind(this)));
    }
    onMouseMove(e) {
        //get normalized mouse coordinates [0, 1]
        this.target.x = e.clientX / window.innerWidth;
        this.target.y = e.clientY / window.innerHeight;
        // trigger loop if no loop is active
        if (!this.raf) this.raf = requestAnimationFrame(this.render);
    }
    onMouseEnter() {
        this.multiplier = 0.6;
        document.documentElement.style.setProperty("--multiplier", this.multiplier);
    }
    onMouseLeave() {
        this.multiplier = 1;
        document.documentElement.style.setProperty("--multiplier", this.multiplier);
    }
    render() {
        console.log(this.multiplier)
        //calculate lerped values
        this.cursor.x = lerp(this.cursor.x, this.target.x, this.speed);
        this.cursor.y = lerp(this.cursor.y, this.target.y, this.speed);
        document.documentElement.style.setProperty("--cursor-x", this.cursor.x);
        document.documentElement.style.setProperty("--cursor-y", this.cursor.y);
        //cancel loop if mouse stops moving
        const delta = Math.sqrt(
            Math.pow(this.target.x - this.cursor.x, 2) +
            Math.pow(this.target.y - this.cursor.y, 2)
        );
        if (delta < 0.001) {
            cancelAnimationFrame(this.raf);
            this.raf = null;
            return;
        }
        //or continue looping if mouse is moving
        this.raf = requestAnimationFrame(this.render);
    }
    init() {
        this.bindAll();
        document.documentElement.style.setProperty("--multiplier", this.multiplier);
        window.addEventListener("mousemove", this.onMouseMove);
        this.textElements.forEach(element => {
            element.addEventListener('mouseenter', this.onMouseEnter);
            element.addEventListener('mouseleave', this.onMouseLeave);
        });
        this.raf = requestAnimationFrame(this.render);
    }
}

export { Cursor };
