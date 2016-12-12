

function deleteGoods() {
    var name = $('#nameForDelete').val();
    $.ajax({
        type: "GET",
        url: "/goods/search/deleteByName?name=" + name.replace("/ /g", "%20"),
        contentType: "application/json",
        dataType: 'json'
    });
}

function deleteAll() {
    $.ajax({
        type: 'GET',
        url: "/goods/search/deleteAll/"
    });
}



function addNewGoods() {
    var price = $('#price').val();
    var weight = $('#weight').val();
    var name = $('#name').val();
    var category = $('#category').val();
    var length = $('#length').val();
    var width = $('#width').val();
    var guarantee = $('#guarantee').val();

    var requestJSONparametr = "{\"price\": \"" + price + "\", \"weight\": \"" + weight + "\", \"name\": \"" + name + "\"" +
        ", \"category\": \"" + category + "\", \"length\": \"" + length + "\" , \"width\": \"" + width + "\", \"guarantee\": \"" + guarantee + "\"}";
    $.ajax({
        type: "POST",
        url: "/goods/",
        contentType: "application/json",
        dataType: 'json',
        data: requestJSONparametr
    });
}




var priceRequest = new XMLHttpRequest();
priceRequest.open("GET", "/goods/", true);   //Указываем адрес GET-запроса
priceRequest.onload = function (){             //Функция которая отправляет запрос на сервер для получения всех студентов
    var parsedItem = JSON.parse(this.responseText);
    var itemsTable = document.getElementById('all-items'); //получаем элемент по Id
    itemsTable.innerHTML = '';      //очищаем таблицу от устаревших данных
    parsedItem._embedded.goods.forEach(function(item)  {
        var itemNameElement = document.createElement('td'); //создаем элемент ячейку с названием для таблицы
        itemNameElement.innerHTML =  item['price'] ;     //внедряем название предмета, полученное с сервера
        var itemPriceElement = document.createElement('td');
        itemPriceElement.innerHTML = item['weight'];
        var priceElement = document.createElement('td');
        priceElement.innerHTML = item['name'];
        var dateOfSale = document.createElement('td');
        dateOfSale.innerHTML = item['category'];
        var cityCode = document.createElement('td');
        cityCode.innerHTML = item['length'];
        var numberOfReportsCard = document.createElement('td');
        numberOfReportsCard.innerHTML = item['width'];
        var guarantee = document.createElement('td');
        guarantee.innerHTML = item['guarantee'];

        var elementRow = document.createElement('tr'); /// /создаем строку таблицы

        elementRow.appendChild(itemNameElement);      //помещаем обе ячейки в строку
        elementRow.appendChild(itemPriceElement);
        elementRow.appendChild(priceElement);
        elementRow.appendChild(dateOfSale);
        elementRow.appendChild(cityCode);
        elementRow.appendChild(numberOfReportsCard);        
        elementRow.appendChild(guarantee);
        itemsTable.appendChild(elementRow);           //помещаем строку в таблицу
    });

};

priceRequest.send(null);

$(document).ready(function() {
    $("#all-items-table").tablesorter();
});