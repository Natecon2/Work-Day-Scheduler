 $(function () {
  // Function to update the colors of time-blocks based on the current hour
    function updateTimeBlockColors() {
      var currentHour = dayjs().format("H");
 
      $(".time-block").each(function () {
        var timeBlockId = parseInt($(this).attr("id").split("-")[1]);
  
        if (timeBlockId < currentHour) {
          $(this).removeClass("present future").addClass("past");
        } else if (timeBlockId === parseInt(currentHour)) {
          $(this).removeClass("past future").addClass("present");
        } else {
          $(this).removeClass("past present").addClass("future");
        }
      });
    }
  // Function to load saved events from local storage and populate the textareas
    function loadSavedEvents() {
      $(".time-block").each(function () {
        var timeBlockId = $(this).attr("id");
        var userInput = localStorage.getItem(timeBlockId);
  
        if (userInput !== null) {
          $(this).find(".description").val(userInput);
        }
      });
    }
  // Function to save the user input for a time-block in local storage
    function saveEvent() {
      var timeBlockId = $(this).parent().attr("id");
      var userInput = $(this).siblings(".description").val();
  
      localStorage.setItem(timeBlockId, userInput);
    }
  // Function to display the current date in the header
    function displayCurrentDate() {
      var currentDate = dayjs().format("dddd, MMMM D, YYYY");
      $("#currentDay").text(currentDate);
    }
  // Event listener for save buttons
    $(".saveBtn").on("click", saveEvent);
  // Call the functions to initialize the page
    updateTimeBlockColors();
    loadSavedEvents();
    displayCurrentDate();
  });
  const dayjs = require('dayjs')
  
  dayjs().format()