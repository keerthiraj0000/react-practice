// anonymous   functional expression first class fuction
let x=function()
{
    console.log("hello");
}
x();
// named fuction
function hello()
{
    console.log("bybyeee");
}
hello();
// immediate invoking fuction
(function()
{
    console.log("gud boy");
}
)
()
// arrow function
let b =()=>console.log("bad bouy");
b()



let c=()=>{console.log("a"),
console.log("b"),
console.log("c")
}
c()
let e=()=>{
    username:"raj";
    password:123
    {
        console.log(this.username);
    }
}
e.username()