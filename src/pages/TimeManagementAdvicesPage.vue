<template>
    <HeaderComponent/>
   <TimeManagementAdvicesComponent/>
   <div>

   </div>
   <FooterComponent/>
</template>

<script>
  import HeaderComponent from '../components/HeaderComponent.vue';
   import FooterComponent from '../components/FooterComponent.vue';
import TimeManagementAdvicesComponent from '../components/TimeManagementAdvicesComponent.vue';
   export default {
       components: {
        TimeManagementAdvicesComponent, HeaderComponent, FooterComponent,
       },
   }
</script>

<style lang="scss" scoped>

</style>