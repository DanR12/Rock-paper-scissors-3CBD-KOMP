let score = 0; // Змінна для зберігання рахунку

function playGame(userChoice) {
  const choices = ['Камінь', 'Ножиці', 'Папір'];
  const icons = {
    'Камінь': 'fa-hand-rock',
    'Ножиці': 'fa-hand-scissors',
    'Папір': 'fa-hand-paper'
  };
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Іконоки
  document.getElementById('userIcon').className = `icon user fas ${icons[userChoice]}`;
  document.getElementById('computerIcon').className = `icon computer fas ${icons[computerChoice]}`;

  let result = '';
  let status = '';
  let specialMessage = '';

  if (userChoice === computerChoice) {
    result = `Нічия! Ви обрали ${userChoice}, а комп'ютер обрав ${computerChoice}.`;
    status = 'ЗІГРАЙМО ЩЕ РАЗ!?';
  } else if (
    (userChoice === 'Камінь' && computerChoice === 'Ножиці') ||
    (userChoice === 'Ножиці' && computerChoice === 'Папір') ||
    (userChoice === 'Папір' && computerChoice === 'Камінь')
  ) {
    result = `Ви перемогли! Ви обрали ${userChoice}, а комп'ютер обрав ${computerChoice}.`;
    status = 'Ура я розумніший за компютер!';
    score += 1; 
  } else {
    result = `Ви програли. Ви обрали ${userChoice}, а комп'ютер обрав ${computerChoice}.`;
    status = 'ХА-ХА-Ха! Я розумніший за тебе в мене памяті. Ха! 6 Кілабайт!';
    score -= 1; 
  }

  // Перевіряю на спец меседжи
  if (score === 5) {
    specialMessage = 'Ого, Навіщо ти потратив пів хвилини на затикування рандомних кнопок!';
  } else if (score === -5) {
    specialMessage = 'Мда! І таке буває';
  }
  if (score === 10) {
    specialMessage = 'Нічого собі ти визичий. Іди краще зроби щось корисне аніж тикати одну й ту саму кнопу в надії на зміну';
  } else if (score === -10) {
    specialMessage = 'Ти знаєш що таке "Безглуглудя"?';
  }
  if (score === 20) {
    specialMessage = 'Молодець! А тепер... Ну незнаю... Іди вимкни компютер?';
  } else if (score === -20) {
    specialMessage = 'Я завжди находив фул і в цей раз я найду фулл! Я ВІДПОВІДАЮ! Я ЗАВЖДИ НАХОДЖУ ФУЛЛ, ААААААА!';
  }
  if (score === -21) {
    specialMessage = 'ФУЛЛ ЗАВЖДИ Є!!!!';
  } else if (score === -22) {
    specialMessage = 'УРААА Я НАШОВ ФУЛЛ!!! href=https://youtu.be/XEjLoHdbVeE?t=70';
  }
  // Оновлення результатів
  document.getElementById('result').innerText = result;
  document.getElementById('status').innerText = status;
  document.getElementById('score').innerText = `Рахунок: ${score}`;
  
  // Якщо повідомлення існує, вивести його
  if (specialMessage) {
    document.getElementById('specialMessage').innerText = specialMessage;
  } else {
    document.getElementById('specialMessage').innerText = ''; // Очистити, якщо повідомлення немає
  }
}