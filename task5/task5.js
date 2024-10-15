const div = document.querySelector("div");

const horoscop = [
  "An unexpected encounter will lead to a new friendship.",

  "Your creativity will shine and inspire those around you.",

  "A challenge at work will reveal your hidden strengths.",

  "Today is a good day to reconnect with an old friend.",

  "An exciting opportunity is on the horizon; stay alert.",

  "A small act of kindness will have a big impact.",

  "Trust your intuition; it's leading you in the right direction.",

  "Your hard work will soon pay off in a surprising way.",

  "A relaxing evening with loved ones will recharge your spirit.",

  "Adventure calls—say yes to new experiences.",
];

function displayHoroscop() {
  localStorage.setItem('horoscope',JSON.stringify(horoscop));
  const HoroscopArrray = JSON.parse(localStorage.getItem('horoscope'));
  div.innerHTML = HoroscopArrray[Math.floor(Math.random() * HoroscopArrray.length)];
};

displayHoroscop();