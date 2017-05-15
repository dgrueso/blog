$(() => {

    class Autenticacion {

        constructor() {

        }

        authEmailPass() {

            let email = $("#emailContactoReg").val();
            let pass = $("#passwordReg").val();
            let nombres = $("#nombreContactoReg").val();
            let btn_postea =$("#btn_postear").val();

          

         firebase.auth().signInWithEmailAndPassword(email, pass)
    .then(function(result){
        alert("autenticacion correcta");

                $('.modal').modal('close');
                Materialize.toast(`Bienvenido ${nombres} !! `, 4000);





                function writeUserData() {
  firebase.database().ref('users/' + userId).set({
    color : "amarillo" 
  });
}












    })
    .catch(function(error) {
      alert("Se tuvo que registrar el usuario porque no estaba autenticado");

            firebase.auth().createUserWithEmailAndPassword(email, pass).then((result) => {
                console.log(result);

                firebase.database().ref(`usuarios/${result.uid}`).set(
                    {
                        nombres : nombres                   
                    }
                );

                sessionStorage.setItem("nombre", nombres);
                sessionStorage.setItem("uid", result.uid);
                sessionStorage.setItem("email", email);

                Materialize.toast(`Bienvenido ${nombres} !! `, 4000);
               
                $('.modal').modal('close');

       




              

            }).catch((error) => {
                console.log(error);
                Materialize.toast(error.message, 4000);
               
            });
    });






        }

}

    const objAutenticacion = new Autenticacion();

    //$("#authFB").click(objAutenticacion.authFacebook);
    //$("#btn_sesion").click(objAutenticacion.authEmailPass2);
    $("#btnRegistroEmail").click(objAutenticacion.authEmailPass);




        /*

        authSign(){
            let email1 = $("#emailContacto").val();
            let pass1 = $("#password").val();
            const auth1=firebase.auth();



            auth1.signlnWithEmailAndPassword(email1,pass1).then((result)=>{
                console.log(result);

                 Materialize.toast('Bienvenido  ${nombres}!! ', 4000);
                //Materialize.toast(`Bienvenido ${nombres} !! `, 4000);

                $('.modal').modal('close');
            }).catch((error) =>{
                console.log(error);
                Materialize.toast(error.message,4000);
            });


        }


  <!-- INICIO DE MODAL INGRESAR EMAIL Y CLAVE--> 
          <div id="modal2" class="modal modal-registro">
            <div class="modal-content">
              <div class="container">
                <div class="row">
                    <div class="col s12 m6 registro-bienvenida">
                        <h4>Bienvenido al Blog de libros</h4>
                        <div class="registro-bienvenida-texto">
                            Publica, aprende y conectate a otros mundos sin salir de tu casa                        
                        </div>
                        <span>Empieza ya!!</span>
                    </div>                  
                    <div class="col s12 m6 registro-formulario">
                        <div class="input-field">                        
                            <input id="emailContacto" type="email" required />
                             <label for="emailContacto">E-mail:</label>  
                        </div>    
                        <div class="input-field">                
                            <input id="password" type="password" required />
                            <label for="password">Password:</label>
                        </div>     
                        <a id="btnRegistro1" class="btn btnPpal waves-effect waves-light pulse">Iniciar sesion</a>                                             
                    </div>  
                </div>                  
              </div>
            </div>        
          </div>
     <!--FIN DE MODAL INGRESAR EMAIL Y CLAVE-->


    authFacebook() {

            var  provider = new firebase.auth.FacebookAuthProvider();

            firebase.auth().signInWithPopup(provider).then((result) => {

                console.log(result);

                sessionStorage.setItem("nombre", result.user.displayName);
                sessionStorage.setItem("uid", result.user.uid);
                sessionStorage.setItem("email", result.user.email);
                sessionStorage.setItem("imagePerfil", result.user.photoURL);

                $("#avatar").attr("src", result.user.photoURL);

                $('.modal').modal('close');

                Materialize.toast(`Bienvenido ${result.user.displayName} !! `, 4000);

            }).catch((error) => {

                console.log(error);
                Materialize.toast(error.message, 4000);

            });

        }




      authEmailPass2() {

            let email2 = $("#emailContacto").val();
            let pass2 = $("#password").val();
            let btn_postea =$("#btn_sesion").val();

            firebase.auth().signlnWithEmailAndPassword(email2,pass2).then((result) => {
                $('.modal').modal('close');
            }).catch((error)=>{
                alert("error")
                console.log(error);
            });

          
         





        }

*/




    

   




});



