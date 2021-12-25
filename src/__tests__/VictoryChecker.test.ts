import VictoryChecker from "../VictoryChecker";

const testCases = [
    ['X', '', '',
    'O', 'X', '',
    'O', 'O', 'X'],

    ['X', '', 'X',
    'O', 'X', '',
    'X', 'O', 'O'],
    
    ['X', 'X', 'X',
    '', 'O', '',
    'O', 'O', ''],

    ['X', '', 'O',
    'X', 'O', '',
    'X', 'O', '']
];

for (const testCase of testCases) {
    
    const victoryChecker = new VictoryChecker(testCase);
    const checkIsGameWon = () => {
        expect(victoryChecker.isGameOver()).toEqual(true);
    };
    
    test('Checks victory', checkIsGameWon);
}

