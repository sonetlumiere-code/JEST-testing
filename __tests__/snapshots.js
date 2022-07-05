const client = {
    name: 'John',
    balance: 500,
    type: 'Premium'
};

describe('Testing to client', () => {
    test('Client is John', () => {
        expect(client).toMatchSnapshot();
    });
});
