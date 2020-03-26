$(document).ready(function () {
  $("#quiz").hide();
  $("#startButton").click(function (event) {

    $("#quiz").show();

    $("#btnConfirm").click(function () {

      //comment
      var yesCount = 0;

      if ($("input:radio[name=oneOne]:checked")) {
        yesCount += 1;
      } else {
        yesCount += 0;
      }

      if ($("input:radio[name=twoOne]:checked")) {
        yesCount += 1;
      } else {
        yesCount += 0;
      }

      if ($("input:radio[name=threeOne]:checked")) {
        yesCount += 1;
      } else {
        yesCount += 0;
      }

      if ($("input:radio[name=fourOne]:checked")) {
        yesCount += 1;
      } else {
        yesCount += 0;
      }

      if ($("input:radio[name=fiveOne]:checked")) {
        yesCount += 1;
      } else {
        yesCount += 0;
      }

      if ($("input:radio[name=sixOne]:checked")) {
        yesCount += 1;
      } else {
        yesCount += 0;
      }

      if ($("input:radio[name=sevenOne]:checked")) {
        yesCount += 1;
      } else {
        yesCount += 0;
      }

      alert(yesCount);
      if (yesCount !== 5) {
        alert("You are a conservative.");
      } else {
        alert("You are not a conservative.");
      }

      event.preventDefault();
    });

  });

});