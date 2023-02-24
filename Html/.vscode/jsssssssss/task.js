let div = document.querySelector("div")
div.style.backgroundColor="cream"
div.style.width="1400px"
div.style.height="600px"
div.style.display="flex"
div.style.justifyContent=" space-around"
div.style.alignItems="center"

let div1 =document.getElementById("bike")
div.appendChild(div1)
div1.style.width="400px"
div1.style.height="500px"
div1.style.border="5px  solid red "
div1.style.borderRadius="10%"
div1.style.alignItems="center"
div1.style.display="flex"
div1.style.flexDirection="column"
let perkilometerforbike=9


let div2=document.getElementById("car")
div.appendChild(div2)
div2.style.width="400px"
div2.style.height="500px"
div2.style.border="5px orange solid"
div2.style.borderRadius="10%"
div2.style.alignItems="center"
div2.style.display="flex"
div2.style.flexDirection="column"
let perkilometerforcar=15;



let div3=document.getElementById("auto")
div.appendChild(div3)
div3.style.width="400px"
div3.style.height="500px"
div3.style.border="5px green solid "
div3.style.borderRadius="10%"
div3.style.display="flex"
div3.style.flexDirection="column"
div3.style.alignItems="center"
let perkilometerforauto=12;

let btn1 = document.querySelector("button")
btn1.addEventListener("click",()=>{
    let kilometer=document.getElementById("kilometer").value
   
    let amount=(kilometer*perkilometerforbike)

    let div5=document.getElementById("result1")
    div5.innerText=(`AMOUNT = ${amount}`)
    div5.style.width="100px"
    div5.style.height="30px"
    div5.style.color="black"
    div5.style.backgroundColor="white"
    div5.style.border="2px solid blue"
    div5.style.alignItems="center"
    div5.style.display="flex"
    div5.style.justifyContent="center"
    
})


btn2.addEventListener("click",()=>{
    let kilometer1=document.getElementById("kilometer1").value
   
    let amount=(kilometer1*perkilometerforcar)

    let div6=document.getElementById("result2")
    div6.innerText=amount
    div6.style.width="100px"
    div6.style.height="30px"
    div6.style.color="black"
    div6.style.backgroundColor="white"
    div6.style.border="2px solid blue"
    div6.style.alignItems="center"
    div6.style.display="flex"
    div6.style.justifyContent="center"


})

btn3.addEventListener("click",()=>{
    let kilometer2=document.getElementById("kilometer2").value
   
    let amount=(kilometer2*perkilometerforauto)

    let div7=document.getElementById("result3")
    div7.innerText=amount
    div7.style.width="100px"
    div7.style.height="30px"
    div7.style.color="black"
    div7.style.backgroundColor="white"
    div7.style.border="2px solid blue"
    div7.style.alignItems="center"
    div7.style.display="flex"
    div7.style.justifyContent="center"


})