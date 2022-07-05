function sum(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

describe('Testing functions sum and subtraction', () => {
    test('Sum 20 and 30', () => {
        expect(sum(20, 30)).toBe(50)
    });

    test('Subtraction 10 and 5', () => {
        expect(subtraction(10, 5)).toBe(5);
    });

    test('Sum 10 and 10 not to be 2', () => {
        expect(subtraction(10, 10)).not.toBe(2);
    });
});
