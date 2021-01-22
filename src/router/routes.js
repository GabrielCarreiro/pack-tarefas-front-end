import Tasks from '../views/Tasks.vue';
import TasksUser from '../views/TasksUser.vue';
import Contact from '../views/Contact.vue'

const routes = [
    {
        path: '/',
        name: 'Tarefas',
        component: Tasks
    },
    {
        path: '/tarefas',
        name: 'Tarefas Usuario',
        component: TasksUser 
    },{
        path: '/ajuda',
        name: 'Contato',
        component: Contact 
    }
  ]

  export default routes;