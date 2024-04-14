<template>
    <div class="addTask center" >
        <h1 class="addTask__title">Добавление новой задачи</h1>
        <input class="addTask__content" type="text" v-model="familyMember" list="familyMembers" placeholder="Выберите члена семьи,которому назначается задача">
        
            <datalist id="familyMembers">
                <option value="мама"></option>
                <option value="папа"></option>
                <option value="сын"></option>
                <option value="дочь"></option>
            </datalist>
        <br>
        <input class="addTask__content" type="text" v-model="newTask.tasktext" placeholder="Содержание задачи">
        <br>
        <input class="addTask__date" type="date" v-model="newTask.dateEnd" placeholder="Дата выполнения (YYYY-MM-DD)"><br>

        <input type="checkbox" v-model="newTask.important"> Важная задача?<br>

        <input type="checkbox" v-model="newTask.urgently"> Срочная задача?<br>
        
        <input type="checkbox" v-model="newTask.doing">  Задача начала выполняться?<br>
        <input class="addTask__points" type="number" v-model="newTask.points" placeholder="<Баллы за выполнение задачи>" min="0" max="30"><br>

        <button class="addTask__buttons" @click="addTask(this.newTask)">Добавить задачу</button>

        <div class="addTask__list">
            <h2 class="addTask__list__title">Список задач:</h2>
            <ul v-if="this.familyMember==='мама'">
                <li  v-for="(task, index) in tasks" :key="index">
                    {{ task.tasktext }} - {{ task.dateEnd }}
                </li>
            </ul>
            <ul v-else-if="this.familyMember==='папа'">
                <li  v-for="(task, index) in tasksDad" :key="index">
                    {{ task.tasktext }} - {{ task.dateEnd }}
                </li>
            </ul>
            <ul v-else-if="this.familyMember==='сын'">
                <li  v-for="(task, index) in tasksSon" :key="index">
                    {{ task.tasktext }} - {{ task.dateEnd }}
                </li>
            </ul>

        </div>
  </div>
</template>


<script>
import { mapState, mapGetters, mapMutations, mapActions,mapModules} from "vuex";
    export default {
        data() {
            return {
                familyMember:'',
                newTask: {
                    tasktext: '',
                    dateEnd: '',
                    important: false,
                    urgently: false,
                    doing:false,
                    done:false,
                    points:'',
                },
            
            };
        },
        computed: {
            ...mapState({
                tasks:(state)=>state.Tasks.tasks,
                tasksDad:(state)=>state.TasksDad.tasks,
                tasksSon:(state)=>state.TasksSon.tasks,              
            }),
            
        }, 
        methods: {                       
       
        addTask(newTask){
            if(this.familyMember==="мама"){
                this.tasks.push({
                    tasktext: newTask.tasktext,
                    dateEnd: newTask.dateEnd,
                    important: newTask.important,
                    urgently: newTask.urgently,
                    done: false,
                    doing:newTask.doing,
                    points: newTask.points 
                });
            } else if(this.familyMember==="папа"){
                this.tasksDad.push({
                    tasktext: newTask.tasktext,
                    dateEnd: newTask.dateEnd,
                    important: newTask.important,
                    urgently: newTask.urgently,
                    done: false,
                    doing:newTask.doing,
                    points: newTask.points 
                });
            }else if(this.familyMember==="сын"){
                this.tasksSon.push({
                    tasktext: newTask.tasktext,
                    dateEnd: newTask.dateEnd,
                    important: newTask.important,
                    urgently: newTask.urgently,
                    done: false,
                    doing:newTask.doing,
                    points: newTask.points 
                });
            }

        },

            },  
    }
</script>

<style lang="scss" scoped>
 .addTask{
    font-size: 20px;
    &__title{
        text-align: center;
        font-family: Jost;
        font-size: 25px;
        margin-bottom: 25px;
    }
    &__content{
        text-align: left;
        width: 700px;
        font-size: 20px;
        margin-bottom: 18px;
        
    }
    &__date{
        font-size: 20px;
        margin-bottom: 12px;
    }
    &__points{
        width: 210px;
        font-size: 14px;
        margin-top: 15px;
        margin-bottom: 20px;
    }
    &__buttons{
       
        padding: 8px;
        border: solid 1px black;
        background-color: rgb(98, 230, 65);
        border-radius: 45%;
        margin-bottom: 20px;
        &:hover{
            background-color: rgb(17, 160, 14);
            color: rgb(219, 230, 65);;
        }
    }
    &__list{
        &__title{
            text-align: left;
            font-family: Jost;
            font-size: 25px;
            margin-bottom: 10px;
        }
    }
 } 
 @media (max-width:1024px) {
    .addTask{
        font-size: 16px;
        &__title{
            font-size: 20px;
            margin-bottom: 20px;
        }
        &__content{
            width: 500px;
            font-size: 16px;
            margin-bottom: 15px;
            
        }
        &__date{
            font-size: 16px;
            margin-bottom: 10px;
        }
        &__points{
            width: 200px;
            font-size: 12px;
            margin-top: 10px;
            margin-bottom: 15px;
        }
        &__buttons{
            padding: 6px;
            border-radius: 45%;
            margin-bottom: 20px;
        
        }
        &__list{
            &__title{
                font-size: 20px;
                margin-bottom: 10px;
            }
        }
 }   
}   
@media (max-width:767px) {
    .addTask{
        font-size: 14px;
        &__title{
            font-size: 16px;
            margin-bottom: 15px;
        }
        &__content{
            width: 350px;
            font-size: 14px;
            margin-bottom: 10px;
            
        }
        &__date{
            font-size: 14px;
            margin-bottom: 10px;
        }
        &__points{
            width: 200px;
            font-size: 12px;
            margin-top: 10px;
            margin-bottom: 15px;
        }
        &__buttons{
            padding: 6px;
            border-radius: 45%;
            margin-bottom: 15px;
        
        }
        &__list{
            &__title{
                font-size: 16px;
                margin-bottom: 10px;
            }
        }
 }   
    
} 
</style>