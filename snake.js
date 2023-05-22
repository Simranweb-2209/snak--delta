var blocksize= 30;
var rows= 20;
var rows= 20;
var board;
var context;
//snake body
var snakex = 0;
var snakey = 0;
var snakelen = 3*blocksize;
//food
var foodx;
var foody;
var velx = 0;
var vely = 0;


window.onload = function() {
    board = document.getElementsById("board");
    board.height = rows*blocksize;
    board.width = cols*blocksize;
    context = board.getcontext("2d");

    placefood()
    document.addEventListener("keyup",changedirection);
}

    setInterval(update,1000);


function update() {
    context.fillStyle="black";
    context.fillRect(0,0,board.width,board.height);

    context.fillStyle="green";
    snakex += velx*blocksize;
    snakey += vely*blocksize;
    context.fillRect(snakex.snakey,blocksize,snakelen);


    context.fillStyle="red";
    context.fillRect(foodx,foody,blocksize,blocksize);

    if (snakex == foodx && snakey == foody){
        plaacefood()
    }
}

function changedirection(){
    if (e.code == "Arrowup"){
            velx = 0;
            vely = -1;
    }
    else if(e.code == "Arrowdown"){
        velx = 0;
        vely = 1;
    }
    else if(e.code == "Arrowleft"){
        velx = -1;
        vely = 0;
    }
    else if(e.code == "Arrowright"){
         velx = 1;
        vel = 0;
    }
}

function plaacefood() {
    foodx = Math.floor(Math.random()* cols)*blocksize;
    foody = Math.floor(Math.random()*rows)*blocksize;
}




    







