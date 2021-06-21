//declarando variables para los controles 
var txtNom=document.getElementById("txtNom"); 
var txtApe=document.getElementById("txtApe"); 
var txtCor=document.getElementById("txtCor"); 
var rbMas=document.getElementById("rbMas"); 
var rbFem=document.getElementById("rbFem"); 
var rbotr=document.getElementById("rbotr"); 
var chkEst=document.getElementById("chkEst"); 

// creamos un procedimiento para asignar la clase 
function Llamarclase(m){ 
error.style.display='block'; 
error.innerHTML+='<li>'+m+'</li>'; 
}

// creamos una funcion para validar nombre 
// function Validar Nombre(){ 
//          if(txtNom.value=="" || txtNom.value==null){ 
//          error.style.display="block'; 
//          error.innerHTML+='<li>Por favor ingrese sus nombres </li>'; 
//      }else{ 
//          error.style.display='none'; 
//      }    
// }
// function ValidarApellido () { 
//       if(txtApe.value=="" || txtApe.value==null){ 
//           error.style.display='block'; 
//           error.innerHTML+='<li>Por favor ingrese sus apellidos</li>'; 
//       }else{ 
//           error.style.display='none'; 
//       } 
// }
// function ValidarCorreo(){ 
// if(txtcor.value=="" || txtCor.value==null){ 
//           error.style.display="block'; 
//           error.innerHTML+='<li>Por favor ingrese su correo</li>'; !! 
//        }else{ 
//           error.style.display='none'; 
// function Validar Sexo () { 
//        if(sexo.value=="" || sexo.value==null){ 
//           error.style.display='block'; 
//           error.innerHTML+='<li>Por favor seleccione su sexo</li>'; 1 
//         }else{ 
//           error.style.display='none'; 
// function ValidarEstado(){ 
//        if(chkEst.checked==false) { 
//            error.style.display="block'; error.innerHTML+='<li>Por favor seleccione el estado</li>'; 
//         }else{ 
//            error.style.display='none'; 
// } 
// creamos un procedimiento para validar function Validar() { 
//reiniciamos el error para que se carge sin ningun mensaje 
error.innerHTML=''; 
if(txtNom.value=="" || txtNom.value==null) { 
    Llamarclase ("Por favor ingrese sus nombres"); 
    LlamarClase ("Por favor ingrese sus apellidos"); 
    Llamarclase("Por favor ingrese su correo"); 
    Llamarclase ("Por favor seleccione su sexo"); 
    Llamarclase ("Por favor seleccione su estado"); 
    txtNom.focus(); 
}else if(txtApe.value=="" || txtApe.value==null){ 
    Llamarclase ("Por favor ingrese sus apellidos");
    Llamarclase ("Por favor ingrese su correo");
    Llamarclase("Por favor seleccione su sexo"); 
    LlamarClase ("Por favor seleccione su estado"); 
    txtApe.focus(); 
}else if(txtcor.value=="" || txtCor.value==null) { 
    Llamarclase ("Por favor ingrese su correo"); 
    Llamarclase ("Por favor seleccione su sexo"); 
    Llamarclase ("Por favor seleccione su estado"); 
    txtCor.focus(); 
}else if(rbas.checked==false&&rbFem.checked==false &&rbotr.checked==false) { 
    LlamarClase ("Por favor seleccione su sexo"); 
    Llamarclase ("Por favor seleccione su estado"); 
    rbMas.focus(); 
}else if(chkEst.checked==false) {
    Llamarclase ("Por favor seleccione su estado"); 
    chkEst.focus(); 
}else{ 
    error.style.display='none'; 

//llamamos a las validaciones 
// ValidarNombre(); 
// ValidarApellido(); 
// ValidarCorreo(); 
// ValidarSexo(); 
// ValidarEstado(); 
}