<template>
    <div class="page-container">
        <md-app>
            <md-app-toolbar class="md-primary" md-elevation="2">
                <md-button
                    class="md-icon-button"
                    @click="toggleMenu"
                    v-if="!menuVisible">
                    <md-icon>menu</md-icon>
                </md-button>
                <span class="md-title"> Pack Tarefas</span>
            </md-app-toolbar>
            <md-app-drawer :md-active.sync="menuVisible" md-persistent="mini">
                <md-toolbar class="md-transparent" md-elevation="0">
                    <md-icon>menu_open</md-icon>
                    <span class="md-headline">Menu</span>
 
                    <div class="md-toolbar-section-end">
                        <md-button class="md-icon-button md-dense" @click="toggleMenu">
                            <md-icon>keyboard_arrow_left</md-icon>
                        </md-button>
                     </div>
                </md-toolbar>
                <md-list>
                    <router-link to="/">
                        <md-list-item class="link">      
                            <md-icon>wysiwyg</md-icon>
                            <span class="md-list-item-text" >Todas Tarefas</span>
                        </md-list-item>
                    </router-link>
                    <router-link to="/tarefas">
                        <md-list-item class="link">
                            <md-icon>how_to_reg</md-icon>
                            <span class="md-list-item-text">Minhas Tarefas</span>
                        </md-list-item>
                    </router-link>
                    <md-list-item class="link">
                        <md-icon>settings</md-icon>
                        <span class="md-list-item-text">Configuração</span>
                    </md-list-item>
                    <md-list-item class="link">
                        <md-icon>error</md-icon>
                        <span class="md-list-item-text">Ajuda</span>
                    </md-list-item>
                    <md-list-item class="link">
                        <md-icon>exit_to_app</md-icon>
                        <span class="md-list-item-text">Sair</span>
                    </md-list-item>
                </md-list>
            </md-app-drawer>
            <md-app-content>
                <router-view></router-view>
            </md-app-content>
        </md-app>
    </div>
</template>

<script>


export default {

  name: "PersistentMini",
  data: () => ({
    menuVisible: false,
  }),
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
  },
};
</script>

<style lang="scss" scoped>
.md-app {
  height: 650px;
  border: 1px solid rgba(#000, 0.12);
  background-color: red;
}

// Demo purposes only
.md-drawer {
  width: 200px;
  max-width: calc(100vw - 125px);
}
.link{
    cursor: pointer;
}

</style>