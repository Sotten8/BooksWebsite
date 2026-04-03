const menu = document.querySelector('.books-menu');

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

menu.addEventListener('click', buttonSwitcher);
