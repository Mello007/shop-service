

function deleteDelivery() {
    var name = $('#numberOfDeliveryForDelete').val();
    $.ajax({
        type: "GET",
        url: "/delivery/search/deleteByNumberOfDelivery?numberOfDelivery=" + name.replace("/ /g", "%20"),
        contentType: "application/json",
        dataType: 'json'
    });
}

function deleteAll() {
    $.ajax({
        type: 'GET',
        url: "/delivery/search/deleteAll/"
    });
}



function addNewDelivery() {
    var numberOfDelivery = $('#numberOfDelivery').val();
    var date = $('#date').val();
    var time = $('#time').val();
    var price = $('#price').val();
    var numberOfTable = $('#numberOfTable').val();
    var kindOfDelivery = $('#kindOfDelivery').val();


    var requestJSONparametr = "{\"numberOfDelivery\": \"" + numberOfDelivery + "\", \"time\": \"" + time + "\", \"time\": \"" + time + "\"" +
        ", \"price\": \"" + price + "\", \"numberOfTable\": \"" + numberOfTable + "\" , \"kindOfDelivery\": \"" + kindOfDelivery + "\"}";
    $.ajax({
        type: "POST",
        url: "/userorder/",
        contentType: "application/json",
        dataType: 'json',
        data: requestJSONparametr
    });
}




var priceRequest = new XMLHttpRequest();
priceRequest.open("GET", "/delivery/", true);   //Указываем адрес GET-запроса
priceRequest.onload = function (){             //Функция которая отправляет запрос на сервер для получения всех студентов
    var parsedItem = JSON.parse(this.responseText);
    var itemsTable = document.getElementById('all-items'); //получаем элемент по Id
    itemsTable.innerHTML = '';      //очищаем таблицу от устаревших данных
    parsedItem._embedded.delivery.forEach(function(item)  {
        var itemNameElement = document.createElement('td'); //создаем элемент ячейку с названием для таблицы
        itemNameElement.innerHTML =  item['numberOfDelivery'] ;     //внедряем название предмета, полученное с сервера
        var itemPriceElement = document.createElement('td');
        itemPriceElement.innerHTML = item['date'];
        var priceElement = document.createElement('td');
        priceElement.innerHTML = item['time'];
        var dateOfSale = document.createElement('td');
        dateOfSale.innerHTML = item['price'];
        var cityCode = document.createElement('td');
        cityCode.innerHTML = item['numberOfTable'];
        var numberOfReportsCard = document.createElement('td');
        numberOfReportsCard.innerHTML = item['kindOfDelivery'];

        var elementRow = document.createElement('tr'); /// /создаем строку таблицы

        elementRow.appendChild(itemNameElement);      //помещаем обе ячейки в строку
        elementRow.appendChild(itemPriceElement);
        elementRow.appendChild(priceElement);
        elementRow.appendChild(dateOfSale);
        elementRow.appendChild(cityCode);
        elementRow.appendChild(numberOfReportsCard);
        itemsTable.appendChild(elementRow);           //помещаем строку в таблицу
    });

};

priceRequest.send(null);

$(document).ready(function() {
    $("#all-items-table").tablesorter();
});