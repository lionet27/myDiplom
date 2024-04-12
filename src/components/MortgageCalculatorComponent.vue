  <template>
    <div class="MortgageCalculatorComponent center">
    <div class="MortgageCalculator">
      <h1 class="MortgageCalculator__title">Кредитный калькулятор</h1>
      <img src="../assets/img/lionCalculator.jpg" style="height:80px ;" alt="">
    </div> 
    <div class="MortgageCalculator__loan">
      <label class="MortgageCalculator__loan__label" for="loanAmount">Размер кредита:</label>
      <input class="MortgageCalculator__loan__input" type="number" id="loanAmount" v-model="initialLoanAmount">
  
      <label class="MortgageCalculator__loan__label" for="interestRate">Процентная ставка:</label>
      <input class="MortgageCalculator__loan__input" type="number" id="interestRate" v-model="annualInterestRate">
  
      <label class="MortgageCalculator__loan__label" for="loanTerm">Срок кредита в месяцах:</label>
      <input class="MortgageCalculator__loan__input" type="number" id="loanTerm" v-model="loanTermInMonths">
      
      <button class="MortgageCalculator__loan__button" @click="calculateAmortizationTable">Рассчитать таблицу погашения</button>
      <br>
   
      <label class="MortgageCalculator__loan__label" for="additionalPaymentAmount">Сумма дополнительного платежа:</label>
      <input class="MortgageCalculator__loan__input" type="number" id="additionalPaymentAmount" v-model="additionalPaymentAmount">  
      <label class="MortgageCalculator__loan__label" for="month">Месяц внесения:</label>
      <input class="MortgageCalculator__loan__input" type="number" id="month" v-model="month">
      <button class="MortgageCalculator__loan__button" @click="addAdditionalPayment(month, additionalPaymentAmount)">Добавить дополнительный платеж</button>
      <br>
      <label class="MortgageCalculator__loan__label" for="monthDel">Месяц:</label>
      <input class="MortgageCalculator__loan__input" type="number" id="monthDel" v-model="monthDel">
      <button class="MortgageCalculator__loan__button" @click="removeAdditionalPayment(monthDel)">Удалить дополнительный платеж</button> 
    </div>
      <table >
        <thead >
          <tr >
            <th class="MortgageCalculator__table__month">Месяц</th>
            <th class="MortgageCalculator__table">Остаток долга</th>
            <th class="MortgageCalculator__table">Ежемесячный платеж</th>
            <th class="MortgageCalculator__table">Основной долг</th>
            <th class="MortgageCalculator__table">Проценты</th>
            <th class="MortgageCalculator__table">Итого заплачено за месяц</th>
            <th class="MortgageCalculator__table">Дополнительная сумма погашения</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(payment, index) in this.payments" :key="index">
              <td class="MortgageCalculator__table__calculate">{{ index + 1 }}</td>
              <td :class="{ 'overdue': (payment.balance<0) }" class="MortgageCalculator__table__calculate">{{ payment.balance.toFixed(2) }}</td>
              <td class="MortgageCalculator__table__calculate">{{ payment.monthlyPayment.toFixed(2) }}</td>
              <td class="MortgageCalculator__table__calculate">{{ payment.principal.toFixed(2) }}</td>
              <td class="MortgageCalculator__table__calculate">{{ payment.interest.toFixed(2) }}</td>
              <td class="MortgageCalculator__table__calculate">{{ (payment.principal + payment.interest).toFixed(2) }}</td>
              <td class="MortgageCalculator__table__calculate">{{ payment.extraPayment.toFixed(2) }}</td>
          </tr>
        </tbody>
      </table>
  
      
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        initialLoanAmount: 10000,
        annualInterestRate: 5,
        loanTermInMonths: 12,
        payments: [],
        month:'',
        monthDel:'',
      };
    },
    computed:{
      monthlyInterestRate(){
        return this.annualInterestRate / 12 / 100;
      },
      monthlyPayment(){
        return (this.initialLoanAmount * this.monthlyInterestRate) / (1 - Math.pow(1 + this.monthlyInterestRate, -this.loanTermInMonths));
      }
    },
    methods: {
        calculateAmortizationTable() {
          this.payments=[];
          let balance = this.initialLoanAmount;
          for (let i = 0; i < this.loanTermInMonths; i++) {
            const interestPayment = balance * this.monthlyInterestRate;
            const principalPayment = this.monthlyPayment - interestPayment;
            balance -= principalPayment;

            this.payments.push({ month: i + 1, balance: balance, monthlyPayment: this.monthlyPayment, principal: principalPayment, interest: interestPayment,extraPayment:0 });
          }
        },
        addAdditionalPayment(month, additionalPaymentAmount) {
            if (month >= 1 && month <= this.loanTermInMonths&&this.payments[month-1].balance>0) {
              this.payments[month-1].principal+=additionalPaymentAmount;
              this.payments[month-1].balance-=additionalPaymentAmount;
              this.payments[month-1].extraPayment+=additionalPaymentAmount;
              
              for (let i = month; i < this.loanTermInMonths; i++) {
                this.payments[i].interestPayment =this.payments[i-1].balance * this.monthlyInterestRate;
                this.payments[i].principalPayment = this.monthlyPayment - this.payments[i].interestPayment;
                this.payments[i].balance = this.payments[i-1].balance-this.payments[i].principalPayment ;
              }
            } else {
              console.log('Wrong month provided for additional payment or balance <0.');
              alert('Wrong month provided for additional payment or balance <0.');
            }
        },
        removeAdditionalPayment(month) {
          if (this.payments[month-1].extraPayment>0) {
              this.payments[month-1].principal-=this.payments[month-1].extraPayment;
              this.payments[month-1].balance+=this.payments[month-1].extraPayment;
              this.payments[month-1].extraPayment=0;
              
              for (let i = month; i < this.loanTermInMonths; i++) {
                
                this.payments[i].interestPayment =this.payments[i-1].balance * this.monthlyInterestRate;
                this.payments[i].principalPayment = this.monthlyPayment - this.payments[i].interestPayment;
                this.payments[i].balance = this.payments[i-1].balance-this.payments[i].principalPayment ;
              }
            } else {
              console.log('No extraPayment in this month');
              alert('В этом месяце нет дополнительных платежей');
            }       
        }
    }
  }
  </script>

<style lang="scss" scoped>
.overdue {
        color: red;
        }
  .MortgageCalculatorComponent{
   
    }
  .MortgageCalculator{
    font-family: Jost;
      display: flex;
      justify-content: center;
    
    
    &__title{
        text-align: center;
        font-family: Jost;
        font-size: 35px;
        margin-bottom: 40px;
    }
  
    &__loan{
      
      &__label{
        font-size: 16px;
      }
      &__input{
        text-align: left;
          width: 80px;
          font-size: 16px;
          margin:0px 10px 7px 2px;
          background-color:greenyellow;
      }
      &__button{
        font-size: 16px;
        background-color: aquamarine;
        padding: 3px 8px;
        border-radius: 35%;
        &:hover{
          background-color: rgb(190, 124, 165);
          color: aquamarine;
        }
      }

    }
    &__table{
      width: 150px;
      margin: 2px;
      text-align: center;
      font-family: Jost;
      &__month{
        width: 50px;
      }
      &__calculate  {
        text-align: center;
      }
    }
  }

</style>