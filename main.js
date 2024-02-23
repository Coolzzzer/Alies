class classWords {
  constructor(level,word, translate){
    this.level = level;
    this.word = word;
    this.translate = translate
  }
}
const words1 = [
  new classWords(1,"apple", "яблоко"),
  new classWords(1,"banana", "банан") 
];
const words2 = [
  new classWords(2, "cherry", "вишня"),
  new classWords(2, "orange", "апельсин") 
];
const words3 = [
  new classWords(3, "grape", "грейпфрукт"),
  new classWords(3, "kiwi", "киви") 
];
const startMenu = document.querySelector("#startMenu"); 
const randomWords = document.querySelector("#output");
const counter = document.querySelector("#counter");
let selectTime = document.querySelector("#selectTime");
let selectPoints = document.querySelector("#selectPoints");

const level1 = document.querySelector("#level1");
const level2 = document.querySelector("#level2");
const level3 = document.querySelector("#level3");
const start = document.querySelector("#start");
const timer = document.querySelector("#timer");
const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const eng = document.querySelector("#eng");
const exit = document.querySelector("#exit");
const teamContainer = document.getElementById('teamContainer');
const characterizationTeam = document.querySelector("#characterizationTeam"); 
const next = document.querySelector("#next"); 
next.style.display = "none";
const generatorRandomWords = document.querySelector("#generatorRandomWords");
generatorRandomWords.style.display = "none";

let status = 0;
let time;
let teams =  [
  { name: {}, point: 0 },
  { name: {}, point: 0 },
]
let currentTeamIndex = 0;

function addNameToObjects(){
  let TeamA = document.querySelector("#TeamA").value;
  let TeamB = document.querySelector("#TeamB").value;
    if (TeamA && TeamB){ 
        teams[0].name = TeamA;
        teams[1].name = TeamB;
    }
}
document.querySelector("#TeamA").addEventListener("input", addNameToObjects);
document.querySelector("#TeamB").addEventListener("input", addNameToObjects);

function endTime(a){a.addEventListener('click', function() {
  clearInterval(time);
  startMenu.style.display = "block";
  selectTime.value = "";
  selectPoints.value = "";
  TeamA.value = "";
  TeamB.value = "";
  timer.textContent = '';
  next.style.display = "none";
  start.style.display = "block";
  zeroPoints(teams);
});
}
function btnHidden() {
  randomWords.textContent = "";
  startMenu.style.display = "none";
  generatorRandomWords.style.display = "block";
};
function btnShow() {
  counter.innerHTML = "";
  startMenu.style.display = "block";
  generatorRandomWords.style.display = "none";
}
exit.onclick = function(){
    status = 0; 
    btnShow();
};
level1.onclick = function(){
    status = 1;
};
level2.onclick = function(){
    status = 2;
};
level3.onclick = function(){
    status = 3; 
};

startTime(start);
randomWords.textContent = "Please select a level";


render(generatorRandomWords);
render(start);
function render(a){
  a.addEventListener("click", function (){
    if(status == 0){
      randomWords.textContent = "Please select a level"   
    }
    else if (status == 1){
      selectRandomWords(words1)  
  }
    else if (status == 2){
      selectRandomWords(words2)  
    }
    else if (status == 3){
      selectRandomWords(words3)  
  }
})

function selectRandomWords(words){
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomObject = words[randomIndex];
    randomWords.innerHTML = `${randomObject.level} level select <p>${randomObject.word}, ${randomObject.translate}</p>`
}
}


function teamClick(team){
  const inputValue = parseInt(selectPoints.value)
  function counterInner(){
    counter.innerHTML = team.name + " points: " + team.point;
  }
  counterInner()
  yes.onclick = function(){
    team.point++;
    counterInner()
    if (team.point >= inputValue) { 
      alert(team.name + ' wins!');
    }
  }
  no.onclick = function(){
    team.point--;
    counterInner()
  }
  eng.onclick = function(){
    team.point = team.point+2;
    counterInner()
    if (team.point >= inputValue) { 
      alert(team.name + ' wins!');
    }
  ;};
  return counter
};
function zeroPoints(team){
  team[0].point = 0;
  team[1].point = 0;
}
function startTime(a){
  next.style.display = "none";
  a.addEventListener('click', function() {
    const inputValue = parseInt(selectTime.value);
    if (!isNaN(inputValue)) {
        let count = inputValue;
        time = setInterval(function() {
          timer.textContent = count + ' seconds';
            if (count === 0) {
                next.style.display = "block";
                clearInterval(time);
                
            } else {
                count--;
            }
        }, 1000);
    }
})
}

function switchTeams() {
  teamClick(teams);
  teamContainer.innerHTML = ''; 
  const currentTeam = teams[currentTeamIndex]; 
  const currentTeamButton = teamClick(currentTeam); 
  swich()
}
function swich() {
  currentTeamIndex = (currentTeamIndex + 1) % teams.length; 
};
next.onclick = function(){
  switchTeams();
  next.style.display = "none";
}
start.onclick = function(){
  switchTeams();
  start.style.display = "none";
  btnHidden();
  teamClick(teams[0]);
}
render(start);
endTime(exit);
startTime(next);