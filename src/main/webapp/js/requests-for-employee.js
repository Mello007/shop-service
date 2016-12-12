
var currency = '';
$(document).ready(function() {
    $('.dropdown-menu-kind li a').click(function(){
        currency = $(this).data('val');
    })
});

function deleteEmployee() {
    var name = $('#nameForDelete').val();
    $.ajax({
        type: "GET",
        url: "/employee/search/deleteByName?name=" + name.replace("/ /g", "%20"),
        contentType: "application/json",
        dataType: 'json'
    });
}

function deleteAll() {
    $.ajax({
        type: 'GET',
        url: "/employee/search/deleteAll/"
    });
}

function addNewEmployee() {
    var name = $('#name').val();
    var numberPhone = $('#numberPhone').val();
    var fax = $('#fax').val();
    var eMail = $('#eMail').val();

    var requestJSONparametr = "{\"mail\": \"" + eMail + "\", \"fax\": \"" + fax + "\", \"name\": \"" + name + "\"" +
        ", \"numberPhone\": \"" + numberPhone + "\"}";
    $.ajax({
        type: "POST",
        url: "/employee/",
        contentType: "application/json",
        dataType: 'json',
        data: requestJSONparametr
    });
}




var priceRequest = new XMLHttpRequest();
priceRequest.open("GET", "/employee/", true);   //Указываем адрес GET-запроса
priceRequest.onload = function (){             //Функция которая отправляет запрос на сервер для получения всех студентов
    var parsedItem = JSON.parse(this.responseText);
    var itemsTable = document.getElementById('all-items'); //получаем элемент по Id
    itemsTable.innerHTML = '';      //очищаем таблицу от устаревших данных
    parsedItem._embedded.employee.forEach(function(item)  {
        var itemNameElement = document.createElement('td'); //создаем элемент ячейку с названием для таблицы
        itemNameElement.innerHTML =  item['name'] ;     //внедряем название предмета, полученное с сервера
        var itemPriceElement = document.createElement('td');
        itemPriceElement.innerHTML = item['numberPhone'];
        var priceElement = document.createElement('td');
        priceElement.innerHTML = item['fax'];
        var dateOfSale = document.createElement('td');
        dateOfSale.innerHTML = item['mail'];


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