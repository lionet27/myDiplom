<template>
     <HeaderComponent/>
     <div class="taskTitle center">
        <h1 class="taskName">Список задач сына </h1>
        <img src="../assets/img/Timon.jpg" style="height:60px ;" alt="">
    </div>
     <div class="addTask center">
        <router-link to="/TasksAddPage" class="addTask__botton" >Добавить задачу</router-link>
    </div>
    <TaskSonEisenMatrixKanbanComponent/>
    <TaskSonPointsComponent/>

    <div>

    </div>
    <FooterComponent/>
</template> 

<script>
    import HeaderComponent from '../components/HeaderComponent.vue';
    import FooterComponent from '../components/FooterComponent.vue';
    import TaskSonEisenMatrixKanbanComponent from '../components/TasksSon/TaskSonEisenMatrixKanbanComponent.vue';
    import TaskSonPointsComponent from '../components/TasksSon/TaskSonPointsComponent.vue';
    
    export default {
        components: {
            TaskSonEisenMatrixKanbanComponent, HeaderComponent, FooterComponent,TaskSonPointsComponent,
        },
    }
</script>

<style lang="scss" scoped>
.addTask{
    margin-bottom: 10px;
    &__botton{
        padding: 8px;
        border: solid 1px black;
        background-color: rgb(98, 230, 65);
        border-radius: 45%;
        &:hover{
            background-color: rgb(17, 160, 14);
            color: rgb(219, 230, 65);;
        }
    }

}
.taskTitle{
    display: flex;
    justify-content: center;
    
}
.taskName{
    text-align: center;
        font-family: Jost;
        font-size: 35px;
        margin-bottom: 40px;
}
</style>