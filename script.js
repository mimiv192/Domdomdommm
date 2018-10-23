let squareCounter = 0;
let squaresContainer;

document.addEventListener('DomContentLoaded', function () {
    let container = document.getElementById('container');
    let squareContainer = document.createElement('div')
    squaresContainer.className = 'squares-container';
    let btn = document.createElement('button');
    btn.innerText = 'ADD SQUARE';

    btn.addEventListener('click', createSquare);

    container.appendChild(btn);
    container.appendChild(squaresContainer);
});

function createSquare() {
    let square = document.createElement('div');
    square.className = 'square';
    square.id = squareCounter++;
    let idDisplay = document.createElement ('p');
    idDisplay.className= 'id-display';
    idDisplay.innerText =square.id;
    idDisplay.innerText= square.id;
    square.appendChild(idDisplay)

    square.addEventListener('mouseover', function(){
        console.log(this.id);
        let divText = document.createTextNode(this.id);
        div.appendChild(divText);  
  
    })

    square.addEventListener('mouseout', function(){
        div.innerText = ''; 
   
    squaresContainer.appendChild(square);}

square.addEventListener('click', function() {
    square.style.backgroundColor = getRandomColor();
    let color = getRandomColor ();
    if (color==='#FFFFFF'
) square.style.color = 'black';
else square.style.color='white';







function button() {
    let button = document.createElement('button');
    button.innerText = 'Click Me';
    button.id = '1';

    button.addEventListener('click', createSquare());
    let btnText = document.createTextNode('Add Square');
    let containerDiv = document.createElement('div');
    document.body.appendChild(button);
    document.body.insertBefefore(button, container)
    let button = document.getElementsByClassName('listItemBtn')
    button.addEventListener("click", changeListItem());
    var resetButton = document.querySelector("#reset");
    var modeButtons = document.querySelectorAll(".mode");

}



return square;
squaresContainer.appendChild(square);

return function () {
    let div = document.createElement('div');

    div.className = 'square'
    div.id = numOfSquares++; {
        squares[i].addEventListener('click', function () 
        }
    div.addEventListener('click', function () {
        console.log(div.id);

    });

    container.appendChild(div);
}
};
div.addEventListener('click', function () {
    let randomColor = getRandomColor();
    div.style.backgroundColor = randomColor;
})
let colors =
    ['red', 'purple', 'pink', 'lavender', 'orange', 'green', 'fuschia', 'palegoldenrod'];
let header = document.getElementById('header');

header.style.color = colors[rand]
for (let i = 0; i < 3; i++) {
    squares.style.backgroundColor = colors[i]
}
let h1 = document.createElement('h1');

h1.innerText = 'This is a header';

h1.addEventListener('click', function () {
    let rand = Math.floor(Math.random() * 8);
    console.log(rand);
    // header.style.color = colors [0]
});
document.body.appendChild(h1);


