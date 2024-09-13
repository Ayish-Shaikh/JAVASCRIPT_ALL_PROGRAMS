let items = [250,645,300,900,50];

// USING ARRAYS
for (let i = 0; i < items.length; i++){
    let offer = items[i] / 10;
    items[i] = items[i] - offer;
    //items[i] -= offer;
}
console.log(items);




// USING FOR OF LOOP
//let id1 = 0;
//for (let i of items){
//   let offer = i / 10;
//   items[id1] = items[id1] - offer;
//   console.log(`value after offer ${items[id1]}`);
//   id1++;
//}