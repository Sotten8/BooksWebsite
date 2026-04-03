function alertQuote(img) {
  let quote;
  switch (img.alt) {
    case 'Shakespeare':
      quote = 'Brevity is the soul of wit.';
      break;
    case 'Christie':
      quote = 'To trust is good, but not to trust is better.';
      break;
    case 'Hemingway':
      quote = 'Courage is grace under pressure.';
      break;
    default:
      quote = "Anything's possible if you've got enough nerve.";
      break;
  }
  alert(quote);
}

function changeStyle() {
  this.style.fontSize = '30px';
  this.style.color = '#7f0096';
  this.style.cursor = 'pointer';
}

function logTheResult() {
  console.log('The caption changed its style!');
}

function pointerChange() {
  this.style.cursor = 'pointer';
}

const eventObject = {
  handleEvent(event) {
    alert(
      `${event.currentTarget.innerHTML}: you found author's initials on authors page in the first minute. Congratulations!`,
    );
  },
};

const nameRowling = document.getElementById('name-rowling');
const tableCaption = document.getElementById('caption');
const footerCaption = document.getElementById('footer-authors');

nameRowling.onclick = alertQuote;

tableCaption.addEventListener('mouseover', changeStyle);
tableCaption.addEventListener('mouseover', logTheResult);

footerCaption.addEventListener('mouseover', pointerChange);
footerCaption.addEventListener('click', eventObject);

setTimeout(() => {
  footerCaption.removeEventListener('click', eventObject);
}, 60000);
