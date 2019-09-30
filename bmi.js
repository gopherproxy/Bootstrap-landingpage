// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        } else {
			calculateBMI();
			event.preventDefault();
		}
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

// globale variabler
var msg, bmi, input;

msg = document.getElementById('msg');

function calculateBMI(){
	'use strict';
	//console.log ('kald til funktionen');
	input = document.getElementsByTagName('input');
	// lokale variabler
	var w = input[0].value;
	var h = input[1].value;
	bmi = (w / (h * h)).toFixed(2);
	if(bmi < 18.5){
		msg.innerHTML = 'Underweight (BMI: ' + bmi + ')';
		msg.className = 'alert alert-light';
	} else if(bmi >= 18.5 && bmi < 25){
		msg.innerHTML = 'Normal weight (BMI: ' + bmi + ')';
		msg.className = 'alert alert-success';
	} else if (bmi >= 25 && bmi < 30){
		msg.innerHTML = 'Overweight (BMI: ' + bmi + ')';
		msg.className = 'alert alert-warning';
	} else {
		//msg.innerHTML = 'Obesity (BMI: ' + bmi + ')';
		$('#msg').html('Obesity (BMI: ' + bmi + ')').removeAttr('class').addClass('alert alert-danger');
	}
}

/*
The BMI is defined as the body mass divided by the square of the body height, and is universally expressed in units of kg/m2 (source: Wikipedia)

BMI = weight (kg) / (height * height (m))

Underweight < 18.5
Normal (healthy weight) 18.5 - 25
Overweight 25 - 30
Obesity > 30
*/