// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");

data.forEach((sheepleReport) => {
    var row = tbody.append("tr");
    Object.values(sheepleReport).forEach((value) => {
      var cell = row.append("td");
      cell.text(value);
    });
});

var filter_button = d3.select("#filter-btn");

filter_button.on("click", function() {
    // Select the input element and get the raw HTML node
    var inputDate = d3.select("#datetime");
    var inputState = d3.select("#state");
    var inputCity = d3.select("#city");
    var dropdown = d3.select("#dropdownMenu2");

    // Get the value property of the input element
    var inputDateValue = inputDate.property("value");
    var inputStateValue = inputState.property("value").toLowerCase();
    var inputCityValue = inputCity.property("value").toLowerCase();
    var inputShape = dropdown.property("value");
    
    d3.select("tbody").selectAll("tr").remove();

    let filteredData = tableData;
    if (inputDateValue !== ""){
        filteredData = tableData.filter(filterRow => filterRow.datetime === inputDateValue);
    }
    if (inputStateValue !== ""){
      filteredData = filteredData.filter(filterRow => filterRow.state === inputStateValue);
    }
    if (inputCityValue !== ""){
      filteredData = tableData.filter(filterRow => filterRow.city === inputCityValue);
    }
    if (inputShape !== ""){
      filteredData = filteredData.filter(filterRow => filterRow.shape === inputShape);
    }

    var x = d3.select("#btnExport");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    
    //rebuild the table using filtered values

    filteredData.forEach((sheepleReport) => {
        var row = tbody.append("tr");
        Object.values(sheepleReport).forEach((value) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });

});
