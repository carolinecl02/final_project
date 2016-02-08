$(function(){

//the list of celebrities

var celebs = [{
    _id: 0,
    name: 'Keanu Reeves',
    value: 2000,
    imgSrc: './images/user91.png'
}, {
    _id: 1,
    name: 'second celebrity',
    value: 1000,
    imgSrc: './images/user91.png'
}, {
    _id: 2,
    name: 'third celebrity',
    value: 3000,
    imgSrc: './images/user91.png'
}, {
    _id: 3,
    name: 'fourth celebrity',
    value: 80000,
    imgSrc: './images/user91.png'
}, {
    _id: 4,
    name: 'fifth celebrity',
    value: 5600,
    imgSrc: './images/user91.png'
}, {
    _id: 5,
    name: 'sixth celebrity',
    value: 600,
    imgSrc: './images/user91.png'
}, {
    _id: 6,
    name: 'seventh celebrity',
    value: 5000,
    imgSrc: './images/user91.png'
}, {
    _id: 7,
    name: 'eighth celebrity',
    value: 4000,
    imgSrc: './images/user91.png'
}, {
    _id: 8,
    name: 'ninth celebrity',
    value: 20,
    imgSrc: './images/user91.png'
}, {
    _id: 9,
    name: 'tenth celebrity',
    value: 20000,
    imgSrc: './images/user91.png'
}];


//user enters their net worth and clicks go 
var $inputNetWorth = $('#inputNetWorth');
var $goButton = $('#goButton');

var value = 0;

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

var you = {
 _id: 10,
 name: 'You',
 value: value,
 imgSrc: './images/user91.png',
}



//html
// <li class="celebitem">
//         <img src="./images/user91.png" width="50px" height="50px" class="celebpic">
//         <h3>first celebrity</h3>
//       </li>


//draft 
function renderCelebList() {
    var $html;
    var newLi;

    $('#celebList').empty();

    celebs.forEach(function(celeb){
        // debugger;
     newLi = '<li class="celebitem">'
       + '<h3 class="personname">' + celeb.name + '</h3>'
        + '<img src="' + celeb.imgSrc + '" width=50px height=50px class="personpic">'
       + '</li>';
       $html += newLi;
    });

    $('#celebList').html($html);
}

renderCelebList();





});