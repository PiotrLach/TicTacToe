export default class VictoryChecker {

    private readonly squares;
    private readonly DIMENS = 3;
    private readonly DIR_HORIZONTAL = 0;
    private readonly DIR_VERTICAL = 1;

    constructor (squares: Array<string>) {
        this.squares = squares;        
    }

    isGameWon(): boolean {
        return this.checkRows() || this.checkCols() || this.checkDiagonals();
    }

    private checkRows(): boolean {
        return this.isGameOver(this.DIR_HORIZONTAL);
    }

    private checkCols(): boolean {   
        return this.isGameOver(this.DIR_VERTICAL);
    }

    private checkDiagonals(): boolean {   
        return this.checkDiagonal();
    }

    private checkDiagonal(): boolean {   

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

    private isGameOver(mode: number): boolean {
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