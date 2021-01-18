<template>
    <div class="main">
        <md-progress-spinner v-if="loading" :md-diameter="400" :md-stroke="90" md-mode="indeterminate"></md-progress-spinner>
        <md-table
        v-else
        v-model="searched"
        md-sort="name"
        md-sort-order="asc"
        md-card
        md-fixed-header>
            <md-table-toolbar>
                <div class="md-toolbar-section-start">
                    <span class="md-headline">Tarefas</span>
                </div>
                <md-field md-clearable class="md-toolbar-section-end">
                    <md-input
                    placeholder="Procurar por tarefa"
                    v-model="search"
                    @input="searchOnTable"/>
                </md-field>
            </md-table-toolbar>
            <md-table-empty-state
            md-label="Tarefa não encontrada"
            :md-description="`Nenhuma tarefa encontrada com o termo '${search}'. Tente novamente ou crie um nova tarefa`">
                <NewTasks/>
            </md-table-empty-state>
            <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="Usuário" md-sort-by="usuario">
                    <md-avatar>
                        <img :src="item.photo" />
                    </md-avatar>
                </md-table-cell>
                <md-table-cell md-label="Nome" md-sort-by="nome" class="left">
                    <span class="md-body-2">
                        {{ item.name }}
                    </span>
                </md-table-cell>
                <md-table-cell
                md-label="Ocorrência"
                md-sort-by="ocorrencia"
                class="left">
                    <span class="md-body-2 text-bold">
                      {{item.task}}
                    </span>
                    <br/> 
                    <span class="md-caption" > 
                         <p> Solicitante: {{ item.requester }} </p>
                    </span>
                </md-table-cell>
                <md-table-cell md-label="Prazo" md-sort-by="prazo">
                    <span class="md-body-2">
                        {{ item.term }}
                    </span>
                </md-table-cell>
                <md-table-cell md-label="Status" md-sort-by="status" class="left">
                    <span class="md-body-2">
                        {{ item.status }}
                    </span>
                </md-table-cell>
            </md-table-row>
        </md-table>
    </div>
</template>

<script>

import NewTasks from './NewTasks';

const toLower = (text) => {
    return text.toString().toLowerCase();
};

const searchByName = (items, term) => {
    if (term) {
        return items.filter((item) => toLower(item.task).includes(toLower(term)));
    }
  return items;
};

export default {
    name: "TableSearch",
    data: () => ({
        search: null,
        searched: [],
        loading : true
    }),
    props:{
        tasks: Array
    },
    methods: {
        newUser() {
            window.alert("Noop");
        },
        searchOnTable() {
            this.searched = searchByName(this.tasks, this.search);
        },
    },
    created() {
        setTimeout(() => {
             this.searched = this.tasks;
             this.loading = false;
        }, 1000);
    },
     components:{
        NewTasks
    }
};

</script>

<style lang="scss" scoped>
    .md-field {
        max-width: 700px;
    }
    .main {
        max-width: 870px;
    }
    .left {
        text-align: left;
        height: 80px;
    }
    .text-bold {
        font-weight: bold;
    }

</style>