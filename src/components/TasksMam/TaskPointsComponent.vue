<template>
    <div class="pointsComponent center">
        <div class="points" >
                <h3>Всего набранно баллов {{ totalScoredPoints }}</h3>
                <h4>Если выполнить оставшиеся задачи, можно набрать еще {{ possiblePoints }} баллов</h4>
        </div>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapMutations, mapActions,mapModules} from "vuex";

  export default {
      
      data() {
          return {
          }
      }, 
     computed: {
      ...mapState({
          tasks:(state)=>state.Tasks.tasks,
                          
          }),
         
          possiblePoints(){
                return this.tasks.reduce((sum, task) => {
                    if (!task.done) {
                        return sum + task.points;
                    } else {
                        return sum;
                    }
                }, 0);
          },
          totalScoredPoints(){
                return this.tasks.reduce((sum, task) => {
                    if (task.done) {
                        return sum + task.points;
                    } else {
                        return sum;
                    }
                }, 0);
          }
            },    
  }
</script>

<style lang="scss" scoped>
.points{
    display: flex;
    justify-content: space-between;
}
  

 
</style>