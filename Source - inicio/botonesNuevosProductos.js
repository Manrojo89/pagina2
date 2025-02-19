document.getElementById('btnTransmision').addEventListener('click', function() {
    window.location.href = '../../Transmision/transmision.html'; 
});


document.getElementById('btnVideos').addEventListener('click', function() {
    window.location.href = '../../Vídeos/videos.html';
});

document.getElementById('btnTienda').addEventListener('click', function() {
    window.location.href = '../../Tienda/tienda.html';
});

document.getElementById('btnApoyame').addEventListener('click', function() {
    window.location.href = '../../Apóyame/apoyame.html';
});

document.getElementById('btnCarrito').addEventListener('click', function() {
    window.location.href = '../../Compras/compras.html';
});

document.getElementById('streaming').addEventListener('click', function() {
    window.location.href = '../..//Principal/streaming.html'; 
});

document.getElementById('btnBlog').addEventListener('click', function() {
    window.location.href = '../../Blog/blog.html';
});

document.getElementById('btnDeadRising').addEventListener('click', function() {
    window.location.href = 'DeadRisingDeluxeRemaster.html';
});

document.getElementById('btnTutoriales').addEventListener('click', function() {
    window.location.href = 'tutorialesOtroquest.html';
});

document.getElementById ('btnIniciarSesion').addEventListener('click', function() {
    document.getElementById('loginPopup').style.display = "flex";
});


document.getElementById('btnTransmision2').addEventListener('click', function() {
    window.location.href = '../../Transmision/transmision.html'; 
});

document.getElementById('btnVideos2').addEventListener('click', function() {
    window.location.href = '../../Vídeos/videos.html';
});

document.getElementById('btnTienda2').addEventListener('click', function() {
    window.location.href = '../../Tienda/tienda.html';
});

document.getElementById('btnApoyame2').addEventListener('click', function() {
    window.location.href = '../../Apóyame/apoyame.html';
});

document.getElementById('btnBlog2').addEventListener('click', function() {
    window.location.href = '../../Blog/blog.html';
});

document.getElementById('btnAcerca').addEventListener('click', function() {
    window.location.href = '../../Principal/AcercaDe/acercaDe.html';
});

document.getElementById('closePopup').addEventListener('click', function(){
    document.getElementById('loginPopup').style.display ='none'
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('loginPopup')) {
        document.getElementById('loginPopup').style.display ='none';
    }
});