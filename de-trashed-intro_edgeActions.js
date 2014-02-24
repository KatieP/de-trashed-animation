/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${_Button-Symbol}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.detrashed/sign-up.com", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_smoke}", "touchstart", function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 109448, function(sym, e) {
         // insert code here
         $("body").css("background-color","white");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         $("body").css("background-color","black");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Skip_tag}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.detrashed.com/start", "_self");
         
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Button-Symbol'
   (function(symbolName) {   
   
   })("Button-Symbol");
   //Edge symbol end:'Button-Symbol'

})(jQuery, AdobeEdge, "EDGE-306642205");