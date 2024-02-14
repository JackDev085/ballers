var video1 = 'https://www.youtube.com/embed/dYKBeCjay_c?si=-mHU2PfjgE2yTv6V&amp;start=17'
var video2 = 'https://www.youtube.com/embed/iW2VFzBiaQo?si=ZBrt3haFahOGNfHd&amp;start=14'
vid='https://www.youtube.com/embed/iW2VFzBiaQo?si=N5nQm_0t-99z4NDJ&amp;controls=0&amp;start=14'

// Obtém o modal
var modal = document.getElementById("myModal");

// Obtém os botões que abrem o modal
var btns = document.getElementsByClassName("ver-video");

// Obtém o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clica em um botão, abre o modal 
for (var i = 0; i < btns.length; i++) {
  btns[i].onclick = function() {
    modal.style.display = "block";
    document.getElementById("video").src = "https://www.youtube.com/embed/" + this.getAttribute("data-video") + '?si=N5nQm_0t-99z4NDJ&amp;controls=0&amp;start=17'; // Obtém o id do vídeo do atributo de dados
  }
}

// Quando o usuário clica em <span> (x), fecha o modal
span.onclick = function() {
  modal.style.display = "none";
  document.getElementById("video").src = ""; // Para parar o vídeo quando o modal é fechado
}

// Quando o usuário clica em qualquer lugar fora do modal, fecha o modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.getElementById("video").src = ""; // Para parar o vídeo quando o modal é fechado
  }
}