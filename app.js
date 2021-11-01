// 1a. Select the 1st button element and set it to a const variable called button1
const button1 = document.querySelector(`#one`);
// 1b. Using the ONCLICK event property, have an alert that says "Cool! You can hear/understand a hummingbird and ants" pop up when you click on the button
button1.onclick = () => {
  alert(`Cool! You can hear/understand a hummingbird and ants`);
};

// 2a. Select the h3 and set it to a const variable called h3
const h3 = document.querySelector(`h3`);

// 2b. Using addEventListener, have an alert that says "OH NO! The squirrels are on to you. Now you have to leave this reality and move to a new one" pop up when you hover over the h3
h3.addEventListener(`mouseenter`, () => {
  alert(
    `OH NO! The squirrels are on to you. Now you have to leave this reality and move to a new one`
  );
});

// 3a. Select the form element/tag and set it to a const variable called form
const form = document.querySelector(`form`);
console.dir(form);

// 3b. Using addEventListener, display the value in the text input with an alert when the submit input in the form is pressed
form.addEventListener(`submit`, () => {
  alert(form[0].value);
});

// Bonus
// 4a. Select the Dark Mode button and set it to a const variable called darkMode
const darkMode = document.querySelector(`#dm`);

// 4b. Using addEventListener, TOGGLE the "dark-mode" CSS class On/Off for EVERY element when the Dark Mode Button is clicked (HINT: You will need to use the asterisk "*" selector as well as a loop)
darkMode.addEventListener(`click`, () => {
  const testing = document.querySelectorAll(`*`);
  for (el of testing) {
    el.classList.toggle(`dark-mode`);

    if (darkMode.innerText == `DARK MODE`) {
      darkMode.innerText = `LIGHT MODE`;
    } else if (darkMode.innerText == `LIGHT MODE`) {
      darkMode.innerText = `DARK MODE`;
    }
  }
});

// 5a. Select the "MOVE TO ANOTHER REALITY" button and set it to a const variable called reality
const reality = document.querySelector(`#reality`);

// 5b. Using addEventListener, have an alert that says "You have successfully moved to another reality" pop up when you click on the button. However, have this setup so that when the button is clicked a third time have the following alert display instead of the "You have successfully moved to another reality" alert. New alert "OH NO! You can only move to a new another reality a couple times. You are stuck in this reality!". And finally, when the button is clicked a fourth, fifth, sixth, etc. time have it do nothing (AKA Disable the button).
let realityLvl = 0;

reality.addEventListener(`click`, () => {
  if (realityLvl < 2) {
    alert(`You have successfully moved to another reality`);
    realityLvl++;
  } else if (realityLvl == 2) {
    alert(
      `OH NO! You can only move to a new another reality a couple times. You are stuck in this reality!`
    );
    realityLvl++;
  } else {
  }
});
