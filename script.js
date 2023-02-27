let childContainer = document.getElementsByClassName("childContainer");
let container = document.getElementsByClassName("container");
const colors = ["#79F8F8","#007FFF","#5472AE","#884DA7","#811453","#F0C300","#E7A854","#E29000"]
let elements = Array.from(childContainer);

elements.forEach(e=>{
    for(let i=0;i<10;i++){
        let child = document.createElement("div");
        child.setAttribute("class","child");
        if(i==0){
            child.style.borderLeft = "none";
            child.style.borderRight = "none";
        }else if(i==9){
            child.style.borderLeft = "1px solid black";
            child.style.borderRight = "1px solid black";
        }else{
            child.style.borderRight = "none";
        }
        e.appendChild(child);
    }
});

let Parent_nodes = Array.from(container[0].children);

Parent_nodes.forEach(e=>{
    if(e==container[0] || e==container[5]){

    }else{
        Array.from(e.children).forEach(e=>{
            e.style.borderBottom = "none";
            e.addEventListener("mouseover",()=>{
                e.style.backgroundColor = `${colors[parseInt(Math.random()*8)]}`;
            })
            e.addEventListener("mouseout",()=>{
                setTimeout(() => {
                    e.style.backgroundColor = "black";
                }, 1000);
            })
        })
    }
})


function Anime(){
    let childs = childContainer[0].children;
    Array.from(childs).forEach(e=>{
        setInterval(() => {
            e.style.borderColor = "white";
            setTimeout(() => {
                e.style.borderColor = "black";
            }, 500);
        }, 1000);
    })
    
}