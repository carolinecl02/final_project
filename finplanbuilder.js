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

//on the next 'next', show the next calculations
$("#addButton").on('click', function(){
	$(".totals-needed").slideDown();

	//set the default to zero 
	var totalNeeded = 0;

	$('#totalNeeded').text('£' + totalNeeded);

	var totalNeeded = $(".goal-amount").val();

	$('#totalNeeded').text('£' + totalNeeded);

})

	//on update button click, compare what they have put in to whatever 
	$("#updateButton").on('click', function(){

		$(".sadoutcome").slideDown();

		var totalHave = $('#totalHave').val();
		totalHave = parseFloat(totalHave);
		totalResult = totalHave - totalNeeded; 
		$('#totalResult').text('£' + totalResult.toFixed(2));
	})

	//find how much they put in into each goal 
	
	//add up the totals 


});
