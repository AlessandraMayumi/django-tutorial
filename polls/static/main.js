function sendUsername(value="") {
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;

    $.ajax({
        url: 'username/',
        type: "POST",
        dataType: "json",
        data: {payload: value},
        headers: {"X-CSRFToken": csrftoken},
        mode: 'same-origin',
        success: (data) => {
            $('#response_msg').text(data.msg); // Display response message in the paragraph
        },
        error: (error) => {
            console.log(error);
        }
    });
}

$('#username_button').on('click', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior
    var value = $('#username_input').val(); // Get the username value from the input
    sendUsername(value)
});