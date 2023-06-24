const editarAvatar=document.querySelector("#editarAvatar");
const cerrar2=document.querySelector("#cerrar2");
const guardar2=document.querySelector("#guardar2");
const ModalEditar=document.querySelector("#ModalEditar");


editarAvatar.addEventListener("click",()=>{
    ModalEditar.showModal();
})
cerrar2.addEventListener("click",()=>{
    ModalEditar.close();
})
guardar2.addEventListener("click",()=>{
    ModalEditar.close();
})