import { Doughnut } from "vue-chartjs";

export default {
    extends: Doughnut,
    data: () => ({
        chartdata: {
        labels: ["Concluido" , "Pendente", "Em andamento"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#1ab3f0", "#3ec762", "#a63d4a"], 
            data: [10, 5, 7]
          }
        ]
      },
     
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }),
    props:{
        tasks: Array
    },
    mounted() {
        this.renderChart(this.chartdata, this.options);
    }
};
