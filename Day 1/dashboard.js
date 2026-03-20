// Bar Chart
const barCtx = document.getElementById('barChart').getContext('2d');

new Chart(barCtx, {
  type: 'bar',
  data: {
    labels: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Sci'],
    datasets: [{
      label: 'Scores',
      data: [75, 65, 80, 60, 90],
      backgroundColor: '#1f8a70'
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  }
});

// Doughnut Chart
const pieCtx = document.getElementById('pieChart').getContext('2d');

new Chart(pieCtx, {
  type: 'doughnut',
  data: {
    labels: ['Strong', 'Moderate', 'Weak'],
    datasets: [{
      data: [12, 8, 5],
      backgroundColor: ['green', 'orange', 'red']
    }]
  },
  options: {
    responsive: true
  }
});