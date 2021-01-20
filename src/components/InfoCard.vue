<template>
    <div id="container">
        <div  id="title" class="md-title">Resumo minhas tarefas <md-icon>bubble_chart</md-icon> </div> 
        <div id="chart">
            <Pie />
        </div>
        <div class="info-text">
            <span class="md-title color"> Descrição</span>
            <span class="md-subheading color"> Total </span>
        </div>     
        <div class="info-text">
            <span class="md-subheading color"> Total de tarefas</span>
            <span class="md-subheading color total"> {{total}} </span>
        </div>
        <div class="info-text">
            <span class="md-subheading color"> Tarefas concluidas</span>
            <span class="md-subheading color total"> {{completed}}</span>
        </div>    
        <div class="info-text">
            <span class="md-subheading color"> Tarefas pendentes</span>
            <span class="md-subheading color total"> {{pending}}</span>
        </div>    
        <div class="info-text">
            <span class="md-subheading color"> Tarefas em andamento</span>
            <span class="md-subheading color total"> {{progress}}</span>
        </div>        
    </div>
</template>

<script>
import Pie from './Pie';
import axios from 'axios';
import Vue from 'vue';

export default {
    name: 'InfoCard',
    data(){
        return{
            tasks: [],
            completed : 0,
            pending: 0,
            progress: 0,
            total: 0
        }
    },
    created: function(){
        axios.get(`${process.env.VUE_APP_API_VARIABLE}/tasks/1`).then(res => {
                Vue.set(this.tasks, 'data', res.data)
                this.filterTasks()
            }).catch(function(error){
                console.log(error)
            })
    },methods:{
        filterTasks(){
            this.tasks.data.map( task =>{
                if(task.status === "Concluido"){
                    this.completed += 1;
                }

                if(task.status === "Em andamento"){
                    this.progress += 1;
                }

                if(task.status === "Pendente"){
                    this.pending += 1;
                }
            })
            this.total = this.tasks.data.length
        }
    },
    components: {
        Pie
    }
}
</script>

<style lang="scss" scoped>

    #container{
        border: 1px solid  #e0e0e0;
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        min-width: 250px;
        max-height: 550px;
        margin: 0 auto;
        padding: 10px;
        display: block;
    #title{
        display: flex;
        justify-content: center;
    }
    }#chart{
        width: 240px;
        padding: 10px 0;
        margin-bottom: 15px;
    }
    .info-text{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid  #dfdfdf;
        padding: 8px 0;
    }
    .color{
         color:#5f5f5f;
    }.total{
        margin-right: 5px;
    }
</style>




