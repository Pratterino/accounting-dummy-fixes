// ==UserScript==
// @name         Correct Accounting
// @namespace    https://my.accounting.pe/
// @version      0.1
// @description  Göm saker överallt!
// @author       Pär
// @match        https://my.accounting.pe/web/secure/timereport/week*
// @grant        none
// ==/UserScript==
function addJQuery(callback) {
    var script = document.createElement("script");
    script.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js");
    script.addEventListener('load', function() {
        var script = document.createElement("script");
        script.textContent = "window.jQ=jQuery.noConflict(true);(" + callback.toString() + ")();";
        document.body.appendChild(script);
    }, false);
    document.body.appendChild(script);
}
function main(){
  //Jquery Here
  $(function(){
      $("#weekReportForm\\:saveAndApproveAction").hide();
  });

}
// load jQuery and execute the main function
addJQuery(main);