var cubes=6;
var colors=generateColors();
var squares=document.querySelectorAll(".box");
var selectedColor=colors[select()];
var result = document.querySelector("#result");
var display = document.querySelector("#rgbDisplay");
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");
var h1 = document.querySelector("h1");

//show the color to be guessed
display.textContent=selectedColor;

//add colors to cube
for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor=colors[i];
    squares[i].addEventListener("click",function(){
        if(this.style.backgroundColor===selectedColor){
            result.textContent="Correct!";
            h1.style.backgroundColor=selectedColor;
            colorAll();
        }
        else{
            result.textContent="Incorrect";
            this.style.backgroundColor="black";
        }
    });
}

//color all cubes if guess is right
function colorAll(){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=selectedColor;
    }
}

//reset button
reset.addEventListener("click",function(){
    resetFun();
});

//reset function
function resetFun(){
     //change 'play again' to 'new game' in reset button
    reset.textContent="new colors";
    //set the result space to empty
    result.textContent="";
    //default h1 bg color
    h1.style.backgroundColor="steelblue";
    //generate random colors
    colors=generateColors();
    //select the color to be guessed
    selectedColor=colors[select()];
    //show the color to be guessed
    display.textContent=selectedColor;
    //add color to cubes
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.display="inline";
            squares[i].style.background=colors[i];
        }
        else{
            squares[i].style.display="none";
        }
    }
}

//easy button
easyBtn.addEventListener("click",function(){
    cubes = 3;
    this.classList.add("selected");
    hardBtn.classList.remove("selected");
    resetFun();
});

//hard button
hardBtn.addEventListener("click",function(){
    cubes = 6;
    this.classList.add("selected");
    easyBtn.classList.remove("selected");
    resetFun();
})

//make array of rgb
function generateColors(){
    var arr=[];
    for(var i=0;i<cubes;i++)
    {
        arr.push(rgb());
    }
    return arr;
}

//create an rgb
function rgb(){
    var r=Math.floor(Math.random() * 256);
    
    var g=Math.floor(Math.random() * 256);

    var b=Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

// select a random color
function select(){
   var val= Math.floor(Math.random() * cubes);
   return val;
}
