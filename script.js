// Hard-coded exchange rate: 1 USD = 1.3589 CAD
const exchangeRate = 1.3589;

// Function to convert USD to CAD
function convertUSDToCAD() {
  // Get the input value from the USD input field
  const usdAmount = document.getElementById("usdAmount").value;
  
  // Validate the input value
  if (isNaN(usdAmount) || usdAmount < 0) {
    alert("Please enter a valid amount in USD.");
    return;
  }
  
  // Convert the amount to CAD
  const cadResult = usdAmount * exchangeRate;
  
  // Format the result to 3 decimal places
  const formattedCadResult = cadResult.toFixed(3);
  
  // Display the result in the CAD input field
  document.getElementById("cadResult").innerHTML = `<strong>${formattedCadResult} CAD</strong>`;
}

// Function to convert CAD to USD
function convertCADToUSD() {
  // Get the input value from the CAD input field
  const cadAmount = document.getElementById("cadAmount").value;
  
  // Validate the input value
  if (isNaN(cadAmount) || cadAmount < 0) {
    alert("Please enter a valid amount in CAD.");
    return;
  }
  
  // Convert the amount to USD
  const usdResult = cadAmount / exchangeRate;
  
  // Format the result to 3 decimal places
  const formattedUsdResult = usdResult.toFixed(3);
  
  // Display the result in the USD input field
  document.getElementById("usdResult").innerHTML = `<strong>${formattedUsdResult} USD</strong>`;
}