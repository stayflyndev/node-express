$(document).ready(function(){
  $('.sidenav').sidenav();
});

 //  jQuery code to show the working of this method 
//    $(document).ready(function() { 
//     $("form").submit(function(e) { 
//       e.preventDefault();
//       const fname = $('#fisr_name').val().trim();


//         alert("Form submitted Successfully"); 

//     }); 
// }); 


$("form").on('submit', (e) => { 
  e.preventDefault();
  const fname = $('#first_name').val().trim();
  const data = {
    fname
  }

  $.post('/contact', data, () =>{
    console.log("doing data")
    alert("Form submitted Successfully"); 
  }
   )

  

}); 


