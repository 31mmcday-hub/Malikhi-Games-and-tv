const games = [
  {id:"2048",name:"2048",desc:"Classic number puzzle",emoji:"🔢",url:"2048.html"},
  {id:"archery",name:"Archery",desc:"Hit the target",emoji:"🏹",url:"archery_game_improved.html"},
  {id:"asteroids",name:"Asteroids",desc:"Destroy the rocks",emoji:"☄️",url:"asteroids.html"},
  {id:"breakout",name:"Breakout",desc:"Smash the blocks",emoji:"🎯",url:"breakout.html"},
  {id:"brick-breaker",name:"Brick Breaker",desc:"Break every brick",emoji:"🧱",url:"brick-breaker.html"},
  {id:"bullet-hell",name:"Bullet Hell",desc:"Dodge everything",emoji:"💥",url:"bullet-hell.html"},
  {id:"clicker",name:"Clicker",desc:"Click your way to the top",emoji:"👆",url:"clicker.html"},
  {id:"falling-blocks",name:"Falling Blocks",desc:"Don't get crushed",emoji:"🧊",url:"falling-blocks.html"},
  {id:"flappy",name:"Flappy",desc:"Fly through the pipes",emoji:"🐦",url:"flappy.html"},
  {id:"maze",name:"Maze",desc:"Find your way out",emoji:"🌀",url:"maze.html"},
  {id:"memory",name:"Memory Match",desc:"Match the pairs",emoji:"🧠",url:"memory.html"},
  {id:"minesweeper",name:"Minesweeper",desc:"Find the mines",emoji:"💣",url:"minesweeper.html"},
  {id:"mini-rpg",name:"Mini RPG",desc:"Battle and explore",emoji:"⚔️",url:"mini_rpg_improved (1).html"},
  {id:"neon-runner",name:"Neon Runner",desc:"Run and survive",emoji:"🌈",url:"neon-runner.html"},
  {id:"pong",name:"Pong",desc:"Classic arcade game",emoji:"🏓",url:"pong.html"},
  {id:"reaction-dodge",name:"Reaction Dodge",desc:"Test your reactions",emoji:"⚡",url:"reaction-dodge.html"},
  {id:"snake",name:"Snake",desc:"Classic snake game",emoji:"🐍",url:"snake.html"},
  {id:"sokoban",name:"Sokoban",desc:"Push the boxes",emoji:"📦",url:"sokoban.html"},
  {id:"tetris",name:"Tetris",desc:"Block-stacking classic",emoji:"🧱",url:"tetris.html"},
  {id:"typing",name:"Typing Race",desc:"Test your typing speed",emoji:"⌨️",url:"typing.html"},
{id:"driving",name:"Driving Game",desc:"Dodge traffic and beat your high score",emoji:"🏎️",url:"driving-game.html"},
  {id:"chess",name:"Chess",desc:"Play chess online",emoji:"♟️",url:"https://www.chess.com/play/online"},
  {id:"agar",name:"Agar.io",desc:"Grow and survive",emoji:"🟢",url:"https://agar.io/"},
  {id:"krunker",name:"Krunker",desc:"Browser FPS",emoji:"🎯",url:"https://krunker.io/"},
  {id:"tetris-online",name:"Tetris Online",desc:"Play online",emoji:"🧱",url:"https://tetris.com/play-tetris"},

  {id:"snapchat",name:"Snapchat",desc:"Open Snapchat",emoji:"👻",url:"https://www.snapchat.com/"},
  {id:"tiktok",name:"TikTok",desc:"Open TikTok",emoji:"🎵",url:"https://www.tiktok.com/"}
];

let favorites = JSON.parse(
  localStorage.getItem("malikhiFavorites") || "[]"
);

const grid = document.querySelector("#gameGrid");
const favGrid = document.querySelector("#favoriteGrid");
const count = document.querySelector("#count");
const empty = document.querySelector("#empty");
const favEmpty = document.querySelector("#favEmpty");

function card(g) {
  const liked = favorites.includes(g.id);

  return `
    <article class="game-card" data-name="${g.name.toLowerCase()}">

      <button class="fav"
        data-fav="${g.id}"
        title="Favorite">
        ${liked ? "★" : "☆"}
      </button>

      <div class="game-art">
        ${document.body.classList.contains("noemoji")
          ? "🎮"
          : g.emoji}
      </div>

      <div class="game-info">
        <b>${g.name}</b>
        <span>${g.desc}</span>

        <a class="play"
          href="${g.url}"
          target="_blank"
          rel="noopener">
          Play ↗
        </a>
      </div>

    </article>
  `;
}

function render(list = games) {
  grid.innerHTML = list.map(card).join("");

  count.textContent = `${list.length} games`;

  empty.classList.toggle(
    "hidden",
    list.length !== 0
  );
}

function renderFav() {
  const list = games.filter(g =>
    favorites.includes(g.id)
  );

  favGrid.innerHTML = list.map(card).join("");

  favEmpty.classList.toggle(
    "hidden",
    list.length !== 0
  );
}

function save() {
  localStorage.setItem(
    "malikhiFavorites",
    JSON.stringify(favorites)
  );
}

function toast(msg) {
  const t = document.querySelector("#toast");

  if (!t) return;

  t.textContent = msg;
  t.classList.add("show");

  setTimeout(() => {
    t.classList.remove("show");
  }, 1400);
}


/* NAVIGATION + FAVORITES */

document.addEventListener("click", e => {

  const nav = e.target.closest("[data-section]");

  if (nav) {

    document
      .querySelectorAll(".nav-item")
      .forEach(x => x.classList.remove("active"));

    nav.classList.add("active");

    document
      .querySelectorAll(".section")
      .forEach(x => x.classList.remove("active-section"));

    const section = document.querySelector(
      "#" + nav.dataset.section
    );

    if (section) {
      section.classList.add("active-section");
    }

    if (nav.dataset.section === "favorites") {
      renderFav();
    }
  }


  const fav = e.target.closest("[data-fav]");

  if (fav) {

    const id = fav.dataset.fav;

    if (favorites.includes(id)) {

      favorites = favorites.filter(
        x => x !== id
      );

      toast("Removed from favorites");

    } else {

      favorites.push(id);

      toast("Added to favorites ⭐");
    }

    save();
    render();
    renderFav();
  }

});


/* SEARCH */

const search = document.querySelector("#search");

if (search) {

  search.addEventListener("input", e => {

    const q = e.target.value
      .toLowerCase()
      .trim();

    const filtered = games.filter(g =>
      (g.name + " " + g.desc)
        .toLowerCase()
        .includes(q)
    );

    render(filtered);
  });
}


/* RANDOM GAME */

const randomBtn =
  document.querySelector("#randomBtn");

if (randomBtn) {

  randomBtn.onclick = () => {

    const g =
      games[Math.floor(Math.random() * games.length)];

    window.open(
      g.url,
      "_blank",
      "noopener"
    );

    toast("Opening " + g.name + " 🎮");
  };
}


/* MENU */

const menuBtn =
  document.querySelector("#menuBtn");

if (menuBtn) {

  menuBtn.onclick = () => {

    const sidebar =
      document.querySelector("#sidebar");

    sidebar.classList.toggle("collapsed");
  };
}


/* DARK MODE */

function setDark(dark) {

  document.body.classList.toggle(
    "light",
    !dark
  );

  localStorage.setItem(
    "dark",
    dark ? "1" : "0"
  );

  const toggle =
    document.querySelector("#darkToggle");

  if (toggle) {
    toggle.checked = dark;
  }
}


const themeBtn =
  document.querySelector("#themeBtn");

if (themeBtn) {

  themeBtn.onclick = () => {

    const isLight =
      document.body.classList.contains("light");

    setDark(isLight);
  };
}


const darkToggle =
  document.querySelector("#darkToggle");

if (darkToggle) {

  darkToggle.onchange = e => {
    setDark(e.target.checked);
  };
}


/* EMOJI SETTING */

const emojiToggle =
  document.querySelector("#emojiToggle");

if (emojiToggle) {

  emojiToggle.onchange = e => {

    document.body.classList.toggle(
      "noemoji",
      !e.target.checked
    );

    render();
    renderFav();
  };
}


/* LOAD SAVED SETTINGS */

const savedDark =
  localStorage.getItem("dark");

if (savedDark === "0") {
  setDark(false);
}


/* START WEBSITE */

render();
renderFav();

