$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: '/js/employees.json',
    }).done(function (json) {
        console.log(json);
        var users = json.employees;
        var tr;

        for (var i = 0; i < users.length; i++) {
            tr = $('<tr/>');
            tr.append("<td><img src='" + users[i].imgPath +"'></td>");
            tr.append("<td>" + users[i].Name + "</td>");
            tr.append("<td>" + users[i].Description + "</td>");
            tr.append("<td>" + users[i].E_mail + "</td>");
            $('table').append(tr);
        }
    }).fail(function (xhr) {
        alert("Something went wrong!!!")
        console.log(xhr.responseText);
    });

});

$('#search').keyup(function () {
    var inputField = $(this).val();
    if (inputField.length > 0) {
        var match = $("tr").filter(function () {
            var inquiry = $(this).text();
            var re = new RegExp(inputField, "i");
            var result = re.test(inquiry);
            if (!result) {
                return $(this);
            }
        }).hide();
    } else {
        $("tr").show();
    }
});





$(document).ready(function(){

	$("a.switch").on("click", function(e){
		e.preventDefault();

		var theid = $(this).attr("id");
		var theemployees = $("table#rows");
		var classNames = $(this).attr('class').split(' ');


        var windowWidth = $(window).width();
        if(windowWidth < 768){
				// remove the list class and change to grid
				theemployees.removeClass("list");
				theemployees.addClass("grid");
			}

        

        if($(this).hasClass("active")) {
			// if currently clicked button has the active class
			// then we do nothing!
			return false;
		} else {
			// otherwise we are clicking on the inactive button
			// and in the process of switching views!

  			if(theid == "show-list") {
				$(this).addClass("active");
				$("#show-grid").removeClass("active");

				$("#show-grid").children("img").attr("src","images/grid-view.png");

				var theimg = $(this).children("img");
				theimg.attr("src","images/list-view-active.png");

				// remove the list class and change to grid
				theemployees.removeClass("grid");
				theemployees.addClass("list");
			}

			else if(theid == "show-grid") {
				$(this).addClass("active");
				$("#show-list").removeClass("active");

				$("#show-list").children("img").attr("src","images/list-view.png");

				var theimg = $(this).children("img");
				theimg.attr("src","images/grid-view-active.png");

				// remove the grid view and change to list
				theemployees.removeClass("list")
				theemployees.addClass("grid");		
			}
		}
		

	});
});






//url: '/JSON_test/js/employees.json',

// tr.append("<td>" + users[i].imgPath + "</td>");