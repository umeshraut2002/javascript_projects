const form = document.querySelectorAll('form');

form.forEach(form => {
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const loan = parseInt(document.querySelector('#loanAmount').value);

        const intRate = parseFloat(document.querySelector('#interestRate').value)

        const term = parseInt(document.querySelector('#loanTerm').value);

        const result = document.querySelector('.result');

        const monthlyInterestRate = intRate / (12 * 100); // Convert annual interest rate to monthly rate
        const totalMonths = term * 12; // Convert loan term from years to months
        const EMI = (loan * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths)) / (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);

        result.textContent = `Your Emi is: ${EMI.toFixed(2)}`;                                                       

    });
});