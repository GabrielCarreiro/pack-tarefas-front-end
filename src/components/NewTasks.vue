<template>
    <div>
        <md-dialog :md-active.sync="showDialog">
            <md-dialog-title>Nova tarefa</md-dialog-title>
            <md-tabs md-dynamic-height>
                <md-tab md-label="Cadastro">
                    <div class="md-layout md-gutter">
                        <div class="md-layout-item md-small-size-100">
                            <md-field >
                                <label for="task-name">Nome da tarefa</label>
                                <md-input name="task-name" v-model="task" id="task-name" autocomplete="given-name" :disabled="sending" />
                            </md-field>
                        </div>                     
                        <div class="md-layout-item md-small-size-100">
                            <md-field>
                                <label for="movie">Usuarios</label>
                                <md-select v-model="requester">
                                    <md-option v-for="user in users" :key="user.id_user" :value="user.id_user">{{user.name}}</md-option>
                                </md-select>
                            </md-field>
                        </div>
                    </div>
                    <div class="md-layout md-gutter">
                        <div class="md-layout-item md-small-size-100">
                            <md-field>
                                <label for="movie">Tipo</label>
                                <md-select v-model="type" name="movie" id="movie">
                                    <md-option value="Relatório">Relatório</md-option>
                                    <md-option value="Interno">Interno</md-option>
                                    <md-option value="Externo">Externo</md-option>
                                    <md-option value="Emergencial">Emergencial</md-option>
                                    <md-option value="Financeiro">Financeiro</md-option>
                                </md-select>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100">                      
                            <md-datepicker v-model="term" />      
                        </div>
                        <div class="md-layout-item md-small-size-100">
                            <md-field>
                                <label for="movie">Status</label>
                                <md-select v-model="status" name="movie" id="movie">
                                    <md-option value="Pendente">Pendente</md-option>
                                    <md-option value="Em andamento">Em andamento</md-option>
                                    <md-option value="Concluido">Concluido</md-option>
                                </md-select>
                            </md-field>
                        </div>
                    </div>
                </md-tab>
            </md-tabs>
            <md-dialog-actions>
                <md-button class="md-primary" @click="handleClose()">Cancelar</md-button>
                <md-button class="md-primary" @click="handleSaveTask">Salvar</md-button>
            </md-dialog-actions>
        </md-dialog>
        <button class="btn-task"  @click="showDialog = true">
            Nova tarefa 
            <md-icon>add_task</md-icon> 
        </button>
        <md-dialog-alert
            :md-active.sync="second"
            md-title="Concludo"
            md-content="Tarefa cadastrada com sucesso" />
    </div>
</template>

<script>
import axios from 'axios';

  export default {
    name: 'DialogCustom',
    data: () => ({
      showDialog: false,
      users : [],
      task: '',
      requester : '',
      type: '',
      term : '',
      status : '',
      second: false
    }),
    methods: {
        handleClose(){
            this.showDialog = false
            this.$router.go(0);
        },
        handleSaveTask (){
            const params = {
                "user": this.requester,
                "task": this.task,
                "type": this.type,
                "term": this.term,
                "status": this.status,
                "requester": "Gabriel Carreiro"
            }
            axios.post(`${process.env.VUE_APP_API_VARIABLE}/tasks`, params).then(res =>{
                console.log(res, 'success')
                this.second = true;
                this.task = '',
                this.requester = '',
                this.type = '',
                this.term = '',
                this.status = ''
                   this.reload()
                   
            }).catch(function(error){
                console.log(error)
            })
        }
    },
    props:{
        reload: Function
    },
    created: async function(){
       await axios.get(`${process.env.VUE_APP_API_VARIABLE}/users`).then(res => {
            this.users = res.data;
        }).catch(function(error){
            console.log(error)
        })    
    }
  }
</script>

<style lang="scss" scoped>
  .md-dialog.md-dialog-container {
        max-width: 768px;
  }.btn-task{
        border: 0;
        margin-left: 10px;
        margin-top: 20px;
        margin-bottom: 10px;
        height: 32px;
        width: 140px;
        font-size: 18px;
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        color:#525252;
        cursor: pointer;
    }
</style>