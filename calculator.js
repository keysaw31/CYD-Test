let currentStep = 0;

function nextStep() {
    const current = document.getElementById('step' + currentStep);
    current.classList.remove('active');
    currentStep++;
    const next = document.getElementById('step' + currentStep);
    next.classList.add('active');
    if (currentStep === 5) calculateTotal();
}

function previousStep() {
    const current = document.getElementById('step' + currentStep);
    current.classList.remove('active');
    currentStep--;
    const prev = document.getElementById('step' + currentStep);
    prev.classList.add('active');
}

function calculateTotal() {
    const workers = parseInt(document.querySelector('[name="workers"]:checked').value);
    const hours = parseInt(document.querySelector('[name="hours"]:checked').value);

    const hourlyRate = 50; // $50 per hour per worker
    const gasFeePerWorker = 10; // $10 gas fee per worker

    const costPerWorker = workers * hourlyRate * hours;
    const totalTravelFee = gasFeePerWorker * workers;
    const totalCost = costPerWorker + totalTravelFee;

    // Display the results
    document.getElementById('numWorkers').textContent = workers;
    document.getElementById('hoursWorked').textContent = hours;
    document.getElementById('totalCost').textContent = totalCost;
    document.getElementById('travelFee').textContent = totalTravelFee;

    // Update hidden input values
    document.getElementById('numWorkersInput').value = workers;
    document.getElementById('hoursWorkedInput').value = hours;
    document.getElementById('totalCostInput').value = totalCost;
    document.getElementById('travelFeeInput').value = totalTravelFee;
}

