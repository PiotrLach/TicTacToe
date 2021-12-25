type Coords = [number, number, number, number];

export default class VictoryChecker {

    private readonly squares;
    private readonly DIMENS = 3;
    private readonly DIR_HORIZONTAL = 0;
    private readonly DIR_VERTICAL = 1;

    constructor(squares: Array<string>) {
        this.squares = squares;
    }

    public isGameOver(): boolean {
        return this.isAnyRowUniform() || this.isAnyColUniform() || this.isAnyDiagonalUniform();
    }

    private isAnyRowUniform(): boolean {
        return this.isRowOrColUniform(this.DIR_HORIZONTAL);
    }

    private isAnyColUniform(): boolean {
        return this.isRowOrColUniform(this.DIR_VERTICAL);
    }

    private isAnyDiagonalUniform(): boolean {
        const start = 0;
        const end = this.DIMENS - 1;

        const bottomToTop: Coords = [end, start, start, end];
        const topToBottom: Coords = [start, start, end, end];

        const opt1 = this.isDiagonalUniform(bottomToTop);
        const opt2 = this.isDiagonalUniform(topToBottom);

        return opt1 || opt2;
    }

    private isDiagonalUniform(coords: Coords): boolean {

        const [x1, y1, x2, y2] = coords;

        const excerpt = [];

        let i = 0, j = 0;

        while (i != this.DIMENS || j != this.DIMENS) {

            const index = i * this.DIMENS + j;
            const symbol = this.squares[index];
            excerpt.push(symbol);

            i++;
            j++;
        }

        return this.isExcerptUniform(excerpt);
    }

    private isRowOrColUniform(mode: number): boolean {
        for (let i = 0; i < this.DIMENS; i++) {

            const excerpt = [];

            for (let j = 0; j < this.DIMENS; j++) {

                const direction = [
                    i * this.DIMENS + j,
                    j * this.DIMENS + i
                ];

                const index = direction[mode];
                const symbol = this.squares[index];
                excerpt.push(symbol);
            }

            if (this.isExcerptUniform(excerpt)) {
                return true;
            }
        }
        return false;
    }

    private isExcerptUniform(excerpt: Array<string>): boolean {

        const first = excerpt[0];

        if (first != "O" && first != "X") {
            return false;
        }

        for (const next of excerpt) {
            if (next != first) {
                return false;
            }
        }

        return true;
    }
}