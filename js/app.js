var Juego=[
	[],
	[3,4,1,2,2,3,1,3,3,4,4,1,4,4,2,1,2,2,1,2,4,4,3,3,2,2,3,3,4,1,4,4,3,2,1,3,4,1,1,4,3,4,1,3,4,1,2,1,3],
	[2,4,1,4,1,3,3,4,4,1,4,3,4,4,3,2,3,2,3,3,4,1,4,3,2,1,4,3,2,3,1,3,2,2,4,3,3,1,3,3,3,2,3,4,2,1,4,1,1],
	[1,2,3,2,1,2,3,4,1,2,1,2,1,2,3,4,1,4,3,4,1,2,3,4,4,2,3,4,1,2,3,3,1,2,3,4,1,1,1,4,1,2,1,2,2,2,1,2,4],
	[1,2,3,2,4,1,1,2,1,1,2,2,3,3,1,2,3,4,1,1,3,4,4,2,4,2,3,4,1,1,4,2,3,3,2,3,4,1,4,4,2,4,1,2,3,1,1,4,3]
];

var oLeft, oTop, Lef, Top;

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
	}
	else
	{
		if (confirm("Desea Reiniciar la partida?"))
		{
    		location.reload();
		}
	}
});

$("td .img-game").draggable({ 
	containment: "#table",
	scroll: false,
	start: function() {
		var $this = $(this);
        var thisPos = $this.position();
        var parentPos = $this.parent().position();

        oLeft = thisPos.left - parentPos.left-5;
        oTop = thisPos.top - parentPos.top-5;

        $this.text(oLeft + ", " + y);
	},
	drag: function() {
        var $this = $(this);
        var thisPos = $this.position();
        var parentPos = $this.parent().position();

        var x = thisPos.left - parentPos.left-5;
        var y = thisPos.top - parentPos.top-5;

        $this.text(x + ", " + y);
    },
    stop: function() {
    	var $this = $(this);
        var thisPos = $this.position();
        var parentPos = $this.parent().position();

        var x = thisPos.left - parentPos.left-5;
        var y = thisPos.top - parentPos.top-5;

        if((y <-47 || y>123) && (x <-185 || x>355))
        {
        	Left=x-oLeft;
        	Top=y-oTop;
        	$this.animate({"top": "-=" + Top + "px"});
        	$this.animate({"left": "-=" + Left + "px"});
        }
    }
});

$(".img-game").mousedown(function(){
	$(this).addClass("Visible");
});

$(".img-game").mouseup(function(){
	$(this).removeClass("Visible");
});
