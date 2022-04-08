let container = document.querySelector('.container');
let i = 0;
appendTextFun()

function appendTextFun(){
i++;
let start = i;
let limit = 25;
for(i; i< start+limit; i++) {
    let div = document.createElement('div');
    div.innerHTML = `Masai Student ${i}`
    container.append(div);
}
}
container.addEventListener('scroll',()=>{
if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
        appendTextFun();
}
})