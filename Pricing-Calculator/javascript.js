$(document).ready(function(){
  var laptops = $("#models option[value='LT']");
  var desktops = $("#models option[value='DT']");
    $('#platform').change(function(){
      if ($(this).val() === "laptops"){
        $("#models option[value='LT']").show();
        $("#models option[value='DT']").hide();
        $("#Form-Factor option[value='DT']").hide();
        $("#Form-Factor option[value='Laptop']").show();
      }
      else {
        if ($(this).val() === "desktops"){
          $("#models option[value='LT']").hide();
          $("#models option[value='DT']").show();
          $("#Form-Factor option[value='Laptop']").hide();
          $("#Form-Factor option[value='DT']").show();
        }
      }
    });

    $('#Form-Factor').change(function(){
      if (($(this).val() === "Laptop") || ($('#Form-Factor option:selected').text() === "USFF")){
        $("#HDD option[value='HDD-LT']").show();
        $("#optical option[value='Optical-LT']").show();
        $("#HDD option[value='HDD-DT']").hide();
        $("#optical option[value='Optical-DT']").hide();
      }
      else {
        $("#optical option[value='Optical-DT']").show();
        $("#optical option[value='Optical-LT']").hide();
          $("#HDD option[value='HDD-DT']").show();
          $("#HDD option[value='HDD-LT']").hide();
      }
    });


    $('.final-btn').click(function(){
      var modelPrice = $('#models option:selected').data("id");
      var ffPrice = $('#Form-Factor option:selected').data("id");
      var hddPrice = $('#HDD option:selected').data("id");
      var optPrice = $('#optical option:selected').data("id");
      var windowsPrice = $('#Windows option:selected').data("id");
      var model = $('#models option:selected').text();
      var formFactor = $('#Form-Factor option:selected').text();
      var hdd = $('#HDD option:selected').text();
      var opt = $('#optical option:selected').text();
      var windows = $('#Windows option:selected').text();

      $('#model').text(model);
      $('#model-price').text(modelPrice);
      $('#ff').text(formFactor);
      $('#ff-price').text(ffPrice);
      $('#hdd').text(hdd);
      $('#hdd-price').text(hddPrice);
      $('#dvd').text(opt);
      $('#dvd-price').text(optPrice);
      $('#windows').text(windows);
      $('#windows-price').text(windowsPrice);

      if (modelPrice != "Check Online") {
        var total = modelPrice + +ffPrice + hddPrice + windowsPrice;
      $('#final').text("Final Price: " + total);
    } else {
      $('#final').text("Final Price: Check Online");
    }
    });
});
