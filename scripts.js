let tipCalculator;
tipCalculator = function(total, tipRate){
  let tipAmount;
  tipAmount = tipRate * total;
  $("#response").html("Your tip is $" + tipAmount);
};
