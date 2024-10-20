module.exports = {
    test(value) {
        return value && value.data && value.width && value.height;
    },
    print(value, serialize) {
        const dataSample = Array.from(value.data.slice(0, 10)); // Get a sample of the data
        return `ImageData { width: ${value.width}, height: ${value.height}, data: [${dataSample.join(', ')}...], length: ${value.data.length} }`;
    },
};
