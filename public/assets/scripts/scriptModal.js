 const abrir=document.querySelector("#abrir");
 const cerrar=document.querySelector("#cerrar");
 const modal=document.querySelector("#modal");

 abrir.addEventListener("click",()=>{
    modal.showModal();
 })

 cerrar.addEventListener("click",()=>{
    modal.close();
 })
