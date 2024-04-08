<template>
     <HeaderComponent/>
     <div class="taskTitle center">
        <h1 class="taskName">Список задач папы </h1>
        <img src="../assets/img/Simba.jpg" style="height:60px ;" alt="">
    </div>
     <div class="addTask center">
        <router-link to="/TasksAddPage" class="addTask__botton" >Добавить задачу</router-link>
    </div>
    <TaskDadEisenMatrixKanbanComponent/>
    <TaskDadPointsComponent/>

    <div>

    </div>
    <FooterComponent/>
</template> 

<script>
    import HeaderComponent from '../components/HeaderComponent.vue';
    import FooterComponent from '../components/FooterComponent.vue';
    import TaskDadEisenMatrixKanbanComponent from '../components/TasksDad/TaskDadEisenMatrixKanbanComponent.vue';
    import TaskDadPointsComponent from '../components/TasksDad/TaskDadPointsComponent.vue';
    
    export default {
        components: {
            TaskDadEisenMatrixKanbanComponent, HeaderComponent, FooterComponent,TaskDadPointsComponent,
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