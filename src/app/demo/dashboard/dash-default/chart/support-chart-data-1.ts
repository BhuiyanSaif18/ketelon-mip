export class SupportChartData1 {
  public static supportChartData = {
    chart: {
      type: 'area',
      height: 100,
      sparkline: {
        enabled: true
      }
    },
    colors: ['#4680ff'],
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    series: [{
      data: [0, 7, 23, 15, 9, 5, 10]
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
          formatter: (seriesName) => 'Interviews '
        }
      },
      marker: {
        show: false
      }
    }
  };
}
