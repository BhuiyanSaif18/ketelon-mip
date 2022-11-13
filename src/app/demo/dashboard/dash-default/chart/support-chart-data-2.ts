export class SupportChartData2 {
  public static supportChartData = {
    chart: {
      type: 'area',
      height: 100,
      sparkline: {
        enabled: true
      }
    },
    colors: ['#03CC83'],
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    series: [{
      data: [0, 7, 3, 15, 10, 5, 10]
    }],
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: (seriesName) => 'Feedbacks'
        }
      },
      marker: {
        show: false
      }
    }
  };
}
