<template>
    <div class="page-container">
        <md-progress-spinner v-if="render" :md-diameter="400" :md-stroke="70" md-mode="indeterminate"></md-progress-spinner>
        <md-app v-else>
            <md-app-content>
                <div class="md-layout">
                    <div class="md-layout-item">
                        <md-progress-spinner v-if="this.loading" :md-diameter="40" :md-stroke="10" md-mode="indeterminate"></md-progress-spinner>
                        <span v-else class="md-display-2"> {{this.userTasksPending}} </span> <br/>
                        <span class="md-headline">Tarefas pendentes</span> 
                    </div>                   
                    <div class="md-layout-item">
                        <md-progress-spinner v-if="this.loading" :md-diameter="40" :md-stroke="10" md-mode="indeterminate"></md-progress-spinner>
                        <span v-else class="md-display-2"> {{this.userIncludeTasks}} </span> <br/>
                        <span class="md-headline">Tarefas que faço parte</span> 
                    </div>
                    <div class="md-layout-item">
                        <md-progress-spinner v-if="this.loading" :md-diameter="40" :md-stroke="10" md-mode="indeterminate"></md-progress-spinner>
                        <span v-else class="md-display-2"> {{this.userTasksRequester}} </span> <br/>
                        <span class="md-headline">Tarefas que solicitei</span> 
                    </div>           
                </div>
            </md-app-content>
        </md-app>
        <div class="btn-task"> 
           <NewTasks :reload="searchAllTasks" />
        </div>
        <div class="md-layout"> 
            <TableTasks :tasks="this.tasks.te" />
            <div class="chart"> 
                <div class="md-headline title-chart"> Resumo por status <md-icon>add_task</md-icon> </div>
                <Doughnut class="chat-component" :tasks="this.tasks"/>
                <div class="chart-footer">Total de tarefas: {{tasks.te.length}}</div>
            </div>
        </div>
    </div>
</template>

<script>

import TableTasks from '../components/TableTasks';
import Doughnut from '../components/Doughnut';
import NewTasks from '../components/NewTasks';
import axios from 'axios';
import Vue from 'vue'

export default {
    name: "TableBasic",
    data(){
        return{
            tasks: [],
            loading : false,
            userIncludeTasks : 0,
            userTasksRequester : 0,
            userTasksPending : 0,
            render: true
        }
    },
    created: function(){
            this.searchAllTasks();
    },
     methods: {
        async searchAllTasks(){
            this.render = true
            this.loading = true; 
            await axios.get(`${process.env.VUE_APP_API_VARIABLE}/tasks`).then(res => {
                Vue.set(this.tasks, 'te', res.data)
                this.filtersTask()
                this.render = false
            }).catch(function(error){
                console.log(error)
            })
        },
        filtersTask (){
            this.tasks.te.map( task =>{
                if(task.user_id === 1) {
                    this.userIncludeTasks += + 1;
                }
                if(task.requester === "Gabriel Carreiro"){
                    this.userTasksRequester += + 1;
                }
                if(task.user_id === 1 && task.status === "Pendente"){
                    this.userTasksPending += + 1;
                }
            })  
            this.loading = false;
        },
    },      
    components:{
        TableTasks,
        Doughnut,
        NewTasks
    }
}
</script>

<style lang="scss" scoped>
    .md-layout-item {
        height: 65px;
    }
    .chart{
        border: 1px solid  #e0e0e0;
        width: 30%;
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        

    
    }.title-chart{
        margin-bottom:15px;
        margin-top: 10px;
        color:#525252;
        padding-bottom: 10px;
        padding-left: 15px;
    }
    .btn-task{
        margin-left: 5px;
        margin-top: 20px;
        margin-bottom: 10px;
        height: 32px;
        width: 140px;
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
    }.chart-footer{
        margin-top: 25px;
        font-size: 18px;
        color:#686868;
        padding-left: 15px;
        text-align: left;
    }
</style>