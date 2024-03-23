var url = "http://localhost:3300/api/akatsukis";

function postUser() {
    console.log(url);

    var myName = $('#name').val();
    var myImage = $('#imagen').val();
    var myEstado = $('#estado').val();

    var myAkatsuki = {
        name: myName,
        imagen: myImage,
        estado: myEstado
    };

    console.log(myAkatsuki);

    $.ajax({
        url: url,
        type: 'post',
        dataType: 'json',
        contentType: 'application/json', 
        success: function(data){
            console.log(data);
            $('#resultado').html(JSON.stringify(data.akatsuki));
        },
        data: JSON.stringify(myAkatsuki)
    });

}

function getUser() {
    console.log(url);

    $.getJSON(url,
        function (json) {
            console.log(json);

            var arrUsers = json.akatsuki;

            var htmlTableUsers = '<table border = "1"';

            arrUsers.forEach(function(item) {
                console.log(item);
                htmlTableUsers += '<tr>' + 
                                            '<td>' + item.id + '</td>' +
                                            '<td>' + item.name + '</td>' +
                                            '<td> <img src ="' + item.imagen+ '"style = "max-width:150px; max heigth: 150px;"> </td>' +
                                            '<td>' + item.estado + '</td>' +
                                  '</tr>';
            });

            htmlTableUsers += '</table>';

            $('#resultado').html(htmlTableUsers);
        }
    );
}
