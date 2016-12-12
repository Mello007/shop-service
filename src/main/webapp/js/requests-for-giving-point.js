

function deleteGivingPoint() {
    var name = $('#nameForDelete').val();
    $.ajax({
        type: "GET",
        url: "/givingpoint/search/deleteByName?name=" + name.replace("/ /g", "%20"),
        contentType: "application/json",
        dataType: 'json'
    });
}

function deleteAll() {
    $.ajax({
        type: 'GET',
        url: "/givingpoint/search/deleteAll/"
    });
}

function addNewGivingPoint() {
    var name = $('#name').val();
    var address = $('#address').val();
    var time = $('#time').val();
    var region = $('#region').val();
   

    var requestJSONparametr = "{\"name\": \"" + name + "\", \"address\": \"" + address + "\", \"time\": \"" + time + "\"" +
        ", \"region\": \"" + region + "\"}";
    $.ajax({
        type: "POST",
        url: "/givingpoint/",
        contentType: "application/json",
        dataType: 'json',
        data: requestJSONparametr
    });
}




var priceRequest = new XMLHttpRequest();
priceRequest.open("GET", "/givingpoint/", true);   //Указываем адрес GET-запроса
priceRequest.onload = function (){             //Функция которая отправляет запрос на сервер для получения всех студентов
    var parsedItem = JSON.parse(this.responseText);
    var itemsTable = document.getElementById('all-items'); //получаем элемент по Id
    itemsTable.innerHTML = '';      //очищаем таблицу от устаревших данных
    parsedItem._embedded.givingpoint.forEach(function(item)  {
        var itemNameElement = document.createElement('td'); //создаем элемент ячейку с названием для таблицы
        itemNameElement.innerHTML =  item['name'] ;     //внедряем название предмета, полученное с сервера
        var itemPriceElement = document.createElement('td');
        itemPriceElement.innerHTML = item['address'];
        var priceElement = document.createElement('td');
        priceElement.innerHTML = item['time'];
        var dateOfSale = document.createElement('td');
        dateOfSale.innerHTML = item['region'];


        var elementRow = document.createElement('tr'); /// /создаем строку таблицы

        elementRow.appendChild(itemNameElement);      //помещаем обе ячейки в строку
        elementRow.appendChild(itemPriceElement);
        elementRow.appendChild(priceElement);
        elementRow.appendChild(dateOfSale);
        itemsTable.appendChild(elementRow);           //помещаем строку в таблицу
    });

};

priceRequest.send(null);

$(document).ready(function() {
    $("#all-items-table").tablesorter();
});