

function deleteGivingCity() {
    var name = $('#nameForDelete').val();
    $.ajax({
        type: "GET",
        url: "/givingcity/search/deleteByName?name=" + name.replace("/ /g", "%20"),
        contentType: "application/json",
        dataType: 'json'
    });
}

function deleteAll() {
    $.ajax({
        type: 'GET',
        url: "/givingcity/search/deleteAll/"
    });
}

function addNewGivingCity() {
    var name = $('#name').val();
    var region = $('#region').val();
    var number = $('#number').val();
    var requestJSONparametr = "{\"name\": \"" + name + "\", \"region\": \"" + region + "\", \"number\": \"" + number + "\"" +
        "}";
    $.ajax({
        type: "POST",
        url: "/givingcity/",
        contentType: "application/json",
        dataType: 'json',
        data: requestJSONparametr
    });
}


var priceRequest = new XMLHttpRequest();
priceRequest.open("GET", "/givingcity/", true);   //Указываем адрес GET-запроса
priceRequest.onload = function (){             //Функция которая отправляет запрос на сервер для получения всех студентов
    var parsedItem = JSON.parse(this.responseText);
    var itemsTable = document.getElementById('all-items'); //получаем элемент по Id
    itemsTable.innerHTML = '';      //очищаем таблицу от устаревших данных
    parsedItem._embedded.givingcity.forEach(function(item)  {
        var itemNameElement = document.createElement('td'); //создаем элемент ячейку с названием для таблицы
        itemNameElement.innerHTML =  item['name'] ;     //внедряем название предмета, полученное с сервера
        var itemPriceElement = document.createElement('td');
        itemPriceElement.innerHTML = item['region'];
        var priceElement = document.createElement('td');
        priceElement.innerHTML = item['number'];

        var elementRow = document.createElement('tr'); /// /создаем строку таблицы
        elementRow.appendChild(itemNameElement);      //помещаем обе ячейки в строку
        elementRow.appendChild(itemPriceElement);
        elementRow.appendChild(priceElement);
        itemsTable.appendChild(elementRow);           //помещаем строку в таблицу
    });

};

priceRequest.send(null);

$(document).ready(function() {
    $("#all-items-table").tablesorter();
});