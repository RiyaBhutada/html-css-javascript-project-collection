//check-off specific todos by clicking
//we are adding 'on' listener on ul because we want these events to work on future li as well
//third argument is li because event should fire on all li inside of ul
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
	
});

//click on X to delete
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
	//event.stopPro methos is used to avoid event bubbling
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var newTodoText = $(this).val();
		//empty the text
		$(this).val("");
		//create new li
		//click() only adds listeners for existing elements, hence new todos wont have any click listener
		//on() adds listeners for all future elements as well
		$("ul").append("<li><span><i class='fas fa-trash'></i></span>" + " " + newTodoText + "</li>");
	}
});


$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});