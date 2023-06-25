const defaultFile = 'imagenes/anhadir.png';
const file = document.getElementById( 'foto');
const img = document.getElementById ( 'img' );
file.addEventListener( 'change', e => {
    console.log(e);
    if( e.target.files[0] ){
        const reader = new FileReader ( );
        reader.onload = function( e ){
            img.src = e.target.result;
        }
   
    reader.readAsDataURL(e.target.files[0])
    }else{
        img.src = defaultFile;
    }
});

class Ropa{
    constructor(img,descripcion){
        this.img=img;
        this.descripcion=descripcion;
    }
}
class UI{
    addRopa(ropa){
        const lista = document.getElementById('contenedor');
        const element = document.createElement('div');
        element.innerHTML=`
            <div class="galeria">
                <div class="foto">
                    <a href=""> <img src="assets/images/${ropa.img.files[0].name}" alt=""></a>
                </div>
                <div class="pie">
                    <p>${ropa.descripcion}</p>
                </div>
            </div>
        `;
        
        lista.appendChild(element);
    }
    deleteRopa(){

    }
}
document.getElementById('formulario').addEventListener('submit',function(e){
    const foto = document.getElementById ('foto');
    const descripcion=document.getElementById('descripcion').value;
    const ropa=new Ropa(foto,descripcion);
    const ui=new UI();
    ui.addRopa(ropa);
    
    e.preventDefault();
})