 $(function () {
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
  
    function loadSavedEvents() {
      $(".time-block").each(function () {
        var timeBlockId = $(this).attr("id");
        var userInput = localStorage.getItem(timeBlockId);
  
        if (userInput !== null) {
          $(this).find(".description").val(userInput);
        }
      });
    }
  
    function saveEvent() {
      var timeBlockId = $(this).parent().attr("id");
      var userInput = $(this).siblings(".description").val();
  
      localStorage.setItem(timeBlockId, userInput);
    }
  
    function displayCurrentDate() {
      var currentDate = dayjs().format("dddd, MMMM D, YYYY");
      $("#currentDay").text(currentDate);
    }
  
    $(".saveBtn").on("click", saveEvent);
  
    updateTimeBlockColors();
    loadSavedEvents();
    displayCurrentDate();
  });
