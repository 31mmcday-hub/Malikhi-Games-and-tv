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
  {id:"reaction-test",name:"Reaction Test",desc:"Test how fast you are",emoji:"⚡",url:"reaction-test.html"},
  {id:"click-speed",name:"Click Speed",desc:"Click as fast as you can",emoji:"🖱️",url:"click-speed.html"},
  {id:"guess-number",name:"Guess the Number",desc:"Guess the secret number",emoji:"🔢",url:"guess-number.html"},
  {id:"rock-paper-scissors",name:"Rock Paper Scissors",desc:"Beat the computer",emoji:"✊",url:"rock-paper-scissors.html"},
  {id:"coin-flip",name:"Coin Flip",desc:"Heads or tails?",emoji:"🪙",url:"coin-flip.html"},
  {id:"dice-roll",name:"Dice Roll",desc:"Roll the dice",emoji:"🎲",url:"dice-roll.html"},
  {id:"high-low",name:"High or Low",desc:"Guess the next number",emoji:"📈",url:"high-low.html"},
  {id:"math-blaster",name:"Math Blaster",desc:"Solve quick math problems",emoji:"➕",url:"math-blaster.html"},
  {id:"color-match",name:"Color Match",desc:"Match the target color",emoji:"🎨",url:"color-match.html"},
  {id:"whack-a-box",name:"Whack-a-Box",desc:"Hit the moving box",emoji:"🟦",url:"whack-a-box.html"},
  {id:"avoid-boxes",name:"Avoid the Boxes",desc:"Survive as long as possible",emoji:"💨",url:"avoid-boxes.html"},
  {id:"dot-chaser",name:"Dot Chaser",desc:"Catch the moving dot",emoji:"🔴",url:"dot-chaser.html"},
  {id:"line-rider-mini",name:"Line Rider Mini",desc:"Draw your own track",emoji:"✏️",url:"line-rider-mini.html"},
  {id:"tic-tac-toe",name:"Tic Tac Toe",desc:"Play against the computer",emoji:"❌",url:"tic-tac-toe.html"},
  {id:"connect-four-mini",name:"Connect Four Mini",desc:"Get four in a row",emoji:"🔴",url:"connect-four-mini.html"},
  {id:"lights-out",name:"Lights Out",desc:"Turn every light off",emoji:"💡",url:"lights-out.html"},
  {id:"memory-mini",name:"Memory Mini",desc:"Match the pairs",emoji:"🧠",url:"memory-mini.html"},
  {id:"hangman-mini",name:"Hangman Mini",desc:"Guess the hidden word",emoji:"🔤",url:"hangman-mini.html"},
  {id:"typing-test",name:"Typing Test",desc:"Test your typing speed",emoji:"⌨️",url:"typing-test.html"},
  {id:"space-dodge",name:"Space Dodge",desc:"Dodge falling meteors",emoji:"🚀",url:"space-dodge.html"},

  {id:"chess",name:"Chess",desc:"Play chess online",emoji:"♟️",url:"https://www.chess.com/play/online"},
  {id:"agar",name:"Agar.io",desc:"Grow and survive",emoji:"🟢",url:"https://agar.io/"},
  {id:"krunker",name:"Krunker",desc:"Browser FPS",emoji:"🎯",url:"https://krunker.io/"},
  {id:"tetris-online",name:"Tetris Online",desc:"Play Tetris online",emoji:"🧱",url:"https://tetris.com/play-tetris"},

  {id:"snapchat",name:"Snapchat",desc:"Open Snapchat",emoji:"👻",url:"https://www.snapchat.com/"},
  {id:"tiktok",name:"TikTok",desc:"Open TikTok",emoji:"🎵",url:"https://www.tiktok.com/"},

  {id:"target-shooter",name:"Target Shooter",desc:"Hit the targets",emoji:"🎯",url:"target-shooter.html"},
  {id:"paddle-ball",name:"Paddle Ball",desc:"Keep the ball alive",emoji:"🏓",url:"paddle-ball.html"},
  {id:"wall-jump",name:"Wall Jump",desc:"Jump higher and higher",emoji:"🧗",url:"wall-jump.html"},
  {id:"traffic-racer",name:"Traffic Racer",desc:"Dodge the traffic",emoji:"🚦",url:"traffic-racer.html"},
  {id:"space-shooter",name:"Space Shooter",desc:"Blast the aliens",emoji:"🚀",url:"space-shooter.html"},
  {id:"zombie-survival",name:"Zombie Survival",desc:"Survive the wave",emoji:"🧟",url:"zombie-survival.html"},
  {id:"frog-hop",name:"Frog Hop",desc:"Cross the road safely",emoji:"🐸",url:"frog-hop.html"},
  {id:"bird-jump",name:"Bird Jump",desc:"Jump over obstacles",emoji:"🐦",url:"bird-jump.html"},
  {id:"endless-runner",name:"Endless Runner",desc:"Run as far as you can",emoji:"🏃",url:"endless-runner.html"},
  {id:"asteroid-dash",name:"Asteroid Dash",desc:"Dodge space rocks",emoji:"🛸",url:"asteroid-dash.html"},
  {id:"sliding-puzzle",name:"Sliding Puzzle",desc:"Put the tiles in order",emoji:"🧩",url:"sliding-puzzle.html"},
  {id:"connect-dots",name:"Connect Dots",desc:"Follow the number path",emoji:"🔴",url:"connect-dots.html"},
  {id:"color-tap",name:"Color Tap",desc:"Tap the right color",emoji:"🟡",url:"color-tap.html"},
  {id:"balloon-pop",name:"Balloon Pop",desc:"Pop as many balloons as possible",emoji:"🎈",url:"balloon-pop.html"},
  {id:"basketball-shot",name:"Basketball Shot",desc:"Make the shot",emoji:"🏀",url:"basketball-shot.html"},
  {id:"penalty-kick",name:"Penalty Kick",desc:"Score the goal",emoji:"⚽",url:"penalty-kick.html"},
  {id:"punch-trainer",name:"Punch Trainer",desc:"Hit the targets fast",emoji:"🥊",url:"punch-trainer.html"},
  {id:"ninja-dodge",name:"Ninja Dodge",desc:"Dodge incoming objects",emoji:"🥷",url:"ninja-dodge.html"},
  {id:"drift-racer",name:"Drift Racer",desc:"Drift around the track",emoji:"🏎️",url:"drift-racer.html"},
  {id:"train-dodge",name:"Train Dodge",desc:"Avoid the trains",emoji:"🚂",url:"train-dodge.html"},
  {id:"skyfall",name:"Skyfall",desc:"Fall without hitting obstacles",emoji:"🪂",url:"skyfall.html"},
  {id:"ice-breaker",name:"Ice Breaker",desc:"Break the ice blocks",emoji:"🧊",url:"ice-breaker.html"},
  {id:"fire-dodge",name:"Fire Dodge",desc:"Avoid the flames",emoji:"🔥",url:"fire-dodge.html"},
  {id:"water-runner",name:"Water Runner",desc:"Run across the water",emoji:"🌊",url:"water-runner.html"},
  {id:"wizard-battle",name:"Wizard Battle",desc:"Cast spells and win",emoji:"🧙",url:"wizard-battle.html"},
  {id:"monster-attack",name:"Monster Attack",desc:"Defend against monsters",emoji:"👹",url:"monster-attack.html"},
  {id:"alien-blaster",name:"Alien Blaster",desc:"Defeat the alien invasion",emoji:"👾",url:"alien-blaster.html"},
  {id:"castle-defense",name:"Castle Defense",desc:"Protect your castle",emoji:"🏰",url:"castle-defense.html"},
  {id:"gem-match",name:"Gem Match",desc:"Match the gems",emoji:"💎",url:"gem-match.html"},
  {id:"fruit-slice",name:"Fruit Slice",desc:"Slice the fruit",emoji:"🍉",url:"fruit-slice.html"},
  {id:"fish-catch",name:"Fish Catch",desc:"Catch the falling fish",emoji:"🐟",url:"fish-catch.html"},
  {id:"jump-master",name:"Jump Master",desc:"Time your jumps",emoji:"🦘",url:"jump-master.html"},
  {id:"platform-jumper",name:"Platform Jumper",desc:"Climb the platforms",emoji:"🪜",url:"platform-jumper.html"},
  {id:"bowling-mini",name:"Bowling Mini",desc:"Knock down the pins",emoji:"🎳",url:"bowling-mini.html"},
  {id:"hockey-shot",name:"Hockey Shot",desc:"Shoot the puck",emoji:"🏒",url:"hockey-shot.html"},
  {id:"time-trial",name:"Racing Time Trial",desc:"Beat the clock",emoji:"🏁",url:"time-trial.html"},
  {id:"spinner",name:"Lucky Spinner",desc:"Spin for points",emoji:"🌀",url:"spinner.html"},
  {id:"quick-memory",name:"Quick Memory",desc:"Remember the pattern",emoji:"🧠",url:"quick-memory.html"},
  {id:"word-scramble",name:"Word Scramble",desc:"Unscramble the word",emoji:"🔤",url:"word-scramble.html"},
  {id:"color-switch",name:"Color Switch",desc:"Tap when the color matches",emoji:"🌈",url:"color-switch.html"}
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
      <button class="fav" data-fav="${g.id}" title="Favorite">
        ${liked ? "★" : "☆"}
      </button>

      <div class="game-art">
        ${document.body.classList.contains("noemoji") ? "🎮" : g.emoji}
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

    favorites = favorites.includes(id)
      ? favorites.filter(x => x !== id)
      : [...favorites, id];

    save();
    render();
    renderFav();

    toast(
      favorites.includes(id)
        ? "Added to favorites ⭐"
        : "Removed from favorites"
    );
  }
});

const search = document.querySelector("#search");

if (search) {
  search.addEventListener("input", e => {

    const q = e.target.value
      .toLowerCase()
      .trim();

    render(
      games.filter(g =>
        (g.name + " " + g.desc)
          .toLowerCase()
          .includes(q)
      )
    );
  });
}

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

const menuBtn =
  document.querySelector("#menuBtn");

if (menuBtn) {
  menuBtn.onclick = () => {
    document
      .querySelector("#sidebar")
      .classList.toggle("collapsed");
  };
}

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

if (localStorage.getItem("dark") === "0") {
  setDark(false);
}

render();
renderFav();
