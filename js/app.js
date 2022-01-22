const icons = [
  "fa-instagram",
  "fa-twitter",
  "fa-facebook",
  "fa-telegram",
]


function createIcons(i) {
  const newIcon = document.createElement('i');
  newIcon.classList.add('fab');
  newIcon.classList.add(icons[i]);

  newIcon.style.left = Math.random() * window.innerWidth + "px";
  newIcon.style.animationDuration = Math.random() * 3 + 2 + "s";
  newIcon.style.opacity = Math.random();
  newIcon.style.fontSize = Math.random() * 7 + 10 + "px";
  document.body.append(newIcon);

  setTimeout(() => {
    newIcon.remove();
  }, 4000);
}


function randomIcon() {
  const count = Math.floor(Math.random() * icons.length);
  createIcons(count);
}

setInterval(randomIcon, 40);