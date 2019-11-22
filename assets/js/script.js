var lastName = 'Nom : Chery';
var firstName = 'Prénom : Caroline';
var city = 'Ville : Le Havre';
function displayVar () {
    alert(lastName + '\n'  + firstName+ '\n' + city);
}
{
var valeur = prompt("Votre Prénom");
}
alert("Bonjour" + ' ' + valeur );

function displayVar2() {
    var lastName2 = document.getElementById('lastName2').value;
    var firstName2= document.getElementById('firstName2').value;
    var city2 = document.getElementById('city2').value;
    alert(lastName2 + '\n' + firstName2 + '\n' + city2);
}
function calcul(){
    var x = document.getElementById('x').value;
    var y = document.getElementById('y').value;
    var z = x % y;
    alert(z);
} 
function calcul2(){
    var pointure = document.getElementById('pointure').value;
    var annee = document.getElementById('annee').value;
    var calculer = ((((pointure * 2) + 5) * 50) - (annee)) + 1769;
    alert(calculer)
}
function verification(){
    var age = document.getElementById('age').value;
    if (age >= 18){
alert('vous êtes majeur !');
    }else{
        alert('va te coucher');
    }
}