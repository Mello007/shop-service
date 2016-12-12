

function deleteCustomer() {
    var name = $('#dateForDelete').val();
    $.ajax({
        type: "GET",
        url: "/customer/search/deleteByName?name=" + name.replace("/ /g", "%20"),
        contentType: "application/json",
        dataType: 'json'
    });
}

function deleteAll() {
    $.ajax({
        type: 'GET',
        url: "/customer/search/deleteAll/"
    });
}



function addNewCustomer() {
    var name = $('#name').val();
    var sex = $('#sex').val();
    var address = $('#address').val();
    var numberCustomer = $('#numberCustomer').val();
    var studying = $('#studying').val();
    

    var requestJSONparametr = "{\"name\": \"" + name + "\", \"sex\": \"" + sex + "\", \"address\": \"" + address + "\"" +
        ", \"numberCustomer\": \"" + numberCustomer + "\", \"studying\": \"" + studying + "\"}";
    $.ajax({
        type: "POST",
        url: "/customer/",
        contentType: "application/json",
        dataType: 'json',
        data: requestJSONparametr
    });
}




var priceRequest = new XMLHttpRequest();
priceRequest.open("GET", "/customer/", true);   //Указываем адрес GET-запроса
priceRequest.onload = function (){             //Функция которая отправляет запрос на сервер для получения всех студентов
    var parsedItem = JSON.parse(this.responseText);
    var itemsTable = document.getElementById('all-items'); //получаем элемент по Id
    itemsTable.innerHTML = '';      //очищаем таблицу от устаревших данных
    parsedItem._embedded.customer.forEach(function(item)  {
        var itemNameElement = document.createElement('td'); //создаем элемент ячейку с названием для таблицы
        itemNameElement.innerHTML =  item['name'] ;     //внедряем название предмета, полученное с сервера
        var itemPriceElement = document.createElement('td');
        itemPriceElement.innerHTML = item['sex'];
        var priceElement = document.createElement('td');
        priceElement.innerHTML = item['address'];
        var dateOfSale = document.createElement('td');
        dateOfSale.innerHTML = item['numberCustomer'];
        var cityCode = document.createElement('td');
        cityCode.innerHTML = item['studying'];

        var elementRow = document.createElement('tr'); /// /создаем строку таблицы

        elementRow.appendChild(itemNameElement);      //помещаем обе ячейки в строку
        elementRow.appendChild(itemPriceElement);
        elementRow.appendChild(priceElement);
        elementRow.appendChild(dateOfSale);
        elementRow.appendChild(cityCode);
        itemsTable.appendChild(elementRow);           //помещаем строку в таблицу
    });
};

priceRequest.send(null);

$(document).ready(function() {
    $("#all-items-table").tablesorter();
});