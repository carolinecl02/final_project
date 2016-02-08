$(function(){

//when user selects, add class of 'selected'
$(".card").on('click', function(){
	$(this).toggleClass("selected");
});

//when user clicks next, give all non selected items a class of 'hidden' 
$("#nextButton").on('click', function(){
	//get all the cards, loop through them
 	var cardItems=$(".card");
 	for (var i = 0; i < cardItems.length; i++) {
 		if (!$(cardItems[i]).hasClass('selected')) {
 			$(cardItems[i]).hide();
 		}
	}

	$(".planintro h4").text('2. Now enter approximately how much you think you might need for each goal');

	$(".goal-amount").slideDown();

	$("#nextButton").hide();

	$("#addButton").slideDown();

})

//on the next 'next' click, add up their amounts
$("#addButton").on('click', function(){
	$(".totals-needed").slideDown();

	//find how much they put in into each goal 
	

	//add up the totals 


	});


});
