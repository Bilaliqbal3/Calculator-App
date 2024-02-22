document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.calculator button');
    let currentInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default form submission behavior

            const value = button.textContent.trim(); // Get the trimmed text content of the clicked button
            switch (value) {
                case 'AC':
                    clearDisplay();
                    break;
                case 'DE':
                    deleteCharacter();
                    break;
                case '=':
                    evaluate();
                    break;
                case '%':
                    percentage();
                    break;
                case '+':
                case '-':
                case '*':
                case '/':
                    appendToDisplay(value);
                    break;
                default:
                    appendToDisplay(value);
                    break;
            }
        });
    });

    function appendToDisplay(value) {
        currentInput += value;
        display.value = currentInput;
    }

    function clearDisplay() {
        currentInput = '';
        display.value = '';
    }

    function deleteCharacter() {
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;
    }

    function evaluate() {
        try {
            const result = eval(currentInput);
            currentInput = result.toString();
            display.value = currentInput;
        } catch (error) {
            display.value = 'Error';
        }
    }

    function percentage() {
        currentInput = (parseFloat(currentInput) / 100).toString();
        display.value = currentInput;
    }
});
