$(function(){

//the list of celebrities

var celebs = [{
    _id: 0,
    name: 'George Lucas',
    value: 5100000000,
    imgSrc: './images/celebpics/George-Lucas.jpg'
}, {
    _id: 1,
    name: 'Oprah Winfrey',
    value: 3200000000,
    imgSrc: './images/celebpics/oprah.jpg'
}, {
    _id: 2,
    name: 'Paul McCartney',
    value: 1200000000,
    imgSrc: './images/celebpics/paul.jpg'
}, {
    _id: 3,
    name: 'Madonna',
    value: 800000000,
    imgSrc: './images/celebpics/madonna.jpg'
}, {
    _id: 4,
    name: 'Beyonce',
    value: 450000000,
    imgSrc: './images/celebpics/beyonce.jpg'
}, {
    _id: 5,
    name: 'Jamie Oliver',
    value: 400000000,
    imgSrc: './images/celebpics/jamie.jpg'
}, {
    _id: 6,
    name: 'Lindsay Lohan',
    value: 500000,
    imgSrc: './images/celebpics/lindsay2.png'
}, {
    _id: 7,
    name: 'Heidi Montag',
    value: 20000,
    imgSrc: './images/celebpics/heidi.jpg'
}, {
    _id: 8,
    name: 'Dennis Rodman',
    value: -1000000,
    imgSrc: './images/celebpics/dennis2.png'
}, {
    _id: 9,
    name: 'Kanye West',
    value: -53000000,
    imgSrc: './images/celebpics/kanye.jpg'
}];


//user enters their net worth
var $inputNetWorth = $('#inputNetWorth');
var $goButton = $('#goButton');

var value = 0;

var you = {
 _id: 10,
 name: 'You',
 value: value,
 imgSrc: './images/user91.png',
}

//on click, the user will be captured as 'you'
$goButton.on('click', function (){
	value = $inputNetWorth.val();
	you.value = value;

    //push the user into the list
    celebs.push(you);

    //sort the array
    function SortByValue(a, b){
      var aValue = a.value;
      var bValue = b.value;
      return ((aValue < bValue) ? -1 : ((aValue > bValue) ? 1 : 0));
    }

    celebs.sort(SortByValue).reverse();

    renderCelebList();

});


// show the celebrity list

function renderCelebList() {
    var $html;
    var newLi;

    $('#celebList').empty();

    celebs.forEach(function(celeb){
     newLi = '<div class="container">'
     +'<div class="listcontainer">'
     + '<li class="celebitem">'
    + '<img src="' + celeb.imgSrc + '" width=20% height=20% class="personpic">'
       + '<h3 class="personname">' + celeb.name + '</h3>'
       + '<p class="personval">' + '£' + celeb.value + '</p>'
       + '</li>'
       + '</div>'
       + '</div>';
       $html += newLi;
    });

    $('#celebList').html($html);

}

renderCelebList();

});
