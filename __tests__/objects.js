const client = {
    name: 'John',
    balance: 500
};

describe('Testing to client', () => {
    test('Client is premium', () => {
        expect(client.balance).toBeGreaterThan(400);
    });

    test('Is John', () => {
        expect(client.name).toBe('John');
    });

    test('Not another client', () => {
        expect(client.name).not.toBe('Pedro');
    });

});
