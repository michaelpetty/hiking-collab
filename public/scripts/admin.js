console.log("Sanity Check: JS is working!");

// var $subscribersList;
// var allSubscribers = [];

$(document).ready(function(){

    // $subscribersList = $('#subscribersTarget');
    $('#getResult').on('click', function(e) {
        console.log('click get data yay!!!!!');
        e.preventDefault();
    $.ajax({
        method: 'GET',
        url: 'api/subscribers',
        success: handleSuccess,
        error: handleError
    });

    });

//-------------- search-------------
    $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

});

    function handleSuccess(subscriber) {
        subscriber.forEach(subscriber =>{
            $('#subscribersTarget').append('<p> Full Name: '+ subscriber.firstName + '</p>')
            $('#subscribersTarget').append('<p> Last Name: '+ subscriber.lastName + '</p>')
            $('#subscribersTarget').append('<p> Email: '+ subscriber.email + '</p>')
            $('#subscribersTarget').append('<p> News1: '+ subscriber.news1 + '</p>')
            $('#subscribersTarget').append('<p> News2: '+ subscriber.news2 + '</p>')
            $('#subscribersTarget').append('<p> News3: '+ subscriber.news3 + '</p>')

        })
        }



    // function getSubscriberHtml(subscriber) {
    // return `<hr>
    //         <p>
    //             <b>${subscriber.firstName}</b>
    //             <b>${subscriber.lastName}</b>
    //             by ${subscriber.email}
    //             by ${subscriber.news1}
    //             by ${subscriber.news2}
    //             by ${subscriber.news3}
    //         </p>`;
    // }



    function handleError(e) {
    console.log('uh oh');
    $('#subscriberTarget').text('Failed to load subscribers, is the server working?');
    }




