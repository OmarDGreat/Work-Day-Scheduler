
//Display the current date and time in the header
var currentDateAndTime = moment().format('dddd, MMMM Do');
$('#currentDay').text(currentDateAndTime);


// save on click

$('.saveBtn').on('click', function() {
    
        var text = $(this).siblings('.description').val();
    
        var time = $(this).parent().attr('id');
    
        localStorage.setItem(time, text);
    
    });
