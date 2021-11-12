// Christmas Coundown 2021
var christmasDate = new Date("Dec 25, 2021 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

// Get today's date and time
var rightNow = new Date().getTime();

// Find the amount of time between rightNow and ChristmasDate.
var time = christmasDate - rightNow;

// Time calculations for days, hours, minutes and seconds
var days = Math.floor(time / (1000 * 60 * 60 * 24));
var hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

document.getElementById("countdown").innerHTML = days + " Days " + hours + " Hours " + minutes + " Minutes ";

// When the countdown finishes shows and assortment of Christmas tropes.
if (distance < 0) {
    clearInterval(x);
    document.getElementById("weeks").innerHTML = "There's only 365 days till next Christmas";
    document.getElementById("days").innerHTML = "Last Christmas I gave you my heart but the very next day you gave it away.";
    document.getElementById("hours").innerHTML = "Here's hoping you got that Hippotamus. ";
  }
}, 1000);