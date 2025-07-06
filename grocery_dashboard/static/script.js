// Pie Chart - Cost by Category
new Chart(document.getElementById("categoryChart"), {
  type: "pie",
  data: {
    labels: ["Produce", "Meat", "Dairy", "Bakery", "Other"],
    datasets: [{
      data: [29, 24, 17, 15, 15],
      backgroundColor: ["#f4d58d", "#ea965f", "#508a8a", "#85c1b4", "#e8c07d"]
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "right"
      }
    }
  }
});

// Line Chart - Spending Trend
new Chart(document.getElementById("trendChart"), {
  type: "line",
  data: {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [{
      label: "Spending ($)",
      data: [40, 110, 100, 150],
      borderColor: "#e07a36",
      fill: false,
      tension: 0.3
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Bar Chart - Top Products
new Chart(document.getElementById("topProductsChart"), {
  type: "bar",
  data: {
    labels: ["Bananas", "Chicken", "Bread", "Milk"],
    datasets: [{
      label: "Quantity",
      data: [100, 70, 60, 30],
      backgroundColor: "#e07a36"
    }]
  },
  options: {
    responsive: true,
    indexAxis: "y",
    scales: {
      x: {
        beginAtZero: true
      }
    }
  }
});
