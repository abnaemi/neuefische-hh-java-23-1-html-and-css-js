
const ValueB : number = 213
const valueC : boolean= true


let valueA : number = 3444
console.log(valueA)
valueA = 12
console.log(valueA)

function add(a : number ,b : number ) : number {
    return a + b
}
console.log(add(1,3))

function multiply(a : number,b : number) : number{
    return a * b
}
console.log(multiply(55,3))

const student: {name:string, age:number} = {name: "Florian", age: 21}
student.name = "matthias"
console.log(student)

const product: {id: string, name: string}= {id:"123", name:"Apple"}

const products: {id: string, name: string} [] =[product,{id:"334", name:"Banana"}, ]

console.log(product)
console.log(product[0])