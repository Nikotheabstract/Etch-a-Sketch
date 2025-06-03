let container = document.querySelector("#container");


const btn = document.querySelector("button");

let num = 16;

btn.addEventListener("click", () => { 
    const input = prompt("Provide a number under 100 inclusively", "");
    if (input !== null){
        num = input
    } 
    
    for (i = 0; i < num * num; i++) {
        const child = document.createElement("div");
        child.classList.add("child");
        child.style.width = `calc(100% / ${num})`
        container.appendChild(child);
        child.addEventListener("mouseover", () => {
            child.classList.add("hovered");
        });
    };
    
});

for (i = 0; i < num * num; i++) {
    const child = document.createElement("div");
    child.classList.add("child");
    child.style.width = `calc(100% / ${num})`
    container.appendChild(child);
    child.addEventListener("mouseover", () => {
        child.classList.add("hovered");
    });
};

