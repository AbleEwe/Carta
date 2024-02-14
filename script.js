$(document).ready(function(){
  // Al cargar la página, ocultamos las cortinas
  $('.left-curtain').css('width', '0%');
  $('.right-curtain').css('width', '0%');
  
  $('.valentines-day').click(function(){
    // Animación de desvanecimiento de los elementos del sobre
    $('.envelope').css({'animation':'fall 3s linear 1', '-webkit-animation':'fall 3s linear 1'});
    $('.envelope').fadeOut(800, function() {
      // Redireccionar al usuario a la página "sanvalentin.html" después de que se complete la animación
      window.location.href = 'sanvanlentin.html';
    });
  });
});
    