let mainTitle = document.querySelector("#title")
let curValue = 0;
let btnDecremet = document.querySelector("#decremet")
let btnReset = document.querySelector("#reset")
let btnEcremet = document.querySelector("#ecremet")

btnEcremet.addEventListener("click", ()=>{
    curValue++;
    mainTitle.textContent = curValue;
});
// btnDecremet.addEventListener("click", ()=>{
//     curValue--;
//     mainTitle.textContent = curValue;
// });
btnReset.addEventListener("click" , ()=>{
    curValue = 0;
    mainTitle.textContent = curValue;
});