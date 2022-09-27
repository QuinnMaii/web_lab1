let input = document.getElementById("y_param");
let value_X = -2;
let value_Y = 0;
let flag = true;

function set_x_value(id){
	value_X = document.getElementById(id).value;
	var check_box = document.getElementsByName("X");
	var CheckedItems = 0;
	for(var i = 0; i < check_box.length; i++)
	{
		if(check_box[i].checked) {
			value_X = check_box[i].value;
			CheckedItems++;
		}
	}
	if(CheckedItems > 1){
		alert("You can't select more than one value of X!\nIf you want to choose another X value, please unmark the first value!");
		return false;}
	document.getElementById('label_x').innerText = "X= " + value_X;
}


function chek_input(){
	if(!/^-?\d+(\.|,)?\d*$/i.test(input.value)){
		alert("Value \"Y\" is not valid");
		input.value = "";
		flag = false;
	}else if(input.value.replace(/[,]/,".") >= -5 && input.value.replace(/[,]/,".") <= 3){
		if(/(\.|,)$/i.test(input.value)){
			alert("Value \"Y\" is not valid");
			input.value = "";
			flag = false;
		}else{
			value_Y = input.value.replace(/[,]/,".");
			document.getElementById('label_y').innerText = "Y = " + input.value;
			flag = true;
		}
	}else if(/(\.|,)$/i.test(input.value)) {
		alert("Value \"Y\" is not valid");
		input.value = "";
		flag = false;
	}else{
		alert("Out of bounds, enter a number in the range [-5;3]");
		flag = false;
	}
}

let button = document.getElementById("button");

button.onclick = function() {
	chek_input();
	if(flag) {
		getData();
	}
}