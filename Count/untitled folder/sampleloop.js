if(number === ""){
  alert("Please enter a number!");
}
else{
  $('h3').html(input);
}
});

var number = 0;
for(i=0;i<=100;i+=2){
console.log(i);
$("#numbercount").append(i="<br>")
}


function milliseconds(x){
  if(isNan(x)){
    return "Not a number!";
}
return x * 1000
}




o
//input id="customnumber" type="number" placeholder="Give me a number!"/>
//<button id="button1" class="button"> Enter </button>
 //<h2 id="placeholder"> Let's get counting!</h2>


 <script src="js/jquery.js"></script>


 $("#button1").on("click", function(){
  var number = $("#customnumber").val();
   $('h3').html(number);

 });

 var number = 0;

 var i= 1;

 while(1<100){
   number = number + 2;
   i+=2;
 }
 function validateForm() {
     var x = d.value;
     if (x == "") {
         alert("Name must be filled out");
         return false;
     }
 }

 <form name="form">
   <p>Please enter a number!<input type="number" name="numberinput" /></p>
   <input type="button" value="Enter" onClick="count(form.numberinput.value)"/>
 </form>
