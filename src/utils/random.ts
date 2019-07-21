export const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * Math.floor(max));
}

export const getRandomArbitrary = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
}
