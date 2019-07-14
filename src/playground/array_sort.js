const points = [40, 100, 1, 5, 25, 10];
const sortedPoints = points.sort((a, b) => a < b ? 1 : -1);
console.log(sortedPoints);