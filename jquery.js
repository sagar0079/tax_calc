$(document).ready(function(){
    $('.error-message, .error-icon').hide();
    $('.c_div input, .c_div select').removeClass('error-border');

    /*================================This is successful code==============================================*/

    $('.c_div input').on('input', function() {
        // Check if the input value is not a number
        // if (isNaN($(this).val())) {
        //     // Show error message and icon
        //     $(this).closest('.c_div').find('.error-message, .error-icon').show();
        //     $(this).closest('.c_div').find('.box_err').addClass('show-after');
        //     // Add error class to input field
        //     $(this).addClass('error-border');
        // } else {
        //     // Hide error message and icon
        //     $(this).closest('.c_div').find('.error-message, .error-icon').hide();
        //     $(this).closest('.c_div').find('.box_err').removeClass('show-after');
        //     // Remove error class from input field
        //     $(this).removeClass('error-border');
        // }
        // Remove any non-digit characters from the input value
        var inputValue = $(this).val().replace(/\D/g, '');
        
        // Format the input value with thousand separators
        var formattedValue = numberWithCommas(inputValue);
        
        // Update the input field with the formatted value
        $(this).val(formattedValue);

    });

    // function numberWithCommas(x) {
    //     if (!x) return ''; // Handle empty or null input
        
    //     // Add thousand separators to the integer part
    //     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // }

    // function numberWithCommas(x) {
    //     if (!x) return ''; // Handle empty or null input
        
    //     // Check if the number is less than 100000
    //     if (x < 100000) {
    //         // Add thousand separators to the integer part
    //         return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    //     } else {
    //         // Add million separator
    //         var millionSeparator = Math.floor(x / 1000000);
    //         var thousandSeparator = x % 1000000;
            
    //         // Add thousand separators to the integer part
    //         thousandSeparator = thousandSeparator.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            
    //         // Return the formatted value with million separator
    //         return millionSeparator + "," + thousandSeparator;
    //     }
    // }

    // function numberWithCommas(x) {
    //     if (!x) return ''; // Handle empty or null input
        
    //     // Check if the number is less than 100,000
    //     if (x < 100000) {
    //         // Add thousand separators to the integer part
    //         return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    //     } else {
    //         // Add a separator after every two digits for numbers greater than or equal to 100,000
    //         var str = x.toString();
    //         var formattedValue = '';
    //         var counter = 0;
            
    //         // Iterate through each character in reverse order
    //         for (var i = str.length - 1; i >= 0; i--) {
    //             // Append the current character to the formatted value
    //             formattedValue = str[i] + formattedValue;
    //             // Increment the counter
    //             counter++;
    //             // Add a separator after every two digits
    //             if (counter === 2 && i !== 0) {
    //                 formattedValue = ',' + formattedValue;
    //                 counter = 0;
    //             }
    //         }
            
    //         return formattedValue;
    //     }
    // }

    // function numberWithCommas(x) {
    //     if (!x) return ''; // Handle empty or null input
        
    //     // Check if the number is less than 100,000
    //     if (x < 100000) {
    //         // Add thousand separators to the integer part
    //         return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    //     } else {
    //         // Convert the number to a string
    //         var str = x.toString();
            
    //         // Check if there is a comma present in the number
    //         var commaIndex = str.indexOf(',');
    //         console.log(commaIndex);
            
    //         // if (commaIndex !== -1) {
    //         //     // If a comma is present, insert '*' just before that comma
    //         //     return str.slice(0, commaIndex) + '*' + str.slice(commaIndex);
    //         // } 
    //         // else {
    //         //     // Add a separator after every two digits
    //         //     var formattedValue = '';
    //         //     var counter = 0;
                
    //         //     // Iterate through each character in reverse order
    //         //     for (var i = str.length - 1; i >= 0; i--) {
    //         //         // Append the current character to the formatted value
    //         //         formattedValue = str[i] + formattedValue;
    //         //         // Increment the counter
    //         //         counter++;
    //         //         // Add a separator after every two digits
    //         //         if (counter === 2 && i !== 0) {
    //         //             formattedValue = ',' + formattedValue;
    //         //             counter = 0;
    //         //         }
    //         //     }
                
    //         //     return formattedValue;
    //         // }
    //     }
    // }

    // function numberWithCommas(x) {
    //     if (!x) return ''; // Handle empty or null input
        
    //     // Convert the number to a string
    //     var str = x.toString();
        
    //     // Check if the number is less than 100,000
    //     if (x < 100000) {
    //         // Add thousand separators to the integer part
    //         return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    //     } else {
    //         // Find the index of the separator (comma)
    //         var commaIndex = str.indexOf(',');
            
    //         if (commaIndex !== -1) {
    //             // If a comma is present, iterate the number in reverse order
    //             var formattedValue = '';
    //             var counter = 0;
                
    //             // Iterate through each character in reverse order
    //             for (var i = str.length - 1; i >= 0; i--) {
    //                 // Append the current character to the formatted value
    //                 formattedValue = str[i] + formattedValue;
    //                 // If a separator is found, break the loop
    //                 if (str[i] === ',') {
    //                     break;
    //                 }
    //             }
                
    //             // Add a separator after every two digits
    //             for (var j = i - 1; j >= 0; j--) {
    //                 // Append the current character to the formatted value
    //                 formattedValue = str[j] + formattedValue;
    //                 // Increment the counter
    //                 counter++;
    //                 // Add a separator after every two digits
    //                 if (counter === 2 && j !== 0) {
    //                     formattedValue = ',' + formattedValue;
    //                     counter = 0;
    //                 }
    //             }
                
    //             return formattedValue;
    //         } else {
    //             // Add a separator after every two digits
    //             var formattedValue = '';
    //             var counter = 0;
                
    //             // Iterate through each character in reverse order
    //             for (var k = str.length - 1; k >= 0; k--) {
    //                 // Append the current character to the formatted value
    //                 formattedValue = str[k] + formattedValue;
    //                 // Increment the counter
    //                 counter++;
    //                 // Add a separator after every two digits
    //                 if (counter === 2 && k !== 0) {
    //                     formattedValue = ',' + formattedValue;
    //                     counter = 0;
    //                 }
    //             }
                
    //             return formattedValue;
    //         }
    //     }
    // }

    function numberWithCommas(x) {
        if (!x) return ''; // Handle empty or null input
        
        // Convert the number to a string
        var str = x.toString();
        
        // Check if the number is less than 100,000
        if (x < 100000) {
            // Add thousand separators to the integer part
            return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } else {
            // Add separator after every three digits
            var formattedValue = '';
            var counter = 0;
            
            // Iterate through each character in reverse order
            for (var i = str.length - 1; i >= 0; i--) {
                // Append the current character to the formatted value
                formattedValue = str[i] + formattedValue;
                // Increment the counter
                counter++;
                console.log(formattedValue);
                // Add a separator after every three digits
                // if (counter === 5 && i !== 0) {
                //     formattedValue = ',' + formattedValue;
                //     counter = 0;
                // }
            }
            
            return formattedValue;
        }
    }

    // function numberWithCommas(x) {
    //     if (!x) return ''; // Handle empty or null input
        
    //     // Convert the number to a string
    //     var str = x.toString();
        
    //     // Check if the number is less than 100,000
    //     if (x < 100000) {
    //         // Add thousand separators to the integer part
    //         return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    //     } else {
    //         // Add separator after the first digit
    //         var formattedValue = '';
            
    //         // Iterate through each character in the string
    //         for (var i = 0; i < str.length; i++) {
    //             // Append the current character to the formatted value
    //             formattedValue += str[i];
    //             // Add a separator after the first digit
    //             if (i === 0) {
    //                 formattedValue += ',';
    //             }
    //         }
            
    //         return formattedValue;
    //     }
    // }
    
    
    
    
    

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