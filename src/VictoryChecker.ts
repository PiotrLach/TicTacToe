import { Console } from "console";
import { Coords } from "types/Coords";

let squares: Array<string>;
const DIMENS = 3;
const DIR_HORIZONTAL = 0;
const DIR_VERTICAL = 1;

export const VictoryChecker = (input: Array<string>) => {
    squares = input;
    return () => isGameOver();
}

function isGameOver(): boolean {        
    return isAnyRowUniform() || isAnyColUniform() || isAnyDiagonalUniform();
}

function isAnyRowUniform(): boolean {
    return isRowOrColUniform(DIR_HORIZONTAL);
}

function isAnyColUniform(): boolean {
    return isRowOrColUniform(DIR_VERTICAL);
}

function isAnyDiagonalUniform(): boolean {
    const start = 0;
    const end = DIMENS - 1;

    const bottomToTop: Coords = [end, start, start, end];
    const topToBottom: Coords = [start, start, end, end];

    const opt1 = isDiagonalUniform(bottomToTop);
    const opt2 = isDiagonalUniform(topToBottom);

    return opt1 || opt2;
}

function isDiagonalUniform(coords: Coords): boolean {

    const [x1, y1, x2, y2] = coords;

    const excerpt = [];

    let i = x1, j = y1;

    const vDiff = x1 < x2 ? 1 : -1;
    const hDiff = y1 < y2 ? 1 : -1;

    while (i !== x2 + vDiff || j !== y2 + hDiff) {

        const index = i * DIMENS + j;
        const symbol = squares[index];
        excerpt.push(symbol);

        i += vDiff;
        j += hDiff;
    }

    return isExcerptUniform(excerpt);
}

function isRowOrColUniform(mode: number): boolean {
    for (let i = 0; i < DIMENS; i++) {

        const excerpt = [];

        for (let j = 0; j < DIMENS; j++) {

            const direction = [
                i * DIMENS + j,
                j * DIMENS + i
            ];

            const index = direction[mode];
            const symbol = squares[index];
            excerpt.push(symbol);
        }

        if (isExcerptUniform(excerpt)) {
            return true;
        }
    }
    return false;
}

function isExcerptUniform(excerpt: Array<string>): boolean {

    const first = excerpt[0];

    if (first !== "O" && first !== "X") {
        return false;
    }

    for (const next of excerpt) {
        if (next !== first) {
            return false;
        }
    }

    return true;
}