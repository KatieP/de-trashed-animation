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
         window.open("http://www.detrashed.com/sign-up", "_self");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_smoke}", "touchstart", function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 165000, function(sym, e) {
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

      Symbol.bindElementAction(compId, symbolName, "${_logo}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.detrashed.com/sign-up", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_EPA_-_Landfill}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.epa.gov/waste/nonhaz/municipal/pubs/MSWcharacterization_508_053113_fs.pdf", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Ocean_-_Reference_1}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://5gyres.org/media/Moore_2001_plastic_in_North_Pacific_Gyre.pdf", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Source_-_ocean}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.epa.gov/owow/oceans/debris/toolkit/files/trash_that_kills508.pdf", "_self");
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Source_-_Tar_sands_2}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://atlas.media.mit.edu/explore/tree_map/import/usa/show/2709/2010/", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Tar_sands_-_source_1}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.eia.gov/tools/faqs/faq.cfm?id=34&t=6", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Smoke-_ref_1}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.chem.unep.ch/pops/pdf/dioxinfuran/difurpt.pdf", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Final_page_-_tagline}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.detrashed.com/sign-up", "_self");
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Button-Symbol'
   (function(symbolName) {   
   
   })("Button-Symbol");
   //Edge symbol end:'Button-Symbol'

   //=========================================================
   
   //Edge symbol: 'Preloader'
   (function(symbolName) {   
   
   })("Preloader");
   //Edge symbol end:'Preloader'

})(jQuery, AdobeEdge, "EDGE-306642205");