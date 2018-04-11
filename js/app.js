var Juego=[
	[],
	[3,4,1,2,2,3,1,3,3,4,4,1,4,4,2,1,2,2,1,2,4,4,3,3,2,2,3,3,4,1,4,4,3,2,1,3,4,1,1,4,3,4,1,3,4,1,2,1,3],
	[2,4,1,4,1,3,3,4,4,1,4,3,4,4,3,2,3,2,3,3,4,1,4,3,2,1,4,3,2,3,1,3,2,2,4,3,3,1,3,3,3,2,3,4,2,1,4,1,1],
	[1,2,3,2,1,2,3,4,1,2,1,2,1,2,3,4,1,4,3,4,1,2,3,4,4,2,3,4,1,2,3,3,1,2,3,4,1,1,1,4,1,2,1,2,2,2,1,2,4],
	[1,2,3,2,4,1,1,2,1,1,2,2,3,3,1,2,3,4,1,1,3,4,4,2,4,2,3,4,1,1,4,2,3,3,2,3,4,1,4,4,2,4,1,2,3,1,1,4,3]
];

var Posc,oLeft, oTop, Lef, Top;

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

function Movimiento(Mov,id,x,y)
{
	switch (Mov)
	{
		case 'Derecha':
			
		break;
		case 'Iquierda':
			//
		break;
		case 'Abajo':
			//
		break;
		case 'Arriba':
			//
		break;
	}
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
	}
	else
	{
		if (confirm("Desea Reiniciar la partida?"))
		{
    		location.reload();
		}
	}
});

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
    FichaA.animate({"left": "+85px"}, "slow");
    FichaA.animate({"Top": "0px"}, "slow");
	FichaB.animate({"left": "-85px"}, "slow");
	var ClaseA=FichaA.attr("class");
	alert(ClaseA);
}

$(".img-game").mousedown(function(){
	$(this).addClass("Visible");
});

$(".img-game").mouseup(function(){
	$(this).removeClass("Visible");
});

$("#1-1").droppable({
	accept: "#2-1 .img-game, #1-2 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#1-1 .img-game"));
	}
});
$("#1-2").droppable({
	accept: "#2-2 .img-game, #1-1 .img-game, #1-3 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#1-2 .img-game"));
	}
});
$("#1-3").droppable({
	accept: "#2-3 .img-game, #1-2 .img-game, #1-4 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#1-3 .img-game"));
	}
});
$("#1-4").droppable({
	accept: "#2-4 .img-game, #1-3 .img-game, #1-5 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#1-4 .img-game"));
	}
});
$("#1-5").droppable({
	accept: "#2-5 .img-game, #1-4 .img-game, #1-6 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#1-5 .img-game"));
	}
});
$("#1-6").droppable({
	accept: "#2-6 .img-game, #1-5 .img-game, #1-7 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#1-6 .img-game"));
	}
});
$("#1-7").droppable({
	accept: "#2-7 .img-game, #1-6 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#1-7 .img-game"));
	}
});
$("#2-1").droppable({
	accept: "#1-1 .img-game, #3-1 .img-game, #2-2 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#2-1 .img-game"));
	}
});
$("#2-2").droppable({
	accept: "#1-2 .img-game, #3-2 .img-game, #2-1 .img-game, #2-3 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#2-2 .img-game"));
	}
});
$("#2-3").droppable({
	accept: "#1-3 .img-game, #3-3 .img-game, #2-2 .img-game, #2-4 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#2-3 .img-game"));
	}
});
$("#2-4").droppable({
	accept: "#1-4 .img-game, #3-4 .img-game, #2-3 .img-game, #2-5 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#2-4 .img-game"));
	}
});
$("#2-5").droppable({
	accept: "#1-5 .img-game, #3-5 .img-game, #2-4 .img-game, #2-6 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#2-5 .img-game"));
	}
});
$("#2-6").droppable({
	accept: "#1-6 .img-game, #3-6 .img-game, #2-5 .img-game, #2-7 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#2-6 .img-game"));
	}
});
$("#2-7").droppable({
	accept: "#1-7 .img-game, #3-7 .img-game, #2-6 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#2-7 .img-game"));
	}
});
$("#3-1").droppable({
	accept: "#2-1 .img-game, #4-1 .img-game, #3-2 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#3-1 .img-game"));
	}
});
$("#3-2").droppable({
	accept: "#2-2 .img-game, #4-2 .img-game, #3-1 .img-game, #3-3 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#3-2 .img-game"));
	}
});
$("#3-3").droppable({
	accept: "#2-3 .img-game, #4-3 .img-game, #3-2 .img-game, #3-4 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#3-3 .img-game"));
	}
});
$("#3-4").droppable({
	accept: "#2-4 .img-game, #4-4 .img-game, #3-3 .img-game, #3-5 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#3-4 .img-game"));
	}
});
$("#3-5").droppable({
	accept: "#2-5 .img-game, #4-5 .img-game, #3-4 .img-game, #3-6 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#3-5 .img-game"));
	}
});
$("#3-6").droppable({
	accept: "#2-6 .img-game, #4-6 .img-game, #3-5 .img-game, #3-7 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#3-6 .img-game"));
	}
});
$("#3-7").droppable({
	accept: "#2-7 .img-game, #4-7 .img-game, #3-6 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#3-7 .img-game"));
	}
});
$("#4-1").droppable({
	accept: "#3-1 .img-game, #5-1 .img-game, #4-2 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#4-1 .img-game"));
	}
});
$("#4-2").droppable({
	accept: "#3-2 .img-game, #5-2 .img-game, #4-1 .img-game, #4-3 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#4-2 .img-game"));
	}
});
$("#4-3").droppable({
	accept: "#3-3 .img-game, #5-3 .img-game, #4-2 .img-game, #4-4 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#4-3 .img-game"));
	}
});
$("#4-4").droppable({
	accept: "#3-4 .img-game, #5-4 .img-game, #4-3 .img-game, #4-5 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#4-4 .img-game"));
	}
});
$("#4-5").droppable({
	accept: "#3-5 .img-game, #5-5 .img-game, #4-4 .img-game, #4-6 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#4-5 .img-game"));
	}
});
$("#4-6").droppable({
	accept: "#3-6 .img-game, #5-6 .img-game, #4-5 .img-game, #4-7 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#4-6 .img-game"));
	}
});
$("#4-7").droppable({
	accept: "#3-7 .img-game, #5-7 .img-game, #4-6 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#4-7 .img-game"));
	}
});
$("#5-1").droppable({
	accept: "#4-1 .img-game, #6-1 .img-game, #5-2 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#5-1 .img-game"));
	}
});
$("#5-2").droppable({
	accept: "#4-2 .img-game, #6-2 .img-game, #5-1 .img-game, #5-3 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#5-2 .img-game"));
	}
});
$("#5-3").droppable({
	accept: "#4-3 .img-game, #6-3 .img-game, #5-2 .img-game, #5-4 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#5-3 .img-game"));
	}
});
$("#5-4").droppable({
	accept: "#4-4 .img-game, #6-4 .img-game, #5-3 .img-game, #5-5 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#5-4 .img-game"));
	}
});
$("#5-5").droppable({
	accept: "#4-5 .img-game, #6-5 .img-game, #5-4 .img-game, #5-6 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#5-5 .img-game"));
	}
});
$("#5-6").droppable({
	accept: "#4-6 .img-game, #6-6 .img-game, #5-5 .img-game, #5-7 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#5-6 .img-game"));
	}
});
$("#5-7").droppable({
	accept: "#4-7 .img-game, #6-7 .img-game, #5-6 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#5-7 .img-game"));
	}
});
$("#6-1").droppable({
	accept: "#5-1 .img-game, #7-1 .img-game, #6-2 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#6-1 .img-game"));
	}
});
$("#6-2").droppable({
	accept: "#5-2 .img-game, #7-2 .img-game, #6-1 .img-game, #6-3 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#6-2 .img-game"));
	}
});
$("#6-3").droppable({
	accept: "#5-3 .img-game, #7-3 .img-game, #6-2 .img-game, #6-4 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#6-3 .img-game"));
	}
});
$("#6-4").droppable({
	accept: "#5-4 .img-game, #7-4 .img-game, #6-3 .img-game, #6-5 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#6-4 .img-game"));
	}
});
$("#6-5").droppable({
	accept: "#5-5 .img-game, #7-5 .img-game, #6-4 .img-game, #6-6 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#6-5 .img-game"));
	}
});
$("#6-6").droppable({
	accept: "#5-6 .img-game, #7-6 .img-game, #6-5 .img-game, #6-7 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#6-6 .img-game"));
	}
});
$("#6-7").droppable({
	accept: "#5-7 .img-game, #7-7 .img-game, #6-6 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#6-7 .img-game"));
	}
});
$("#7-1").droppable({
	accept: "#6-1 .img-game, #7-2 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#7-1 .img-game"));
	}
});
$("#7-2").droppable({
	accept: "#6-2 .img-game, #7-1 .img-game, #7-3 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#7-2 .img-game"));
	}
});
$("#7-3").droppable({
	accept: "#6-3 .img-game, #7-2 .img-game, #7-4 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#7-3 .img-game"));
	}
});
$("#7-4").droppable({
	accept: "#6-4 .img-game, #7-3 .img-game, #7-5 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#7-4 .img-game"));
	}
});
$("#7-5").droppable({
	accept: "#6-5 .img-game, #7-4 .img-game, #7-6 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#7-5 .img-game"));
	}
});
$("#7-6").droppable({
	accept: "#6-6 .img-game, #7-5 .img-game, #7-7 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#7-6 .img-game"));
	}
});
$("#7-7").droppable({
	accept: "#6-7 .img-game, #7-6 .img-game",
	drop: function( event, ui ) {
		move(ui.draggable,$("#7-7 .img-game"));
	}
});
