$(document).ready(function() {
      $('#fullpage').fullpage({
        sectionsColor: ['#ececec', '#ffffff', '#efefef', '#ececec','#414141', '#ffffff',  '#efefef'],
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thpage', '6thpage', '7thpage'],
        navigation: true,
        navigationPosition: 'right',
        menu: '#navbar1',
      
      });

});
	$("#mostrar1").click(function(){
    $(".cuadrado").fadeOut(10);
    $(".cuadrado").delay(10);
    $("#id-1").fadeIn(100);
      $(".rectangulo").fadeOut(10); 
           $(".rectangulo").delay(10);
    $("#p-1").fadeIn(100);
  });
 $("#mostrar2").click(function(){
    $(".cuadrado").fadeOut(10);
     $(".cuadrado").delay(10);
    $("#id-2").fadeIn(100);
     $(".rectangulo").fadeOut(10); 
    $(".rectangulo").delay(10);
  $("#p-2").fadeIn(100);

  });
    // id boton para mostrar
  $("#mostrar3").click(function(){
    $(".cuadrado").fadeOut(10); //oculta todo, con clase
     $(".cuadrado").delay(10);
    $("#id-3").fadeIn(100); // muestra la imagen con esta id
      $(".rectangulo").fadeOut(10);
              $(".rectangulo").delay(10);
  $("#p-3").fadeIn(100);

  });
    
    $("#mostrar4").click(function(){
    $(".cuadra").fadeOut(10);
     $(".cuadra").delay(10);
    $("#id-4").fadeIn(100);
    $(".rectangulo1").fadeOut(10); 
       $(".rectangulo1").delay(10);
  $("#p-4").fadeIn(100);
  });
 $("#mostrar5").click(function(){
    $(".cuadra").fadeOut(10);
       $(".cuadra").delay(10);
    $("#id-5").fadeIn(100);
          $(".rectangulo1").fadeOut(10); 
            $(".rectangulo1").delay(10);
  $("#p-5").fadeIn(100)

  });
    // id boton para mostrar
  $("#mostrar6").click(function(){
    $(".cuadra").fadeOut(10); //oculta todo, con clase 
       $(".cuadra").delay(10);
    $("#id-6").fadeIn(100); // muestra la imagen con esta id
          $(".rectangulo1").fadeOut(10); 
            $(".rectangulo1").delay(10);
  $("#p-6").fadeIn(100)
  });
$(document).ready(function(){
  $(".clickeable").click(function(){
    $(".clickeable").removeClass("active");
    $(this).addClass("active");
  });
});
$(document).ready(function() {
	$(".various").fancybox({
		maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});
});
    $(document).ready(function() {
		$(".fancybox").fancybox();
	});
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
