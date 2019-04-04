// data
var datasets = [{
  data: [
    50, 50, 40, 40, 40, 30, 20
  ],
  backgroundColor: [
    'rgb(238, 63, 63)', //red
    'rgb(255, 159, 64)', //orange
    'rgb(255, 205, 86)', //yellow
    'rgb(75, 192, 192)', //green
    'rgb(54, 162, 235)', //blue
    'rgb(63, 136, 72)', //dark green
    'rgb(102, 226, 118)', //light green
  ]
  // backgroundColor: ['rgba(0, 0, 0, 0.1)']
}];

var labels = [
  'Python',
  'HTML&CSS',
  'JavaScript',
  'R',
  'ArcGIS',
  'ENVI',
  'JAVA'
];

// options
var label = function(tooltipItem) {
  var char = tooltipItem.xLabel + "%";
  return char;
}

// -----------------------------------------
var config = {
  type: 'horizontalBar',
  // -----------------------------------------
  data: {
    datasets: datasets,
    labels: labels,
  },
  // -----------------------------------------
  options: {
    //  Do not show label
    legend: {
      display: false
    },
    tooltips: {
      callbacks: {
        label: label
      },
      yAlign: "center",
      xAlign: "left"
    },

    // canvas padding
    layout: {
      padding: {
        left: 10,
        right: 20,
        top: 16,
        bottom: 5
      }
    },

    // axis name and range
    scales: {
      xAxes: [{
        // x-axis name
        scaleLabel: {
          display: true,
          labelString: "Percentage(%)",
          fontSize: 13
        },
        ticks:{
          min: 0,
          max: 70
        }
      }],

      yAxes: [{
        maxBarThickness: 25
      }]
    },

    // animation duration
    animation: {
      duration: 3000
    }
  }
  // -----------------------------------------
};

var ctx, chart, plotIndex;
ctx = document.getElementById('chart-area');
ctx.style.borderRadius = '5px';
ctx.style.backgroundColor = 'rgb(246, 249, 243)';
ctx = ctx.getContext('2d');
chart = new Chart(ctx, config);
chart.reset(); // create a empty canvas
plotIndex = true;

var replot = function(){
  chart = new Chart(ctx, config);
}

$(window).scroll(function(){
  if(plotIndex){
    replot();
    plotIndex = false;
  }
});
