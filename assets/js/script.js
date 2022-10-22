


var currentDateAndTime = moment().format('MMMM Do YYYY, h:mm: a');

$('#currentDay').text(currentDateAndTime);


// save on click

$('.saveBtn').on('click', function() {
    
        var text = $(this).siblings('.description').val();
    
        var time = $(this).parent().attr('id');
    
        localStorage.setItem(time, text);
    
    });
    