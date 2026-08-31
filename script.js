const games=[
{id:"2048",name:"2048",desc:"Classic number puzzle",emoji:"🔢",url:"https://play2048.co/"},
{id:"hextris",name:"Hextris",desc:"Fast-paced puzzle",emoji:"⬡",url:"https://hextris.io/"},
{id:"agar",name:"Agar.io",desc:"Grow and survive",emoji:"🟢",url:"https://agar.io/"},
{id:"slither",name:"Slither.io",desc:"Become the biggest",emoji:"🐍",url:"https://slither.io/"},
{id:"chess",name:"Chess",desc:"Put your strategy to work",emoji:"♟️",url:"https://www.chess.com/play/online"},
{id:"krunker",name:"Krunker",desc:"Browser FPS",emoji:"🎯",url:"https://krunker.io/"},
{id:"tetris",name:"Tetris",desc:"Block-stacking classic",emoji:"🧱",url:"https://tetris.com/play-tetris"},
{id:"cookie",name:"Cookie Clicker",desc:"Bake some cookies",emoji:"🍪",url:"https://orteil.dashnet.org/cookieclicker/"},
{id:"asteroids",name:"Asteroids",desc:"Destroy the rocks",emoji:"☄️",url:"asteroids.html"},
{id:"snake",name:"Snake",desc:"Classic snake game",emoji:"🐍",url:"snake.html"},
{id:"space-invaders",name:"Space Invaders",desc:"Defend the galaxy",emoji:"👾",url:"space-invaders.html"},
{id:"2048-local",name:"2048 Mini",desc:"Number puzzle",emoji:"🔢",url:"2048.html"},
{id:"minesweeper",name:"Minesweeper",desc:"Find the mines",emoji:"💣",url:"minesweeper.html"},
{id:"sokoban",name:"Sokoban",desc:"Push the boxes",emoji:"📦",url:"sokoban.html"},
{id:"bullet-hell",name:"Bullet Hell",desc:"Dodge everything",emoji:"🔫",url:"bullet-hell.html"},
{id:"neon-runner",name:"Neon Runner",desc:"Jump and survive",emoji:"🌈",url:"neon-runner.html"},
{id:"brick-breaker",name:"Brick Breaker",desc:"Break every brick",emoji:"🧱",url:"brick-breaker.html"},
{id:"flappy",name:"Flappy",desc:"Fly through the pipes",emoji:"🐦",url:"flappy.html"},
{id:"pong",name:"Pong",desc:"Classic arcade tennis",emoji:"🏓",url:"pong.html"},
{id:"breakout",name:"Breakout",desc:"Smash the blocks",emoji:"🎯",url:"breakout.html"},
{id:"reaction",name:"Reaction Test",desc:"How fast are you?",emoji:"⚡",url:"reaction.html"},
{id:"typing",name:"Typing Race",desc:"Test your typing speed",emoji:"⌨️",url:"typing.html"},
{id:"clicker",name:"Cookie Clicker Mini",desc:"Click for cookies",emoji:"🍪",url:"clicker.html"},
{id:"memory",name:"Memory Match",desc:"Match the pairs",emoji:"🧠",url:"memory.html"},
{id:"dodge",name:"Dodge",desc:"Avoid the falling blocks",emoji:"💨",url:"reaction-dodge.html"},
{id:"maze",name:"Maze",desc:"Find your way out",emoji:"🌀",url:"maze.html"},
{id:"falling-blocks",name:"Falling Blocks",desc:"Don't get crushed",emoji:"🧊",url:"falling-blocks.html"}];
let favorites=JSON.parse(localStorage.getItem("malikhiFavorites")||"[]");
const grid=document.querySelector("#gameGrid"),favGrid=document.querySelector("#favoriteGrid"),count=document.querySelector("#count"),empty=document.querySelector("#empty"),favEmpty=document.querySelector("#favEmpty");
function card(g){const liked=favorites.includes(g.id);return `<article class="game-card" data-name="${g.name.toLowerCase()}"><button class="fav" data-fav="${g.id}">${liked?"★":"☆"}</button><div class="game-art">${document.body.classList.contains("noemoji")?"🎮":g.emoji}</div><div class="game-info"><b>${g.name}</b><span>${g.desc}</span><a class="play" href="${g.url}" target="_blank" rel="noopener">Play ↗</a></div></article>`}
function render(list=games){grid.innerHTML=list.map(card).join("");count.textContent=`${list.length} games`;empty.classList.toggle("hidden",list.length!==0)}
function renderFav(){const list=games.filter(g=>favorites.includes(g.id));favGrid.innerHTML=list.map(card).join("");favEmpty.classList.toggle("hidden",list.length!==0)}
function save(){localStorage.setItem("malikhiFavorites",JSON.stringify(favorites))}
function toast(msg){const t=document.querySelector("#toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),1400)}
document.addEventListener("click",e=>{const nav=e.target.closest("[data-section]");if(nav){document.querySelectorAll(".nav-item").forEach(x=>x.classList.remove("active"));nav.classList.add("active");document.querySelectorAll(".section").forEach(x=>x.classList.remove("active-section"));document.querySelector("#"+nav.dataset.section).classList.add("active-section");if(nav.dataset.section==="favorites")renderFav()}const fav=e.target.closest("[data-fav]");if(fav){const id=fav.dataset.fav;favorites=favorites.includes(id)?favorites.filter(x=>x!==id):[...favorites,id];save();render();renderFav();toast(favorites.includes(id)?"Added to favorites ⭐":"Removed from favorites")}})
document.querySelector("#search").addEventListener("input",e=>{const q=e.target.value.toLowerCase().trim();render(games.filter(g=>(g.name+" "+g.desc).toLowerCase().includes(q)))});
document.querySelector("#randomBtn").onclick=()=>{const g=games[Math.floor(Math.random()*games.length)];window.open(g.url,"_blank","noopener")};
document.querySelector("#menuBtn").onclick=()=>document.querySelector("#sidebar").classList.toggle("collapsed");
function setDark(d){document.body.classList.toggle("light",!d);localStorage.setItem("dark",d?"1":"0");document.querySelector("#darkToggle").checked=d}
document.querySelector("#themeBtn").onclick=()=>setDark(document.body.classList.contains("light"));
document.querySelector("#darkToggle").onchange=e=>setDark(e.target.checked);
document.querySelector("#emojiToggle").onchange=e=>document.body.classList.toggle("noemoji",!e.target.checked);
if(localStorage.getItem("dark")==="0")setDark(false);render();renderFav();