let sections=document.querySelectorAll("section");

let links=document.querySelectorAll("nav a");

for(let index=0; index<links.length; index++){
    const element=links[index];

    element.addEventListener("click", function(event){
        event.preventDefault();

        let blockId=element.getAttribute("href");
        
        let section=document.querySelector(blockId);
        section.scrollIntoView({
            behavior:"smooth",
            block:"start"
        });
    });
}



