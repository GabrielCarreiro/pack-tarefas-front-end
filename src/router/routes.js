import Tasks from '../views/Tasks.vue';
import TasksUser from '../views/TasksUser.vue';

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
    }
  ]

  export default routes;