<template>
    <HeaderComponent/>
   
   <BudgetComponent/>
   
   <div>

   </div>
   <FooterComponent/>
</template>

<script>
  import HeaderComponent from '../components/HeaderComponent.vue';
   import FooterComponent from '../components/FooterComponent.vue';
import BudgetComponent from '../components/BudgetComponent.vue';

   export default {
       components: {
           HeaderComponent, FooterComponent,BudgetComponent,
       },
   }
</script>

<style lang="scss" scoped>

</style>