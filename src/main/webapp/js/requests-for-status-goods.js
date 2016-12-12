

function deleteStatusGoods() {
    var headForDelete = $('#numberForDelete').val();
    $.ajax({
        type: "GET",
        url: "/statusgoods/search/deleteByNumber?number=" + headForDelete.replace("/ /g", "%20"),
        contentType: "application/json",
        dataType: 'json'
    });
}

function deleteAll() {
    $.ajax({
        type: 'GET',
        url: "/statusgoods/search/deleteAll/"
    });
}

function addNewStatusGoods() {
    var number = $('#number').val();
    var estimate = $('#estimate').val();
    var status = $('#status').val();
    var requestJSONparametr = "{\"number\": \"" + number + "\", \"estimate\": \"" + estimate + "\", \"status\": \"" + status + "\"}";
    $.ajax({
        type: "POST",
        url: "/statusgoods/add",
        contentType: "application/json",
        dataType: 'json',
        data: requestJSONparametr
    });
}


function getStatusGoods() {
    var priceRequest = new XMLHttpRequest();
    priceRequest.open("GET", "/statusgoods/", true);   //Указываем адрес GET-запроса
    priceRequest.onload = function (){             //Функция которая отправляет запрос на сервер для получения всех студентов
        var parsedItem = JSON.parse(this.responseText);
        var itemsTable = document.getElementById('all-clients'); //получаем элемент по Id
        itemsTable.innerHTML = '';      //очищаем таблицу от устаревших данных
        parsedItem._embedded.statusgoods.forEach(function(item)  {
            var itemNameElement = document.createElement('td'); //создаем элемент ячейку с названием для таблицы
            itemNameElement.innerHTML =  item['number'] ;     //внедряем название предмета, полученное с сервера
            var itemPriceElement = document.createElement('td');
            itemPriceElement.innerHTML = item['estimate'];
            var status = document.createElement('td');
            status.innerHTML = item['status'];
            var elementRow = document.createElement('tr'); /// /создаем строку таблицы
            elementRow.appendChild(itemNameElement);      //помещаем обе ячейки в строку
            elementRow.appendChild(itemPriceElement);
            elementRow.appendChild(status);
            itemsTable.appendChild(elementRow);           //помещаем строку в таблицу
        });
    };
    priceRequest.send(null);
    $("#all-clients").tablesorter();
}

$(document).ready(function() {
    getStatusGoods();
});