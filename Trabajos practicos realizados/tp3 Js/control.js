
  
  function validarFormulario() {

    var usuario = document.getElementById('usuario').value;
    var clave= document.getElementById('clave').value;

    if(usuario.length == 0) {
      alert('No has escrito nada en el usuario');
      return false;
    }
    if(usuario.includes("@")==false)
    {
      alert("No has ingresado el @");
      return false;
    }
    if(clave.length == 0) {
      alert('No has escrito nada en la clave');
      return false;
    }
    this.submit();
  }
