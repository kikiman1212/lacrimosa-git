const lacrimosa = "https://www.youtube.com/embed/H4Ji9tsbW7g?si=J5tP3cpZxisRhKUM";
const therion = "https://www.youtube.com/embed/kU0Fah-cCbs?si=8OC_kX2mAMZu4PEt";
const evanences = "";
const conejo = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
const  alanWalker = "https://www.youtube.com/embed/p1rUuxCJfIU?si=wkDM26__NTnlHVHB";
const regue = "https://www.youtube.com/embed/UOIpqGDI0yE?si=uUj_fF5RKlMMKpSn";
const gus2 = "https://www.youtube.com/embed/sWOYtgBoBiE?si=NGDTOLpL0OgOmhDF";
const atlantis = "https://www.youtube.com/embed/n03IDJcsy5g?si=d-f2HqQdDNU5pJI9";
const nostra = "https://www.youtube.com/embed/jX3XhPcBk8w?si=-K3SeC9FxyjcIPD5";
const remix = "https://www.youtube.com/embed/p1rUuxCJfIU?si=S7wHy7_-Q9Md2q24";
const olimpico = "https://www.youtube.com/embed/dkPS6t84qg4?si=O1p5cS7HrsaRLg2b";


//mis variables de video
video1 = document.getElementById('video1');
video2 = document.getElementById('video2');

//que este atento a la precion  del boton submit
document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();//con esto nos quedamos en la misma pagina del formulario
    let formulario = new FormData(document.getElementById('formulario')); // variable de objeto con formdata para llamar a nuestro formulario completo
    //hacemos la peticion fetch
    fetch('registrar.php', {
        method: 'POST', //parametros por metodo post
        body: formulario
            
        })
        .then(res => res.json())//entonces recibimos el parametro y lo convertimos en formato jeison para que lo pueda leer php
                document.getElementById('txt_usuario').value = '';
                document.getElementById('txt_nombre').value = '';
                document.getElementById('int_edad').value = '';      
                alert('El Usuario se agrego correctamente.');    
               /*  console.log(data);  */  
});



let exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget
  // Extract info from data-bs-* attributes
  var recipient = button.getAttribute('data-bs-whatever')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  let modalTitle = exampleModal.querySelector('.modal-title')
  let modalBodyInput = exampleModal.querySelector('.modal-body input')

  modalTitle.textContent = 'Modelo - pasarela' + recipient
  modalBodyInput.value = recipient
 
})

document.getElementById('ventana2').addEventListener('click', function() {
  const texto = document.getElementById('txt_usuario').value;
  document.getElementById('recipient-name').value = texto;
  video2.play();
  document.querySelector('.container').style.display = 'none';
  document.body.style.backgroundImage = "url('img/trajes.webp')";
});

document.getElementById('cerrar2').addEventListener('click', function() {
  const texto = document.getElementById('txt_usuario').value;
  document.getElementById('recipient-name').value = texto;
  video2.pause();
  alert('Adios... ' + texto)
  document.querySelector('.container').style.display = 'block';
  document.body.style.backgroundImage = "url('img/lacrimosa.png')";
});


