$(document).ready(function () {

    $("#Enviar").click(function () {                                   /*Alerta al enviar correo*/
        alert("El correo fue enviado correctamente");
      });

      $("#Quien").click(function () {                         /* toggles para ocultar el contenido de las secciones al hacer click en el titulo de cada una */
        $("#tarjetas").toggle();;
      });

      $("#destacado").click(function () {
        $("#tarjetas2").toggle();;
      });

      $("#Contactar").click(function () {
        $("#labels").toggle();;
      });
});
    
