$( document ).ready(function() {


    // When the user clicks on "Byte of the Day" display the modal
    $('#botdBtn').click(function(){
        console.log("check");
        $('#botdModal').show();
    });

    // When the user clicks on <span> (x), close the modal
    $('.close').click(function(){
        $('#botdModal').hide();
    });

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == document.getElementById("botdModal")) {
        $('#botdModal').hide();
      }
    }

    var bytes = [
        {
            byte : "When someone tries to bring you down remember your foundation, keep it strong and you will not topple"
        },
        {
            byte : "\"The Way Get Started Is To Quit Talking And Begin Doing.\" - Walt Disney"
        },
        {
            byte : "\"Don't Let Yesterday Take Up Too Much Of Today.\" - Will Rogers"
        },
        {
            byte : "You Learn More From Failure Than From Success. Don't Let It Stop You. Failure Builds Character."
        },
        {
            byte : "\"It's Not Whether You Get Knocked Down, It's Whether You Get Up.\" - Vince Lombardi"
        },
        {
            byte : "\"If You Are Working On Something That You Really Care About, You Don't Have To Be Pushed. The Vision Pulls You.\" - Steve Jobs"
        },
        {
            byte : "\"We Generate Fears While We Sit. We Overcome Them By Action.\" - Dr. Henry Link",
        }
    ];

    $('#botdQuote').html(bytes[Math.floor((Math.random() * bytes.length) + 0)].byte);

});


/*

//signout
window.onclick = function(event) {
  if (!event.target.matches('.profilePic')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


/*
document.getElementById("botdQuote").innerHTML = bytes[Math.floor(Math.random() * bytes.length)];*/
