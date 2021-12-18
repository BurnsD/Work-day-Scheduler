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