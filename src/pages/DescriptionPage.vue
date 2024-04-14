<template>
    <HeaderComponent/>
   <DescriptionComponent/>
   <div>

   </div>
   <FooterComponent/>
</template>

<script>
  import HeaderComponent from '../components/HeaderComponent.vue';
   import FooterComponent from '../components/FooterComponent.vue';
import DescriptionComponent from '../components/DescriptionComponent.vue';
   export default {
       components: {
        DescriptionComponent, HeaderComponent, FooterComponent,
       },
   }
</script>

<style lang="scss" scoped>

</style>