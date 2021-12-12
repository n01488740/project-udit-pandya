let stopScroll = false;
let locPosition = 0;

function openHireMeForm() {
  stopScroll = true;
  let element = document.getElementsByClassName(`overlay_container`)[0];
  element.style.display = "flex";
  element.style.top = `${document.documentElement.scrollTop}px`;
  locPosition = document.documentElement.scrollTop;
}

function hideHireMeForm() {
  stopScroll = false;
  document.getElementsByClassName(`overlay_container`)[0].style.display =
    "none";
}

window.onscroll = function () {
  if (stopScroll) {
    window.scrollTo(0, locPosition);
  }
};

function submitForm() {
  let name = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let errorElement = document.getElementsByClassName(`form_error`)[0];
  errorElement.style.display = "none";

  if (name == undefined || name.length == 0) {
    errorElement.innerHTML = "Please enter your Name.";
    errorElement.style.display = "block";
    return;
  }

  if (lname == undefined || lname.length == 0) {
    errorElement.innerHTML = "Please enter your Email.";
    errorElement.style.display = "block";
    return;
  }

  hideHireMeForm();

  setTimeout(() => {
    alert("Thank you! I will contact you soon.");
  }, 1000);
}
