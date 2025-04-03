import { defineComponent, h } from 'vue';

import { GChart } from 'vue-google-charts';

export const type = 'CandlestickChart';

export var data = []; /*[
  ['day', 'a', 'b', 'c', 'd'],
  /*['Mon', 20, 28, 38, 45],
  ['Tue', 31, 38, 55, 66],
  ['Wed', 50, 55, 77, 80],
  ['Thu', 50, 77, 66, 77],
  ['Fri', 15, 66, 22, 68],
];*/

export const options = {
  legend: 'none',
  width: window.innerWidth * 0.5,
  height: window.innerHeight * 0.66,
};

export default defineComponent({
  name: 'GoogleChart',
  props: ['chartData'],
  watch: {
    chartData: function(newValue) {
      console.log('Prop Change in chartData!');
      const newChartData = newValue.toSpliced(0,0,["day","a","b","c","d"]);
      data = newChartData;
    }
  },
  components: {
    GChart,
  },
  setup() {
    return () =>
      h(GChart, {
        data,
        options,
        type,
      });
  },
});
