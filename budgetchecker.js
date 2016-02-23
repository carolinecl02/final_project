$(function(){
  $('#tellButton').on('click', function(){
    var totalGot = $("#totalGot").val();
    var rent = $("#rentVal").val();
    var bills = $("#billsVal").val();
    var internet = $("#internetVal").val();
    var phone = $("#phoneVal").val();
    var insurance = $("#insuranceVal").val();
    var gym = $("#gymVal").val();
    var savings = $("#savingsVal").val();
    var other = $("#otherVal").val();


        var sum = totalGot - rent - bills - internet - phone - insurance - gym - savings - other;

        $('#totalLeft').text('£' + sum);

        $('#totalLeft').addClass('bignumber');

        });

});
