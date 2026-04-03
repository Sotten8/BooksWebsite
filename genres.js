const genreListArray = document.querySelectorAll('.square-list');

function pointerChange(event) {
  if (event.target.tagName === 'SPAN') {
    event.target.style.cursor = 'pointer';
  }
}

function glowingText(event) {
  const target = event.target;
  if (target.tagName !== 'SPAN') return;

  if (target === target.parentElement.firstElementChild) {
    if (target.style.textShadow !== '' && target.style.textShadow !== 'none') {
      target.style.textShadow = 'none';
    } else {
      target.style.textShadow = '0px 0px 20px #e1ff00';
    }
  } else if (target === target.parentElement.lastElementChild) {
    if (target.style.textShadow !== '' && target.style.textShadow !== 'none') {
      target.style.textShadow = 'none';
    } else {
      target.style.textShadow = '0px 0px 20px #ff0000';
    }
  }
}

genreListArray.forEach((genreList) => {
  genreList.addEventListener('mouseover', pointerChange);
  genreList.addEventListener('click', glowingText);
});
