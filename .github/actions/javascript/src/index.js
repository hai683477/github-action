const core = require('@actions/core');

try {
    const firstNumber = parseInt(core.getInput('first-number'));
    console.log(`First number: ${firstNumber}`);

    const secondNumber = parseInt(core.getInput('second-number'));
    console.log(`Second number: ${secondNumber}`);

    const sum = firstNumber + secondNumber;
    console.log(`Sum: ${sum}`);

    core.setOutput("sum", sum);
} catch (error) {
    core.setFailed(error.message);
}
