<template>
    <HeaderComponent/>
   
   <MortgageCalculatorComponent/>
   
   <div>

   </div>
   <FooterComponent/>
</template>

<script>
  import HeaderComponent from '../components/HeaderComponent.vue';
   import FooterComponent from '../components/FooterComponent.vue';
import MortgageCalculatorComponent from '../components/MortgageCalculatorComponent.vue';

   export default {
       components: {
           HeaderComponent, FooterComponent,MortgageCalculatorComponent,
       },
   }
</script>

<style lang="scss" scoped>

</style>