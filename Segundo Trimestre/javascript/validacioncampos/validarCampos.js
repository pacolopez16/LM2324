function validacionCampos(){
    var todo_correcto = true;

    if
    (document.getElementById("nombre").value.length < 3 ){
        todo_correcto = false;
        document.getElementById("error").innerHTML = "este campo es obligatorio"

    }

    if
    (document.getElementById('apellidos').value.length < 3){
        todo_correcto = false;
        document.getElementById("error1").innerHTML = "este campo es obligatorio"
    }
    if
    (document.getElementById('password').value.length < 6){
        todo_correcto = false;
        document.getElementById("error3").innerHTML = "este campo es obligatorio"
    }
    validarEmail();
    }

  

    
    function validarEmail(){
              
        

        var emailField = document.getElementById('email');
        
        
        var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    
        
        if( validEmail.test(emailField.value) ){
            document.getElementById("error2").innerHTML = "este campo es obligatorio";
            return true;
        }else{
            document.getElementById("error2").innerHTML = "este campo es obligatorio";
            return false;
        }
        
    } 
