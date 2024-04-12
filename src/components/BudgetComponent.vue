
<template>
  <div class="center" >
    <table>
      <thead>
        <tr>
          <th>Статья</th>
          <th>Январь</th>
          <th>Февраль</th>
          <th>Март</th>
          <th>Апрель</th>
          <th>Май</th>
          <th>Июнь</th>
          <th>Июль</th>
          <th>Август</th>
          <th>Сентябрь</th>
          <th>Октябрь</th>
          <th>Ноябрь</th>
          <th>Декабрь</th>
          <th>Итого</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in incomItems" :key="index">
          <td  >{{ item[0] }}</td>
          <td  v-for="n in 12"><input class="budget__item" v-model.number="item[n]" type="number"></td>
          <td >{{ getTotalState(item) }}</td>
        </tr>  
        <tr> 
            <td>Итого доходов</td>
            <td v-for="n in 12">{{getTotalMonth(this.incomItems,n)}}</td>
            <td>{{ getTotal(this.incomItems) }}</td>
        </tr>
        
        <tr v-for="(item, index) in expensesItems" :key="index">
          <td>{{ item[0] }}</td>
          <td v-for="n in 12"><input class="budget__item" v-model.number="item[n]" type="number"></td>
          <td>{{ getTotalState(item) }}</td>
        </tr>
        <tr> 
            <td>Итого расходов</td>
            <td v-for="n in 12">{{ getTotalMonth(this.expensesItems,n)}}</td>
            <td>{{ getTotal(this.expensesItems) }}</td>
        </tr>
        <tr> 
            <td>Сальдо доходов и расходов</td>
            <td v-for="n in 12">{{ (getTotalMonth(this.incomItems,n)-getTotalMonth(this.expensesItems,n))}}</td>
            <td>{{ getTotal(this.incomItems)-getTotal(this.expensesItems) }}</td>
        </tr>

      </tbody>
    </table> 

   <div>
      <p>Итого доходов за год: {{ getTotal(this.incomItems)}}</p> 
      <p>Итого расходов за год: {{ getTotal(this.expensesItems) }}</p> 
      <p>Сальдо доходов и расходов за год: {{ getTotal(this.incomItems)-getTotal(this.expensesItems)}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      incomItems: [
        ['Зарплата', 0, 0, 0,0,0,0,0,0, 0,0,0,0],
        ['Премия', 0, 0, 0,0,0,0,0,0, 0, 0,0,0],
        ['Аренда',0, 0, 0,0,0,0,0,0,0,0,0,0],
        ['Другое',0, 0, 0,0,0,0,0,0, 0,0,0,0 ],
        ],
        
        expensesItems: [  
         ['Аренда',0, 0, 0,0,0,0,0,0,0,0,0,0], 
         ['Кредиты',0, 0, 0,0,0,0,0,0, 0,0,0,0 ],
         ['Коммунальные услуги', 0, 0, 0,0,0,0,0,0, 0,0,0,0],
         ['Транспорт', 0, 0, 0,0,0,0,0,0, 0, 0,0,0],
         ['Связь',0, 0, 0,0,0,0,0,0, 0,0,0,0 ],
         ['Здоровье',0, 0, 0,0,0,0,0,0, 0,0,0,0 ],
         ['Еда',0, 0, 0,0,0,0,0,0, 0,0,0,0 ],
         ['Одежда и обувь',0, 0, 0,0,0,0,0,0, 0,0,0,0 ],
         ['Предметы быта',0, 0, 0,0,0,0,0,0, 0,0,0,0 ],
         ['Обучение',0, 0, 0,0,0,0,0,0, 0,0,0,0 ],
         ['Развлечения',0, 0, 0,0,0,0,0,0, 0,0,0,0 ],
         ['Путешествия',0, 0, 0,0,0,0,0,0, 0,0,0,0 ],
         ['Другое',0, 0, 0,0,0,0,0,0, 0,0,0,0 ],
        ],
    };
    
  },
  methods: {
    getTotalState(item) {
      let yearSum=0;
      for (let index = 1; index < item.length; index++){
        yearSum+=item[index];
      }
      return yearSum;
    },
    getTotal(items) {
      return items.reduce((acc, item) => acc +  this.getTotalState(item), 0);
    },
    getTotalMonth(items,index) {
      return items.reduce((acc, item) => acc + item[index], 0);
    },
   
  }
}

</script>    
<style lang="scss" scoped>
.overdue {
        color: red;
        }
        
  .budget{
    &__item{
      width: 70px;
      // margin: 2px;
      text-align: center;
      // font-family: Jost;
    }
    // font-family: Jost;
    //   display: flex;
    //   justify-content: center;
    
    
    // &__title{
    //     text-align: center;
    //     font-family: Jost;
    //     font-size: 35px;
    //     margin-bottom: 40px;
    // }
  
    // &__loan{
      
    //   &__label{
    //     font-size: 16px;
    //   }
    //   &__input{
    //     text-align: left;
    //       width: 80px;
    //       font-size: 16px;
    //       margin:0px 10px 7px 2px;
    //       background-color:greenyellow;
    //   }
    //   &__button{
    //     font-size: 16px;
    //     background-color: aquamarine;
    //     padding: 3px 8px;
    //     border-radius: 35%;
    //     &:hover{
    //       background-color: rgb(190, 124, 165);
    //       color: aquamarine;
    //     }
    //   }

    // }
   
    //   &__month{
    //     width: 50px;
    //   }
    //   &__calculate  {
    //     text-align: center;
    //   }
    // }
  }

</style>


