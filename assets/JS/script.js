//Déclaration des variables
var button = document.getElementsByName('button')[0];
var lastname = document.getElementById('lastname');
var firstname = document.getElementById('firstname');
var city = document.getElementById('city');
//Fonction reset
button.addEventListener('click', function () {
  lastname.value ='';
  firstname.value ='';
  city.value ='';
})
