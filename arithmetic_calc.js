function compute() {
    var input1 = document.getElementById("num1");   // fetch the 2 numbers
    var input2 = document.getElementById("num2");
    var answer = document.getElementById("answer");
    var result = parseInt (input1.value) + parseInt(input2.value);       // compute result
    var result = parseInt (input1.value) - parseInt(input2.value);
    var result = (input1.value) * (input2.value);
    var result = (input1.value) / (input2.value);
    answer.innerHTML = result;
    }