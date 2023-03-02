$(document).ready(function() {
    const calculate = (num1, num2, operator) => {
      switch (operator) {
        case "+":
          return num1 + num2;
        case "-":
          return num1 - num2;
        case "*":
          return num1 * num2;
        case "/":
          return num1 / num2;
        default:
          return "Invalid operator";
      }
    };
    
    $("#calculate-add").click(function() {
      const num1 = parseFloat($("#num1").val());
      const num2 = parseFloat($("#num2").val());
      const operator = "+";
      const result = calculate(num1, num2, operator);
      $("#result").val(result);
    });
  
    $("#calculate-subtract").click(function() {
      const num1 = parseFloat($("#num1").val());
      const num2 = parseFloat($("#num2").val());
      const operator = "-";
      const result = calculate(num1, num2, operator);
      $("#result").val(result);
    });
  
    $("#calculate-multiply").click(function() {
      const num1 = parseFloat($("#num1").val());
      const num2 = parseFloat($("#num2").val());
      const operator = "*";
      const result = calculate(num1, num2, operator);
      $("#result").val(result);
    });
  
    $("#calculate-divide").click(function() {
      const num1 = parseFloat($("#num1").val());
      const num2 = parseFloat($("#num2").val());
      const operator = "/";
      const result = calculate(num1, num2, operator);
      $("#result").val(result);
    });
});