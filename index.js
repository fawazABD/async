async function iterateWithAsyncAwait(array) {
    for (const value of array) {
        console.log(value);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Delay of 1 second
    }
}

// Test case
const values = [1, 2, 3, 4, 5];
iterateWithAsyncAwait(values);