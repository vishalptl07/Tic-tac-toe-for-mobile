console.log("Welcomee to Tic Tac Toe")
let music = new Audio("music.mp3")
let turn = new Audio("click.mp3")
let gamewin = new Audio("gamewin.mp3")
let turn1 = "X"
let isgameover = false; 

// fuction to chage 
const changeTurn = ()=>{

    return turn1 === "X"? "0" : "X"
}

// fuction to check for a win
const checkwin = () =>{
    let boxtext = document.getElementsByClassName('boxtext')
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "" ) ){
            document.querySelector('.turn1').innerText = boxtext[e[0]].innerText + "  won"
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            gamewin.play();
        }
    })


} 

// main game logic
let gameboxes = document.getElementsByClassName("gamebox");
Array.from(gameboxes).forEach(Element => {
        let boxtext = Element.querySelector('.boxtext');
        Element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn1;
            turn1=changeTurn();
            turn.play();
            checkwin();
            if(!isgameover){
                document.getElementsByClassName("turn1")[0].innerText = "Turn for "+turn1;
            }
            
        }
    });
});


// for reset

reset.addEventListener('click' , ()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(Element =>{
        Element.innerText = ""
        turn1 = "X"
        isgameover = false;
        document.getElementsByClassName("turn1")[0].innerText = "Turn for "+turn1;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
      

    });
})