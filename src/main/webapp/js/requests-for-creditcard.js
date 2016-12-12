
var currency = '';
$(document).ready(function() {
    $('.dropdown-menu-kind li a').click(function(){
        currency = $(this).data('val');
    })
});

function deleteCreditCard() {
    var headForDelete = $('#ownerNameForDelete').val();
    $.ajax({
        type: "GET",
        url: "/creditcard/search/deleteByOwnerName?ownerName=" + headForDelete.replace("/ /g", "%20"),
        contentType: "application/json",
        dataType: 'json'
    });
}

function deleteAll() {
    $.ajax({
        type: 'GET',
        url: "/creditcard/search/deleteAll/"
    });
}

function addNewCreditCard() {
    var ownerName = $('#ownerName').val();
    var code = $('#code').val();
    var number = $('#number').val();
    var requestJSONparametr = "{\"ownerName\": \"" + ownerName + "\", \"code\": \"" + code + "\", \"number\": \"" + number + "\"}";
    $.ajax({
        type: "POST",
        url: "/creditcard/add",
        contentType: "application/json",
        dataType: 'json',
        data: requestJSONparametr
    });
}


function getCreditCards() {
    var priceRequest = new XMLHttpRequest();
    priceRequest.open("GET", "/creditcard/", true);   //Указываем адрес GET-запроса
    priceRequest.onload = function (){             //Функция которая отправляет запрос на сервер для получения всех студентов
        var parsedItem = JSON.parse(this.responseText);
        var itemsTable = document.getElementById('all-clients'); //получаем элемент по Id
        itemsTable.innerHTML = '';      //очищаем таблицу от устаревших данных
        parsedItem._embedded.creditcard.forEach(function(item)  {
            var itemNameElement = document.createElement('td'); //создаем элемент ячейку с названием для таблицы
            itemNameElement.innerHTML =  item['ownerName'] ;     //внедряем название предмета, полученное с сервера
            var itemPriceElement = document.createElement('td');
            itemPriceElement.innerHTML = item['code'];
            var status = document.createElement('td');
            status.innerHTML = item['number'];
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
    getCreditCards();
});