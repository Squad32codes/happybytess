function profile (){
        document.getElementById("myDropdown").classList.toggle("show");
}


//Drawer Navigator JS

function openNav() {
    document.getElementById("mySideNav").style.width = "300px";
    }

function closeNav() {
    document.getElementById("mySideNav").style.width = "0";
}

function darkNav() {
    document.getElementById("mySideNav").style.background = darkgrey;
}

$.get("sideBar.html", function(data){
    $("#mySidenav").replaceWith(data);
});

