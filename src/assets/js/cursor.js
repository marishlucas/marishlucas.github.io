class CursorHandler {
    constructor(cursorSelector) {
        this.cursor = document.querySelector(cursorSelector);
    }

    positionElement(e) {
        this.cursor.style.left = e.clientX + "px";
        this.cursor.style.top = e.clientY + "px";
    }
}

const createCursor = () => {
    let cursorHandler = new CursorHandler('#cursor');
    document.addEventListener('mousemove', (e) => {
        cursorHandler.positionElement(e);
    });
}

export {createCursor};
