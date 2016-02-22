$(function(){

//when user selects, add class of 'selected'
$(".card").on('click', function(){
	if (event.target.tagName.toLowerCase() !== 'input') {
		$(this).toggleClass("selected");
	}

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

	$(".planintro h4").text("3. Let's see how you're doing...");
	$(".totals-needed").slideDown();

	//set the default to zero
	var totalNeeded = 0;

	var selected = $('.card.selected');

	for (var i = 0; i < selected.length; i++) {
		totalNeeded += parseInt($(selected[i]).find('.goal-amount').val(), 10);
	}

	$('#totalNeeded').text('£' + totalNeeded);

	$('#totalNeeded').addClass('bignumber');

	$("#addButton").hide();
});

	//on update button click, compare what they have put in to how much they have
	$("#updateButton").on('click', function(){

		var totalHave = $('#totalHave').val();
		totalHave = parseFloat(totalHave);
		newTotal = parseInt($('#totalNeeded').text().replace('£', ''));

		if (totalHave > newTotal) {
			$(".happyoutcome").slideDown();
		}
 		else {
			$(".sadoutcome").slideDown();
		};

	});



});
