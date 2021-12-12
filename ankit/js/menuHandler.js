let isMenuOpen = false;

$("#menu_icon").click(function () {
  toggleMenu();
});

function closeMenu() {
  isMenuOpen = true;
  toggleMenu();
}

function openMenu() {
  isMenuOpen = false;
  toggleMenu();
}

function toggleMenu() {
  console.log(`Is menu open? ${isMenuOpen}`);
  isMenuOpen = !isMenuOpen;
  $("#navbar")
    .children()
    .each(function (index, element) {
      if (index > 0) {
        if (isMenuOpen) {
          $(this).fadeIn();
        } else {
          $(this).fadeOut();
        }
      }
    });
}

$("#menu_portfolio").click(function () {
  console.log("menu_portfolio");
  toggleMenu();
});

function openProfile() {}
function openSkillStack() {}
function openPortfolio() {}
function openHome() {}

var iphoneScreen = window.matchMedia(
  "(min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2)"
);

if (iphoneScreen.matches) {
  closeMenu();
} else {
  openMenu();
}
