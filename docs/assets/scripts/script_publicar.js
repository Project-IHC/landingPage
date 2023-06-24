function mostrarImagen(event){
    var imagenSource = event.target.result;
    var previewImagen = document.getElementById('prevista')
    previewImagen.src = imagenSource;
}
function procesarArchivo(event){
    var imagen = event.target.files[0];
    var lector = new FileReader();
    lector.addEventListener('load', mostrarImagen, false);
    lector.readAsDataURL(imagen);
}
document.getElementById('camera').addEventListener('change', procesarArchivo, false)

