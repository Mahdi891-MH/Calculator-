var operation = " ";
function get_value(val){
    document.getElementById("calc_area").innerHTML +=  val;
}
function calculate(){
    var number = document.getElementById("calc_area").innerHTML;
    var numbers = number.split(operation);
    if (operation == "+")
        document.getElementById("calc_area").innerHTML = parseFloat(numbers[0])+parseFloat(numbers[1]);
    else if (operation == "-")
        document.getElementById("calc_area").innerHTML = parseFloat(numbers[0])-parseFloat(numbers[1]);
    else if (operation == "x")
        document.getElementById("calc_area").innerHTML = parseFloat(numbers[0])*parseFloat(numbers[1]);
    else if (operation == "÷")
        document.getElementById("calc_area").innerHTML = parseFloat(numbers[0])/parseFloat(numbers[1]) 
    else
        document.getElementById("calc_area").innerHTML = number;
    operation = "";
}
function def_operation(oprn){
    operation = oprn;
}
function dlt(){
    var value = document.getElementById("calc_area").innerHTML;
    document.getElementById("calc_area").innerHTML = value.slice(0, -1);
}