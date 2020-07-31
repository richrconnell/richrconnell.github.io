function RecruitingSoftCalc() {
  var rsResult = 0;
  var bonusResult = 0;
  var healthResult = 0;
  var holidayResult = 0;
  var retirementResult = 0;
  var taxResults = 0;
  var overtimeResults = 0;
  var compensationResult = 0;
  var productivitySalaryResults = 0;
  var severenceResult = 0;
  var totalCost = 0;
  var disruption = 0;
  var employeeCount = 0;
  var productivityHourResults = 0;

  var adv = parseFloat(document.getElementById('adv').value);
  var recruiterSlider = parseFloat(
    document.getElementById('recruiterSlider').value
  );
  var recSoftValue = parseFloat(document.getElementById('recSoftValue').value);
  var recruiterExternal = parseFloat(
    document.getElementById('recruiterExternal').value
  );
  var recSoftValue = parseFloat(document.getElementById('recSoftValue').value);
  var onboarding = parseFloat(document.getElementById('onboarding').value);
  var equip = parseFloat(document.getElementById('equip').value);
  var awards = parseFloat(document.getElementById('awards').value);
  var reimubursement = parseFloat(
    document.getElementById('reimubursement').value
  );
  var workNotComplete = parseFloat(
    document.getElementById('workNotComplete').value
  );
  var mistakes = parseFloat(document.getElementById('mistakes').value);

  var recruitingSoftware = parseFloat(
    document.getElementById('hoursCost').value
  );
  var hourlyRate = parseFloat(document.getElementById('hour').value);

  var rsResult = parseFloat(recruitingSoftware * hourlyRate);
  document.getElementById('rsoutput').innerHTML = rsResult;

  var salary = parseFloat(document.getElementById('salary').value);
  var bonus = parseFloat(document.getElementById('bonus').value);

  var bonusResult = salary * (bonus / 100);
  document.getElementById('bonusOutput').innerHTML = bonusResult.toFixed(2);

  var health = parseFloat(document.getElementById('health').value);
  var holidays = parseFloat(document.getElementById('holidays').value);
  var healthHolidayResult = 0;

  if (document.getElementById('health').checked) {
    var healthResult = salary * (health / 100);
  }
  if (document.getElementById('holidays').checked) {
    var holidayResult = salary * (holidays / 100);
  } else {
  }
  var healthHolidayResult = healthResult + holidayResult;
  document.getElementById(
    'healthOutput'
  ).innerHTML = healthHolidayResult.toFixed(2);

  var retirement = parseFloat(document.getElementById('retirement').value);

  var retirementResult = salary * (retirement / 100);
  document.getElementById(
    'retirmentOutput'
  ).innerHTML = retirementResult.toFixed(2);

  var taxes = parseFloat(document.getElementById('taxes').value);
  var taxResults = 0;

  if (document.getElementById('taxes').checked) {
    var taxResults = salary * (taxes / 100);
  } else {
  }
  document.getElementById('taxOutput').innerHTML = taxResults.toFixed(2);

  var overtime = parseFloat(document.getElementById('overtime').value);

  if (document.getElementById('overtime').checked) {
    var overtimeResults = salary * (overtime / 100);
  } else {
  }
  document.getElementById('overtimeOutput').innerHTML = overtimeResults.toFixed(
    2
  );

  var compensation = parseFloat(document.getElementById('compensation').value);

  var compensationResult = salary * (compensation / 100);
  document.getElementById(
    'compensationOutput'
  ).innerHTML = compensationResult.toFixed(2);

  var rent = parseFloat(document.getElementById('rent').value);
  var employeeCount = parseFloat(
    document.getElementById('employeeCount').value
  );
  var officeCostResults = 0;
  var rentEmployeeResult = 0;

  if (document.getElementById('rent').value > 0) {
  }
  if (document.getElementById('employeeCount').value > 0) {
    var rentEmployeeResult = rent / employeeCount;
    var officeCostResults = rentEmployeeResult + 2 * 175;
  } else {
    document.getElementById(
      'officeCostOutput'
    ).innerHTML = officeCostResults.toFixed(2);
  }

  document.getElementById(
    'officeCostOutput'
  ).innerHTML = officeCostResults.toFixed(2);

  var productivitySalary = parseFloat(
    document.getElementById('productivitySalary').value
  );
  var salaryMonths = salary / 12;
  var salaryDays = parseFloat(salaryMonths / 30);
  var salaryHours = salary / 2080;
  var productivitySalaryResults = parseFloat(salaryDays * productivitySalary);
  var hourlyCost = salaryHours * 8;
  var productivityHourResults = parseFloat(hourlyCost * productivitySalary);

  document.getElementById(
    'productivitySalaryOutput'
  ).innerHTML = productivitySalaryResults.toFixed(2);

  document.getElementById(
    'productivityHourOutput'
  ).innerHTML = productivityHourResults.toFixed(2);

  var disEmploy = parseFloat(employeeCount * (5 / 100));
  var disruption = parseFloat(disEmploy * 17600);
  document.getElementById('disruptionOutput').innerHTML =
    '$' + disruption.toFixed(2);

  var severence = parseFloat(document.getElementById('severanceOut').value);
  var severenceResult = (salary / 12) * severence;
  document.getElementById(
    'severenceOutput'
  ).innerHTML = severenceResult.toFixed(2);

  var turnoverResult = salary * (33 / 100);
  document.getElementById('turnoverOutput').innerHTML = turnoverResult.toFixed(
    2
  );

  if (document.getElementById('toxic').checked) {
    var toxic = 17600;
    document.getElementById('toxicOut').innerHTML = toxic.toFixed(2);
  } else {
    var toxic = 0;
  }

  console.log(toxic);

  var totalCost =
    rsResult +
    bonusResult +
    healthResult +
    holidayResult +
    retirementResult +
    taxResults +
    overtimeResults +
    compensationResult +
    productivitySalaryResults +
    severenceResult +
    adv +
    recruiterSlider +
    recSoftValue +
    recruiterExternal +
    recSoftValue +
    onboarding +
    equip +
    awards +
    reimubursement +
    workNotComplete +
    mistakes +
    toxic;

  document.getElementById('totalPayment').innerHTML =
    '$' + totalCost.toFixed(2);

  document.getElementById('salaryOut').innerHTML = '$' + salary.toFixed(2);

  console.log(salary);
}
var elements = $('.modal-overlay, .modal');

$('button').click(function () {
  elements.addClass('active');
});

$('.close-modal').click(function () {
  elements.removeClass('active');
});
