function getRandomWithoutReplacement(array) {
    const tempArray = [...array]; // Create a copy to avoid modifying the original
    const result = [];

    while (result.length < 25) {
        const randomIndex = Math.floor(Math.random() * tempArray.length);
        result.push(tempArray.splice(randomIndex, 1)[0]); // Remove and return element
    }

    return result;
}
