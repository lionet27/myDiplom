<template>
   <div class="EisenhowerMatrixComponent center">

        <h1 class="EisenhowerMatrixComponent__title">Матрица Эйзенхауэра</h1>
        <div class="EisenhowerMatrix" >
            <p></p>
            <p class="EisenhowerMatrix__name">Срочные задачи</p>
            <p class="EisenhowerMatrix__name">Не срочные задачи</p>
            <p class="EisenhowerMatrix__name">Важные <br>
                задачи</p>
        
                <ul class="EisenhowerMatrixItem__tasks importantUrgentTasks" >
                    <TaskDadItemComponent  v-for="(task, index) in importantUrgentTasks" :key="index" :task="task" /> 
                </ul>
                <ul class="EisenhowerMatrixItem__tasks importantNotUrgentTasks"  >
                    <TaskDadItemComponent  v-for="(task, index) in importantNotUrgentTasks" :key="index" :task="task" /> 
                </ul>
                <p class="EisenhowerMatrix__name">Не важные</p>
                <ul class="EisenhowerMatrixItem__tasks notImportantUrgentTasks"  >
                    <TaskDadItemComponent  v-for="(task, index) in notImportantUrgentTasks" :key="index" :task="task" />
            </ul>
                    
                <ul class="EisenhowerMatrixItem__tasks notImportantNotUrgentTasks" >
                    <TaskDadItemComponent  v-for="(task, index) in notImportantNotUrgentTasks" :key="index" :task="task" />
                </ul>
        
        </div>
    </div>
    <div class="kanbanComponent center">
        <h1 class="kanbanComponent__title center">Канбан доска</h1>
        <div class="kanban" >
        
            <p class="kanban__name">Нужно сделать</p>
            <p class="kanban__name">В процессе выполнения</p>
            <p class="kanban__name">Сделано</p>
        
                <ul class="kanban__tasks" >
                    <TaskDadItemComponent  v-for="(task, index) in toDoTasks" :key="index" :task="task" /> 
                </ul>
                <ul class="kanban__tasks"  >
                    <TaskDadItemComponent  v-for="(task, index) in doingTasks" :key="index" :task="task" />
                </ul>
                <ul class="kanban__tasks"  >
                    <li class="kanban__task" v-for="(task, index) in doneTasks" :key="index" @click="doneToDoingTask(task.tasktext)">{{ task.tasktext }}</li> 
                </ul>

        </div>
    </div>
</template>

<script>
    
    import TaskDadItemComponent from './TaskDadItemComponent.vue';
    import { mapState, mapGetters, mapMutations, mapActions,mapModules} from "vuex";

    export default {
        components: {
            TaskDadItemComponent,
        },
     
        data() {
            return {
                
            }
        }, 
       computed: {
            ...mapState({
                tasks:(state)=>state.TasksDad.tasks,
            }),
           
            importantUrgentTasks() {
            return this.tasks.filter(task => task.important==true && task.urgently==true && !task.done);
              
            },
            importantNotUrgentTasks() {
                return this.tasks.filter(task => task.important && !task.urgently && !task.done);
            },
            notImportantUrgentTasks() {
                return this.tasks.filter(task => !task.important && task.urgently && !task.done);
            },
            notImportantNotUrgentTasks() {
                return this.tasks.filter(task => !task.important && !task.urgently && !task.done);
            },
            toDoTasks(){
                return this.tasks.filter(task => !(!task.important && !task.urgently)&&!task.doing&&!task.done);
            },
            doingTasks(){
                return this.tasks.filter(task => task.doing&&!task.done);
            },
            doneTasks(){
                return this.tasks.filter(task => task.done);
            },
                             
        }, 
        methods: {  
            doneToDoingTask(tasktext){
        const index = this.tasks.findIndex(task => task.tasktext === tasktext);
            if (index !== -1) {
              if(this.tasks[index].done){
                this.tasks[index].done=false;
              }
            } else {
              console.error('Task with tasktext ' + tasktext + ' not found');
            }
            },
        }
    }
</script>

<style lang="scss" scoped>

.EisenhowerMatrixComponent{
    margin-bottom: 20px;
    &__title{
        text-align: center;
        font-family: Jost;
        font-size: 25px;
        margin-bottom: 10px;
    }
}
.EisenhowerMatrix{

    display: grid;
    grid-template-columns: auto 1fr 1fr;
    grid-template-rows: auto 1fr 1fr;
    
    
    &__name{
        font-size: 18px;  
    }

}
.EisenhowerMatrixItem__tasks{
    padding: 20px;
    border: solid 1px rgb(102, 53, 11);
}
.importantUrgentTasks{
    background-color: rgb(241, 90, 90);
}
.importantNotUrgentTasks{
    background-color: rgb(244, 228, 77);
}
.notImportantUrgentTasks{
    background-color: rgb(17, 181, 71);
}
.notImportantNotUrgentTasks{
    background-color: rgb(194, 188, 188);
}

.kanbanComponent{
        margin-bottom: 20px;
        &__title{
            text-align: center;
            font-family: Jost;
            font-size: 25px;
            margin-bottom: 10px; 
        }
    }
    .kanban{
       
        display: grid;
        grid-template-columns:1fr 1fr 1fr;
        grid-template-rows: auto 1fr;
        &__tasks{
            border: solid 1px rgb(220, 161, 34);
        }
        &__name{
            font-family: Jost;
            font-size: 22px;
        }
    }
    @media (max-width:1024px) {
    .EisenhowerMatrixComponent{
    margin-bottom: 15px;
    &__title{
        font-size: 22px;
        margin-bottom: 8px;
    }
}
.EisenhowerMatrix{
    &__name{
        font-size: 16px;  
    }
}
.EisenhowerMatrixItem__tasks{
    padding: 10px;
   
}
.kanbanComponent{
        margin-bottom: 15px;
        &__title{
            font-size: 22px;
            margin-bottom: 8px; 
        }
    }
    .kanban{
        &__name{
            font-size: 20px;
        }
    }
}
@media (max-width:767px) {
.EisenhowerMatrixComponent{
    margin-bottom: 10px;
    &__title{
        font-size: 20px;
        margin-bottom: 8px;
    }
}
.EisenhowerMatrix{
    &__name{
        font-size: 14px;  
    }
}
.EisenhowerMatrixItem__tasks{
    padding: 10px;
    font-size: 12px;
   
}
.kanbanComponent{
        margin-bottom: 10px;
        &__title{
            font-size: 18px;
            margin-bottom: 8px; 
        }
    }
    .kanban{
        &__name{
            font-size: 18px;
        }
    }    
} 

</style>