


document.getElementById('filtros').addEventListener('submit',function(e){
    const tipo=document.getElementById('Tprenda').value;
    const precio1=document.getElementById('precio1').value;
    const precio2=document.getElementById('precio2').value;
    if(precio1=='desde') precio1='0';
    if(precio1=='hasta') precio1='10000';

    if(tipo==='---'){
        $('.presentacion').show();
    } else{
        $('.presentacion').hide();
        $('.presentacion[category="'+tipo+'"]').show();
    }
    
    for (let index = 0; index < 4; index++) {
        const precio =document.getElementsByClassName('presentacion')[index].getAttribute('precio');
        if(precio>precio2||precio<=precio1){
            $(document.getElementsByClassName('presentacion')[index]).hide();
        }
        
    }
   

    e.preventDefault();
})