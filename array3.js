let companies = ["Bloomberg", "Google", "Apple", "Microsoft", "uber", "ibm", "netflix"];

//1.REMOVES THE FIRST COMPANY FROM THE ARRAY
let newcompanies = companies.shift();
console.log(companies);

//2.REMOVES UBER AND ADD OLA IN ITS PLACE
let ola = companies.splice(3, 1, "ola");
console.log(companies);

//3.ADD AMAZON AT THE END
let amazon = companies.push("amazon");
console.log(companies);