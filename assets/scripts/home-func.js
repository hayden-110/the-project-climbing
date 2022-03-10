// prices tab menu
document.getElementById("defaultOpen").click();

function openCity(evt, cityName) {
    // Declare all variables
    var i, pricingBlock, tablinks;
  
    // Get all elements with class="pricing-block" and hide them
    pricingBlock = document.getElementsByClassName("pricing-block");
    for (i = 0; i < pricingBlock.length; i++) {
      pricingBlock[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  } 