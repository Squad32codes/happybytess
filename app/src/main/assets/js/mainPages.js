function profile (){
        document.getElementById("myDropdown").classList.toggle("show");
}

//adds information from sideBar.html to the #mySideNav div
    $(function(){
      $("#mySideNav").load("sideBar.html"); 
    });


//Drawer Navigator JS

function openNav() {
    document.getElementById("mySideNav").style.width = "300px";
    }

function closeNav() {
    document.getElementById("mySideNav").style.width = "0";
    document.getElementById
}

function darkNav() {
    document.getElementById("mySideNav").style.background = darkgrey;
}

$.get("topBar.html", function(sidedata){
    $("#navi").replaceWith(sidedata);
});
