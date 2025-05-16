const addTwoPromises = async function(promise1, promise2) {
    // wait for both promise to resolve first
    const [result1, result2] = await Promise.all([promise1, promise2])

    return result1 + result2;
};