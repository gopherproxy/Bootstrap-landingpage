
    ;(function(window, document, $){;
        "use strict";
        var $forms,
        $inputs;
        
        function focusField(_field){
            var $formGroup = $(_field).closest('.form-group.label-animated');
            $formGroup.addClass('focused');
        }

        function blurField(_field){
            var $field = $(_field);
            var $formGroup = $field.closest('.form-group.label-animated');
            var inputValue = $field.val();
            if (inputValue == ""){
                $field.removeClass('filled');
                $formGroup.removeClass('focused');
            } else {
                $field.addClass('filled');
            }
        }

        function onAnimationInputFocus(e){
            focusField(e.currentTarget);
        }

        function onAnimationInputBlur(e){
            blurField(e.currentTarget);
        }

        function init(){
            //console.log('init')
            $forms = $('.form-animated');
            $inputs = $forms.find('input.animation-trigger, select.animation-trigger');
            
            $inputs.each(function(i, elem){
                var $elem = $(elem);
                
                $elem.on('focus', onAnimationInputFocus);
                $elem.on('blur', onAnimationInputBlur);
                
                // force fields that are filled to animate to "focused"
                if($elem.val() != ""){
                    $elem.closest('.form-group.label-animated').addClass('focused');
                    $elem.addClass('filled');
                }
            });
        }

        $(document).ready(init);
    
    })(window, document, jQuery);

