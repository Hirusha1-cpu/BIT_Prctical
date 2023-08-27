// alert("Hello world")
//multi line comments = cmd+ shift +/

console.log("hiss");
console.error("error");
console.warn("warn");

//variable
// declaration - initialization
var l;
l = "hi"
var x = "hello world1"
console.log(l);
console.log(x);
//var, let , const, global
let x1;
x1 = "hello world"
console.log(x1);

ln = true
console.log(ln, 'type of', typeof ln);

let z = "hello world"
z = "hi z"
console.log(z);


var z1 = "hello world"
z1 = "hi z1"
console.log(z1);

emp = {}
newEmp = new Object()
console.log(emp, 'type of', typeof emp);
console.log(newEmp, 'type of', typeof newEmp);

emps = [];
newEmps = new Array();
console.log(emps, 'type of', typeof emps);
console.log(newEmps, 'type of', typeof newEmps);

//...............
console.log('.......Objectan arrays........');
let numbers = [1, 2, 3, 4];
console.log(numbers[1]);
console.log(numbers.length);
numbers[2] = "30"
numbers.push(1000)
console.log(numbers[2]);

//object name: value
const students = { fname: "hiru", age: 45, nic: "991661700v", mobile: 112405040 }
students.lastName = 'hirrr'
console.log(students);
console.log(students.lastName);


//value read index
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    console.log(element);

}

//data type
//primitive data type --> string , number, boolean
//reference(object) types --> object, array .. etc

const names = ["hirusha", "pubudu", "dinuka", 'sanduni']

for (let index = 0; index < names.length; index++) {
    const element = names[index];
    console.log("elements of names are ==>", element);

}

for (let name of names) {
    console.log(name);
}

for (index in names) {
    console.log(index, names[index]);
}

for (let index = 0; index < names.length; index++) {
    if (names[index] === "pubudu") {
        console.log("pubudu is in index of", index);

    }

}

for(var index in names){
    if(names[index] === "pubudu"){
        console.log(index, parseInt(index)+1);
        break;
        
    }

}
//function function type --> return / void
//function definition // calling
function functionName(){

}

function getName(){
    console.log("Hire");
}
getName()


function2 = ()=>{

}