
var formAutenticacion;
function inicializar(){
	formAutenticacion=document.getElementById("form-autenticacion");
	formAutenticacion.addEventListener("submit",autenticar,false);

}

function auntenticar(event){
	var usuario= event.target.email.value;
	var contrasena= event.target.password1.value;

	firebase.auth().signInWithEmailAndPassword(usuario, contrasena)
	.then(function(result){
		alert("autenticacion correcta");
	})
	.catch(function(error) {
	  alert(" NO  autenticacion correcta");
	});


	
}