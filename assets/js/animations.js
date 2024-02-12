class Animator {
    constructor() {
        this.animationDelay = 0;
        this.allSpans = [];

        this.init();
    }

    splitWords() {
        const elementsToSplit = document.querySelectorAll('[data-splitting]');

        elementsToSplit.forEach(element => {
            const words = element.innerText.split(' ');
            const wordSpans = words.map(word => {
                const characters = word.split('').map(char => `<span>${char}</span>`);
                return `<span class="word">${characters.join('')}</span>`;
            });
            element.innerHTML = wordSpans.join('&nbsp;');
        });
        this.animateSplitWords();
    }

    animateSplitWords() {
        this.allSpans = document.querySelectorAll('[data-splitting] > .word > span');

        this.allSpans.forEach(span => {
            this.animateSpan(span, this.animationDelay);
            this.animationDelay += 7; // delay between each character animation in milliseconds
        });
    }

    animateSpan(span, delayTime) {
        span.style.transform = "translateY(100%)";
        span.style.transition = "0.3s ease";

        const hero = document.querySelector('.hero');

        setTimeout(() => {
            hero.style.opacity = "1";
            setTimeout(() => {
                span.style.transform = "translateY(0)";
            }, delayTime);
        }, 900); // delay can be adjusted accordingly
    }

    animateHeader() {
        const header = document.querySelector('header');
        header.style.transition = "opacity 1s ease";
        setTimeout(() => {
            header.style.opacity = "1";
        }, 600); // delay can be adjusted accordingly
    }

    animateContent() {
        const content = document.querySelector('.content');
        content.style.transition = "opacity 1s ease";
        setTimeout(() => {
            content.style.opacity = "1";
        }, 1400); // delay can be adjusted accordingly
    }

    animatePage() {
        this.animateHeader();
        this.animateSplitWords();
        this.animateContent();
    }

    init() {
        this.splitWords();
        this.animatePage();
    }
}

export { Animator }
