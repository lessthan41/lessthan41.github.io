// Data
var datasets = [{
  data: [
    90, 90, 90, 90, 80, 80, 80, 80, 70
  ],
  backgroundColor: [
    'rgb(238, 63, 63)', //red
    'rgb(255, 159, 64)', //orange
    'rgb(255, 205, 86)', //yellow
    'rgb(75, 192, 192)', //green
    'rgb(54, 162, 235)', //blue
    'rgb(63, 136, 72)', //dark green
    'rgb(102, 226, 118)', //light green
    'rgb(142, 245, 155)', //light green 2
    'rgb(232, 235, 106)', //yellow 2
  ]
}];

var labels = [
  'HTML&CSS',
  'JavaScript',
  'Python',
  'C++',
  'R',
  'Unity',
  'ArcMap',
  'SQL',
  'JAVA',
];

// Options
if($(window).width() < 574){
  var label = function(tooltipItem) {
    var char = tooltipItem.yLabel + '%';
    return char;
  }
}
else{
  var label = function(tooltipItem) {
    var char = tooltipItem.xLabel + '%';
    return char;
  }
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
    //  Do Not Show Label
    legend: {
      display: false
    },
    tooltips: {
      callbacks: {
        label: label
      },
      yAlign: 'center',
      xAlign: 'left'
    },

    // Canvas Padding
    layout: {
      padding: {
        left: 10,
        right: 20,
        top: 16,
        bottom: 5
      }
    },

    // Axis Name and Range
    scales: {
      xAxes: [{
        // x-axis Name
        scaleLabel: {
          display: true,
          labelString: 'Percentage(%)',
          fontSize: 13
        },
        ticks:{
          min: 0,
          max: 100
        }
      }],

      yAxes: [{
        maxBarThickness: 25
      }]
    },

    // Animation Duration
    animation: {
      duration: 2000
    }
  }
};

if($(window).width() < 574){
  config['type'] = 'bar';
  config['options']['tooltips']['yAlign'] = 'bottom';
  config['options']['tooltips']['xAlign'] = 'center';
  config['options']['layout']['padding'] = {top: 40}
  config['options']['scales']['xAxes'][0]['ticks']['fontSize'] = 7;
  config['options']['scales']['xAxes'][0]['scaleLabel']['display'] = false;
  config['options']['scales']['yAxes'] = [{
    // y-axis Name
    scaleLabel: {
      display: true,
      labelString: 'Percentage(%)',
      fontSize: 13
    },
    ticks:{
      min: 0,
      max: 100,
    }
  }]
}

// -------------------------------------------

// Start to Plot
var ctx, chart, plotIndex;
ctx = document.getElementById('chart-area');
ctx.style.borderRadius = '5px';
ctx.style.backgroundColor = 'rgb(246, 249, 243)';
ctx = ctx.getContext('2d');
chart = new Chart(ctx, config);
chart.reset(); // create a empty canvas
plotIndex = true;

function replot(){
  chart = new Chart(ctx, config);
}

// Check if Canvas is Inside the Range of Screen
function isOnScreen(){
    var currentPosition = $('#chart-area').offset().top + $('#chart-area').height()/2; // top + bot/2 = mid
    var screenTop = $(window).scrollTop();
    var screenBottom = $(window).scrollTop() + $(window).height();
    return (currentPosition > screenTop && currentPosition < screenBottom) ? true : false;
}
// After Loading Website, Check Canvas Replot or not
$(window).scroll(function(){
  if(isOnScreen() && plotIndex){
    replot();
    plotIndex = false;
  }
});

// if window resize replot
$(window).resize(function(){
    chart.destroy();
    config['options']['animation']['duration'] = 0;
    replot();
})
