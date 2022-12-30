$(document).ready(function () {
  "use strict";
  let progressVal = 0;
  var current_fs, next_fs, previous_fs;
  var left, opacity, scale;
  var animating = false,
    validate = false;
  $(".step-form input, .step-form textarea").on("keyup", function () {
    if (
      $("#first_name").val().length > 0 &&
      $("#last_name").val().length > 0 &&
      $("#email").val().length > 0 &&
      $("#phoneNumber").val().length > 0 &&
      $("#description").val().length > 0
    ) {
      const validateEmail = (email) => {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      };
      if (validateEmail($("#email").val())) {
        $("#email").parent().removeClass("invalid");
        $(this).parents(".step").find(".btn-next").removeAttr("disabled");
        validate = true;
      } else {
        $("#email").parent().addClass("invalid");
        $(this).parents(".step").find(".btn-next").attr("disabled", "disabled");
        validate = false;
      }
    } else {
      validate = false;
      $(this).parents(".step").find(".btn-next").attr("disabled", "disabled");
    }
  });
  $("#datepicker").datepicker({
    templates: {
      leftArrow: '<i class="fa-solid fa-chevron-left"></i>',
      rightArrow: '<i class="fa-solid fa-chevron-right"></i>',
    },
    autoclose: true,
    format: "dd / mm / yyyy",
  });
  $("#datepicker").on("change keyup keydown input", function () {
    if ($(this).val().length > 0) {
      $(this).parents(".step").find(".btn-next").removeAttr("disabled");
    } else {
      $(this).parents(".step").find(".btn-next").attr("disabled", "disabled");
    }
  });
  const states = [
    { code: "AL", name: "Alabama" },
    { code: "AK", name: "Alaska" },
    { code: "AZ", name: "Arizona" },
    { code: "AR", name: "Arkansas" },
    { code: "CA", name: "California" },
    { code: "CO", name: "Colorado" },
    { code: "CT", name: "Connecticut" },
    { code: "DE", name: "Delaware" },
    { code: "FL", name: "Florida" },
    { code: "GA", name: "Georgia" },
    { code: "HI", name: "Hawaii" },
    { code: "ID", name: "Idaho" },
    { code: "IL", name: "Illinois" },
    { code: "IN", name: "Indiana" },
    { code: "IA", name: "Iowa" },
    { code: "KS", name: "Kansas" },
    { code: "KY", name: "Kentucky" },
    { code: "LA", name: "Louisiana" },
    { code: "ME", name: "Maine" },
    { code: "MD", name: "Maryland" },
    { code: "MA", name: "Massachusetts" },
    { code: "MI", name: "Michigan" },
    { code: "MN", name: "Minnesota" },
    { code: "MS", name: "Mississippi" },
    { code: "MO", name: "Missouri" },
    { code: "MT", name: "Montana" },
    { code: "NE", name: "Nebraska" },
    { code: "NV", name: "Nevada" },
    { code: "NH", name: "New Hampshire" },
    { code: "NJ", name: "New Jersey" },
    { code: "NM", name: "New Mexico" },
    { code: "NY", name: "New York" },
    { code: "NC", name: "North Carolina" },
    { code: "ND", name: "North Dakota" },
    { code: "OH", name: "Ohio" },
    { code: "OK", name: "Oklahoma" },
    { code: "OR", name: "Oregon" },
    { code: "PA", name: "Pennsylvania" },
    { code: "RI", name: "Rhode Island" },
    { code: "SC", name: "South Carolina" },
    { code: "SD", name: "South Dakota" },
    { code: "TN", name: "Tennessee" },
    { code: "TX", name: "Texas" },
    { code: "UT", name: "Utah" },
    { code: "VT", name: "Vermont" },
    { code: "VA", name: "Virginia" },
    { code: "WA", name: "Washington" },
    { code: "WV", name: "West Virginia" },
    { code: "WI", name: "Wisconsin" },
    { code: "WY", name: "Wyoming" },
    { code: "DC", name: "District of Columbia" },
    { code: "AS", name: "American Samoa" },
    { code: "GU", name: "Guam" },
    { code: "MP", name: "Northern Mariana Islands" },
    { code: "PR", name: "Puerto Rico" },
    { code: "VI", name: "U.S. Virgin Islands" },
  ];
  $.fn.inputFilter = function (inputFilter) {
    return this.on(
      "input keydown keyup mousedown mouseup select contextmenu drop",
      function () {
        if (inputFilter(this.value)) {
          this.oldValue = this.value;
          this.oldSelectionStart = this.selectionStart;
          this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) {
          this.value = this.oldValue;
          this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        } else {
          this.value = "";
        }
      }
    );
  };
  states.forEach((element) => {
    var opt = document.createElement("option");
    opt.value = element.code + " - " + element.name;
    opt.innerHTML = element.name;
    document.getElementById("states").appendChild(opt);
  });
  $("select").each(function () {
    var $this = $(this),
      numberOfOptions = $(this).children("option").length;
    $this.addClass("select-hidden");
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');
    $this.before($("#labelStates"));
    var $styledSelect = $this.next("div.select-styled");

    var $list = $("<ul />", {
      class: "select-options",
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
      $("<li />", {
        text: $this.children("option").eq(i).text(),
        rel: $this.children("option").eq(i).val(),
      }).appendTo($list);
    }

    var $listItems = $list.children("li");

    $styledSelect.click(function (e) {
      e.stopPropagation();
      $("div.select-styled.active")
        .not(this)
        .each(function () {
          $(".select").removeClass("active");
          $(this).removeClass("active").next("ul.select-options").hide();
        });
      $(".select").toggleClass("active");
      $(this).toggleClass("active").next("ul.select-options").toggle();
    });

    $listItems.click(function (e) {
      e.stopPropagation();
      $(".select").removeClass("active");
      $styledSelect.text($(this).text()).removeClass("active");
      $this.val($(this).attr("rel"));
      $list.hide();
    });

    $(document).click(function () {
      $(".select").removeClass("active");
      $styledSelect.removeClass("active");
      $list.hide();
    });
    $("ul.select-options li").on("click", function () {
      $(this).parents(".step").find(".btn-next").removeAttr("disabled");
      $(this).addClass("is-selected").siblings().removeClass("is-selected");
    });
  });
  $("#states").val("");
  $("#phoneNumber").inputFilter(function (value) {
    return /^\d*$/.test(value);
  });
  $("#phoneNumber").on("keyup", function () {
    formatPhone(this);
  });
  function formatPhone(obj) {
    var numbers = obj.value.replace(/\D/g, ""),
      char = { 0: "(", 3: ") ", 6: "-" };
    obj.value = "";
    for (var i = 0; i < numbers.length; i++) {
      obj.value += (char[i] || "") + numbers[i];
    }
  }
  $(".btn-prev").click(function () {
    if (animating) return false;
    animating = true;

    current_fs = $(this).parents(".step");
    previous_fs = $(this).parents(".step").prev();

    //de-activate current step on progressbar

    //show the previous fieldset
    previous_fs.css("display", "flex");
    progressVal -= 10;
    $(".progress-bar").animate(
      {
        width: `${progressVal}%`,
      },
      200
    );
    //hide the current fieldset with style
    current_fs.animate(
      { opacity: 0 },
      {
        step: function (now, mx) {
          //as the opacity of current_fs reduces to 0 - stored in "now"
          //1. scale previous_fs from 80% to 100%
          scale = 0.8 + (1 - now) * 0.2;
          //2. take current_fs to the right(50%) - from 0%
          left = (1 - now) * 50 + "%";
          //3. increase opacity of previous_fs to 1 as it moves in
          opacity = 1 - now;
          current_fs.css({ left: left });
          previous_fs.css({
            opacity: opacity,
            transform: "scale(" + scale + ")",
          });
        },
        duration: 350,
        complete: function () {
          current_fs.hide();
          animating = false;
          previous_fs.css({ position: "relative" });
        },
        //this comes from the custom easing plugin
        easing: "easeInBack",
      }
    );
  });
  $(".btn-next:not(.btn-submit)").on("click", function () {
    var html = $(this).html(),
      $this = $(this);
    $(this)
      .attr("disabled", "disabled")
      .html(`<i class="fa-solid fa-circle-notch fa-spin"></i>`);
    if (animating) return false;
    animating = true;
    current_fs = $(this).parents(".step");
    $this.data("html", html);
    if (
      current_fs.find("input[type='radio']:checked").val() == "No one was hurt"
    ) {
      next_fs = $("#no-help");
      progressVal = 100;
    } else {
      progressVal += 10;
      next_fs = $(this).parents(".step").next();
    }
    setTimeout(() => {
      //show the next fieldset
      next_fs.css("display", "flex");
      $(".progress-bar").animate(
        {
          width: `${progressVal}%`,
        },
        200
      );
      //hide the current fieldset with style
      current_fs.animate(
        { opacity: 0 },
        {
          step: function (now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale current_fs down to 80%
            scale = 1 - (1 - now) * 0.2;
            //2. bring next_fs from the right(50%)
            left = now * 50 + "%";
            //3. increase opacity of next_fs to 1 as it moves in
            opacity = 1 - now;
            current_fs.css({
              transform: "scale(" + scale + ")",
              position: "absolute",
            });
            next_fs.css({ left: left, opacity: opacity });
          },
          duration: 350,
          complete: function () {
            current_fs.hide();
            animating = false;
            $this.removeAttr("disabled").html(html);
          },
          //this comes from the custom easing plugin
          easing: "easeInOutBack",
        }
      );
    }, 300);
  });
  $(".btn-submit").on("click", function (e) {
    e.preventDefault();
    if (validate) {
      var html = $(this).html(),
        $this = $(this);
      $(this)
        .attr("disabled", "disabled")
        .html(`<i class="fa-solid fa-circle-notch fa-spin"></i>`);
      // var obj = {};
      // obj['type'] = $("#step-type .label-wrapper input[type='radio']:checked").val();
      // obj['who'] = $("#who-hurt .label-wrapper input[type='radio']:checked").val();
      // if($("#states").val() == '' || $("#states").val() == null) {
      //   obj['states'] = 'I don\'t know';
      // } else {
      //   obj['states'] = $("#states").val();
      // }
      // if($("#datepicker").val() == '' || $("#datepicker").val() == null) {
      //   obj['date'] = 'I don\'t know';
      // } else {
      //   obj['date'] = $("#datepicker").val();
      // }
      // obj['treatment'] = [];
      // $("#step-treatment .label-wrapper input[type='checkbox']:checked").each(function(){
      //   obj['treatment'].push($(this).val());
      // });
      // obj['first_name'] = $("#first_name").val();
      // obj['last_name'] = $("#last_name").val();
      // obj['phoneNumber'] = $("#phoneNumber").val();
      // obj['email'] = $("#email").val();
      // obj['description'] = $("#description").val();
      // $.ajax({
      //   type: 'POST',
      //   url: "email.php",
      //   data: obj,
      //   success: function(result){
      setTimeout(() => {
        if (animating) return false;
        animating = true;
        current_fs = $this.parents(".step");
        next_fs = $this.parents(".step").next();
        $this.data("html", html);
        //show the next fieldset
        next_fs.css("display", "flex");
        progressVal = 100;
        $(".progress-bar").animate(
          {
            width: `${progressVal}%`,
          },
          200
        );
        //hide the current fieldset with style
        current_fs.animate(
          { opacity: 0 },
          {
            step: function (now, mx) {
              //as the opacity of current_fs reduces to 0 - stored in "now"
              //1. scale current_fs down to 80%
              scale = 1 - (1 - now) * 0.2;
              //2. bring next_fs from the right(50%)
              left = now * 50 + "%";
              //3. increase opacity of next_fs to 1 as it moves in
              opacity = 1 - now;
              current_fs.css({
                transform: "scale(" + scale + ")",
                position: "absolute",
              });
              next_fs.css({ left: left, opacity: opacity });
            },
            duration: 350,
            complete: function () {
              current_fs.hide();
              animating = false;
            },
            //this comes from the custom easing plugin
            easing: "easeInOutBack",
          }
        );
      }, 1000);
      // },
      // complete: function() {
      setTimeout(() => {
        $this.removeAttr("disabled").html(html);
      }, 900);
      // }
      // });
    }
  });
  $(".label-wrapper input[type='radio']").on("change", function () {
    if ($(".label-wrapper input[type='radio']:checked").length > 0) {
      $(this).parents(".step").find(".btn-next").removeAttr("disabled");
    } else {
      $(this).parents(".step").find(".btn-next").attr("disabled", "disabled");
    }
  });
  $(".label-wrapper input[type='checkbox']").on("change", function () {
    if ($(".label-wrapper input[type='checkbox']:checked").length > 0) {
      $(this).parents(".step").find(".btn-next").removeAttr("disabled");
    } else {
      $(this).parents(".step").find(".btn-next").attr("disabled", "disabled");
    }
  });
});
