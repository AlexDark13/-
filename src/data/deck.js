const majorNames = [
  "Шут", "Маг", "Верховная Жрица",
  "Императрица", "Император", "Иерофант",
  "Влюблённые", "Колесница", "Сила",
  "Отшельник", "Колесо Фортуны",
  "Справедливость", "Повешенный",
  "Смерть", "Умеренность", "Дьявол",
  "Башня", "Звезда", "Луна",
  "Солнце", "Суд", "Мир"
];

const suits = [
  "Жезлы", "Кубки", "Мечи", "Пентакли"
];

const ranks = [
  "Туз", "Двойка", "Тройка", "Четвёрка",
  "Пятёрка", "Шестёрка", "Семёрка",
  "Восьмёрка", "Девятка", "Десятка",
  "Паж", "Рыцарь", "Королева", "Король"
];

export const deck = [
  ...majorNames.map((name, number) => ({
    id: "major-" + number,
    name,
    arcana: "major",
    number,
    image: "",
    uprightMeaning: "",
    reversedMeaning: ""
  })),
  ...suits.flatMap(suit =>
    ranks.map((rank, index) => ({
      id: suit + "-" + index,
      name: rank + " — " + suit,
      arcana: "minor",
      suit,
      image: "",
      uprightMeaning: "",
      reversedMeaning: ""
    }))
  )
];
