let i;
i = 1;
while ( i < 4 ) {
  $("#response").append("<br />" + i);
  i = i + 1;
}
let tipCalculator;
tipCalculator = function(total, tipRate){
  let tipAmount;
  tipAmount = tipRate * total;
  $("#response").html("Your tip is $" + tipAmount);
};
