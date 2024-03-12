$(document).ready(function () {
    $("#Enviar").click(function () {
        alert("El correo fue enviado correctamente");
      });
      $("#Quien").click(function () {
        $("#tarjetas").toggle();;
      });
      $("#destacado").click(function () {
        $("#tarjetas2").toggle();;
      });
      $("#Contactar").click(function () {
        $("#labels").toggle();;
      });
});
