// function myFunction()
// {
//   document.getElementById("demo").innerHTML="我的第一个 JavaScript 函数";
// }

$(document).ready(function()
{

 $('#flip').click(function(){
   $('#panel').slideToggle('slow');
 });

 $('button').click(function () {
   $('#demo').text('修改过');
 })
})


