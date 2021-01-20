<template>
    <div>
        <md-progress-spinner v-if="loading" :md-diameter="200" :md-stroke="20" md-mode="indeterminate"></md-progress-spinner>
        <div class="container" v-else>
            <md-table style="width: 950px;" v-model="tasks" md-card md-fixed-header @md-selected="onSelect">
            <md-table-toolbar>
                <h1 class="md-display-1 title">Minhas Tarefas</h1>
                <md-field md-clearable class="md-toolbar-section-end">
                <md-input
                placeholder="Procurar por tarefa"
                v-model="search"
                @input="searchOnTable"/>
                </md-field>
            </md-table-toolbar>

            <md-table-toolbar slot="md-table-alternate-header" id="tr" slot-scope="{ count }">
                <div class="md-toolbar-section-start">{{ getAlternateLabel(count) }}</div>

                <div class="md-toolbar-section-end">
                    <md-button class="md-icon-button" @click="DeleteAllTasks">
                        <md-icon>delete</md-icon>
                    </md-button>
                    <md-button class="md-icon-button" @click="UpdateAllTasksCompleted">
                        <md-icon>check_circle_outline</md-icon>
                    </md-button>
                    <md-button class="md-icon-button" @click="UpdateAllTasksPending">
                        <md-icon>panorama_fish_eye</md-icon>
                    </md-button>
                    <md-button class="md-icon-button" @click="UpdateAllTasksProgress">
                        <md-icon>running_with_errors</md-icon>
                    </md-button>
                </div>
            </md-table-toolbar>

            <md-table-row style="width: 950px;" id="rows" slot="md-table-row" slot-scope="{ item }" md-selectable="multiple">
                <md-table-cell id="rows" md-sort-by="name" md-label="Ocorrência" class="left">{{ item.task }}</md-table-cell>
                <md-table-cell id="rows" md-label="Solicitante" md-sort-by="solicitante" class="left">{{ item.requester }}</md-table-cell>
                <md-table-cell id="rows" md-label="Tipo" md-sort-by="type" class="left">{{ item.type }}</md-table-cell>
                <md-table-cell id="rows" md-label="Prazo" md-sort-by="prazo" class="left">{{ item.term.split('-').reverse().join('/') }}</md-table-cell>
                <md-table-cell id="rows" md-label="Status" md-sort-by="status" class="left">{{ item.status }}</md-table-cell>
                <md-table-cell id="rows" md-label="Ações" md-sort-by="acoes" class="left">
                    <span v-if="item.status === 'Concluido' ">
                        <button class="btn-action" @click="UpdateTasksPending(item)">
                            <md-icon>check_circle_outline</md-icon> 
                        </button>
                        <button class="btn-action" @click="DeleteTaks(item)">
                            <md-icon>delete_forever</md-icon>
                        </button>
                    </span>
                    <span v-else-if="item.status === 'Em andamento' ">
                        <button class="btn-action" @click="UpdateTasksCompleted(item)">
                            <md-icon>running_with_errors</md-icon> 
                        </button>
                    </span>
                    <span v-else>
                        <button class="btn-action"  @click="UpdateTasksProgress(item)">
                            <md-icon>panorama_fish_eye</md-icon>
                        </button>
                    </span>
                </md-table-cell> 
            </md-table-row>
            </md-table>
            <InfoCard :key="teste" />
        </div>
    </div>    
</template>

<script>
import axios from 'axios';
import InfoCard from '../components/InfoCard';

const toLower = (text) => {
    return text.toString().toLowerCase();
};

const searchByName = (items, term) => {
    if (term) {
        return this.tasks.filter((item) => toLower(item.task).includes(toLower(term)));
    }
  return items;
};

  export default {
    name: 'TableMultiple',
    data: () => ({
      selected: [],
      tasks: [],
      loading : false,
      teste: 0
    }),
    methods: {
        onSelect (items) {
            this.selected = items
        },
         searchOnTable() {
            this.searched = searchByName(this.tasks, this.search);
        },
        getAlternateLabel (count) {
            let plural = ''

            if (count > 1) {
                plural = 's'
            }
            return `${count} user${plural} selected`
        },
        UpdateTasksCompleted(item){
            const params = {
                ...item,
                status: "Concluido"
            }
          
            this.loading = true;
            axios.put(`${process.env.VUE_APP_API_VARIABLE}/tasks/${item.id}`, params);
            this.UpdateTasks()
        },
        UpdateTasksPending(item){
            const params = {
                ...item,
                status: "Pendente"
            }
            this.loading = true;
            axios.put(`${process.env.VUE_APP_API_VARIABLE}/tasks/${item.id}`, params);
            this.UpdateTasks()
        },
         UpdateTasksProgress (item)  {
            const params = {
                ...item,
                status: "Em andamento"
            } 
            this.loading = true;
            axios.put(`${process.env.VUE_APP_API_VARIABLE}/tasks/${item.id}`, params);
            this.UpdateTasks()
        }, 
        UpdateAllTasksPending (){
            this.loading = true;
          
            axios.put(`${process.env.VUE_APP_API_VARIABLE}/tasks/all/pending`, this.selected).then(()=>{
                setTimeout(() => {
                    this.UpdateTasks()
                }, 2000);
            })
            
        },  UpdateAllTasksProgress (){
            this.loading = true;
          
            axios.put(`${process.env.VUE_APP_API_VARIABLE}/tasks/all/progress`, this.selected).then(()=>{
                setTimeout(() => {
                    this.UpdateTasks()
                }, 2000);
            })
            
        },
        UpdateAllTasksCompleted (){
            this.loading = true;
          
            axios.put(`${process.env.VUE_APP_API_VARIABLE}/tasks/all/completed`, this.selected).then(()=>{
                setTimeout(() => {
                    this.UpdateTasks()
                }, 2000);
            })
            
        },
        DeleteTaks(item){
            this.loading = true;
            axios.delete(`${process.env.VUE_APP_API_VARIABLE}/tasks/delete/${item.id}`);
            this.UpdateTasks()
        },
        DeleteAllTasks(){
            this.loading = true;
            axios.post(`${process.env.VUE_APP_API_VARIABLE}/tasks/delete/all`, this.selected).then(() =>{
                setTimeout(() => {
                    this.UpdateTasks()
                }, 2000);
            })
        },
        UpdateTasks(){
           setTimeout(() => {
                axios.get(`${process.env.VUE_APP_API_VARIABLE}/tasks/1`).then(res=>{
                    this.loading = false;
                    this.tasks = res.data;
                    this.reload()
                })
           }, 1000);
        },
        reload(){
            this.teste += 1;
        }
    },
    created: function (){
        axios.get(`${process.env.VUE_APP_API_VARIABLE}/tasks/1`).then(res=>{
            this.tasks = res.data;
        }).catch(function(error){
            console.log(error)
        })  
    },
    components:{
        InfoCard
    }
  }
</script>

<style lang="scss" scoped>
    .md-table + .md-table {
        margin-top: 90px
    }
    .container{
        display: flex;
    }
    .left{
        text-align: left;
    }
    #rows{
       padding: 15px 0;
    }
    #tr{
        background-color:#4d8ffe;
    }
    .title{
        margin-right: 180px;
    #card{
        min-width: 10px;
        background-color: blue;
        display: flex;
        margin-right: 15px;
    }    
    }.btn-action{
        border: 0;
        background-color: transparent;
        cursor: pointer;
        padding: 0;
        margin: 0 2px;
    }
</style>