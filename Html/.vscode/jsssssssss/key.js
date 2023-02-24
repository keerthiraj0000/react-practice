// let colors=prompt("enter the color")
// let btn = document.querySelector("button")
// btn.innerText=colors
// btn.style.backgroundColor=colors
// btn.addEventListener("click",()=>{
//     document.body.style.backgroundColor=colors
// })
// let input=document.querySelector('input')
// input.addEventListener("keypress", ()=>{
//     let rc = Math.floor(Math.random()*100000).toString(16)
//     document.body.style.backgroundColor=`#${rc}`
//     console.log(rc);
    
// } )
let promise = new Promise((resolve,reject)=>{
    let fw = true
    if(fw === true)
    {
     
    resolve("successful")
    document.body.style.backgroundColor="red"
    }
    else

    {
     reject("failed") 

    }
})
promise.then((x)=>console.log(x))
promise.catch((y)=>console.log(y))