function show(num){
    document.getElementById('output').value += num

}
function solution(){
    let x = document.getElementById('output').value
    let y = eval(x);
    document.getElementById('output').value = y

}
function clearScreen(){
    document.getElementById('output').value = '0'
}