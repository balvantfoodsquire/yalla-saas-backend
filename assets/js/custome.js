	$(document).on("scroll", function(){
		if($(document).scrollTop() > 30){
		  $("#banner").addClass("fixed-top");
		}
		else
		{
			$("#banner").removeClass("fixed-top");
		}
	});

	$(document).ready(function(){
		$('input[name=fradiobtn]').click(function() 
		{
	    if (this.id == "customRadio2") {
	        $(".thirdShow").hide();
	    } else {
	        $(".thirdShow").show();
	    }
		});

	});
	
	$('#radioBtn a').on('click', function(){
    var sel = $(this).data('title');
    var tog = $(this).data('toggle');
    $('#'+tog).prop('value', sel);
    
    $('a[data-toggle="'+tog+'"]').not('[data-title="'+sel+'"]').removeClass('active').addClass('notActive');
    $('a[data-toggle="'+tog+'"][data-title="'+sel+'"]').removeClass('notActive').addClass('active');
})

$(document.body).ready(function(){
	$('#adds').click(function add() {
    var $value = $("#item_value");
    var a = $value.val();
    
    a++;
    $("#subs").prop("disabled", !a);
    $value.val(a);
	});
	$("#subs").prop("disabled", !$("#item_value").val());

	$('#subs').click(function subst() {
	    var $value = $("#item_value");
	    var b = $value.val();
	    if (b >= 1) {
	        b--;
	        $value.val(b);
	    }
	    else {
	        $("#subs").prop("disabled", true);
	    }
});
});

$(document).ready(function(){

	if($('.payment ul li a').hasClass('active')){
		
		$('.payment ul li a.active').parent().addClass('card-active');
	}
	$('.payment ul li a').click(function(){
		$(this).closest('.payment ul li a').parent().addClass('card-active').siblings().removeClass('card-active');
	});
});

$(document).ready(function(){

	if($('.menu_list_type ul li a').hasClass('active')){
		$('.menu_list_type ul li a.active').parent().addClass('menu-active');
	}
	$('.menu_list_type ul li').click(function() {
    $('.menu_list_type ul li.menu-active').removeClass('menu-active');
    $(this).addClass('menu-active');
	});
});
$(document).ready(function(){

	if($('.account_section ul li a').hasClass('active')){
		$('.account_section ul li a.active').parent().addClass('aconttab-active');
	}
	$('.account_section ul li').click(function() {
    $('.account_section ul li.aconttab-active').removeClass('aconttab-active');
    $(this).addClass('aconttab-active');

	});
});

$(document).ready(function(){
	$('.signInModal').click(function() {
		$('#signInModal').modal('show');
		$('#signupModal').modal('hide');
	});
});
$(document).ready(function(){
	$('.signUpModal').click(function() {
		$('#signInModal').modal('hide');
		$('#signupModal').modal('show');
	});
});


$(document).ready(function () {

    if (screen.width < 768) {
         $('.header_search').hide();
    }
    else {

        $(".header_search").show();
    }

});

$(document).ready(function(){
	$('.custom-radio-btn').click(function(){
		$('.cust-text').removeClass('d-none');
	});
	$('.no-cust').click(function(){
		$('.cust-text').addClass('d-none');
	});
});

$(document.body).ready(function(){
	$(".verticalCarousel").verticalCarousel({

  // current item to display on start
  currentItem: 2,

  // number of items to display at a time
  showItems: 2,
  
	});
});