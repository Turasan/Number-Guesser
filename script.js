$(".buttons").on("click", function (e) {
  var userChoice = e.target.id;

  console.log(userChoice);

  var randomNumber = Math.floor(Math.random() * 4 + 1);

 
  if (userChoice == 1 || userChoice == 2 || userChoice == 3 || userChoice == 4){
    $(".randomNumber").html(randomNumber);
    if (userChoice == randomNumber) {
      $(".result").html("Your choice is true.").css({backgroundColor:"green"});
      setTimeout(function () {
        $(".result").html("");
      }, 600);
    } else {
      $(".result").html("Your choice is wrong.").css({backgroundColor:"red"});
      setTimeout(function () {
        $(".result").html("");
      }, 600);
    }
  }
});
