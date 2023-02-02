let bottomContainer = document.getElementById('bottomContainer');
let scissorsBtn = document.getElementById('scissors');
let rockBtn = document.getElementById('rock');
let paperBtn = document.getElementById('paper');
let closeBtn = document.getElementById('closeBtn');
let rule_box = document.getElementById('rule-box');
let ruleBtn = document.getElementById('rules');
let option_panel = document.getElementById('options');
let score = document.getElementById('score');
let tryBtn = document.getElementById('tryAgain');


const rock = 0;
const paper = 1;
const scissor = 2;

let current_score = 0;
function updateScore(){
    current_score = ++current_score;
    score.textContent = current_score;
}

function getComputerDecision(){
    return Math.floor(Math.random() * 3);
}

function updateUI(st_text, userChoice, pcChoice){
    const options2 = document.createElement('div');
    const result_text = document.createElement('div');
    const status_text = document.createElement('span');
    const against_pc_text = document.createElement('span');
    const play_again_btn = document.createElement('button');
    const pc_picked = document.createElement('div');
    const you_picked = document.createElement('div');
    bottomContainer.removeChild(option_panel);

    status_text.innerText = st_text;
    against_pc_text.innerText = 'AGAINST PC';
    play_again_btn.innerText = 'PLAY AGAIN';
    pc_picked.innerText = 'PC PICKED';
    you_picked.innerText = 'YOU PICKED';

    userChoice.style.marginTop = '30%';
    pcChoice.style.marginTop = '30%';
    
    result_text.appendChild(status_text);
    result_text.appendChild(document.createElement('br'));
    result_text.appendChild(against_pc_text);
    result_text.appendChild(document.createElement('br'));
    you_picked.appendChild(userChoice);
    pc_picked.appendChild(pcChoice);
    options2.appendChild(you_picked);
    options2.appendChild(pc_picked);
    options2.appendChild(result_text);
    bottomContainer.appendChild(options2);
    result_text.appendChild(play_again_btn);

    status_text.classList.add('status-text');
    against_pc_text.classList.add('against-pc-text');
    result_text.classList.add('result-text');
    options2.classList.add('options2');
    play_again_btn.classList.add('play-again');
    you_picked.classList.add('you-picked');
    pc_picked.classList.add('pc-picked');  

    play_again_btn.addEventListener('click', ()=>{
        bottomContainer.removeChild(options2);
        bottomContainer.appendChild(option_panel);
    });
    
}

function getClone(param){
    if(param === 0){
        return rockBtn.cloneNode(true);
    }
    else if(param === 1){
        return paperBtn.cloneNode(true);
    }
    else{
        return scissorsBtn.cloneNode(true);
    }
}
function decideResult(player1, player2){
    if(player1 === player2){
        updateUI('TIE', getClone(player1), getClone(player2));
    }
    else if(player1 === 0){
        if(player2 == 1){
            updateUI("YOU LOST", getClone(player1), getClone(player2));
        }
        else{
            updateUI("YOU WON", getClone(player1), getClone(player2));
            updateScore();
        }
    }
    else if(player1 == 1){
        if(player2 == 2){
            updateUI("YOU LOST", getClone(player1), getClone(player2));
        }
        else{
            updateUI("YOU WON", getClone(player1), getClone(player2));
            updateScore();
        }
    }
    else if(player1 == 2){
        if(player2 == 0){
            updateUI("YOU LOST", getClone(player1), getClone(player2));
        }
        else{
            updateUI("YOU WON", getClone(player1), getClone(player2));
            updateScore();
        }
    }
}

scissorsBtn.addEventListener('click', ()=>{
    tryBtn.style.display = 'block';
    decideResult(2, getComputerDecision());
})
rockBtn.addEventListener('click', ()=>{
    tryBtn.style.display = 'block';
    decideResult(0, getComputerDecision());
})
paperBtn.addEventListener('click', ()=>{
    tryBtn.style.display = 'block';
    decideResult(1, getComputerDecision());
})


tryBtn.addEventListener('click', ()=>{
    score.textContent = 0;
    tryBtn.style.display = 'none';
})

ruleBtn.addEventListener('click', ()=>{
    if(rule_box.style.display === 'block'){
        rule_box.style.display = 'none';
        if(window.innerWidth < 1300)
        bottomContainer.style.display = 'block'
    }
    else{
        rule_box.style.display = 'block';
        if(window.innerWidth < 1300)
        bottomContainer.style.display = 'none';
    }
})

closeBtn.addEventListener('click', ()=>{
    if(rule_box.style.display === 'none'){
        rule_box.style.display = 'block';
        if(window.innerWidth < 1300)
        bottomContainer.style.display = 'none';
    }
    else{
        rule_box.style.display = 'none';
        if(window.innerWidth < 1300)
        bottomContainer.style.display = 'block'
    }
})
