"use strict";

// service worker registration - remove if you're not going to use it

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker.register("serviceworker.js").then(
      function(registration) {
        // Registration was successful
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      },
      function(err) {
        // registration failed :(
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}

// place your code below

document.cookie = "TestoweCiastko = wartość";
localStorage.setItem("name", "Kuba");
const person = { name: "kuba", war: 1 };
localStorage.setItem("name2", JSON.stringify(person));
console.log(JSON.parse(JSON.stringify(person)));

const button = document.querySelector(".header__button-js");
button.addEventListener("click", e => {
  const header = document.querySelector(".header__title-js");
  header.innerHTML = "LEL";
});

const navigationSwitcher = document.querySelector(".navigation__switcher--js");

navigationSwitcher.addEventListener("click", e => {
  const navigationList = document.querySelector(".navigation__list--js");
  navigationList.classList.toggle("navigation__list--visibility");
});
