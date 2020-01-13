let ships = [
    [0,0,0,0,2,0,0,0,0,0],// 0 is empty 1 is a ship from player 1 , 2 is a ship from player 2 ,and 3 is both
    [1,1,1,1,3,0,0,2,2,0],
    [2,2,2,2,2,0,0,0,0,0],
    [0,0,0,0,2,0,0,0,0,0],
    [0,0,0,0,0,0,1,1,1,1],
    [0,0,0,0,0,0,1,0,0,0],
    [3,3,3,0,0,2,3,2,0,0],
    [0,0,0,0,0,0,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
]

let hitsAndMisses1 = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
]

let hitsAndMisses2 = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
]


 

//registers a box was clicked
var lastClicked;
var grid = clickableGrid(10,10,function(el,row,col,i){
    console.log("clicked on element:",el);
    console.log("clicked on row:",row);
    console.log("clicked on col:",col);
    console.log("clicked on item #:",i);

    el.className='clicked';
    if (lastClicked) lastClicked.className='';
    lastClicked = el; //turns squares green
});

document.body.appendChild(grid);
     
this.player1 = new player ('eeee')

function clickableGrid( rows, cols, callback ){
    var i=0;
    var grid = document.createElement('table');
    grid.className = 'grid';
//creates grid
    for (var r=0;r<rows;++r){
        var tr = grid.appendChild(document.createElement('tr'));
  
        for (var c=0;c<cols;++c){
            var cell = tr.appendChild(document.createElement('td'));
            cell.innerHTML = ++i;

            cell.addEventListener('click',(function(el,r,c,i){
                return function(){
                    callback(el,r,c,i);
                    player1.Carrier.updatehits
                    
                    
//makes squares clickable
                }
            })(cell,r,c,i),false);
        }
    }
    return grid;
}
//for ship placement
function ship (name,hits,originX,originY,orientation){
    this.name = name
    this.hits = hits
    this.updateHits = function (){
    hits = hits- 1

//players ships
}
}
function player(name){
        this.name = name;
        this.Carrier = new ship('Carrier',5,0,0,'up')
        this.Battleship = new ship ('Battleship',4,0,0,'up')
        this.Destroyer =new ship ('Destroyer',2,0,0,'up')
        this.Cruiser = new  ship('Cruiser',3,0,0,'up')
        this.Submarine = new ship ('submarine',3,0,0,'up')
          
    };
    

    