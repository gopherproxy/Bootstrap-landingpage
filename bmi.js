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

function calculateBMI(){
	'use strict';
	console.log ('kald til funktionen');
	
}

/*
The BMI is defined as the body mass divided by the square of the body height, and is universally expressed in units of kg/m2 (source: Wikipedia)

BMI = weight (kg) / (height * height (m))

Underweight < 18.5
Normal (healthy weight) 18.5 - 25
Overweight 25 - 30
Obesity > 30
*/