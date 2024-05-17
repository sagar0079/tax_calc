$(document).ready(function(){
    $('.error-message, .error-icon').hide();
    $('.c_div input, .c_div select').removeClass('error-border');

    /*================================This is successful code==============================================*/

    $('.c_div input').on('input', function() {
        // Check if the input value is not a number
        if (isNaN($(this).val())) {
            // Show error message and icon
            $(this).closest('.c_div').find('.error-message, .error-icon').show();
            $(this).closest('.c_div').find('.box_err').addClass('show-after');
            // Add error class to input field
            $(this).addClass('error-border');
        } else {
            // Hide error message and icon
            $(this).closest('.c_div').find('.error-message, .error-icon').hide();
            $(this).closest('.c_div').find('.box_err').removeClass('show-after');
            // Remove error class from input field
            $(this).removeClass('error-border');
        }

    });

    $('#submitBtn').click(function() {
        // $('.error-message, .error-icon').hide();
        // $('.c_div input, .c_div select').removeClass('error-border');
        $('.c_div input[type="text"]').slice(0, 1).each(function() {
            if ($(this).val().trim() === '') {
                allInputsFilled = false;
                $(this).addClass('error-border');
                $(this).closest('.c_div').find('.error-message, .error-icon').show();
                $(this).closest('.c_div').find('.box_err').addClass('show-after');
            } else {
                allInputsFilled = true;
                $(this).removeClass('error-border');
                $(this).closest('.c_div').find('.error-message, .error-icon').hide();
                $(this).closest('.c_div').find('.box_err').removeClass('show-after');
            }
        });

        // Check if the selected value is 0
        if ($('#age').val() === '0') {
            // Show error message and icon
            $('.error-message-2, .error-icon-2').show();
            $('.box_err-2').addClass('show-after-2');
            // Add error class to select element
            $('#age').addClass('error-border-2');
        } else {
            // Hide error message and icon
            $('.error-message-2, .error-icon-2').hide();
            $('.box_err-2').removeClass('show-after-2');
            // Remove error class from select element
            $('#age').removeClass('error-border-2');
            // Here you can proceed with further actions (e.g., AJAX request)
        }
    });

    $('#age').change(function() {
        // Hide all error messages and icons when a valid value is selected
        if ($(this).val() !== '0') {
            $('.error-message-2, .error-icon-2').hide();
            $('.box_err-2').removeClass('show-after-2');
            $('.c_div input, .c_div select').removeClass('error-border-2');
        }
    });

    $('#submitBtn').click(function() {

        if ($('#age').val() === '0') {
            // Show error message and icon
            $('.error-message-2, .error-icon-2').show();
            $('.box_err-2').addClass('show-after-2');
            // Add error class to select element
            $('#age').addClass('error-border-2');
        } else {

            var result = 0;

            // Step 1: Calculate the total from the first two inputs
            $('.c_div input[type="text"]').slice(0, 2).each(function() {
                var inputVal = parseFloat($(this).val());
                if (!isNaN(inputVal)) {
                    result += inputVal;
                }
            });

            // Step 2: Subtract the value from the third input, if available
            var thirdInputVal = parseFloat($('.c_div input[type="text"]').eq(2).val());
            if (!isNaN(thirdInputVal)) {
                result -= thirdInputVal;
            }

            var fnlsal_after_tax = 0;

            // Step 3: Check if the final result is greater than 800,000
            if (result > 800000) {
                // Step 4: Apply the tax adjustment based on age criteria
                var ageGroup = $('#age').val();
                var taxRate = 0;
                switch (ageGroup) {
                    case '1':
                        taxRate = 0.3;
                        break;
                    case '2':
                        taxRate = 0.4;
                        break;
                    case '3':
                        taxRate = 0.1;
                        break;
                    default:
                        break;
                }

                // Step 5: Calculate the final salary with tax adjustment
                finalsal = result * taxRate;
                fnlsal_after_tax = result - finalsal;
            } else {
                fnlsal_after_tax = result; // If the final result is not greater than 800,000
            }

            // if (fnlsal_after_tax < 1000000) {
            //     $('.tax_res #finalsal').text(fnlsal_after_tax.toLocaleString('en-IN', { maximumFractionDigits: 2 }));
            // } 
            // else {
            //     $('.tax_res #finalsal').text(fnlsal_after_tax.toLocaleString('en-IN', { maximumFractionDigits: 2 }));
            // }

            $('.tax_res #finalsal').text(fnlsal_after_tax.toLocaleString('en-IN', { maximumFractionDigits: 2 }));
            $('.tax_res').css('visibility', 'visible');

            $('.tax_res button').click(function() {
                // Hide the tax_res div when the "close" button is clicked
                $('.tax_res').css('visibility', 'hidden');
            });
                // Hide error message and icon
                $('.error-message-2, .error-icon-2').hide();
                $('.box_err-2').removeClass('show-after-2');
                // Remove error class from select element
                $('#age').removeClass('error-border-2');
                // Here you can proceed with further actions (e.g., AJAX request)
        }
        
    });
});