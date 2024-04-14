
<template>
  <div class="center" >
    <div class="budgetTitle">
        <h1 class="budgetTitle__name">Бюджет на год</h1>
        <img src="../assets/img/lion$.jpg" style="height:60px ;" alt="">
    </div>
    <table>
      <thead>
        <tr>
          <th class="budget__month">Статья</th>
          <th class="budget__month">Январь</th>
          <th class="budget__month">Февраль</th>
          <th class="budget__month">Март</th>
          <th class="budget__month">Апрель</th>
          <th class="budget__month">Май</th>
          <th class="budget__month">Июнь</th>
          <th class="budget__month">Июль</th>
          <th class="budget__month">Август</th>
          <th class="budget__month">Сентябрь</th>
          <th class="budget__month">Октябрь</th>
          <th class="budget__month">Ноябрь</th>
          <th class="budget__month">Декабрь</th>
          <th class="budget__month">Итого</th>
        </tr>
      </thead>
      <tbody>
        
          <tr  v-for="(item, index) in incomItems" :key="index">
            <td class="budget__month" >{{ item[0] }}</td>
            <td class="budget__month"  v-for="n in 12"><input :class="{ 'overdue': (item[n]<0) }" class="budget__item" v-model.number="item[n]" type="number"></td>
            <td >{{ getTotalState(item) }}</td>
          </tr>  
          <tr class="budget__incoms"> 
              <td class="budget__incoms__total">Итого доходов</td>
              <td class="budget__incoms__number" v-for="n in 12">{{getTotalMonth(this.incomItems,n)}}</td>
              <td class="budget__incoms__total">{{ getTotal(this.incomItems) }}</td>
          </tr>
          
          <tr v-for="(item, index) in expensesItems" :key="index">
            <td class="budget__month">{{ item[0] }}</td>
            <td class="budget__month" v-for="n in 12"><input :class="{ 'overdue': (item[n]<0) }" class="budget__item" v-model.number="item[n]" type="number"></td>
            <td>{{ getTotalState(item) }}</td>
          </tr>
      
        <tr class="budget__expenses"> 
            <td class="budget__expenses__total">Итого расходов</td>
            <td class="budget__expenses__number" v-for="n in 12">{{ getTotalMonth(this.expensesItems,n)}}</td>
            <td class="budget__expenses__total">{{ getTotal(this.expensesItems) }}</td>
        </tr>
        <tr class="budget__saldo"> 
            <td  class="budget__saldo__total">Сальдо доходов и расходов</td>
            <td class="budget__saldo__number" :class="{ 'overdue': ((getTotalMonth(this.incomItems,n)-getTotalMonth(this.expensesItems,n))<0) }" v-for="n in 12">{{ (getTotalMonth(this.incomItems,n)-getTotalMonth(this.expensesItems,n))}}</td>
            <td class="budget__saldo__total" :class="{ 'overdue': (getTotal(this.incomItems)-getTotal(this.expensesItems)<0) }">{{ getTotal(this.incomItems)-getTotal(this.expensesItems) }}</td>
        </tr>

      </tbody>
    </table> 

   <div class="budget__year">
      <p>Итого доходов за год: {{ getTotal(this.incomItems)}}</p> 
      <p>Итого расходов за год: {{ getTotal(this.expensesItems) }}</p> 
      <p :class="{ 'overdue': ((getTotal(this.incomItems)-getTotal(this.expensesItems))<0) }">Сальдо доходов и расходов за год: {{ getTotal(this.incomItems)-getTotal(this.expensesItems)}}</p>
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
    &__item {
      width: 70px;
      text-align: center;
      
    }
    &__incoms{
      height: 25px;
     font-size: 18px;
      
      &__total{
         background-color: rgb(6, 202, 6);
         font-family: Jost;
         font-weight: bold;
      }
      &__number{
         background-color: rgb(6, 202, 6);
      }
    }
    &__expenses{
      height: 25px;
      vertical-align: top;
      font-family: Jost;
      font-size: 18px;
      
      &__total{
         background-color: rgb(232, 127, 8);
         font-family: Jost;
         font-weight: bold;
      }
      &__number{
         background-color: rgb(232, 127, 8);
      }
    }
    &__saldo{
      height: 30px;
      vertical-align: top;
      font-family: Jost;
      font-size: 16px;
      
      &__total{
         background-color: rgb(210, 114, 234);
         font-family: Jost;
         font-weight: bold;
      }
      &__number{
         background-color: rgb(210, 114, 234);
      }
    }
    &__year{
      font-family: Jost;
      font-size: 20px;
      font-weight: bold;
      margin-top: 20px;
    }
 
}
.budgetTitle{
    display: flex;
    justify-content: center;
    &__name{
      text-align: center;
          font-family: Jost;
          font-size: 25px;
          margin-bottom: 10px;
    }
    
  }
  @media (max-width:1024px) {
    .budget{
    &__item {
      width: 45px;
      text-align: center;
      font-size: 11px;
      
    }
    &__incoms{
      height: 25px;
      vertical-align: top;
      font-family: Jost;
      font-size: 18px;
      
      &__total{
         font-size: 14px;
      }
      &__number{
        font-size: 12px;
      }
    }
    &__expenses{
      height: 25px;
      vertical-align: top;
      font-size: 18px;
      
      &__total{
        font-size: 14px;
      }
      &__number{
        font-size: 12px;
      }
    }
    &__saldo{
      height: 30px;
      font-size: 14px;
   &__total{
        
      }
    }
    &__year{
     
      font-size: 16px;
      font-weight: bold;
      margin-top: 15px;
    }
    &__month{
      font-size: 13px;
    }
 
}
.budgetTitle{
    &__name{
          font-size: 20px;
          margin-bottom: 8px;
    }
  }
}   
@media (max-width:767px) {
  .budget{
    &__item {
      width: 35px;
      font-size: 9px;
      
    }
    &__incoms{
      height: 25px;
     
      font-size: 14px;
      
      &__total{
         font-size: 12px;
      }
      &__number{
        font-size: 10px;
      }
    }
    &__expenses{
      height: 20px;
      font-size: 16px;
      
      &__total{
        font-size: 12px;
      }
      &__number{
        font-size: 10px;
      }
    }
    &__saldo{
      height: 30px;
      font-size: 12px;
   &__total{
        
      }
    }
    &__year{
     
      font-size: 14px;
      font-weight: bold;
      margin-top: 15px;
    }
    &__month{
      font-size: 11px;
    }
 
}
.budgetTitle{
    &__name{
          font-size: 18px;
          margin-bottom: 8px;
    }
  }
  
} 

</style>


