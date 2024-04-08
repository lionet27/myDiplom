<template>
    <HeaderComponent/>
   
   <TaskAddFormComponent/>
   
   <div>

   </div>
   <FooterComponent/>
</template>

<script>
  import HeaderComponent from '../components/HeaderComponent.vue';
   import FooterComponent from '../components/FooterComponent.vue';
import TaskAddFormComponent from '../components/TaskAddFormComponent.vue';

   export default {
       components: {
           HeaderComponent, FooterComponent,TaskAddFormComponent
       },
   }
</script>

<style lang="scss" scoped>

</style>