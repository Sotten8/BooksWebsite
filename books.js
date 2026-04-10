const menu = document.querySelector('.books-menu');

function styleAddingOver(event) {
  const button = event.target.closest('button');
  if (!button) return;
  if (button.contains(event.relatedTarget)) return;

  clearTimeout(button.timer);

  button.style.backgroundColor = '#b49d52';
  button.style.border = '2px solid #aa00ff';
}

function styleTakingOut(event) {
  const button = event.target.closest('button');
  if (!button) return;

  if (!button.contains(event.relatedTarget)) {
    button.style.backgroundColor = '#00c389';
    button.style.transform = 'scale(1)';
    button.style.color = '#000';
    button.style.border = '2px solid #f6ff00';

    clearTimeout(button.timer);
    button.timer = setTimeout(() => {
      button.style.border = 'none';
    }, 1500);
  }
}

function styleAddingDown(event) {
  const button = event.target.closest('button');
  if (!button) return;
  button.style.transform = 'scale(0.95)';
  button.style.color = '#ffd500';
}

function styleTakingUp(event) {
  const button = event.target.closest('button');
  if (!button) return;
  button.style.transform = 'scale(1)';
  button.style.color = '#000';
}

function buttonSwitcher(event) {
  const button = event.target;
  const reason = button.dataset.reason;

  if (!reason) return;

  switch (reason) {
    case 'read':
      let check = confirm(
        'To read the next book you have to leave this website. Do you want to do it?',
      );
      if (check) {
        location.href =
          'https://www.hasanboy.uz/wp-content/uploads/2018/04/Harry-Potter-and-the-Chamber-of-Secrets.pdf';
      }
      break;
    case 'like':
      const bookTitle = document.getElementById('harry-potter');
      if (button.textContent === 'Add to Favorites') {
        bookTitle.style.color = '#de3163';
        bookTitle.innerHTML = `${bookTitle.textContent} &#10084;`;
        button.textContent = 'Delete from Favorites';
      } else {
        bookTitle.style.color = '#000';
        bookTitle.innerHTML = bookTitle.innerHTML.replace(' ❤', '');
        button.textContent = 'Add to Favorites';
      }
      break;
    case 'interesting-fact':
      const fact = document.querySelector('.interesting-fact');
      fact.hidden = !fact.hidden;

      button.textContent = fact.hidden ? 'Show a Fact' : 'Hide a Fact';
      break;
  }
}

menu.addEventListener('mouseover', styleAddingOver);
menu.addEventListener('mouseout', styleTakingOut);
menu.addEventListener('mousedown', styleAddingDown);
menu.addEventListener('mouseup', styleTakingUp);
menu.addEventListener('click', buttonSwitcher);

const booksSubtitle = document.getElementById('books-subtitle');

function subtitleMouseDragstart() {
  return false;
}

function subtitleMouseDown(event) {
  booksSubtitle.style.position = 'absolute';
  booksSubtitle.style.zIndex = 1000;

  function moveCoords(coordX, coordY) {
    booksSubtitle.style.left = `${coordX - booksSubtitle.offsetWidth / 2}px`;
    booksSubtitle.style.top = `${coordY - booksSubtitle.offsetHeight / 2}px`;
  }

  function subtitleMouseMove(event) {
    moveCoords(event.pageX, event.pageY);
  }

  function subtitleMouseUp() {
    document.removeEventListener('mousemove', subtitleMouseMove);
    document.removeEventListener('mouseup', subtitleMouseUp);
  }

  moveCoords(event.pageX, event.pageY);
  document.body.append(booksSubtitle);

  document.addEventListener('mousemove', subtitleMouseMove);

  document.addEventListener('mouseup', subtitleMouseUp);
}

booksSubtitle.addEventListener('dragstart', subtitleMouseDragstart);
booksSubtitle.addEventListener('mousedown', subtitleMouseDown);
