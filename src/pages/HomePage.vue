<template>
    <HeaderComponent/>
   
    <div class="banner center">
        <div class="container">
            <div class="banner__wrapper">
              <!-- <img class="banner__img" src="../assets/img/banHeader.svg" alt=""> -->
                <div class="banner__content">
                    <h1 class="banner__title">Семейное приложение</h1>
                    <p class="banner__text">Планировщик задач</p>
                    <!-- <button class="banner__button">Get Started <img src="../assets/img/Vector.svg" alt="vector"></button> -->
                </div>      
            </div>
            
        </div> 
    </div>
    <div class="heading center">
        <h2>Финасовый раздел</h2>
            <p class="heading__text">Расчет ипотеки и бюджета будущих доходов и расходов</p>
    </div>
    
 
   
    <FooterComponent/>
</template>

<script>
    import HeaderComponent from '../components/HeaderComponent.vue';
    import FooterComponent from '../components/FooterComponent.vue';
    // import ProjectHomeComponent from '../components/ProjectHomeComponent.vue';
    // import ArticleHomeComponent from '../components/ArticleHomeComponent.vue';
    
    

    export default {
        components: {
            HeaderComponent, FooterComponent,
        },
        
    }
</script>

<style lang="scss" scoped>
    $colorCount:#CDA274;
    .banner{
        margin-top:57px;
        margin-bottom: 96px;
        &__wrapper{
            
            box-sizing: content-box;
        }
        &__img{
            max-width:100%;
            border-radius: 70px;
            background: rgb(244, 240, 236);
        }
        &__content{
            
            left: 52px;
            top: 208px;
            width: 434px;
            
        }
        &__title{
            color: rgb(41, 47, 54);
            font-family: DM Serif Display;
            font-size: 65px;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 0%;
            text-align: left;
            margin-bottom: 18px;
        }
        &__text{
            color: rgb(77, 80, 83);
            font-family: Jost;
            font-size: 22px;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 1%;
            text-align: left;
            margin-bottom: 21px;
        }
        &__button{
            padding: 26px 75px 26px 31px;
            border-radius: 18px;
            box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
            background: rgb(41, 47, 54);
            color: rgb(255, 255, 255);
            font-family: Jost;
            font-size: 18px;
            font-weight: 600;
            line-height: 125%;
            letter-spacing: 2%;
            text-align: center;

        }
    }

    .heading{
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        margin-bottom: 93px;
        
        &__title{
            color: rgb(41, 47, 54);
            font-family: DM Serif Display;
            font-size: 50px;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 2%;

        }
        &__text{
            max-width: 737px;
            color: rgb(77, 80, 83);
            font-family: Jost;
            font-size: 22px;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 1%;
        }

    }
    .counter{
   
   display: flex;
   justify-content: center;
   gap: 76px;
    background-color: #F4F0EC;
    margin-bottom: 96px;
    padding: 151px;
   &__item1{
       width: 246px;
       border-right: $colorCount 1px solid;
   }
   &__item2{
       width: 223px;
       border-right: $colorCount 1px solid;
   }
   &__item3{
       width: 214px;
       border-right: $colorCount 1px solid;
   }
   &__item4{
       width: 171px;
   }
   &__count{
       color: $colorCount;
       font-family: DM Serif Display;
       font-size: 85px;
       font-weight: 400;
       line-height: 125%;
       padding-left: 29px;
   }
   &__name{
       color: rgb(77, 80, 83);
       font-family: Jost;
       font-size: 22px;
       font-weight: 400;
       line-height: 33px;
       letter-spacing: 1%;
       text-align: left;
   }

}
</style>