var today = moment().format('LLLL');
// Displays current date to top of the page
$("#currentDay").html(today);
// -- TIMEBLOCKS --
function background () {
    var currentHr = moment().hours();
    // Loop for Timeblocks
    $(".time-block").each(function () {
        var timeBlockId = parseInt($(this).attr("id"));
        // Changes background color according to current time
        if (timeBlockId < currentHr) {
            $(this).addClass("past");
        } else if (timeBlockId === currentHr) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
 }

 background ();
// -- Local Storage --
 $(document).ready(function () {
    // Button saves upon being clicked
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        // Saves text and time to local storage
        localStorage.setItem(time, text);
    })  
}); 
// Gets description data from local storage
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));