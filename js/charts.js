const ctx = document.getElementById('myChart');                      
new Chart(ctx, {
  type: 'doughnut',
    data: {
        labels: ['Red'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        backgroundcolor:'#34B53A'

      }]
    },

});

const don1 = document.getElementById('myChart1');                      
new Chart(don1, {
  type: 'doughnut',
  data: {
    labels: ['Red'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        backgroundcolor:'#34B53A'
        
      }]
    },
});

const don2 = document.getElementById('myChart2');                      
new Chart(don2, {
  type: 'doughnut',
  data: {
    labels: ['Red'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1,
      backgroundcolor:'#34B53A'
      
    }]
  },

});

const don3 = document.getElementById('myChart3');                      
new Chart(don3, {
  type: 'doughnut',
  data: {
    labels: ['Blue'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1,
      backgroundcolor:'#34B53A',
      
    }]
  },

});

const line = document.getElementById('lineChart');

new Chart(line, {
  type: 'line',
  data: {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'],
    datasets: [{
      label: 'Total Watch Time',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});


const bar = document.getElementById('barChart');

new Chart(bar, {
  type: 'bar',
  data: {
    labels: ['Movies', 'Series'],
    datasets: [{
      label: 'Number of Movies/Series Watched',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});