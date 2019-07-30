var current_page = 1;
var records_per_page = 5; //change
function numPages() //number of pages
{
    return Math.ceil(objJson.length / records_per_page);
}

var objJson = [
    { Name: "aName 1"}, { Name: "aName 2"}, { Name: "aName 3"},  { Name: "aName 4"},
    { Name: "aName 5"}, { Name: "aName 6"}, { Name: "aName 7"},  { Name: "aName 8"},
    { Name: "aName 9"}, { Name: "aName 10"},
    { Name: "bName 1"}, { Name: "bName 2"}, { Name: "bName 3"},  { Name: "bName 4"},
    { Name: "bName 5"}, { Name: "bName 6"}, { Name: "bName 7"},  { Name: "bName 8"},
    { Name: "bName 9"}, { Name: "bName 10"},
    { Name: "cName 1"}, { Name: "cName 2"}, { Name: "cName 3"},  { Name: "cName 4"},
    { Name: "cName 5"}, { Name: "cName 6"}, { Name: "cName 7"},  { Name: "cName 8"},
    { Name: "cName 9"}, { Name: "cName 10"},
    { Name: "dName 1"}, { Name: "dName 2"}, { Name: "dName 3"},  { Name: "dName 4"},
    { Name: "dName 5"}, { Name: "dName 6"}, { Name: "dName 7"},  { Name: "dName 8"},
    { Name: "dName 9"}, { Name: "dName 10"}
];
window.onload = function() {
   changePage(1);
};

function changePage(page)
{
   var btn_next = document.getElementById("btn_next");
   var btn_prev = document.getElementById("btn_prev");
   var listing_table = document.getElementById("listingTable");
   var page_span = document.getElementById("page");
   //first need to validate pages
   if (page < 1) page = 1;
   if (page > numPages()) page = numPages();

   listing_table.innerHTML = "";
   for(var i = (page-1) * records_per_page;  i < (page * records_per_page) && i < objJson.length; i++) {
      listing_table.innerHTML += objJson[i].Name + "<br>";
   }
   //the prev button will be invisible when the current page is at its lowest, 1
   if (page == 1) {
      btn_prev.style.visibility = "hidden";
   } else {
      btn_prev.style.visibility = "visible";
   }
   //the next button will disapear if the current page is at its highest, 
   if (page == numPages()) {
      btn_next.style.visibility = "hidden";
   } else {
      btn_next.style.visibility = "visible";
   }
}
function showPageList(){
   var html = "";

   for(var i = 1; i <= numPages(); i++){
       html += "<span><a href='#' onclick='changePage(" + i + ")'>" + i + " </a></span>";
   }

   document.getElementById("pageList").innerHTML = html;
}
showPageList();
displayPage();

function prevPage()
{
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

function nextPage()
{
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page);
    }
}

