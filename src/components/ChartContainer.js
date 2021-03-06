import { Doughnut } from "vue-chartjs";
import axios from 'axios';

export default {
    extends: Doughnut,
    data: () => ({
        chartdata: {
        labels: ["Concluido" ,"Em andamento", "Pendente" ],
        datasets: [
            {
                label: "Data One",
                backgroundColor: ["#1ab3f0", "#3ec762", "#a63d4a"], 
                data: []
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
        axios.get(`${process.env.VUE_APP_API_VARIABLE}/tasks`).then(res => {
            let completed = 0;
            let progress = 0;
            let pending = 0;

            res.data.map( task=>{
                if(task.status === "Concluido"){
                    completed += 1;
                }
                if(task.status === "Em andamento"){
                   progress += 1;
                }
                if(task.status === "Pendente"){
                    pending += 1;
                }
            })
            this.chartdata.datasets[0].data.push(completed, progress, pending)
        }).catch(function(error){
            console.log(error)
        })
      
        setTimeout(() => {
            this.renderChart(this.chartdata, this.options);
        }, 1000)  
    }
};


