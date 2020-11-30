

var tari = $("a.tariffazione");
/*tari.click(function(){
  $("div.tariffa_sm").toggle();
})*/
tari.mouseenter(function() {
  $( "div.tariffa_sm" ).show()
});
tari.mouseout(function () {
  $("div.tariffa_sm").hide()
})




var conto = $("a.conti");
/*conto.click(function(){
  $("div.conti_sm").toggle();
})*/
conto.mouseenter(function() {
  $( "div.conti_sm" ).show()
});
conto.mouseout(function () {
  $("div.conti_sm").hide()
})


var prod = $("a.prodotti");
/*prod.click(function (){
  $("div.prodotti_sm").toggle();
})*/
prod.mouseenter(function() {
  $( "div.prodotti_sm" ).show()
});
prod.mouseout(function () {
  $("div.prodotti_sm").hide()
})


var azie = $("a.azienda");
azie.mouseenter(function(){
  $("div.azienda_sm").show()
})
azie.mouseout(function () {
  $("div.azienda_sm").hide()
})


var aiuto = $("a.help");
aiuto.mouseenter(function(){
  $("div.aiuto_sm").show()
})
aiuto.mouseout(function(){
  $("div.aiuto_sm").hide()
})
