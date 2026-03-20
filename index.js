const highlightedMap = document.querySelectorAll('p > span');
const highlightedStr = [...highlightedMap]
  .map((word) => word.textContent)
  .join(', ');
console.log(highlightedStr);

const insertedList = document.querySelectorAll('.inserted-img > a');
const insertedStr = [...insertedList].map((word) => word.innerHTML).join(', ');
console.log(insertedStr);

const insertedListOuter = document.querySelectorAll('.inserted-img > a');
const insertedStrOuter = [...insertedListOuter]
  .map((word) => word.outerHTML)
  .join(', ');
console.log(insertedStrOuter);

const selectedData = document.getElementById('ancient-beginnings');
console.log(selectedData.lastChild.data);

const authorMetaTag = document.getElementById('author');
const initials = authorMetaTag.getAttribute('content').split(' ');
const authorName = initials[0];
const authorSurname = initials[1];

const navList = document.getElementById('navigation');
const newText = document.createTextNode('Something new');
const newLinkText = document.createElement('li');
const line = document.createElement('hr');
navList.prepend(newText);
newLinkText.textContent = 'Coming soon...';
navList.append(newLinkText);
newLinkText.after(line);
newText.replaceWith(line);
line.remove();

const showAuthor = (name, surname, job = 'developer of the website') => {
  alert(`The ${job} is ${name} ${surname}`);
};

showAuthor(authorName, authorSurname);

const compareStr = (firstStr, secondStr) => {
  let mainStr = firstStr;
  if (secondStr.length > firstStr.length) mainStr = secondStr;
  alert(`String "${mainStr}" is longer`);
};

compareStr(authorName, authorSurname);

const clientDialog = () => {
  const moods = ['great', 'casual', 'bad'];
  const moodsString = moods.join(', ');
  let mood, resultMood;
  while (!resultMood) {
    const startingMood = prompt(
      `What is your mood today: ${moodsString}?`,
      'great',
    );

    if (!startingMood) return;
    mood = startingMood.trim().toLowerCase();

    if (!moods.includes(mood)) {
      alert('Reread the variants of mood');
      continue;
    }
    resultMood = confirm(`Do you really feel ${mood}?`);
  }

  let webpage;
  if (mood === moods[0]) {
    webpage = 'books.html';
  } else if (mood === moods[1]) {
    webpage = 'genres.html';
  } else {
    webpage = 'https://open.spotify.com/';
  }

  alert(`You should visit this webpage: "${webpage}"`);
  let webpageConfirmed = confirm(`Do we visit this webpage: "${webpage}"?`);
  if (webpageConfirmed) {
    location.href = webpage;
  }
};

clientDialog();

document.body.style.background = 'white';

setTimeout(() => {
  document.body.style.backgroundImage = 'url(assets/background.jpg)';
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundRepeat = 'no-repeat';
}, 30000);
