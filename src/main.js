import { getAvailableSpreads, createReading }
  from "./tarotEngine.js";
import "./style.css";

const app = document.querySelector("#app");
const spreads = getAvailableSpreads();

function home() {
  app.innerHTML = `
    <header>
      <div class="symbol">浪人の道</div>
      <h1>Путь Ронина</h1>
      <p>Авторское японское Таро</p>
    </header>
    <main>
      <h2>Выбери свой путь</h2>
      <div id="spreads"></div>
    </main>
  `;

  const list = document.querySelector("#spreads");
  spreads.forEach(spread => {
    const button = document.createElement("button");
    button.textContent =
      spread.name + " — " + spread.count + " карт";
    button.onclick = () => reading(spread);
    list.appendChild(button);
  });
}

function reading(spread) {
  const result = createReading(spread.id);
  app.innerHTML = "";

  const main = document.createElement("main");
  const title = document.createElement("h2");
  title.textContent = spread.name;
  main.appendChild(title);

  result.cards.forEach(card => {
    const div = document.createElement("div");
    div.className = "card";
    div.textContent = "✿ Нажми, чтобы открыть";
    div.onclick = () => {
      div.textContent =
        card.name + " — " + card.position +
        (card.reversed ? " (перевёрнутая)" : "");
      div.classList.add("opened");
    };
    main.appendChild(div);
  });

  const back = document.createElement("button");
  back.textContent = "Вернуться к раскладам";
  back.onclick = home;
  main.appendChild(back);
  app.appendChild(main);
}

home();
