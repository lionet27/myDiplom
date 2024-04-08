<template>
    <li :class="{ 'overdue': !task.done && isOverdue(task.dateEnd) }" @click="toggleButtons" >
      
         {{task.tasktext}} до {{ task.dateEnd }}
     
      <div v-if="showButtons">
        <button class="button" @click="doingStatusTask(task.tasktext)">К выполнению/в процессе</button>
        <button class="button" @click="doneTask(task.tasktext)">Выполнена</button>
        <button class="button" @click="editTask(task.tasktext)">Редактировать</button>
        <button class="button" @click="deleteTask(task.tasktext)">Удалить</button>
      </div>
    </li>
  </template>
  
  <script>
   import { mapState, mapGetters, mapMutations, mapActions,mapModules} from "vuex";
  export default {
    props: {
      task: Object
    },
    data() {
      return {
        showButtons: false
      };
    },
    computed: {
            ...mapState({
                tasks:(state)=>state.TasksDaughter.tasks,
            }),
    },
       
    methods: {
       
        deleteTask(tasktext) {
            const index = this.tasks.findIndex(task => task.tasktext === tasktext);
            if (index !== -1) {
              this.tasks.splice(index, 1);
            } else {
              console.error('Task with tasktext ' + tasktext + ' not found');
            }
        },
        doingStatusTask(tasktext) {
          const index = this.tasks.findIndex(task => task.tasktext === tasktext);
              if (index !== -1) {
                this.tasks[index].doing=!this.tasks[index].doing;
              } else {
                console.error('Task with tasktext ' + tasktext + ' not found');
              }
        },
        doneTask(tasktext){
          const index = this.tasks.findIndex(task => task.tasktext === tasktext);
              if (index !== -1) {
                  this.tasks[index].done=true;
              } else {
                console.error('Task with tasktext ' + tasktext + ' not found');
              }
        },
        
        editTask(tasktext){
          const index = this.tasks.findIndex(task => task.tasktext === tasktext);
              if (index !== -1) {
                  this.tasks[index].tasktext=prompt('Измените задачу?',this.tasks[index].tasktext);
                  this.tasks[index].dateEnd=prompt('Измените дату?',this.tasks[index].dateEnd);
                  this.tasks[index].important=confirm(`Сейчас статус важности этой задачи:${this.tasks[index].important}. Если считаете эту задачу важной, нажмите OK, если нет, то Отмена`);
                  this.tasks[index].urgently=confirm(`Сейчас статус  срочности этой задачи:${this.tasks[index].urgently}. Если считаете эту задачу срочной, нажмите OK, если нет, то Отмена`);
                  this.tasks[index].points=parseInt(prompt('Измените количество баллов за выполнение задачи?',this.tasks[index].points));
              } else {
                console.error('Task with tasktext ' + tasktext + ' not found');
              }
        },

      toggleButtons() {
        this.showButtons = !this.showButtons;
      },
      isOverdue(dateEnd) {
            const currentDate = new Date();
            const end = new Date(dateEnd);
            return currentDate > end;
        }


    }
  };
  </script>
  
  <style scoped>
    .overdue {
        color: red;
        }
  /* .taskItem{

  } */

    .button{
        background-color: rgb(191, 187, 182);
        border-radius: 2%;
        margin:1px;
        border: solid 1px rgb(102, 53, 11);
        &:hover{
            background-color: rgb(158, 226, 232);
            
        }
    }
  </style>
  