
var myArray = ['Bijoaux', 'Ida', 'Jenny', 'Tasha',
'Tony', 'Sami', 'Roham', 'Chris','Nancy', 'Juan', 'Erick',
'Vicente', 'Rhenzie', 'Daijon', 'Jaide', 'Anton'];
function showquote(){
    document.getElementById('name').innerHTML = myArray[Math.floor(Math.random() * myArray.length)];
}

showquote();
alert('Guess Who?');
