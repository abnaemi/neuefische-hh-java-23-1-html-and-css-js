var ValueB = 213;
var valueC = true;
var valueA = 3444;
console.log(valueA);
valueA = 12;
console.log(valueA);
function add(a, b) {
    return a + b;
}
console.log(add(1, 3));
function multiply(a, b) {
    return a * b;
}
console.log(multiply(55, 3));
/*const student: {name:string, age:number} = {name: "Florian", age: 21}
student.name = "matthias"
console.log(student)*/
var product = { id: "123", name: "Apple" };
var products = [product, { id: "334", name: "Banana" },];
console.log(products);
console.log(products[0]);
products.push({ id: "787", name: "Gurke" });
console.log(products);
function checkProduct(product) {
    return product.name.length > 5;
}
var newProducts = products.filter(checkProduct);
console.log(newProducts);
