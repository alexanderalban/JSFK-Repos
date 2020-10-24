let powerRangersArray = ["Zack", "Kimberly", "Billy", "Trini", "Jason", "Tommy"];

for(i = 0; i < powerRangersArray.length; i++) {
    $('body').append("<p>" + powerRangersArray[i] + "</p>");
    $('p').hide().delay(1000 * i).fadeIn(1000);
}

$('h1').text("Go Go Power Rangers!");

$('p').append(" is Morphenominal!").delay(10000).fadeIn(1000);
