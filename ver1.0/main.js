
const btn = document.getElementById("send")



btn.addEventListener("click", ()=>{
    const img = document.querySelector(".vlesu")
console.log (img)
img.setAttribute("src", "https://i.ytimg.com/vi/D4takRcrMUI/maxresdefault.jpg")

})

const forma = document.getElementById("form")
console.log(forma)

const container = document.getElementById("data")



forma.addEventListener("submit", (event)=>{
    event.preventDefault()

 const inputs = forma.querySelectorAll('input');
 console.log(inputs[0].value)

localStorage.setItem(inputs[0].value, inputs[0].value)


const div = document.createElement('div');
div.innerText = inputs[0].value;
div.classList.add("border")
container.prepend(div);

})

console.log(localStorage)


for (let index = 0; index < localStorage.length; index++) {
    const element = localStorage.key(index);
    console.log(element)
    const dev = document.createElement('div');
    dev.innerText = localStorage.key(index);
    dev.classList.add("border")
    container.prepend(dev);
    
}





// btn.click()


// const etst = {
//     name: "me",
//     age: "asfdasfdsadf",
//     test: ()=> {
//         console.log('asfd')
//     }
// }

// etst.test();