let container = document.querySelector("#container");


const btn = document.querySelector("button");

let num = 16;

function create(num){
    for (i = 0; i < num * num; i++) {
        const child = document.createElement("div");
        child.classList.add("child");
        child.style.width = `calc(100% / ${num})`
        container.appendChild(child);
        
       

        child.addEventListener("mouseover", () => {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
        
            child.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        });

        //child.addEventListener("mouseover", () => {
        //    child.classList.add("hovered");
        //});
        child.addEventListener("click", () => {
            child.style.backgroundColor = "black";
        });
        
    }};

create(num);    

btn.addEventListener("click", () => { 
    container.innerHTML = "";
    const input = prompt("Provide a number under 100 inclusively", "");
    if (input !== null){
        num = parseInt(input);
    } 
    if (input > 100){
        alert("number should be under 100 inclusively. Try again.")
        num = 16
    }
    create(num);    
});



