$(document).ready(function() {

  $('.sign-in, .close-signin, .background-overlay').click(function(e) {
    e.preventDefault()
    $('.sign-in-dropdown, .background-overlay').toggleClass('d-none')
  });

  $('#current-method').change(function() {
    if($(this).find(":selected").text() === 'Online') {
      $('.current-methods').removeClass('d-none')
    } else {
      $('.current-methods').addClass('d-none')
    }
  });
});



$("#onboarding-form input[name='information']").click(function(){
  if($('input:radio[name=information]:checked').val() == "account"){
    $("#account").show();
  }else{
   $("#account").hide(); 
   $('#accountInfo').hide();  
 }

 if($('input:radio[name=information]:checked').val() == "card"){
  $("#card").show();
  }else{
  $("#card").hide();
  $('#cardInfo').hide();    
}
});

///validation

$(document).ready(function(){

    // if($("#onboarding-form").is(":visible"))
    // {
    //     $('#phone').mask('(999) 999-9999');
    // }
  $(".next").click(function(){
    var form = $("#onboarding-form");
    form.validate({
     rules: {
      "first_name": {
        required: true
      },
      "last_name": {
        required: true
      },
      "phone": {
        required: true
      },
      "email": {
        required: true,
        email: true
      },
      "city": {
        required: true
      },
      "zip": {
        required: true,
        minlength: 5
      },
      "street": {
        required: true
      },
      "state": {
        required: true
      },
      "business-industry": {
        required: true
      },
      "current-method": {
        required: true
      },
      "who-powers": {
        required: true
      },
      "num-locations": {
        required: true
      },
      "estimated-deliveries": {
        required: true
      },
      "delivery-price": {
        required: true
      },
      "username": {
        required: true
      },
      "password": {
        required: true
      }
      

    },

    messages: {
      "first_name": {
        required: ""
      },
      "last_name": {
        required: ""
      },
      "phone": {
        required: ""
      },
      "email": {
        required: "",
         email: "",
      },
      "city": {
        required: ""
      },
      "street": {
        required: ""
      },
      "zip": {
        required: "",
        minlength:""
      },
      "state": {
        required: ""
      },
       "business-industry": {
        required: ""
      },
       "current-method": {
        required: ""
      },
       "who-powers": {
        required: ""
      },
      "num-locations": {
        required: ""
      },
       "estimated-deliveries": {
        required: ""
      },
       "delivery-price": {
        required: ""
      },
      "username": {
        required: ""
      },
      "password": {
        required: ""
      }
      
    }
  });


    if (form.valid() === true){
      if ($('#form-1').is(":visible")){
       $("#form-2").show();
       $("#form-1").hide();
       $('#form-2').removeClass('d-none');
       $('li.step-2').addClass('green');
     }else if($('#form-2').is(":visible")){
       $("#form-3").show();
       $("#form-2").hide();
       $('#form-3').removeClass('d-none');
       $('li.step-3').addClass('green');
    }else if($('#form-3').is(":visible")){
      $("#form-4").show();
       $("#form-3").hide();
       $('#form-4').removeClass('d-none');
       $('li.step-4').addClass('green');
    }
    else if($('#form-4').is(":visible")){
       $("#form-5").show();
       $("#form-4").hide();
       $('#form-5').removeClass('d-none');
       $('li.step-5').addClass('green');
    }
    else if($('#form-5').is(":visible")){
       $("#form-6").show();
       $("#form-5").hide();
       $('#form-6').removeClass('d-none');
       $('li.step-6').addClass('green');
    }
  }

});

      $('.back').click(function(){
        if($('#form-2').is(":visible")){
          $("#form-1").show();
          $("#form-2").hide();
          $('.step-2').removeClass('green');
         }else if($('#form-3').is(":visible")){
         $("#form-2").show();
         $('#form-3').removeClass('d-none');
          $("#form-3").hide();
          $('.step-3').removeClass('green');
        }
        else if ($('#form-4').is(":visible")){
         $("#form-3").show();
          $("#form-4").hide();
          $('.step-4').removeClass('green');
        }
        else if ($('#form-5').is(":visible")){
         $("#form-4").show();
          $("#form-5").hide();
          $('.step-5').removeClass('green');
        }
         else if ($('#form-6').is(":visible")){
         $("#form-5").show();
          $("#form-6").hide();
          $('.step-6').removeClass('green');
        }

      });

    });



// //https://www.codexworld.com/credit-card-number-validation-jquery/

function cardFormValidate(){
    var cardValid = 0;

    //card number validation
    $('#card_number').validateCreditCard(function(result){
        if(result.valid){
            $("#card_number").removeClass('required');
            cardValid = 1;
        }else{
            $("#card_number").addClass('required');
            cardValid = 0;
        }
    });

    //card details validation
    var nameoncard = $("#nameoncard").val();
    var bankname = $("#bankname").val();
    var expMonth = $("#month").val();
    var expYear = $("#year").val();
    var cvv = $("#cvv").val();
    var regName = /^[a-z ,.'-]+$/i;
    var regMonth = /^01|02|03|04|05|06|07|08|09|10|11|12$/;
    var regYear = /^2017|2018|2019|2020|2021|2022|2023|2024|2025|2026|2027|2028|2029|2030|2031$/;
    var regCVV = /^[0-9]{3,3}$/;
    if (cardValid == 0) {
        $("#card_number").addClass('required');
        $("#card_number").focus();
        return false;
    }else if (expMonth=="") {
        $("#card_number").removeClass('required');
        $("#month").addClass('required');
        $("#month").focus();
        return false;
    }else if (expYear=="") {
        $("#card_number").removeClass('required');
        $("#month").removeClass('required');
        $("#year").addClass('required');
        $("#year").focus();
        return false;
    }else if (!regCVV.test(cvv)) {
        $("#card_number").removeClass('required');
        $("#month").removeClass('required');
        $("#year").removeClass('required');
        $("#cvv").addClass('required');
        $("#cvv").focus();
        return false;
    }else if (nameoncard=="") {
        $("#card_number").removeClass('required');
        $("#month").removeClass('required');
        $("#year").removeClass('required');
        $("#cvv").removeClass('required');
        $("#nameoncard").addClass('required');
        $("#nameoncard").focus();
        return false;
    }else if (bankname=="") {
        $("#card_number").removeClass('required');
        $("#month").removeClass('required');
        $("#year").removeClass('required');
        $("#cvv").removeClass('required');
        $("#nameoncard").removeClass('required');
        $("#bankname").addClass('required');
        $("#bankname").focus();
        return false;
    }else{
        $("#card_number").removeClass('required');
        $("#month").removeClass('required');
        $("#year").removeClass('required');
        $("#cvv").removeClass('required');
        $("#nameoncard").removeClass('required');
        $("#bankname").removeClass('required');
        return true;
    }
}




 $("#formsubmit").on('click',function(){
   if($('input:radio[name=information]:checked').val() == "card"){
        if(cardFormValidate()){
        }else{

            if($("#card_number").val()=='' || $("#month").val()=='' || $("#year").val()=='' || $("#cvv").val()=='')
            {
                $('#cardInfo').slideDown('slow');
                $('#cardInfoMsg').html('Please enter details.');
                return false;
            }
            else
            {
                $('#cardInfo').slideDown('slow');
                $('#cardInfoMsg').html('Wrong card details given, please try again.');
                return false;
            }

        }
      }
if($('input:radio[name=information]:checked').val() == "account"){

  if($("#routing").val()=='' || $("#conf_routing").val()=='' || $("#account_number").val()=='' || $("#conf_account_number").val()=='')
            {
                $('#accountInfo').slideDown('slow');
                $('#accountInfoMsg').html('Please enter details.');
                return false;
            }

   }

    });


function $_GET(param) {
  var vars = {};
  window.location.href.replace( location.hash, '' ).replace( 
    /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
    function( m, key, value ) { // callback
      vars[key] = value !== undefined ? value : '';
    }
  );

  if ( param ) {
    return vars[param] ? vars[param] : null;  
  }
  return vars;
}


if($_GET('submit')=="success"){
  $('li.step-2').addClass('green');
  $('li.step-3').addClass('green');
  $('li.step-4').addClass('green');
  $('li.step-5').addClass('green');
  $('li.step-6').addClass('green');
  $("#onboarding-form").hide();
}

$('#skipforpayment').click(function(){
  
  $("#form-4").hide();
  $("#form-5").show();
  $('#form-5').removeClass('d-none');
  $('li.step-5').addClass('green');
  $('#username').val('');
  $('#password').val('');
});

$('#skipfordelivery').click(function(){
  
  $("#form-5").hide();
  $("#form-6").show();
  $('#form-6').removeClass('d-none');
  $('li.step-6').addClass('green');
  $('#routing').val('');
  $('#conf_routing').val('');
  $('#account_number').val('');
  $('#conf_account_number').val('');
  $('#card_number').val('');
  $('#month').val('');
  $('#year').val('');
  $('#cvv').val('');
  $('#nameoncard').val('');
  $('#bankname').val('');
});


      