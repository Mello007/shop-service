

function deleteOrder() {
    var name = $('#dateForDelete').val();
    $.ajax({
        type: "GET",
        url: "/userorder/search/deleteByDate?date=" + name.replace("/ /g", "%20"),
        contentType: "application/json",
        dataType: 'json'
    });
}

function deleteAll() {
    $.ajax({
        type: 'GET',
        url: "/userorder/search/deleteAll/"
    });
}



function addNewOrder() {
    var price = $('#price').val();
    var paymentMethod = $('#paymentMethod').val();
    var date = $('#date').val();
    var number = $('#number').val();
    var cityCode = $('#cityCode').val();
    var numberOfReportsCard = $('#numberOfReportsCard').val();
    

    var requestJSONparametr = "{\"price\": \"" + price + "\", \"paymentMethod\": \"" + paymentMethod + "\", \"date\": \"" + date + "\"" +
        ", \"number\": \"" + number + "\", \"cityCode\": \"" + cityCode + "\" , \"numberOfReportsCard\": \"" + numberOfReportsCard + "\"}";
    $.ajax({
        type: "POST",
        url: "/userorder/",
        contentType: "application/json",
        dataType: 'json',
        data: requestJSONparametr
    });
}




var priceRequest = new XMLHttpRequest();
priceRequest.open("GET", "/userorder/", true);   //Указываем адрес GET-запроса
priceRequest.onload = function (){             //Функция которая отправляет запрос на сервер для получения всех студентов
    var parsedItem = JSON.parse(this.responseText);
    var itemsTable = document.getElementById('all-items'); //получаем элемент по Id
    itemsTable.innerHTML = '';      //очищаем таблицу от устаревших данных
    parsedItem._embedded.userorder.forEach(function(item)  {
        var itemNameElement = document.createElement('td'); //создаем элемент ячейку с названием для таблицы
        itemNameElement.innerHTML =  item['price'] ;     //внедряем название предмета, полученное с сервера
        var itemPriceElement = document.createElement('td');
        itemPriceElement.innerHTML = item['paymentMethod'];
        var priceElement = document.createElement('td');
        priceElement.innerHTML = item['date'];
        var dateOfSale = document.createElement('td');
        dateOfSale.innerHTML = item['number'];
        var cityCode = document.createElement('td');
        cityCode.innerHTML = item['cityCode'];
        var numberOfReportsCard = document.createElement('td');
        numberOfReportsCard.innerHTML = item['numberOfReportsCard'];
        
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