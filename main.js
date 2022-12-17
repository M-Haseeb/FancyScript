var wrapper=document.getElementById("wrapper");
var texts=document.querySelectorAll(".text");
var shape=document.querySelectorAll(".shape");
var toper=document.querySelectorAll(".top");



for(let i=0;i<texts.length;i++){
    texts[i].style.display="none";
}



const combinations=[
    {'configuration':1,'roundness':1},
    {'configuration':1,'roundness':2},
    {'configuration':1,'roundness':3},
    {'configuration':2,'roundness':1},
    {'configuration':2,'roundness':2},
    {'configuration':2,'roundness':3},
    {'configuration':1,'roundness':3},
    {'configuration':3,'roundness':3},
    {'configuration':3,'roundness':2},
    {'configuration':3,'roundness':1}
]


const rand=(min,max)=>Math.floor(Math.random()*(max-min+1)+min);

setInterval(()=>{
var index=rand(0,combinations.length-1);
var combination=combinations[index];
wrapper.dataset.configuration=combination.configuration;
wrapper.dataset.roundness=combination.roundness;
},1500)



shape[0].addEventListener("click",()=>{
    texts[0].style.display="";
    for(let i=0;i<shape.length;i++){
        shape[i].style.display="none";
    }

    

})
shape[1].addEventListener("click",()=>{
    texts[1].style.display="";
    for(let i=0;i<shape.length;i++){
        shape[i].style.display="none";
    }

    
})

shape[2].addEventListener("click",()=>{
    texts[2].style.display="";
    for(let i=0;i<shape.length;i++){
        shape[i].style.display="none";
    }
})
shape[3].addEventListener("click",()=>{
    texts[3].style.display="";
    for(let i=0;i<shape.length;i++){
        shape[i].style.display="none";
    }
})

shape[4].addEventListener("click",()=>{
    texts[4].style.display="";
    for(let i=0;i<shape.length;i++){
        shape[i].style.display="none";
    }
})

shape[5].addEventListener("click",()=>{
    texts[5].style.display="";
    for(let i=0;i<shape.length;i++){
        shape[i].style.display="none";
    }
})

shape[6].addEventListener("click",()=>{
    texts[6].style.display="";
    for(let i=0;i<shape.length;i++){
        shape[i].style.display="none";
    }
})

console.log(top);
toper[0].addEventListener("click",(e)=>{
    e.preventDefault();
    for(let i=0;i<texts.length;i++){
        texts[i].style.display="none";
        shape[i].style.display="";
    }    
})    


toper[1].addEventListener("click",(e)=>{
    e.preventDefault();
    for(let i=0;i<texts.length;i++){
        texts[i].style.display="none";
        shape[i].style.display="";
    }    
})    

toper[2].addEventListener("click",(e)=>{
    e.preventDefault();
    for(let i=0;i<texts.length;i++){
        texts[i].style.display="none";
        shape[i].style.display="";
    }    
})    

toper[3].addEventListener("click",(e)=>{
    e.preventDefault();
    for(let i=0;i<texts.length;i++){
        texts[i].style.display="none";
        shape[i].style.display="";
    }    
})    

toper[4].addEventListener("click",(e)=>{
    e.preventDefault();
    for(let i=0;i<texts.length;i++){
        texts[i].style.display="none";
        shape[i].style.display="";
    }    
})   

toper[5].addEventListener("click",(e)=>{
    e.preventDefault();
    for(let i=0;i<texts.length;i++){
        texts[i].style.display="none";
        shape[i].style.display="";
    }    
})   

toper[6].addEventListener("click",(e)=>{
    e.preventDefault();
    for(let i=0;i<texts.length;i++){
        texts[i].style.display="none";
        shape[i].style.display="";
    }    
})    