
$(document).ready(function () {
  // Initialize tooltips
  $('[data-toggle="tooltip"]').tooltip();

  // Function to show error tooltip
  function showErrorTooltip(input, message) {
    input.addClass('is-invalid');
    const errorIcon = input.parent().find('.error-icon');

    errorIcon = $('<i class="fas fa-exclamation-circle error-icon" data-toggle="tooltip" title="' + message + '"></i>');
    // input.parent().append(errorIcon);
    errorIcon.tooltip('show');

  }

  // Function to remove error tooltip
  function removeErrorTooltip(input) {
    input.removeClass('is-invalid');
    input.parent().find('.error-icon').remove();
  }

  // Function to validate numeric input
  function validateNumericInput(input) {
    const value = input.val().trim();
    if (value === '' || isNaN(value)) {
      showErrorTooltip(input, 'Invalid input');
      return false;
    }
    removeErrorTooltip(input);
    return true;
  }

  // Event handler for numeric input change
  $('.numeric-input').change(function () {
    validateNumericInput($(this));
  });

  // Event handler for form submission
  $('#tax-form').submit(function (event) {
    event.preventDefault();

    // Validate numeric inputs
    const numericInputs = $('#income, #extra-income, #deductions');
    let isValid = true;
    numericInputs.each(function () {
      if (!validateNumericInput($(this))) {
        isValid = false;
      }
    });

    if (!isValid) {
      return;
    }

    const age = $('#age').val();
    const income = parseFloat($('#income').val());
    const extraIncome = parseFloat($('#extra-income').val());
    const deductions = parseFloat($('#deductions').val());

    // Check for mandatory age selection
    if (!age) {
      showErrorTooltip($('#age'), 'Please select an age group.');
      return;
    }

    // Calculate tax
    let taxRate = 0.3; // Default tax rate
    if (age === '≥40&<60') {
      taxRate = 0.4;
    } else if (age === '≥60') {
      taxRate = 0.1;
    }

    const taxableIncome = Math.max((income + extraIncome - deductions) - 800000, 0);
    const taxAmount = taxableIncome * taxRate;

    // Calculate overall income
    const overallIncome = income + extraIncome - deductions;

    // Calculate income after tax
    const incomeAfterTax = overallIncome - taxAmount;

    // Display results in a popup
    const resultMessage = `<center><h5>${incomeAfterTax.toFixed(2)}</h5></center><center><h6>after the tax deduction</h6></center>`;
    $('#tax-result').html(resultMessage);
    $('#modal').modal('show');
  });
});
