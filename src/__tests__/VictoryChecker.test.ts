import { VictoryChecker } from "../VictoryChecker";

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
    
    const isVictory = VictoryChecker(testCase);
    const checkIsGameWon = () => {
        expect(isVictory()).toEqual(true);
    };
    
    test('Checks victory', checkIsGameWon);
}

