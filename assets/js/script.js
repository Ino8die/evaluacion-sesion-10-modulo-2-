$(document).ready(function() {
    
    //Funcion para desplegar ventana "ver más"
    //Al usar "toggle" se alterna entre show y hide.
      $("#Baires").click(function() {
        var idBoton = $("#Baires").attr("id");
        $("#detalles" + idBoton).toggle();
      });
      $("#MachuPicchu").click(function() {
        var idBoton = $("#MachuPicchu").attr("id");
        $("#detalles" + idBoton).toggle();
      });
      $("#Rio").click(function() {
        var idBoton = $("#Rio").attr("id");
        $("#detalles" + idBoton).toggle();
      });

    //Funcion para cerrar ventana "ver más"

      $(".btn-close").click(function() {
          $(".detalles").hide();
      });

    



});

