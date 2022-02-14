<script>
import axios from 'axios'
import SERVER from '@/api/index.js'
import {Line} from 'vue-chartjs'
export default {
    name: 'Month',
    extends: Line,
    data() {
        return {
        datacollection: {
          //Data to be represented on x-axis
        labels: [], 
        datasets: [
            {
            label: '월별',
            backgroundColor: 'LightSkyBlue',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
              //Data to be represented on y-axis
            data: []
            }
            ]
        },
        options: {
        scales: {
        yAxes: [{
        ticks: {
                beginAtZero: true
            },
            gridLines: {
                display: true
            }
            }],
            xAxes: [ {
            gridLines: {
            display: false
            }
            }]
        },
        legend: {
            display: true
        },
        responsive: true,
        maintainAspectRatio: false
        }
        };
    },

    created() {
        
    
    },
    async mounted(){
      this.getMonth();
      //this.renderChart(this.chartdata, this.options);
    },
    methods:{
    getMonth: function(){
      axios({
        method: 'get',
        url:SERVER.URL + SERVER.ROUTES.getMonth,
        headers:{
          'access-token': `${this.$store.state.authToken}`
        },
      })
      .then(res=> {
        console.log("month");
        console.log(res);
        console.log(res.data.month_list);
        this.datacollection.labels = res.data.month_list;
        this.datacollection.datasets[0].data = res.data.month_count;
        this.renderChart(this.datacollection, this.options);
      })
    }
  }
};
</script>

<style lang="scss" scoped>

</style>