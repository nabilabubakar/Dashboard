//SIDEBAR TOOGLE

var sidebarOpen = flase;
var sidebar = document.getElementById["sidebar"];

function openSidebar() {
    if(!sidebarOpen) {
        sidebar.classList.add["sidebar-responsive"];
        sidebarOpen = true;
    }
}

function closeSidebar() {
    if(sidebarOpen) {
        sidebar.classList.remove["sidebar-responsive"];
        sidebarOpen = false;
    }
}

//BAR CHART

var barChartOptions = {
    series : [{
        data : [10, 8, 6, 4, 2]
    }],
    chart: {
        type: 'bar',
        height: 350,
        toolbar: {
            show: false
        },
    },
    colors:[
        "#246dec", 
        "#cc3c43",
        "#367952", 
        "#f5b74f",
        "#4f35a1"
    ],
    plotOptions: {
        bar: {
            distributed: true,
            borderRadius: 4,
            horizontal: flase,
            columnWidth: '40%',
        }
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: flase
    },
    xaxis: {
        categories: ["Laptops", "Phone", "Monitor", "Headphones", "Camera"],
    },
    yaxis: {
        title:{
            text: "Count"
        }
    }
};

var barchart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
barchart.render();

//AREA CHART
var areaChartsOptions = {
    series: [{
    name: 'Purchase Orders',
    data: [31, 48, 28, 51, 42, 109, 100]
  }, {
    name: 'Sales Orders',
    data: [11, 32, 45, 32, 34, 52, 41]
  }],
    chart: {
    height: 350,
    type: 'area',
    toolbar: {
        show: false,
    },
  },
  colors : ["#4f35al", "#246dec"],
  dataLabels: {
    enable: false,
  },
  stroke: {
    curve: 'smooth'
  },
  fill: {
    type:'solid',
    opacity: [0.35, 1],
  },
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  markers: {
    size: 0
  },
  yaxis: [
    {
      title: {
        text: 'Purchase Orders',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Sales Orders',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  }
  };

  var areachart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
  chart.render();