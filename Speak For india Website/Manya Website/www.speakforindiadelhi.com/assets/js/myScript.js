/*------------------------------------------------------------------
 [Table of contents]

 1. Video
 2. Youtube
 3.  Add .html file on page
 4. Menu-Bar
 5. Counter
 6. Homepage Carousel
 7. Owl Carousel

 -------------------------------------------------------------------*/

"use strict";

// ======================= Video =============================
var iframeVideo = document.getElementById("iframeVideo");
if (iframeVideo) {
    document.querySelector(".video-overlay").onclick = function () {
        this.style.display = "none";
        iframeVideo.setAttribute('src',
            'https://player.vimeo.com/video/10260175?title=0&byline=0&portrait=0?rel=0&autoplay=1');
    };
}

// ====================== Youtube ============================
var iframeYoutube = document.getElementById("iframeYoutube");
if (iframeYoutube) {
    document.querySelector(".youtube-overlay").onclick = function () {
        this.style.display = "none";
        iframeYoutube.setAttribute('src',
            'https://www.youtube.com/embed/IM-yYn6i_58?rel=0&autoplay=1');
    };
}

$(function() {

    // ================ Add .html file on page =================
    $.get("header_page.html", function(data){
        $('#header').append(data);
    });
    $.get("header_page-ecology.html", function(data){
        $('#header-ecology').append(data);
    });
    $.get("menu-bar-charity.html", function(data){
        $('#menuBar-charity').append(data);
    });
    $.get("menu-bar-ecology.html", function(data){
        $('#menuBar-ecology').append(data);
    });
    $.get("sidebar.html", function(data){
        $('#sidebar').append(data);
    });
    $.get("sidebar-ecology.html", function(data){
        $('#sidebar-ecology').append(data);
    });
    $.get("footer.html", function(data){
        $('#footer').append(data);
    });
    $.get("footer-ecology.html", function(data){
        $('#footer-ecology').append(data);
    });

    // ===================== Menu-Bar ======================
    $(document).on('click','button.navbar-toggle', function(){
        if($(".slider-info")) {
            $(".slider-info").each(function () {
                $(this).toggleClass("displayNone");
            });
            $(".slider").toggleClass("shadowButton");
        }
        if($(".banner h1")) {
            $(".banner h1").toggleClass("displayNone");
            $(".banner ul").toggleClass("displayNone");
            $(".banner").toggleClass("shadowButton");
        }
        if($(".page-404")) {
            $(".page-404 .menuBar").css("background","rgb(06, 06, 06)");
        }
        if($(".page-single")) {
            $(".page-single .menuBar").css("background","rgb(06, 06, 06)");
        }
    });

    $(document).on('mouseover',"li.dropdown", function(){
        $(this).addClass("open");
    }).on('mouseout',"li.dropdown", function(){
        $(this).removeClass("open");
    });

    // ===================== Counter ======================
    var countbox = $("#counts");
    if (countbox.length>0) {
        var show = true;
        $(window).on("scroll load resize", function () {

            if (!show) return false;

            var w_top = $(window).scrollTop();
            var e_top = countbox.offset().top;
            var w_height = $(window).height();
            var d_height = $(document).height();
            var e_height = countbox.outerHeight();

            if (w_top + 900 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
                $(".spincrement").spincrement({
                    thousandSeparator: "",
                    duration: 3000
                });
                show = false;
            }
        });
    }

    // =================== Homepage Carousel ====================
    var slider=$('.slider');
    if(slider.length>0) {
        $("#home-carousel .slider-info h4").addClass('animated fadeInDown');
        $("#home-carousel .slider-info h2").addClass('animated fadeInDown');
        $("#home-carousel .slider-info .buttons").addClass('animated fadeInDown');
    }
    $('#home-carousel').carousel(
        {
            interval: 7000
        }
    );

    // ===================== Owl Carousel ====================
    var owl = $('.owl-carousel');
    if (owl.length>0) {
        owl.owlCarousel({
            autoplayHoverPause: true,
            autoplayTimeout: 4000,
            autoplay: true,
            loop: true,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 2
                },
                700: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        });
    }
	
	/*$("#email").on("change",function(){
		var email = $("#email").val();
		//alert(email)
		$('#aloader').show(); 
		$.post("./vendors/email-verification.php", {emailid:email} , function (data) {

		}).done(function (data) {
			$('#aloader').hide();
			//alert(data)
			var res = data.split("^");
			if(res[1] == "N")
			{
				$("#email").focus();
				$("#error_email").html(res[0]);
				$("#error_email").show(300);
				return false;
			}
			else
			{
				//$("#error_email").hide(300);
				$("#error_email").html(res[0]);
				$("#error_email").show(300);
				return false;
			}
		});
		
		//$("#email").focus();
		//alert(email)
	});*/
	
	$("#sbt").click(function () {
    //alert($("#dwnld").val());
	  //First Name Validation check
    if ($("#fname").val().trim() === "") {
      $("#fname").focus();
      $("#error_fname").text("Please enter your first name!");
      $("#error_fname").show(300);
      return false;
    } else {
      $("#error_fname").hide(300);
    }
	  //Last Name Validation check
    if ($("#lname").val().trim() === "") {
      $("#lname").focus();
      $("#error_lname").text("Please enter your last name!");
      $("#error_lname").show(300);
      return false;
    } else {
      $("#error_lname").hide(300);
    }
	  
	  //Parent name Validation check
    if ($("#pname").val().trim() === "") {
      $("#pname").focus();
      $("#error_pname").text("Please enter your Parent name!");
      $("#error_pname").show(300);
      return false;
    } else {
      $("#error_pname").hide(300);
    }
	
	 //Parent's Occupation Validation check
    if ($("#pocc").val().trim() === "") {
      $("#pocc").focus();
      $("#error_pocc").text("Please enter your Parent's Occupation!");
      $("#error_pocc").show(300);
      return false;
    } else {
      $("#error_pocc").hide(300);
    }
	  
	//College Name Validation check
    if ($("#college").val().trim() === "") {
      $("#college").focus();
      $("#error_college").text("Please enter your college name!");
      $("#error_college").show(300);
      return false;
    } else {
      $("#error_college").hide(300);
    }
	  
	 //Stream Of Education Validation check
    if ($("#soe").val().trim() === "") {
      $("#soe").focus();
      $("#error_soe").text("Please enter your Stream Of Education!");
      $("#error_soe").show(300);
      return false;
    } else {
      $("#error_soe").hide(300);
    }
	  
	  //Email Id Validation check
    if ($("#email").val().trim() === "") {
      $("#email").focus();
      $("#error_email").text("Please enter your email!");
      $("#error_email").show(300);
      return false;
    } else if (!validateEmail($("#email").val())) {
      $("#email").focus();
      $("#error_email").text("Please enter valid email!");
      $("#error_email").show(300);
      return false;
    } else {
      $("#error_email").hide(300);
    }
    
	//Preferred Language validation check
    if ($("#plng").val().trim() === "") {
      $("#plng").focus();
      $("#error_plng").text("Please enter your preferred language!");
      $("#error_plng").show(300);
      return false;
    } else {
      $("#error_plng").hide(300);
    }
	  
	//Phone Number validation check  
    if ($("#mobile").val().trim() === "") {
      $("#mobile").focus();
      $("#error_mobile").text("Please enter your phone number!");
      $("#error_mobile").show(300);
      return false;
    } else {
      $("#error_mobile").hide(300);
    }
	  
	//Date Of Birth validation check  
    if ($("#dob").val().trim() === "") {
      $("#dob").focus();
      $("#error_dob").text("Please select your date of birth!");
      $("#error_dob").show(300);
      return false;
    } else {
      $("#error_dob").hide(300);
    }
	  
		  
	/*
	
	//Subscription validation check
	if(!$("#subscr").is(":checked"))
	{
	  $("#subscr").focus();
      $("#error_subscr").text("Please check subscription!");
      $("#error_subscr").show(300);
      return false;
    } else {
      $("#error_subscr").hide(300);
    }
	
	//Sign-up validation check 
	if(!$("#signup").is(":checked"))
	{
	  $("#signup").focus();
      $("#error_signup").text("Please check subscription!");
      $("#error_signup").show(300);
      return false;
    } else {
      $("#error_signup").hide(300);
    }*/
	var referer = document.referrer;
	var frmdata = $('#frmdt').serializeArray();
	frmdata.push({name: 'referer', value: referer});
	$('#aloader').show(); 
    $.post("saveInfo.php", frmdata , function (data) {

    }).done(function (data) {
		$('#aloader').hide();
		var res = data.split("^");
		if(res[1] == "N")
		{
			//$('.popupMessage').fadeIn(500);
			$("#popupMessageIn p").remove();
			var children = $("#popupMessageIn").children().clone();
			$("#popupMessageIn").html(res[0]);
			$("#popupMessageIn").append(children);
			
			//$(".closeform").before(res[0]);
			$('.popupMessage').fadeIn(500);
		}
		else
		{
			//alert(data);
			window.open('thankyou.php', '_self');
		}
		
		//window.scrollTo(0, 400)
		//window.open('thankyou.html', '_self');
		
    });
  });
  $("#popupMessageIn").on("click","span.closeform",function () {
		$(".popupMessage").fadeOut(500);
		//location.reload();
	   });
 /* $(".closeform").on("click",function () {
    $(".popupMessage").fadeOut(500);
    //location.reload();
   });*/
	
	$("#sendmsg").click(function () {
    //alert($("#dwnld").val());
	  //First Name Validation check
    if ($("#fname").val().trim() === "") {
      $("#fname").focus();
      $("#error_fname").text("Please enter your name!");
      $("#error_fname").show(300);
      return false;
    } else {
      $("#error_fname").hide(300);
    }
	
	  //Email Id Validation check
    if ($("#email").val().trim() === "") {
      $("#email").focus();
      $("#error_email").text("Please enter your email!");
      $("#error_email").show(300);
      return false;
    } else if (!validateEmail($("#email").val())) {
      $("#email").focus();
      $("#error_email").text("Please enter valid email!");
      $("#error_email").show(300);
      return false;
    } else {
      $("#error_email").hide(300);
    }
    
	//Preferred Language validation check
    if ($("#message").val().trim() === "") {
      $("#message").focus();
      $("#error_message").text("Please enter your message!");
      $("#error_message").show(300);
      return false;
    } else {
      $("#error_message").hide(300);
    }
	 $('#aloader').show();  
	$.post("saveContact.php", $("#frmdtcont").serialize(), function (data) {

    }).done(function (data) {
       //alert(data);
		$('#aloader').hide();
		//$('.popupMessage').fadeIn(500);
		$("#popupMessageIn p").remove();
		var children = $("#popupMessageIn").children().clone();
		$("#popupMessageIn").html(data);
		$("#popupMessageIn").append(children);

		//$(".closeform").before(res[0]);
		$('.popupMessage').fadeIn(500);
		//$("#msg").html(data);
		//window.scrollTo(0, 400)
    });
  });
	
	//login form
	$("#login").click(function () {
    //alert($("#dwnld").val());
	  //First Name Validation check
    if ($("#empcode").val().trim() === "") {
      $("#empcode").focus();
      $("#error_empcode").text("Please enter your Employee code!");
      $("#error_empcode").show(300);
      return false;
    } else {
      $("#error_empcode").hide(300);
    }
	if ($("#pswd").val().trim() === "") {
      $("#pswd").focus();
      $("#error_pswd").text("Please enter your password!");
      $("#error_pswd").show(300);
      return false;
    } else {
      $("#error_pswd").hide(300);
    }
	
	$('#aloader').show();  
	$.post("login-info.php", $("#frmdtlogin").serialize(), function (data) {

    }).done(function (data) {
       //alert(data);
		$('#aloader').hide();
		if(data == "Yes")
		{
			$("#error_msg").hide(300);
			window.open("dwnlod-frmdata.php","_self");
		}
		else
		{
			//$('.popupMessage').fadeIn(500);
			//var htmldata = "<p>Wrong user details</p>";
			$("#empcode").focus();
      		$("#error_msg").text("Wrong user details!");
      		$("#error_msg").show(300);
			/*$("#popupMessageIn p").remove();
			var children = $("#popupMessageIn").children().clone();
			$("#popupMessageIn").html(htmldata);
			$("#popupMessageIn").append(children);

			//$(".closeform").before(res[0]);
			$('.popupMessage').fadeIn(500);*/
			//$("#msg").html(data);
			//window.scrollTo(0, 400)
		}
		
    });
  });
	
	//Download Reports
	$(".dwnld").click(function (){
		var reportid = this.id;
		//alert(reportid)
		window.location = "dwnld-report.php?reportid=" + reportid;
		return false;
		//$('#aloader').show();  
		/*$.post("dwnld-report.php", {reportid:reportid}, function (data) {

		}).done(function (data) {
		   //alert(data);
			$('#aloader').hide();
			//console.log(data)
		});*/
	});
});

//for email validation 

function validateEmail(email) {
  var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  return expr.test(email);
}
// for email validation 