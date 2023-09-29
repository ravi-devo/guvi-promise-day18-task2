const mutualFundData = document.querySelector('.mutualFund-data');

//Anonymous function that will be called automatically
(async function () {
    try {
      const response = await fetch("https://api.mfapi.in/mf");
      const jsonData = await response.json();
      indianMutualFundDetails(jsonData);
    } catch (error) {
      console.log("Error: ", error);
    }
  })();

function indianMutualFundDetails(jsonData) {
    const mutualFundDetails = jsonData;
    let counter = 1;
    for (const {
      "schemeCode": schemeCode,
      "schemeName": schemeName
    } of mutualFundDetails) {
      if (counter <= 10) {
        const tableRow = document.createElement('div');
        tableRow.innerHTML = `
        <table class="table table-bordered table-dark w-50">
        <thead><th>Scheme Code</th><th>Scheme Name</th></thead>
        <tbody><tr><td>${schemeCode}</td><td>${schemeName}</td>
        </table>
        `
        mutualFundData.appendChild(tableRow);
        counter++;
      } else {
        break;
      }
    }
  }