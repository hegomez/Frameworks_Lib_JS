var FichaTam=85;
var SelFil=-1;
var SelCol=-1;
var posX;
var posY;
var Fichas=new Array();
var movingItems=0;
var GameState="pick";
var swiped=false;
var ImgFondo=new Array("1.png","2.png","3.png","4.png");
var Movimientos=0;
var Puntuacion=0;

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
        Mi = fecha.getMinutes()+2,
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

$(".btn-reinicio").click(function()
{
	var Opcion=$(".btn-reinicio").text();
	if(Opcion=='Iniciar')
	{
		$(".btn-reinicio").text("Reiniciar");
		Juego();
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

function Juego()
{
  	for(i=0;i<8;i++)
  	{
     	Fichas[i]=new Array();
     	for(j=0;j<7;j++)
     	{
          	Fichas[i][j]=-1;
     	}
  	}
	for(i=0;i<7;i++)
	{
		for(j=0;j<7;j++)
		{
			do{
				Fichas[i][j]=Math.floor(Math.random()*4);
			}while(LineaGo(i,j));
			$("#table").append('<div class = "gem" id = "Fichas_'+i+'_'+j+'"></div>');
			$("#Fichas_"+i+"_"+j).css({"top":(i*FichaTam)+4+"px","left":(j*FichaTam)+4+"px","width":"85px","height":"85px","position":"absolute","border":"1px solid white","cursor":"pointer","background":"url(image/"+ImgFondo[Fichas[i][j]],"background-size":"85px 85px"});
		}
	}
}

function LineaGo(row,col)
{
	return LineaVertical(row,col)||LineaHorizontal(row,col);
}

function LineaVertical(row,col)
{
	var FichaPos=Fichas[row][col];
	var Linea=0;
	var tmp=row;
	while(tmp>0 && Fichas[tmp-1][col]==FichaPos)
	{
		Linea++;
		tmp--;
	}
	tmp=row;
	while(tmp<6 && Fichas[tmp+1][col]==FichaPos)
	{
		Linea++;
		tmp++;
	}
	return Linea>1
}

function LineaHorizontal(row,col)
{
	var FichaPos=Fichas[row][col];
	var Linea=0;
	var tmp=col
	while(tmp>0 && Fichas[row][tmp-1]==FichaPos)
	{
		Linea++;
		tmp--;
	}
	tmp=col;
	while(tmp<6 && Fichas[row][tmp+1]==FichaPos)
	{
		Linea++;
		tmp++;
	}
	return Linea>1
}

$("#table").swipe({
 	swipeStatus:function(event, phase, direction, distance, duration, fingers)
 	{
		if(phase=="start" && GameState=="pick")
		{
			swiped = false;
			if(SelFil==-1)
			{
				SelFil=Math.floor((event.y)/FichaTam);
				SelCol=Math.floor((event.x)/FichaTam);
			}
			else{
				posX=Math.floor((event.x)/FichaTam);
				posY=Math.floor((event.y)/FichaTam);
				if((Math.abs(SelFil-posY)==1 && SelCol==posX)||(Math.abs(SelCol-posX)==1 && SelFil==posY))
				{
					GameState="switch";
					FichaSwitch();
				}
				else{
					SelFil=posY;
					SelCol=posX;
				}
			}
		}
		if(phase=="move" && GameState=="pick" && distance>30 && !swiped)
		{
			swiped=true;
			posX=Math.floor((event.x)/FichaTam);
			posY=Math.floor((event.y)/FichaTam);
			Movimientos++;
			switch(direction)
			{
				case "up":
					if(posY==SelFil)
					{
						posY--;
					}
					if(posY>=0)
					{
						GameState="switch";
						FichaSwitch();
					}
					break;
				case "down":
					if(posY==SelFil)
					{
						posY++;
					}
					if(posY<=6)
					{
						GameState="switch";
						FichaSwitch();
					}
					break;
				case "left":
					if(posX==SelCol)
					{
						posX--;
					}
					if(posX>=0)
					{
						GameState="switch";
						FichaSwitch();
					}
					break;
				case "right":
					if(posX==SelCol)
					{
						posX++;
					}
					if(posX<=6)
					{
						GameState="switch";
						FichaSwitch();
					}
					break;
			}
		}
	}
});

function ValMovimiento()
{
	movingItems--;
		if(movingItems==0)
		{
			switch(GameState)
			{
				case "revert":
				case "switch":
              		if(!LineaGo(SelFil,SelCol) && !LineaGo(posY,posX))
              		{
           			if(GameState!="revert")
           			{
						GameState="revert";
           				FichaSwitch();
           			}
           			else{
						GameState="pick";
						SelFil=-1;	
					}
                	}    
				else{
					GameState="remove";
                		if(LineaGo(SelFil,SelCol))
                		{
                			RemoverFichas(SelFil,SelCol);
					}
                		if(LineaGo(posY,posX))
                		{
                			RemoverFichas(posY,posX);
					}
					OcultarFichas();
				}
				break;
			case "remove":
				BajarFichas();
				break;
			case "refill":
				NuevasFichas();
				break;
		}
	}
}

function NuevasFichas()
{
	var gemsPlaced = 0;
	for(i=0;i<7;i++)
	{
		if(Fichas[0][i]==-1)
		{
			Fichas[0][i]=Math.floor(Math.random()*4);
      		$("#table").append('<div class = "gem" id = "Fichas_0_'+i+'"></div>');
      		$("#Fichas_0_"+i).css({"top":"4px","left":(i*FichaTam)+4+"px","width":"85px","height":"85px","position":"absolute","border":"1px solid white","cursor":"pointer","background":"url(image/"+ImgFondo[Fichas[0][i]],"background-size":"85px 85px"});
      		gemsPlaced++;
		}
	}
	if(gemsPlaced)
	{
		GameState="remove";
		BajarFichas();
	}
	else{
		var combo=0
		for(i=0;i<7;i++)
		{
  			for(j=0;j<7;j++)
  			{
  				if(j<=5 && Fichas[i][j]==Fichas[i][j+1] && Fichas[i][j]==Fichas[i][j+2])
  				{
					combo++;
					RemoverFichas(i,j); 	
				}
				if(i<=5 && Fichas[i][j]==Fichas[i+1][j] && Fichas[i][j]==Fichas[i+2][j])
				{
					combo++;
					RemoverFichas(i,j); 	
				}		 	
			}
		}
		if(combo>0)
		{
			GameState="remove";
			OcultarFichas();
		}		
		else{
			GameState="pick";
			SelFil=-1;
		}
	}
}

function BajarFichas()
{
	var fellDown=0;
	for(j=0;j<7;j++)
	{
		for(i=6;i>0;i--)
		{
			if(Fichas[i][j]==-1 && Fichas[i-1][j]>=0)
			{
				$("#Fichas_"+(i-1)+"_"+j).addClass("fall").attr("id","Fichas_"+i+"_"+j);
				Fichas[i][j]=Fichas[i-1][j];
				Fichas[i-1][j]=-1;
				fellDown++;
			}
		}
	}
	$.each($(".fall"),function()
	{
		movingItems++;
		$(this).animate({
			top: "+="+FichaTam
			},{
			duration: 100,
			complete: function()
			{
				$(this).removeClass("fall");
				ValMovimiento();
			}
		});
	});     
	if(fellDown==0)
	{
		GameState="refill";
		movingItems=1;
		ValMovimiento();	
	}	
}

function OcultarFichas()
{
	Puntuacion += $(".remove").length * 50;
	Escribe($("#score-text"),Puntuacion);
	$.each($(".remove"),function()
	{
		movingItems++;
		$(this).animate({
			opacity:0
			},{
			duration: 200,
			complete: function()
			{
				$(this).remove();
				ValMovimiento();
			}
		});
	});
}

function FichaSwitch()
{
	Escribe($("#movimientos-text"),Movimientos);
	var yOffset=SelFil-posY;
	var xOffset=SelCol-posX;
	$("#Fichas_"+SelFil+"_"+SelCol).addClass("switch").attr("dir","-1");
	$("#Fichas_"+posY+"_"+posX).addClass("switch").attr("dir","1");
	$.each($(".switch"),function()
	{
		movingItems++;
		$(this).animate({
			left: "+="+xOffset*FichaTam*$(this).attr("dir"),
			top: "+="+yOffset*FichaTam*$(this).attr("dir")
			},{
			duration: 250,
			complete: function()
			{
				ValMovimiento();
			}
		}).removeClass("switch")
	});
	$("#Fichas_"+SelFil+"_"+SelCol).attr("id","temp");
	$("#Fichas_"+posY+"_"+posX).attr("id","Fichas_"+SelFil+"_"+SelCol);
	$("#temp").attr("id","Fichas_"+posY+"_"+posX);
	var temp=Fichas[SelFil][SelCol];
	Fichas[SelFil][SelCol]=Fichas[posY][posX];
	Fichas[posY][posX]=temp;
}

function RemoverFichas(row,col)
{
	var FichaPos = Fichas[row][col];
	var tmp = row;
	$("#Fichas_"+row+"_"+col).addClass("remove");
	if(LineaVertical(row,col))
	{
		while(tmp>0 && Fichas[tmp-1][col]==FichaPos)
		{                          
			$("#Fichas_"+(tmp-1)+"_"+col).addClass("remove");
			Fichas[tmp-1][col]=-1;
			tmp--;
		}
		tmp=row;
		while(tmp<6 && Fichas[tmp+1][col]==FichaPos)
		{
			$("#Fichas_"+(tmp+1)+"_"+col).addClass("remove");
			Fichas[tmp+1][col]=-1;
			tmp++;
		}
	}
	if(LineaHorizontal(row,col))
	{
		tmp = col;
		while(tmp>0 && Fichas[row][tmp-1]==FichaPos)
		{
			$("#Fichas_"+row+"_"+(tmp-1)).addClass("remove");
			Fichas[row][tmp-1]=-1;
			tmp--;
		}
		tmp=col;
		while(tmp<6 && Fichas[row][tmp+1]==FichaPos)
		{
			$("#Fichas_"+row+"_"+(tmp+1)).addClass("remove");
			Fichas[row][tmp+1]=-1;
			tmp++;
		}
	}
	Fichas[row][col]=-1;
}

setInterval(function()
{
	var color=$(".main-titulo").css("color");
	if(color=="rgb(220, 255, 14)")
	{
		$(".main-titulo").css("color","white");
	}
	else
	{
		$(".main-titulo").css("color","#DCFF0E");
	}
},1000);