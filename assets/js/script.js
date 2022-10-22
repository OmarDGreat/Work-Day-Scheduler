
//Display the current date and time in the header
var currentDateAndTime = moment().format('dddd, MMMM Do');
$('#currentDay').text(currentDateAndTime);


$(document).ready(function () {
// save on click
$('.saveBtn').on('click', function() {
        // get nearby values
        var text = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');
        // save text in local storage
        localStorage.setItem(time, text);
    
    });


    //Track the current time
    function trackTime() {
        //get current number of hours
        var timeNow = moment().hour();
        console.log(timeNow);

        // loop over time blocks
        $('.time-block').each(function() {
            var blockTime = parseInt($(this).attr('id').split('hour')[1]);
            console.log(blockTime, timeNow)

            // check if we've moved past this time
            if (blockTime < timeNow) {
                $(this).addClass('past');
                $(this).removeClass('present');
                $(this).removeClass('future');
            } else if (blockTime === timeNow) {
                $(this).removeClass('past');
                $(this).addClass('present');
                $(this).removeClass('future');
            } else {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
            }
        })
    }

    // Get item from local storage if any
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    trackTime();
})