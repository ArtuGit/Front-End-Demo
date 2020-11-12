let collapsed = true;

function toggleMobileMenu() {
  document.getElementById("nav").classList.toggle("sm:hidden");
  document.getElementById("background-mobile").classList.toggle("sm:block");
  img = document.querySelector('#hamburger img');
  collapsed = !collapsed;
  if (collapsed) {
    img.setAttribute('src', '../source/images/icon-hamburger.svg');
  } else {
    img.setAttribute('src', '../source/images/icon-close.svg');
  }
}

function listenKeyboard(event) {
  if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") { // "Spacebar" for IE11 support
    toggleMobileMenu();
  }
}

document.getElementById('hamburger').onclick = toggleMobileMenu;
document.getElementById('hamburger').onkeyup = listenKeyboard;

function dummyHandler() {
  alert("This is a dummy handler!");
}
