// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    // Initialize Bootstrap carousel
    var carousel = new bootstrap.Carousel('#timelineSlider');

    // Add any additional JavaScript functionality or event listeners here
});

var cursor = document.querySelector('.blob');


document.addEventListener('DOMContentLoaded', function () {
  var cursor = document.querySelector('.blob');

  document.addEventListener('mousemove', function(e) {
      var x = e.clientX;
      var y = e.clientY;
      cursor.style.transform = `translate(${x - cursor.offsetWidth / 2}px, ${y - cursor.offsetHeight / 2}px)`;
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const floatButtons = document.querySelectorAll('[id^="floatButton"]');

  floatButtons.forEach(button => {
    button.addEventListener('click', function() {
      const buttonId = button.id;
      const listContainerId = `listContainer${buttonId.slice(-1)}`;
      const listContainer = document.getElementById(listContainerId);
      const listItems = document.querySelectorAll(`#list${buttonId.slice(-1)} .list-item`);

      // Toggle list container visibility
      if (listContainer.classList.contains('expanded')) {
        // Fade out each list item
        listItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.remove('visible');
          }, index * 70); // Adjust the delay between items
        });

        // Collapse the list container after all items have faded out
        setTimeout(() => {
          listContainer.classList.remove('expanded');
        }, listItems.length * 70); // Delay matches the duration of fading out
      } else {
        // Expand the list container
        listContainer.classList.add('expanded');

        // Fade in each list item one by one
        listItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('visible');
          }, index * 200); // Adjust the delay between items
        });
      }
    });
  });
});

// script.js
let currentSide = 'front';  // Start with the front side
let isFirstFlip = true; // Track if it's the first flip

function showJob(job) {
    const card = document.querySelector('.flashcard');
    const frontSideElement = card.querySelector('.front');
    const backSideElement = card.querySelector('.back');

    // Set job information based on the selected job
    const jobDescriptions = {
        '1': '<h3>My Tech Support Service</h3></br><p>I started a service that helps people in my city get connected, installing wifi, printers, setting up new devices and solving a miriad of other tech issues </p>',
        '2': '<h3>Second Job Title</h3><p>Details about the second job...</p>',
        '3': '<h3>Third Job Title</h3><p>Details about the third job...</p>',
    };

    // Update the content for both sides
    if (isFirstFlip) {
        backSideElement.innerHTML = jobDescriptions[job];
        frontSideElement.innerHTML = '<p>Select a job to see details.</p>';
        card.classList.add('flipped');
        currentSide = 'back';
        isFirstFlip = false; // Set to false after the first flip
    } else {
        if (currentSide === 'front') {
            backSideElement.innerHTML = jobDescriptions[job];
            //frontSideElement.innerHTML = ''; // Clear the back side content
            card.classList.add('flipped');
            currentSide = 'back';
        } else {
            frontSideElement.innerHTML = jobDescriptions[job];
            //backSideElement.innerHTML = ''; // Clear the back side content
            card.classList.remove('flipped');
            currentSide = 'front';
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const radioButtons = document.querySelectorAll('[name="listGroupCheckableRadios"]');
    radioButtons.forEach((radio) => {
        radio.addEventListener('change', function () {
            showJob(this.value);
        });
    });
});
