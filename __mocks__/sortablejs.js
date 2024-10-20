// __mocks__/sortablejs.js

const Sortable = jest.fn(() => ({
    sort: jest.fn(),
    destroy: jest.fn(),
    // Add any other methods used in your code
}));

export default Sortable;
