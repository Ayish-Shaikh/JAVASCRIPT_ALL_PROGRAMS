let marks = [97, 64, 33, 46, 87, 92, 59];

//filter function is used to filter an array based on a condition passed to it using a callback function passed to it.
let toppers = marks.filter((val) => {
    return val > 90;
});

console.log(toppers);