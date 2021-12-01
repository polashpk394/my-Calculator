let input = document.querySelector(".inputBox");
const button = document.querySelectorAll(".btns");
const result = document.querySelector(".result");
const clear = document.querySelector(".clear");
const delate = document.querySelector(".delate");

result.addEventListener("click",()=>{
    if (input.value){
        input.value= eval(input.value)
    }
    
})

button.forEach((item)=>{

    item.addEventListener("click",(e)=>{
        input.value += e.target.value
    })
})

clear.addEventListener("click",()=>{
    input.value = ""
});

delate.addEventListener("click",()=>{
    const resultVal = input.value;
    const leng = resultVal.length - 1;
    const mainVlaue = resultVal.slice(0,leng);
    input.value = mainVlaue;
});

