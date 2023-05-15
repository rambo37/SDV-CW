const data = {
  "january": {
    "count": 1188,
    "regularHouseholdShop": {
      "increasedALot": 31,
      "increasedALittle": 42,
      "stayedTheSame": 17,
      "decreasedALittle": 2,
      "decreasedALot": 0,
      "dontKnow": 7
    },
    "rentMortgageOrHousingPayments": {
      "increasedALot": 8,
      "increasedALittle": 16,
      "stayedTheSame": 56,
      "decreasedALittle": 3,
      "decreasedALot": 1,
      "dontKnow": 16
    },
    "energyBills": {
      "increasedALot": 43,
      "increasedALittle": 29,
      "stayedTheSame": 15,
      "decreasedALittle": 1,
      "decreasedALot": 0,
      "dontKnow": 11
    },
    "otherHouseholdBills": {
      "increasedALot": 21,
      "increasedALittle": 40,
      "stayedTheSame": 26,
      "decreasedALittle": 2,
      "decreasedALot": 1,
      "dontKnow": 10
    },
    "dayToDayTransportCosts": {
      "increasedALot": 21,
      "increasedALittle": 28,
      "stayedTheSame": 32,
      "decreasedALittle": 3,
      "decreasedALot": 3,
      "dontKnow": 13
    },
    "leisureCostsAndNonEssentialShopping": {
      "increasedALot": 16,
      "increasedALittle": 33,
      "stayedTheSame": 25,
      "decreasedALittle": 6,
      "decreasedALot": 5,
      "dontKnow": 15
    }
  },
  "april": {
    "count": 1123,
    "regularHouseholdShop": {
      "increasedALot": 38,
      "increasedALittle": 45,
      "stayedTheSame": 10,
      "decreasedALittle": 2,
      "decreasedALot": 1,
      "dontKnow": 5
    },
    "rentMortgageOrHousingPayments": {
      "increasedALot": 11,
      "increasedALittle": 26,
      "stayedTheSame": 47,
      "decreasedALittle": 2,
      "decreasedALot": 1,
      "dontKnow": 13
    },
    "energyBills": {
      "increasedALot": 64,
      "increasedALittle": 19,
      "stayedTheSame": 8,
      "decreasedALittle": 1,
      "decreasedALot": 1,
      "dontKnow": 7
    },
    "otherHouseholdBills": {
      "increasedALot": 32,
      "increasedALittle": 47,
      "stayedTheSame": 12,
      "decreasedALittle": 1,
      "decreasedALot": 1,
      "dontKnow": 7
    },
    "dayToDayTransportCosts": {
      "increasedALot": 32,
      "increasedALittle": 36,
      "stayedTheSame": 20,
      "decreasedALittle": 1,
      "decreasedALot": 1,
      "dontKnow": 8
    },
    "leisureCostsAndNonEssentialShopping": {
      "increasedALot": 22,
      "increasedALittle": 39,
      "stayedTheSame": 19,
      "decreasedALittle": 4,
      "decreasedALot": 3,
      "dontKnow": 13
    }
  },
  "july": {
    "count": 1245,
    "regularHouseholdShop": {
      "increasedALot": 46,
      "increasedALittle": 39,
      "stayedTheSame": 7,
      "decreasedALittle": 3,
      "decreasedALot": 1,
      "dontKnow": 4
    },
    "rentMortgageOrHousingPayments": {
      "increasedALot": 14,
      "increasedALittle": 24,
      "stayedTheSame": 44,
      "decreasedALittle": 1,
      "decreasedALot": 0,
      "dontKnow": 16
    },
    "energyBills": {
      "increasedALot": 65,
      "increasedALittle": 17,
      "stayedTheSame": 7,
      "decreasedALittle": 1,
      "decreasedALot": 1,
      "dontKnow": 8
    },
    "otherHouseholdBills": {
      "increasedALot": 31,
      "increasedALittle": 43,
      "stayedTheSame": 15,
      "decreasedALittle": 2,
      "decreasedALot": 0,
      "dontKnow": 8
    },
    "dayToDayTransportCosts": {
      "increasedALot": 37,
      "increasedALittle": 29,
      "stayedTheSame": 22,
      "decreasedALittle": 3,
      "decreasedALot": 1,
      "dontKnow": 8
    },
    "leisureCostsAndNonEssentialShopping": {
      "increasedALot": 24,
      "increasedALittle": 36,
      "stayedTheSame": 17,
      "decreasedALittle": 5,
      "decreasedALot": 5,
      "dontKnow": 13
    }
  }
};
// Keep track of the currently selected month so if the user switches from having the data for a month selected to a
// specific living cost category and then goes back to the living cost category of "all", the original month's data will
// be displayed.
let currentMonth = "all";
// Ensure that the data displayed initially is for all categories and all months (to reflect the radio button initial
// values)
display("all", "all");

/**
 * Show the legend for the living cost categories (e.g., energy bills).
 */
function showCategoryLegend() {
  document.getElementById("changeLegend").className = "hidden";
  document.getElementById("categoryLegend").className = "legendDiv";
}

/**
 * Show the legend for the different changes (e.g., increased a lot, increased a little, etc.).
 */
function showChangeLegend() {
  document.getElementById("changeLegend").className = "legendDiv";
  document.getElementById("categoryLegend").className = "hidden";
}

/**
 * Displays the correct data based on the newly selected category of living cost. If the newly selected category is
 * "all", invokes changeMonth to ensure the displayed data reflects the currently selected month.
 * @param newCategory The newly selected living cost category
 */
function changeCategory(newCategory) {
  if (newCategory === "all") {
    // Show the radio group for selecting a month if the living cost category is "all"
    document.getElementById("monthRadioGroup").className = "";
    // Call changeMonth to have the correct legend and chart(s) displayed
    changeMonth(currentMonth);
    return;
  }

  // Hide the radio group for selecting a month
  document.getElementById("monthRadioGroup").className = "hidden";
  // Ensure that the legend shown is for the change in living costs
  showChangeLegend();
  // Show both views since the living cost category is not "all"
  document.getElementById("lineChartDiv").className = "";
  d3.select("#groupedBarChart")
    .attr("width", 830);

  display(newCategory, undefined);
}

/**
 * Displays the correct data based on the newly selected month. Also updates the legend and shows/hides the line chart,
 * as needed.
 * @param newMonth The newly selected month
 */
function changeMonth(newMonth) {
  currentMonth = newMonth;
  if (newMonth === "all") {
    // Show both views
    document.getElementById("lineChartDiv").className = "";
    d3.select("#groupedBarChart")
      .attr("width", 830);
    // Ensure that the legend shown is for the living cost categories
    showCategoryLegend();
  } else {
    // Show just a single view
    document.getElementById("lineChartDiv").className = "hidden";
    d3.select("#groupedBarChart")
      .attr("width", 1364);
    // Ensure that the legend shown is for the change in living costs
    showChangeLegend();
  }
  display("all", newMonth);
}

/**
 * Returns the aggregated total for a specific map of data.
 * @param categoryData The data for a particular living cost category in a particular month
 * @returns {number} The aggregated total
 */
function getAggregatedValue(categoryData) {
  let value = 0;
  value += categoryData.increasedALot * 2;
  value += categoryData.increasedALittle;
  value -= categoryData.decreasedALittle;
  value -= categoryData.decreasedALot * 2;
  return value;
}

/**
 * Appends the grid lines and their associated value labels to the chart specified by the chart parameter. Also, adds
 * the x-axis line and 0 label. Both the line charts and bar charts are showing the same data which is why the code can
 * be shared for both types of chart.
 * @param chart The chart to append the grid lines to (lineChart or groupedBarChart)
 * @param numberOfLines The number of grid lines the chart needs to have. 8 if showing aggregated data, else it is 7.
 */
function appendGridLinesAndLabels(chart, numberOfLines) {
  // Get the height and width of the chart to utilise all available space
  const height = document.getElementById(chart).height.baseVal.value;
  const width = document.getElementById(chart).width.baseVal.value;
  // Add the required number of grid lines
  for (let i = 0; i < numberOfLines; i++) {
    // The position the label for the grid line should have
    let xOffset = 48;
    // Add a line to the correct chart
    d3.select("#" + chart)
      .append("line")
      .attr("x1", 70)
      .attr("y1", 10 + ((height - 60) / numberOfLines) * i)
      .attr("x2", width - 10)
      .attr("y2", 10 + ((height - 60) / numberOfLines) * i)
      .style("stroke", "#C8C8C8");

    // The value that is going to be displayed next to the grid line
    let label;
    numberOfLines === 7 ? label = 70 - 10 * i : label = 160 - 20 * i;
    // Determine the length of the label text
    let length = label.toString().length;
    // Adjust the x position of the label if the length is 3
    if (length === 3) xOffset = 40;
    // Append the label in the right place
    d3.select("#" + chart)
      .append("text").text(label)
      .attr("x", xOffset)
      .attr("y", 15 + ((height - 60) / numberOfLines) * i);
  }
  // Display the correct y-axis label
  if (numberOfLines === 7) {
    d3.select("#" + chart)
      .append("text").text("Percentage of survey respondents")
      .attr("transform", "translate(20, " + (120 + ((height - 60) / 2)) + ") rotate(-90)");
  } else {
    d3.select("#" + chart)
      .append("text").text("Aggregated total")
      .attr("transform", "translate(20, " + (60 + ((height - 60) / 2)) + ") rotate(-90)");
  }

  // Code common to all graphs
  // x-axis
  d3.select("#" + chart)
    .append("line")
    .attr("x1", 70)
    .attr("y1", height - 50)
    .attr("x2", width - 10)
    .attr("y2", height - 50)
    .style("stroke", "black");
  // 0 label for x-axis
  d3.select("#" + chart)
    .append("text").text(0)
    .attr("x", 56)
    .attr("y", height - 45);
}

/**
 * Removes all the child nodes of the specified SVG.
 * @param id The id of the SVG that needs to be emptied
 */
function clearSVG(id) {
  const svg = document.getElementById(id);
  while (svg.childNodes.length > 0)
    svg.removeChild(svg.firstChild);
}

/**
 * Displays a line chart for the specified category.
 * @param category The category that the line chart should plot the data of
 */
function displayLineChart(category) {
  // Arrays to store the data for each line (3 points per line)
  const line1Data = [];
  const line2Data = [];
  const line3Data = [];
  const line4Data = [];
  const line5Data = [];
  const line6Data = [];

  if (category === "all") {
    line1Data.push(getAggregatedValue(data.january.regularHouseholdShop));
    line1Data.push(getAggregatedValue(data.april.regularHouseholdShop));
    line1Data.push(getAggregatedValue(data.july.regularHouseholdShop));

    line2Data.push(getAggregatedValue(data.january.rentMortgageOrHousingPayments));
    line2Data.push(getAggregatedValue(data.april.rentMortgageOrHousingPayments));
    line2Data.push(getAggregatedValue(data.july.rentMortgageOrHousingPayments));

    line3Data.push(getAggregatedValue(data.january.energyBills));
    line3Data.push(getAggregatedValue(data.april.energyBills));
    line3Data.push(getAggregatedValue(data.july.energyBills));

    line4Data.push(getAggregatedValue(data.january.otherHouseholdBills));
    line4Data.push(getAggregatedValue(data.april.otherHouseholdBills));
    line4Data.push(getAggregatedValue(data.july.otherHouseholdBills));

    line5Data.push(getAggregatedValue(data.january.dayToDayTransportCosts));
    line5Data.push(getAggregatedValue(data.april.dayToDayTransportCosts));
    line5Data.push(getAggregatedValue(data.july.dayToDayTransportCosts));

    line6Data.push(getAggregatedValue(data.january.leisureCostsAndNonEssentialShopping));
    line6Data.push(getAggregatedValue(data.april.leisureCostsAndNonEssentialShopping));
    line6Data.push(getAggregatedValue(data.july.leisureCostsAndNonEssentialShopping));
  } else {
    line1Data.push(data.january[category].dontKnow);
    line1Data.push(data.april[category].dontKnow);
    line1Data.push(data.july[category].dontKnow);

    line2Data.push(data.january[category].decreasedALot);
    line2Data.push(data.april[category].decreasedALot);
    line2Data.push(data.july[category].decreasedALot);

    line3Data.push(data.january[category].decreasedALittle);
    line3Data.push(data.april[category].decreasedALittle);
    line3Data.push(data.july[category].decreasedALittle);

    line4Data.push(data.january[category].stayedTheSame);
    line4Data.push(data.april[category].stayedTheSame);
    line4Data.push(data.july[category].stayedTheSame);

    line5Data.push(data.january[category].increasedALittle);
    line5Data.push(data.april[category].increasedALittle);
    line5Data.push(data.july[category].increasedALittle);

    line6Data.push(data.january[category].increasedALot);
    line6Data.push(data.april[category].increasedALot);
    line6Data.push(data.july[category].increasedALot);
  }

  const height = document.getElementById("lineChart").height.baseVal.value;
  const width = document.getElementById("lineChart").width.baseVal.value;

  clearSVG("lineChart");

  if (category === "all") {
    // Create grid lines and corresponding y-axis label for each grid line. There need to be 8 in total when displaying
    // the data for all categories since the max value is 144 and increments of 20 are used.
    appendGridLinesAndLabels("lineChart", 8);

  } else {
    // Create grid lines and corresponding y-axis label for each grid line. There need to be 7 in total when displaying
    // the data for individual categories since the max value is 64 and increments of 10 are used.
    appendGridLinesAndLabels("lineChart", 7);
  }

  // This code is common for all the line graphs

  const lineChart = d3.select("#lineChart");

  // first x-axis marker
  lineChart.append("line")
    .attr("x1", 120)
    .attr("y1", height - 50)
    .attr("x2", 120)
    .attr("y2", height - 40)
    .style("stroke", "black");

  lineChart.append("text").text("Jan 2022")
    .attr("x", 90)
    .attr("y", height - 25);

  lineChart.append("text").text("(" + data.january.count + ")")
    .attr("x", 100)
    .attr("y", height - 5);

  // second x-axis marker
  lineChart.append("line")
    .attr("x1", (width + 60) / 2)
    .attr("y1", height - 50)
    .attr("x2", (width + 60) / 2)
    .attr("y2", height - 40)
    .style("stroke", "black");

  lineChart.append("text").text("Apr 2022")
    .attr("x", (width + 60) / 2 - 30)
    .attr("y", height - 25);

  lineChart.append("text").text("(" + data.april.count + ")")
    .attr("x", (width + 60) / 2 - 20)
    .attr("y", height - 5);

  // third x-axis marker
  lineChart.append("line")
    .attr("x1", width - 60)
    .attr("y1", height - 50)
    .attr("x2", width - 60)
    .attr("y2", height - 40)
    .style("stroke", "black");

  lineChart.append("text").text("Jul 2022")
    .attr("x", width - 90)
    .attr("y", height - 25);

  lineChart.append("text").text("(" + data.july.count + ")")
    .attr("x", width - 80)
    .attr("y", height - 5);

  // For the graph with all categories
  // (height-60)/8 corresponds to 20 on the y-axis
  // (height-60)/160 corresponds to 1 on the y-axis

  // For the graph with a single category
  // (height-60)/7 corresponds to 10 on the y-axis
  // (height-60)/70 corresponds to 1 on the y-axis
  let multiplier;
  if (category === "all") multiplier = (height - 60) / 160;
  else multiplier = (height - 60) / 70;


  let line1Points = [
    {x: 120, y: height - 50 - line1Data[0] * multiplier},
    {x: (width + 60) / 2, y: height - 50 - line1Data[1] * multiplier},
    {x: width - 60, y: height - 50 - line1Data[2] * multiplier},
  ];

  let line2Points = [
    {x: 120, y: height - 50 - line2Data[0] * multiplier},
    {x: (width + 60) / 2, y: height - 50 - line2Data[1] * multiplier},
    {x: width - 60, y: height - 50 - line2Data[2] * multiplier},
  ];

  let line3Points = [
    {x: 120, y: height - 50 - line3Data[0] * multiplier},
    {x: (width + 60) / 2, y: height - 50 - line3Data[1] * multiplier},
    {x: width - 60, y: height - 50 - line3Data[2] * multiplier},
  ];

  let line4Points = [
    {x: 120, y: height - 50 - line4Data[0] * multiplier},
    {x: (width + 60) / 2, y: height - 50 - line4Data[1] * multiplier},
    {x: width - 60, y: height - 50 - line4Data[2] * multiplier},
  ];

  let line5Points = [
    {x: 120, y: height - 50 - line5Data[0] * multiplier},
    {x: (width + 60) / 2, y: height - 50 - line5Data[1] * multiplier},
    {x: width - 60, y: height - 50 - line5Data[2] * multiplier},
  ];

  let line6Points = [
    {x: 120, y: height - 50 - line6Data[0] * multiplier},
    {x: (width + 60) / 2, y: height - 50 - line6Data[1] * multiplier},
    {x: width - 60, y: height - 50 - line6Data[2] * multiplier},
  ];

  appendLine(category === "all" ? "#3D59A7" : "#001AFF", line1Points);
  appendLine(category === "all" ? "#EE3226" : "#7BBD42", line2Points);
  appendLine(category === "all" ? "#C366A8" : "#CED629", line3Points);
  appendLine(category === "all" ? "#65BC46" : "#FCB712", line4Points);
  appendLine(category === "all" ? "#6ACCDD" : "#EA721C", line5Points);
  appendLine(category === "all" ? "#F6BB2D" : "#D02F37", line6Points);
}

/**
 * Adds a line to the line chart. Uses the code shown to us at the end of the 5th lab: Tutorial - Intro to D3.
 * @param stroke The colour the lines should have
 * @param points The points for the line
 */
function appendLine(stroke, points) {
  // Taken from the 5th lab
  let lineFn = d3.line()
    .x(d => d.x)
    .y(d => d.y);

  // Taken from the 5th lab and extended
  d3.select("#lineChart")
    .append("path")
    .style("fill", "none")
    .style("stroke", stroke)
    .style("stroke-width", 3)
    .attr("id", "line" + stroke.substring(1)) // Store the stroke of each line within its id attribute
    .on("mouseover", function () {
      // Bring this line to front on hover
      let parent = this.parentNode;
      parent.removeChild(this);
      parent.appendChild(this);
      switchColoursToGrayscale();

      // Change the legend colour for this line back to normal. stroke starts with # so take the substring from index 1
      d3.select("#square" + stroke.substring(1))
        .style("background-color", stroke);
      // Change the colour of this line back to normal and increase its stroke width
      d3.select(this)
        .style("stroke", stroke)
        .style("stroke-width", 5);
      // Change the colour for the bars that go with this line back to normal
      d3.selectAll("#rect" + stroke.substring(1))
        .style("fill", stroke);
    })
    .on("mouseout", revertHoverChanges)
    .attr("d", lineFn(points));
}

/**
 * Changes the colours of the squares in the legend, the lines in the line graph and the bars in the grouped bar chart
 * to grayscale.
 */
function switchColoursToGrayscale() {
  // Turn all line colours to grayscale
  d3.selectAll("path")
    .style("stroke", "#CDCDCD");
  // Turn legend colours to grayscale
  d3.selectAll(".square")
    .style("background-color", "#CDCDCD");
  // Turn bars to grayscale
  d3.selectAll("rect")
    .style("fill", "#CDCDCD");
}

/**
 * Reverts the appearance of any elements that may have been changed as a result of the user hovering their mouse over
 * something (a line or a bar).
 */
function revertHoverChanges() {
  // Revert all line colours
  d3.selectAll("path").selectAll(function () {
    this.style.stroke = "#" + this.id.substring(4); // example line id: lineEA721C
  });
  // Revert all legend colours
  d3.selectAll(".square").selectAll(function () {
    this.style.backgroundColor = "#" + this.id.substring(6); // example square id: square001AFF
  });
  // Revert all bar colours
  d3.selectAll("rect").selectAll(function () {
    this.style.fill = "#" + this.id.substring(4); // example rect id: rect001AFF
  });
  // Revert stroke width
  d3.selectAll("path").style("stroke-width", 3);
}

/**
 * Appends the labels and vertical markers for the x-axis of the grouped bar chart. This method is for any bar chart
 * where the groups are the months January, April and July.
 * @param height The height of the bar chart
 * @param width The width of the bar chart
 */
function appendMonthGroupsToBarChart(height, width) {
  const groupedBarChart = d3.select("#groupedBarChart");

  // first group
  groupedBarChart.append("line")
    .attr("x1", 200)
    .attr("y1", height - 50)
    .attr("x2", 200)
    .attr("y2", height - 40)
    .style("stroke", "black");

  groupedBarChart.append("text").text("Jan 2022")
    .attr("x", 170)
    .attr("y", height - 25);

  groupedBarChart.append("text").text("(" + data.january.count + ")")
    .attr("x", 180)
    .attr("y", height - 5);

  // second group
  groupedBarChart.append("line")
    .attr("x1", (width + 60) / 2)
    .attr("y1", height - 50)
    .attr("x2", (width + 60) / 2)
    .attr("y2", height - 40)
    .style("stroke", "black");

  groupedBarChart.append("text").text("Apr 2022")
    .attr("x", (width + 60) / 2 - 30)
    .attr("y", height - 25);

  groupedBarChart.append("text").text("(" + data.april.count + ")")
    .attr("x", (width + 60) / 2 - 20)
    .attr("y", height - 5);

  // third group
  groupedBarChart.append("line")
    .attr("x1", width - 140)
    .attr("y1", height - 50)
    .attr("x2", width - 140)
    .attr("y2", height - 40)
    .style("stroke", "black");

  groupedBarChart.append("text").text("Jul 2022")
    .attr("x", width - 170)
    .attr("y", height - 25);

  groupedBarChart.append("text").text("(" + data.july.count + ")")
    .attr("x", width - 160)
    .attr("y", height - 5);
}

/**
 * Appends the labels and vertical markers for the x-axis of the grouped bar chart. This method is for any bar chart
 * where the groups are the living cost categories
 * @param height The height of the bar chart
 */
function appendCategoryGroupsToBarChart(height) {
  const groupedBarChart = d3.select("#groupedBarChart");

  // first group
  groupedBarChart.append("line")
    .attr("x1", 174)
    .attr("y1", height - 50)
    .attr("x2", 174)
    .attr("y2", height - 40)
    .style("stroke", "black");

  groupedBarChart.append("text").text("Regular household")
    .attr("x", 106)
    .attr("y", height - 25);

  groupedBarChart.append("text").text("shop")
    .attr("x", 156)
    .attr("y", height - 5);

  // second group
  groupedBarChart.append("line")
    .attr("x1", 388)
    .attr("y1", height - 50)
    .attr("x2", 388)
    .attr("y2", height - 40)
    .style("stroke", "black");

  groupedBarChart.append("text").text("Rent, mortgage or")
    .attr("x", 324)
    .attr("y", height - 25);

  groupedBarChart.append("text").text("housing payments")
    .attr("x", 324)
    .attr("y", height - 5);

  // third group
  groupedBarChart.append("line")
    .attr("x1", 602)
    .attr("y1", height - 50)
    .attr("x2", 602)
    .attr("y2", height - 40)
    .style("stroke", "black");

  groupedBarChart.append("text").text("Energy bills")
    .attr("x", 564)
    .attr("y", height - 25);

  // fourth group
  groupedBarChart.append("line")
    .attr("x1", 816)
    .attr("y1", height - 50)
    .attr("x2", 816)
    .attr("y2", height - 40)
    .style("stroke", "black");

  groupedBarChart.append("text").text("Other household")
    .attr("x", 758)
    .attr("y", height - 25);

  groupedBarChart.append("text").text("bills")
    .attr("x", 804)
    .attr("y", height - 5);

  // fifth group
  groupedBarChart.append("line")
    .attr("x1", 1030)
    .attr("y1", height - 50)
    .attr("x2", 1030)
    .attr("y2", height - 40)
    .style("stroke", "black");

  groupedBarChart.append("text").text("Day to day transport")
    .attr("x", 958)
    .attr("y", height - 25);

  groupedBarChart.append("text").text("costs")
    .attr("x", 1012)
    .attr("y", height - 5);

  // six group
  groupedBarChart.append("line")
    .attr("x1", 1244)
    .attr("y1", height - 50)
    .attr("x2", 1244)
    .attr("y2", height - 40)
    .style("stroke", "black");

  groupedBarChart.append("text").text("Leisure costs and non-")
    .attr("x", 1170)
    .attr("y", height - 25);

  groupedBarChart.append("text").text("essential shopping")
    .attr("x", 1180)
    .attr("y", height - 5);
}

function displayGroupedBarChart(category, month) {
  // Arrays to store the data for each group. If month is "all", then only the first 3 groups are used, and they store
  // the data for each month. If month is not "all", then all 6 groups are used and each group stores the data for a
  // living cost category.
  const group1Data = [];
  const group2Data = [];
  const group3Data = [];
  const group4Data = [];
  const group5Data = [];
  const group6Data = [];

  // Show all categories over all months (aggregated data)
  if (category === "all" && month === "all") {
    group1Data.push(getAggregatedValue(data.january.regularHouseholdShop));
    group1Data.push(getAggregatedValue(data.january.rentMortgageOrHousingPayments));
    group1Data.push(getAggregatedValue(data.january.energyBills));
    group1Data.push(getAggregatedValue(data.january.otherHouseholdBills));
    group1Data.push(getAggregatedValue(data.january.dayToDayTransportCosts));
    group1Data.push(getAggregatedValue(data.january.leisureCostsAndNonEssentialShopping));

    group2Data.push(getAggregatedValue(data.april.regularHouseholdShop));
    group2Data.push(getAggregatedValue(data.april.rentMortgageOrHousingPayments));
    group2Data.push(getAggregatedValue(data.april.energyBills));
    group2Data.push(getAggregatedValue(data.april.otherHouseholdBills));
    group2Data.push(getAggregatedValue(data.april.dayToDayTransportCosts));
    group2Data.push(getAggregatedValue(data.april.leisureCostsAndNonEssentialShopping));

    group3Data.push(getAggregatedValue(data.july.regularHouseholdShop));
    group3Data.push(getAggregatedValue(data.july.rentMortgageOrHousingPayments));
    group3Data.push(getAggregatedValue(data.july.energyBills));
    group3Data.push(getAggregatedValue(data.july.otherHouseholdBills));
    group3Data.push(getAggregatedValue(data.july.dayToDayTransportCosts));
    group3Data.push(getAggregatedValue(data.july.leisureCostsAndNonEssentialShopping));
  } else if (category !== "all") {
    group1Data.push(data.january[category].dontKnow);
    group1Data.push(data.january[category].decreasedALot);
    group1Data.push(data.january[category].decreasedALittle);
    group1Data.push(data.january[category].stayedTheSame);
    group1Data.push(data.january[category].increasedALittle);
    group1Data.push(data.january[category].increasedALot);

    group2Data.push(data.april[category].dontKnow);
    group2Data.push(data.april[category].decreasedALot);
    group2Data.push(data.april[category].decreasedALittle);
    group2Data.push(data.april[category].stayedTheSame);
    group2Data.push(data.april[category].increasedALittle);
    group2Data.push(data.april[category].increasedALot);

    group3Data.push(data.july[category].dontKnow);
    group3Data.push(data.july[category].decreasedALot);
    group3Data.push(data.july[category].decreasedALittle);
    group3Data.push(data.july[category].stayedTheSame);
    group3Data.push(data.july[category].increasedALittle);
    group3Data.push(data.july[category].increasedALot);
  } else {
    group1Data.push(data[month].regularHouseholdShop.dontKnow);
    group1Data.push(data[month].regularHouseholdShop.decreasedALot);
    group1Data.push(data[month].regularHouseholdShop.decreasedALittle);
    group1Data.push(data[month].regularHouseholdShop.stayedTheSame);
    group1Data.push(data[month].regularHouseholdShop.increasedALittle);
    group1Data.push(data[month].regularHouseholdShop.increasedALot);

    group2Data.push(data[month].rentMortgageOrHousingPayments.dontKnow);
    group2Data.push(data[month].rentMortgageOrHousingPayments.decreasedALot);
    group2Data.push(data[month].rentMortgageOrHousingPayments.decreasedALittle);
    group2Data.push(data[month].rentMortgageOrHousingPayments.stayedTheSame);
    group2Data.push(data[month].rentMortgageOrHousingPayments.increasedALittle);
    group2Data.push(data[month].rentMortgageOrHousingPayments.increasedALot);

    group3Data.push(data[month].energyBills.dontKnow);
    group3Data.push(data[month].energyBills.decreasedALot);
    group3Data.push(data[month].energyBills.decreasedALittle);
    group3Data.push(data[month].energyBills.stayedTheSame);
    group3Data.push(data[month].energyBills.increasedALittle);
    group3Data.push(data[month].energyBills.increasedALot);

    group4Data.push(data[month].otherHouseholdBills.dontKnow);
    group4Data.push(data[month].otherHouseholdBills.decreasedALot);
    group4Data.push(data[month].otherHouseholdBills.decreasedALittle);
    group4Data.push(data[month].otherHouseholdBills.stayedTheSame);
    group4Data.push(data[month].otherHouseholdBills.increasedALittle);
    group4Data.push(data[month].otherHouseholdBills.increasedALot);

    group5Data.push(data[month].dayToDayTransportCosts.dontKnow);
    group5Data.push(data[month].dayToDayTransportCosts.decreasedALot);
    group5Data.push(data[month].dayToDayTransportCosts.decreasedALittle);
    group5Data.push(data[month].dayToDayTransportCosts.stayedTheSame);
    group5Data.push(data[month].dayToDayTransportCosts.increasedALittle);
    group5Data.push(data[month].dayToDayTransportCosts.increasedALot);

    group6Data.push(data[month].leisureCostsAndNonEssentialShopping.dontKnow);
    group6Data.push(data[month].leisureCostsAndNonEssentialShopping.decreasedALot);
    group6Data.push(data[month].leisureCostsAndNonEssentialShopping.decreasedALittle);
    group6Data.push(data[month].leisureCostsAndNonEssentialShopping.stayedTheSame);
    group6Data.push(data[month].leisureCostsAndNonEssentialShopping.increasedALittle);
    group6Data.push(data[month].leisureCostsAndNonEssentialShopping.increasedALot);
  }

  const height = document.getElementById("groupedBarChart").height.baseVal.value;
  const width = document.getElementById("groupedBarChart").width.baseVal.value;

  clearSVG("groupedBarChart");

  // Check if the grouped bar chart is being displayed along with a line chart. If so, the x-axis will be the same for
  // both charts.
  if (category !== "all" || (category === "all" && month === "all")) {
    if (category === "all") {
      // Create grid lines and corresponding y-axis label for each grid line. There need to be 8 in total when displaying
      // the data for all categories since the max value is 144 and increments of 20 are used.
      appendGridLinesAndLabels("groupedBarChart", 8);
    } else {
      // Create grid lines and corresponding y-axis label for each grid line. There need to be 7 in total when displaying
      // the data for individual categories since the max value is 64 and increments of 10 are used.
      appendGridLinesAndLabels("groupedBarChart", 7);
    }

    // Code common to both kinds of grouped bar chart
    appendMonthGroupsToBarChart(height, width);

    // For the bar chart with all categories over all months (aggregated data)
    // (height-60)/8 corresponds to 20 on the y-axis
    // (height-60)/160 corresponds to 1 on the y-axis

    // For the bar chart with a single category (non-aggregated data)
    // (height-60)/7 corresponds to 10 on the y-axis
    // (height-60)/70 corresponds to 1 on the y-axis
    let multiplier;
    if (category === "all") multiplier = (height - 60) / 160;
    else multiplier = (height - 60) / 70;

    // Create a group for each bar
    let groups = d3.select("#groupedBarChart").selectAll("g")
      .data([group1Data, group2Data, group3Data])
      .enter().append("g")
      .attr("transform", (d, i) => "translate(" + (245 * i) + ", 0)"); // space the groups out along the chart

    // For each group, create a bar for each number in the array for that group
    groups.selectAll("rect")
      .data(d => d)
      .enter().append("rect")
      .attr("id", (d, i) => "rect" + getFill(i, category).substring(1))
      .attr("x", (d, i) => 110 + 30 * i)
      .attr("y", (d) => height - 50 - d * multiplier)
      .attr("width", 30)
      .attr("height", (d) => d * multiplier)
      .style("fill", (d, i) => getFill(i, category))
      .on("mouseover", function (d, i) {
        switchColoursToGrayscale();
        const fill = getFill(i, category)
        // Change the legend colour for this bar back to normal. stroke starts with # so take the substring from index 1
        d3.select("#square" + fill.substring(1))
          .style("background-color", fill);
        // Change the colour of the line that goes with this bar back to normal and increase its stroke width
        d3.select("#line" + fill.substring(1))
          .style("stroke", fill)
          .style("stroke-width", 5);
        const line = document.getElementById("line" + fill.substring(1));
        // Bring the line to front on hover
        let parent = line.parentNode;
        parent.removeChild(line);
        parent.appendChild(line);
        // Change the colour for all the bars that share the same colour as the one being hovered over
        d3.selectAll("#rect" + fill.substring(1))
          .style("fill",fill);
      })
      .on("mouseout", revertHoverChanges);

    // For each group, create a label for each number in the array for that group
    groups.selectAll("text")
      .data(d => d)
      .enter().append("text").text((d) => d)
      .attr("x", (d, i) => {
        if (d.toString().length === 1) {
          return 118 + 30 * i;
        }
        if (d.toString().length === 2) {
          return 114 + 30 * i;
        }
        // length 3
        return 110 + 30 * i;
      })
      .attr("y", (d) => height - 52 - d * multiplier);

  } else {
    // If we reach here, then we are plotting a grouped bar chart for a specific month. This means we are not showing
    // the line chart and so have a much wider svg. Also, the group names are different.
    appendGridLinesAndLabels("groupedBarChart", 7);
    appendCategoryGroupsToBarChart(height);

    // For the bar chart with all categories but just a single month (non-aggregated data)
    // (height-60)/7 corresponds to 10 on the y-axis
    // (height-60)/70 corresponds to 1 on the y-axis
    const multiplier = (height - 60) / 70;

    // Create a group for each bar
    let groups = d3.select("#groupedBarChart").selectAll("g")
      .data([group1Data, group2Data, group3Data, group4Data, group5Data, group6Data])
      .enter().append("g")
      .attr("transform", (d, i) => "translate(" + (214 * i) + ", 0)"); // space the groups out along the chart

    // For each group, create a bar for each number in the array for that group
    groups.selectAll("rect")
      .data(d => d)
      .enter().append("rect")
      .attr("id", (d, i) => "rect" + getFill(i, undefined).substring(1))
      .attr("x", (d, i) => 102 + 24 * i)
      .attr("y", (d) => height - 50 - d * multiplier)
      .attr("width", 24)
      .attr("height", (d) => d * multiplier)
      .style("fill", (d, i) => getFill(i, undefined));
    // pass undefined for category so the colour scale for the changes (e.g., increased a lot) are used instead

    // For each group, create a label for each number in the array for that group
    groups.selectAll("text")
      .data(d => d)
      .enter().append("text").text((d) => d)
      .attr("x", (d, i) => {
        if (d.toString().length === 1) {
          return 108 + 24 * i;
        }
        if (d.toString().length === 2) {
          return 104 + 24 * i;
        }
      })
      .attr("y", (d) => height - 52 - d * multiplier);
  }
}

/**
 * Returns the correct fill colour based on the category and index.
 * @param index The index of the bar in the bar chart group
 * @param category The category selected by the user
 * @returns {string} The correct fill colour given the index and category
 */
function getFill(index, category) {
  if (index === 0) {
    return category === "all" ? "#3D59A7" : "#001AFF";
  }
  if (index === 1) {
    return category === "all" ? "#EE3226" : "#7BBD42";
  }
  if (index === 2) {
    return category === "all" ? "#C366A8" : "#CED629";
  }
  if (index === 3) {
    return category === "all" ? "#65BC46" : "#FCB712";
  }
  if (index === 4) {
    return category === "all" ? "#6ACCDD" : "#EA721C";
  }
  if (index === 5) {
    return category === "all" ? "#F6BB2D" : "#D02F37";
  }
}

/**
 * Displays the required chart(s) based on the specified category and month.
 * @param category The living cost category that has been selected
 * @param month The month that has been selected
 */
function display(category, month) {
  if (category !== "all" || (category === "all" && month === "all")) {
    displayLineChart(category);
  }
  // A grouped bar chart is always shown, irrespective of what options the user selects
  displayGroupedBarChart(category, month);
}