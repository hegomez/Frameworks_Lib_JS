var Juego=[
	[],
	[3,4,1,2,2,3,1,3,3,4,4,1,4,4,2,1,2,2,1,2,4,4,3,3,2,2,3,3,4,1,4,4,3,2,1,3,4,1,1,4,3,4,1,3,4,1,2,1,3],
	[2,4,1,4,1,3,3,4,4,1,4,3,4,4,3,2,3,2,3,3,4,1,4,3,2,1,4,3,2,3,1,3,2,2,4,3,3,1,3,3,3,2,3,4,2,1,4,1,1],
	[1,2,3,2,1,2,3,4,1,2,1,2,1,2,3,4,1,4,3,4,1,2,3,4,4,2,3,4,1,2,3,3,1,2,3,4,1,1,1,4,1,2,1,2,2,2,1,2,4],
	[1,2,3,2,4,1,1,2,1,1,2,2,3,3,1,2,3,4,1,1,3,4,4,2,4,2,3,4,1,1,4,2,3,3,2,3,4,1,4,4,2,4,1,2,3,1,1,4,3]
];

var Posc,oLeft, oTop, Lef, Top, Puntuacion=0, Movimientos=0, Ficha=[];
function ValLineaX3()
{
	var Lineas=0;
	//Lineas Horizontales
	for(var i = 1; i <= 7; i++)
	{
		for(var j = 1; j <= 5; j++)
		{
			Ficha1=$("#"+i+"-"+j).children().css("background-image");
			Ficha2=$("#"+i+"-"+(j+1)).children().css("background-image");
			Ficha3=$("#"+i+"-"+(j+2)).children().css("background-image");
			if(Ficha1 == Ficha2 && Ficha2 == Ficha3 && Ficha1 == Ficha3)
			{
				$("#"+i+"-"+j).children().addClass("Desaparecer");
				$("#"+i+"-"+(j+1)).children().addClass("Desaparecer");
				$("#"+i+"-"+(j+2)).children().addClass("Desaparecer");
				Lineas++;
			}
		}
	}
	//Lineas Verticales
	for(var i = 1; i <= 5; i++)
	{
		for(var j = 1; j <= 7; j++)
		{
			Ficha1=$("#"+i+"-"+j).children().css("background-image");
			Ficha2=$("#"+(i+1)+"-"+j).children().css("background-image");
			Ficha3=$("#"+(i+2)+"-"+j).children().css("background-image");
			if(Ficha1 == Ficha2 && Ficha2 == Ficha3 && Ficha1 == Ficha3)
			{
				$("#"+i+"-"+j).children().addClass("Desaparecer");
				$("#"+(i+1)+"-"+j).children().addClass("Desaparecer");
				$("#"+(i+2)+"-"+j).children().addClass("Desaparecer");
				Lineas++;
			}
		}
	}
	if(Lineas>0)
	{
		LineaX3();
	}
}

function LineaX3()
{
	$(".Desaparecer").animate({ opacity: 0 }, 250 );
	$(".Desaparecer").animate({ opacity: 1 }, 250 );
	$(".Desaparecer").animate({ opacity: 0 }, 250 );
	$(".Desaparecer").animate({ opacity: 1 }, 250 );
	$(".Desaparecer").animate({ opacity: 0 }, 250 );
	setTimeout(
   		function(){
			RellenarFichas();
   	}, 1250);
}

function RellenarFichas()
{
	//Recorrer
	$(".Desaparecer").each(function(){
		var IdF=$(this).parent().attr('id');
		//4-1
		var XY=IdF.split("-");
		for(i=(XY[0]-1);i>0;i--)
		{
			//3 - 2 - 1
			var top = 85 /* (XY[0] - i)*/;
			//alert("Top Para "+i+"-"+XY[1]+":"+top);
			//alert("#"+i+"-"+XY[1]);
			$("#"+i+"-"+XY[1]+" .img-game").animate({"top": "+"+top+"px"}, "slow");
			$("#"+(i+1)+"-"+XY[1]+" .img-game").removeClass("Desaparecer");
			ClaseA=$("#"+i+"-"+XY[1]+" .img-game").attr('class').substring(($("#"+i+"-"+XY[1]+" .img-game").attr('class').length-4),$("#"+i+"-"+XY[1]+" .img-game").attr('class').length);
			ClaseB=$("#"+(i+1)+"-"+XY[1]+" .img-game").attr('class').substring(($("#"+(i+1)+"-"+XY[1]+" .img-game").attr('class').length-4),$("#"+(i+1)+"-"+XY[1]+" .img-game").attr('class').length);
			$("#"+(i+1)+"-"+XY[1]+" .img-game").removeClass(ClaseB);
			$("#"+(i+1)+"-"+XY[1]+" .img-game").addClass(ClaseA);
			$("#"+(i+1)+"-"+XY[1]+" .img-game").show();


			//$("#2-1 .img-game").animate({"top": "50px"}, "slow");
		}
	    /*var CntAbajo=$(this).parent().attr('id').split("-");
	    /*var id=$(this).parent().attr('id').split("-");*/
	    /*CntAbajo[0];
	    for (i = (CntAbajo[0]-1); i > 0; i--)
	    {
	    	alert(i+"-"+CntAbajo[1]); //FichaA.animate({"Top": "+10px"}, "slow");
	    	//alert(CntAbajo);
	    }*/
	});
}

function ConteoRegresivo()
{
	var fecha = new Date(),
		D = fecha.getDate(),
		dia = "",
        M = fecha.getMonth() + 1,
        mes = "";
        ano = fecha.getFullYear(),
        H = fecha.getHours(),
        hra = "",
        Mi = fecha.getMinutes()+59,
        min = "",
        S = fecha.getSeconds();
        seg = "";
       if(D.length==1) {dia="0"+D;} else {dia=D;}
       if(M.length==1) {mes="0"+M;} else {mes=M;}
       if(H.length==1) {hra="0"+H;} else {hra=H;}
       if(Mi.length==1) {min="0"+Mi;} else {min=Mi;}
       if(S.length==1) {seg="0"+S;} else {seg=S;}
	var Tiempo = ano + "/" + mes + "/" + dia + " "+hra+":"+min+":"+seg;
	
	$('#timer').countdown(Tiempo)
	.on('update.countdown', function(event) {
		$(this).html(event.strftime('%M:%S'));
	})
	.on('finish.countdown', function(event) {
		$(".panel-tablero").fadeOut();
		$(".panel-score").css("width", "100%");
		$(".time").fadeOut();
	});
}

function idJuego() {
	var idJ=parseInt(Math.random()*10);
	var Rta;
	switch(idJ)
	{
		case 1:
		case 2:
		case 3:
		Rta=1;
		break;
		case 4:
		case 5:
		Rta=2;
		break;
		case 6:
		case 7:
		Rta=3;
		break;
		case 8:
		case 9:
		case 0:
		Rta=4;
		break;
	}
	return Rta;
}

$(".btn-reinicio").click(function(){
	var Opcion=$(".btn-reinicio").text();
	if(Opcion=='Iniciar')
	{
		var IdGame=Juego[idJuego()];
		var td=0;
		for(i=1;i<=7;i++)
		{
			for(k=1;k<=7;k++)
			{
				$("#"+ i +"-"+ k +" div").addClass("img"+IdGame[td]);
				td++;
			}
		}
		$(".btn-reinicio").text("Reiniciar");
		ValLineaX3();
		ConteoRegresivo();
	}
	else
	{
		if (confirm("Desea Reiniciar la partida?"))
		{
    		location.reload();
		}
	}
});

function Escribe(Elemento,Valor)
{
	Elemento.text(Valor);
}

/*
$(".img-game").draggable({ 
	containment: "#table",
	scroll: false,
	start: function() {

	},
	drag: function() {
        var $this = $(this);
        var thisPos = $this.position();
        var parentPos = $this.parent().position();

        if($this.text()=='')
        {
        	Posc=[0,0];
        }
        else
        {
        	Posc=$this.text().split(', ');
        }
        var x = thisPos.left - parentPos.left;
        var y = thisPos.top - parentPos.top;

        if(x>40)
        {
        	Movimiento('Derecha',$this.parent().attr('id'),x,y);
        }

        if(x<-40)
        {
        	//alert("Movimiento('Iquierda')");
        }

        if(y>40)
        {
        	//alert("Movimiento('Abajo')");
        }

        if(y<-40)
        {
        	//alert("Movimiento('Arriba')");
        }

        $this.text(x + ", " + y);


    },
    stop: function() {
    	
    }
});
*/

$(".img-game").draggable({
	containment: "#table",
	scroll: false
});

function move(FichaA,FichaB) {
	
	var De=parseInt(FichaA.parent().attr('id').replace("-",""));
	var A=parseInt(FichaB.parent().attr('id').replace("-",""));
	var DIR=De-A;
	console.log(DIR);
	switch(DIR)
	{
		case -1:
			FichaA.animate({"left": "+85px"}, "slow");
		    FichaA.animate({"Top": "+10px"}, "slow");
			FichaB.animate({"left": "-85px"}, "slow");		
		break;
		case 1:
			FichaA.animate({"left": "-85px"}, "slow");
		    FichaA.animate({"Top": "+10px"}, "slow");
			FichaB.animate({"left": "+85px"}, "slow");
		break;
		case -10:
			FichaA.animate({"top": "+85px"}, "slow");
		    FichaA.animate({"left": "0px"}, "slow");
			FichaB.animate({"top": "-85px"}, "slow");
		break;
		case 10:
			FichaA.animate({"top": "-85px"}, "slow");
		    FichaA.animate({"left": "0px"}, "slow");
			FichaB.animate({"top": "+85px"}, "slow");
		break;
	}
	ContA=FichaA.parent();
	ContB=FichaB.parent();
	setTimeout(
   		function(){
			FichaA.hide();
			FichaB.hide();
			
			ClaseA=FichaA.attr('class').substring((FichaA.attr('class').length-4),FichaA.attr('class').length);
			ClaseB=FichaB.attr('class').substring((FichaB.attr('class').length-4),FichaB.attr('class').length);
			
			FichaA.css("left", "0");
			FichaA.css("top", "0");
			
			FichaB.css("left", "0");
			FichaB.css("top", "0");

			FichaA.removeClass(ClaseA);
			FichaA.addClass(ClaseB);

			FichaB.removeClass(ClaseB);
			FichaB.addClass(ClaseA);

			FichaA.show();
			FichaB.show();

			Movimientos++;

			Escribe($("#movimientos-text"),Movimientos);
			
			ValLineaX3();
   	}, 1000);
}

$(".img-game").mousedown(function(){
	$(this).addClass("Visible");
});

$(".img-game").mouseup(function(){
	$(this).removeClass("Visible");
});

/*Seccion para Capturar el Desplazamiento de las Fichas*/

$("#1-1").droppable({ accept: "#2-1 .img-game, #1-2 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#1-1 .img-game")); } });
$("#1-2").droppable({ accept: "#2-2 .img-game, #1-1 .img-game, #1-3 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#1-2 .img-game")); } });
$("#1-3").droppable({ accept: "#2-3 .img-game, #1-2 .img-game, #1-4 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#1-3 .img-game")); } });
$("#1-4").droppable({ accept: "#2-4 .img-game, #1-3 .img-game, #1-5 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#1-4 .img-game")); } });
$("#1-5").droppable({ accept: "#2-5 .img-game, #1-4 .img-game, #1-6 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#1-5 .img-game")); } });
$("#1-6").droppable({ accept: "#2-6 .img-game, #1-5 .img-game, #1-7 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#1-6 .img-game")); } });
$("#1-7").droppable({ accept: "#2-7 .img-game, #1-6 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#1-7 .img-game")); } });
$("#2-1").droppable({ accept: "#1-1 .img-game, #3-1 .img-game, #2-2 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#2-1 .img-game")); } });
$("#2-2").droppable({ accept: "#1-2 .img-game, #3-2 .img-game, #2-1 .img-game, #2-3 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#2-2 .img-game")); } });
$("#2-3").droppable({ accept: "#1-3 .img-game, #3-3 .img-game, #2-2 .img-game, #2-4 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#2-3 .img-game")); } });
$("#2-4").droppable({ accept: "#1-4 .img-game, #3-4 .img-game, #2-3 .img-game, #2-5 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#2-4 .img-game")); } });
$("#2-5").droppable({ accept: "#1-5 .img-game, #3-5 .img-game, #2-4 .img-game, #2-6 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#2-5 .img-game")); } });
$("#2-6").droppable({ accept: "#1-6 .img-game, #3-6 .img-game, #2-5 .img-game, #2-7 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#2-6 .img-game")); } });
$("#2-7").droppable({ accept: "#1-7 .img-game, #3-7 .img-game, #2-6 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#2-7 .img-game")); } });
$("#3-1").droppable({ accept: "#2-1 .img-game, #4-1 .img-game, #3-2 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#3-1 .img-game")); } });
$("#3-2").droppable({ accept: "#2-2 .img-game, #4-2 .img-game, #3-1 .img-game, #3-3 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#3-2 .img-game")); } });
$("#3-3").droppable({ accept: "#2-3 .img-game, #4-3 .img-game, #3-2 .img-game, #3-4 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#3-3 .img-game")); } });
$("#3-4").droppable({ accept: "#2-4 .img-game, #4-4 .img-game, #3-3 .img-game, #3-5 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#3-4 .img-game")); } });
$("#3-5").droppable({ accept: "#2-5 .img-game, #4-5 .img-game, #3-4 .img-game, #3-6 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#3-5 .img-game")); } });
$("#3-6").droppable({ accept: "#2-6 .img-game, #4-6 .img-game, #3-5 .img-game, #3-7 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#3-6 .img-game")); } });
$("#3-7").droppable({ accept: "#2-7 .img-game, #4-7 .img-game, #3-6 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#3-7 .img-game")); } });
$("#4-1").droppable({ accept: "#3-1 .img-game, #5-1 .img-game, #4-2 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#4-1 .img-game")); } });
$("#4-2").droppable({ accept: "#3-2 .img-game, #5-2 .img-game, #4-1 .img-game, #4-3 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#4-2 .img-game")); } });
$("#4-3").droppable({ accept: "#3-3 .img-game, #5-3 .img-game, #4-2 .img-game, #4-4 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#4-3 .img-game")); } });
$("#4-4").droppable({ accept: "#3-4 .img-game, #5-4 .img-game, #4-3 .img-game, #4-5 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#4-4 .img-game")); } });
$("#4-5").droppable({ accept: "#3-5 .img-game, #5-5 .img-game, #4-4 .img-game, #4-6 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#4-5 .img-game")); } });
$("#4-6").droppable({ accept: "#3-6 .img-game, #5-6 .img-game, #4-5 .img-game, #4-7 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#4-6 .img-game")); } });
$("#4-7").droppable({ accept: "#3-7 .img-game, #5-7 .img-game, #4-6 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#4-7 .img-game")); } });
$("#5-1").droppable({ accept: "#4-1 .img-game, #6-1 .img-game, #5-2 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#5-1 .img-game")); } });
$("#5-2").droppable({ accept: "#4-2 .img-game, #6-2 .img-game, #5-1 .img-game, #5-3 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#5-2 .img-game")); } });
$("#5-3").droppable({ accept: "#4-3 .img-game, #6-3 .img-game, #5-2 .img-game, #5-4 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#5-3 .img-game")); } });
$("#5-4").droppable({ accept: "#4-4 .img-game, #6-4 .img-game, #5-3 .img-game, #5-5 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#5-4 .img-game")); } });
$("#5-5").droppable({ accept: "#4-5 .img-game, #6-5 .img-game, #5-4 .img-game, #5-6 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#5-5 .img-game")); } });
$("#5-6").droppable({ accept: "#4-6 .img-game, #6-6 .img-game, #5-5 .img-game, #5-7 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#5-6 .img-game")); } });
$("#5-7").droppable({ accept: "#4-7 .img-game, #6-7 .img-game, #5-6 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#5-7 .img-game")); } });
$("#6-1").droppable({ accept: "#5-1 .img-game, #7-1 .img-game, #6-2 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#6-1 .img-game")); } });
$("#6-2").droppable({ accept: "#5-2 .img-game, #7-2 .img-game, #6-1 .img-game, #6-3 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#6-2 .img-game")); } });
$("#6-3").droppable({ accept: "#5-3 .img-game, #7-3 .img-game, #6-2 .img-game, #6-4 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#6-3 .img-game")); } });
$("#6-4").droppable({ accept: "#5-4 .img-game, #7-4 .img-game, #6-3 .img-game, #6-5 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#6-4 .img-game")); } });
$("#6-5").droppable({ accept: "#5-5 .img-game, #7-5 .img-game, #6-4 .img-game, #6-6 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#6-5 .img-game")); } });
$("#6-6").droppable({ accept: "#5-6 .img-game, #7-6 .img-game, #6-5 .img-game, #6-7 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#6-6 .img-game")); } });
$("#6-7").droppable({ accept: "#5-7 .img-game, #7-7 .img-game, #6-6 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#6-7 .img-game")); } });
$("#7-1").droppable({ accept: "#6-1 .img-game, #7-2 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#7-1 .img-game")); } });
$("#7-2").droppable({ accept: "#6-2 .img-game, #7-1 .img-game, #7-3 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#7-2 .img-game")); } });
$("#7-3").droppable({ accept: "#6-3 .img-game, #7-2 .img-game, #7-4 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#7-3 .img-game")); } });
$("#7-4").droppable({ accept: "#6-4 .img-game, #7-3 .img-game, #7-5 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#7-4 .img-game")); } });
$("#7-5").droppable({ accept: "#6-5 .img-game, #7-4 .img-game, #7-6 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#7-5 .img-game")); } });
$("#7-6").droppable({ accept: "#6-6 .img-game, #7-5 .img-game, #7-7 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#7-6 .img-game")); } });
$("#7-7").droppable({ accept: "#6-7 .img-game, #7-6 .img-game", drop: function( event, ui ) { move(ui.draggable,$("#7-7 .img-game")); } });
