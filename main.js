class classWords {
  constructor(level,word, translate){
    this.level = level;
    this.word = word;
    this.translate = translate
  }
}


const words1 = [
  new classWords("Easy", "air", "воздух"), 
  new classWords("Easy", "animal", "животное"), 
  new classWords("Easy", "answer", "ответ"), 
  new classWords("Easy", "area", "область"), 
  new classWords("Easy", "bird", "птица"), 
  new classWords("Easy", "body", "тело"), 
  new classWords("Easy", "book", "книга"), 
  new classWords("Easy", "bottom", "низ"), 
  new classWords("Easy", "boy", "мальчик"), 
  new classWords("Easy", "brother", "брат"), 
  new classWords("Easy", "car", "машина"), 
  new classWords("Easy", "child", "ребенок"), 
  new classWords("Easy", "children", "дети"), 
  new classWords("Easy", "city", "город"), 
  new classWords("Easy", "class", "класс"), 
  new classWords("Easy", "color", "цвет"), 
  new classWords("Easy", "country", "страна"), 
  new classWords("Easy", "day", "день"), 
  new classWords("Easy", "dog", "собака"), 
  new classWords("Easy", "door", "дверь"), 
  new classWords("Easy", "east", "восток"), 
  new classWords("Easy", "example", "пример"), 
  new classWords("Easy", "eye", "глаз"), 
  new classWords("Easy", "face", "лицо"), 
  new classWords("Easy", "family", "семья"), 
  new classWords("Easy", "farm", "ферма"), 
  new classWords("Easy", "father", "отец"), 
  new classWords("Easy", "feet", "ноги"), 
  new classWords("Easy", "fire", "Огонь"), 
  new classWords("Easy", "fish", "рыба"), 
  new classWords("Easy", "food", "еда"), 
  new classWords("Easy","foot", "нога"), 
  new classWords("Easy", "friend", "друг"), 
  new classWords("Easy", "girl", "девочка"), 
  new classWords("Easy", "hand", "рука"), 
  new classWords("Easy", "head", "голова"), 
  new classWords("Easy", "home", "дом"), 
  new classWords("Easy", "horse", "лошадь"), 
  new classWords("Easy", "house", "жилище"), 
  new classWords("Easy", "idea", "идея"), 
  new classWords("Easy", "king", "король"), 
  new classWords("Easy", "land", "суша"), 
  new classWords("Easy", "letter", "письмо"), 
  new classWords("Easy", "life", "жизнь"), 
  new classWords("Easy", "line", "линия"), 
  new classWords("Easy", "list", "список"), 
  new classWords("Easy", "love", "любовь"), 
  new classWords("Easy", "men", "мужчины"), 
  new classWords("Easy", "money", "Деньги"), 
  new classWords("Easy", "month", "месяц"), 
  new classWords("Easy", "mother", "мать"), 
  new classWords("Easy", "mountain", "гора"), 
  new classWords("Easy", "name", "имя"), 
  new classWords("Easy", "night", "ночь"), 
  new classWords("Easy", "north", "север"), 
  new classWords("Easy", "number", "номер"), 
  new classWords("Easy", "order", "заказ"), 
  new classWords("Easy", "page", "страница"), 
  new classWords("Easy", "paper", "бумага"), 
  new classWords("Easy", "pen", "ручка"), 
  new classWords("Easy", "people", "люди"), 
  new classWords("Easy", "person", "человек"), 
  new classWords("Easy", "phone", "Телефон"), 
  new classWords("Easy", "picture", "Рисунок"), 
  new classWords("Easy", "piece", "кусок"), 
  new classWords("Easy", "place", "место"), 
  new classWords("Easy", "plant", "растение"), 
  new classWords("Easy", "problem", "Проблема"), 
  new classWords("Easy", "product", "продукт"), 
  new classWords("Easy", "question", "вопрос"), 
  new classWords("Easy", "rive", "rречка"), 
  new classWords("Easy", "rock", "Скала"), 
  new classWords("Easy", "room", "комната"), 
  new classWords("Easy", "school", "школа"), 
  new classWords("Easy", "science", "наука"), 
  new classWords("Easy", "sea", "море"), 
  new classWords("Easy", "sentence", "предложение"), 
  new classWords("Easy", "ship", "корабль"), 
  new classWords("Easy", "side", "сторона"), 
  new classWords("Easy", "sister", "сестра"), 
  new classWords("Easy", "song", "песня"), 
  new classWords("Easy", "sound", "звук"), 
  new classWords("Easy","south", "юг"), 
  new classWords("Easy", "space", "пространство"), 
  new classWords("Easy", "state", "состояние"), 
  new classWords("Easy", "story", "история"), 
  new classWords("Easy", "thriller", "триллер"), 
  new classWords("Easy", "top", "вершина"), 
  new classWords("Easy", "tree", "дерево"), 
  new classWords("Easy", "watch", "Часы"), 
  new classWords("Easy", "water", "вода"), 
  new classWords("Easy", "week", "неделя"), 
  new classWords("Easy", "west", "запад"), 
  new classWords("Easy", "wind", "ветер"), 
  new classWords("Easy", "woman", "женщина"), 
  new classWords("Easy", "wood", "лес"), 
  new classWords("Easy", "word", "слово"), 
  new classWords("Easy", "world", "мир"), 
  new classWords("Easy", "year", "год") 
];
const words2 = [
  new classWords("Middle", "cherry", "вишня"),
  new classWords("Easy","apple", "яблоко"),
  new classWords("Middle", "orange", "апельсин") 
];
const words3 = [
  new classWords("Easy","banana", "банан") ,
  new classWords("Hard", "grape", "грейпфрукт"),
  new classWords("Hard", "kiwi", "киви") 
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
    randomWords.innerHTML = `<p class="level">${randomObject.level} level <br><br><p class="word">${randomObject.word}<br>(${randomObject.translate})</p></p>`
}
}


function teamClick(team){
  const inputValue = parseInt(selectPoints.value)
  function counterInner(){
    counter.innerHTML = team.name + `<br> points: ` + team.point;
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