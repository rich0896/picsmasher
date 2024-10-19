/* eslint-disable no-undef */
// jest.imageDataSerializer.js

module.exports = {
    test(val) {
        return val && typeof val === 'object' && 'data' in val;
    },
    print(val, serialize) {
        return `ImageData(${val.width}, ${val.height}, [${val.data.slice(0, 10).join(', ')}...])`;
    },
};
