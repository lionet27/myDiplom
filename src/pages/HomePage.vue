<template>
    <HeaderComponent/>
   
    <div class="heading center">
        <div class="container">
            <h1 class="heading__title">Семейное приложение </h1>

            <div class="heading__content">
                <div class="heading__left">
                    <h2 class="heading__left__title">Планировщик задач</h2>
                   
                    <router-link  class="heading__left__links" v-for="link in taskLinks" :key="link.id" :to="link.url ">
                   <img height="50px" :src=link.img alt=""> {{link.title }}
                </router-link>
                  
                </div> 
                <div class="heading__center">
                    <img class="heading__center__img" src="../assets/img/TimBumbaSimbaRest.jpg" alt="">
                </div>
                <div class="heading__right">
                        <h2 class="heading__right__title">Финансовый раздел</h2>
                        <router-link class="heading__right__links" v-for="link in links" :key="link.id" :to="link.url ">
                            {{link.title }} 
                        <svg  height="30px" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" fill="green">
                        <path d="m6,6c-3.421,0-6,1.72-6,4v10.25c0,2.173,2.523,3.75,6,3.75s6-1.577,6-3.75v-10.25c0-2.28-2.579-4-6-4Zm3,8.988c-.09.284-1.132,1.012-3,1.012-1.879,0-2.923-.737-3-1v-1.502c.872.321,1.892.502,3,.502s2.128-.181,3-.502v1.49Zm-3-5.988c1.843,0,2.881.708,2.996,1-.115.292-1.153,1-2.996,1-1.868,0-2.91-.728-3-.978v-.01c.09-.284,1.132-1.012,3-1.012Zm0,12c-1.725,0-2.783-.563-3-.838v-1.664c.872.321,1.892.502,3,.502s2.128-.181,3-.502v1.664c-.217.275-1.275.838-3,.838Zm7.889-12c-.35-1.695-1.571-3.113-3.348-4h6.958c.828,0,1.5.672,1.5,1.5v1c0,.828-.672,1.5-1.5,1.5h-3.611Zm10.111-3.5v13c0,3.033-2.468,5.5-5.5,5.5h-3.5c-.828,0-1.5-.671-1.5-1.5s.672-1.5,1.5-1.5h3.5c1.379,0,2.5-1.122,2.5-2.5V5.5c0-1.378-1.121-2.5-2.5-2.5h-9c-.909,0-1.747.494-2.188,1.29-.401.725-1.314.986-2.039.585-.725-.401-.986-1.314-.584-2.039.969-1.749,2.812-2.835,4.812-2.835h9c3.032,0,5.5,2.467,5.5,5.5Zm-5,7c0,.829-.672,1.5-1.5,1.5h-1c-.828,0-1.5-.671-1.5-1.5s.672-1.5,1.5-1.5h1c.828,0,1.5.671,1.5,1.5Zm0,5c0,.829-.672,1.5-1.5,1.5h-1c-.828,0-1.5-.671-1.5-1.5s.672-1.5,1.5-1.5h1c.828,0,1.5.671,1.5,1.5Z"/>
                        </svg>
                        </router-link>
                </div>

            </div>   
            
        </div> 
    </div>
    
    <FooterComponent/>
</template>

<script>
    import HeaderComponent from '../components/HeaderComponent.vue';
    import FooterComponent from '../components/FooterComponent.vue';
   
    
    

    export default {
        components: {
            HeaderComponent, FooterComponent,
        },
        data() {
            return {
                links:[
                   
                    {
                        id:1,
                        title:"Кредитный калькулятор",
                        url:"/MortgageCalculatorPage"
                        
                    },
                    {
                        id:2,
                        title:"Бюджет",
                        url:"/BudgetPage"
                    },
                   
                ],
                taskLinks:[
                    
                    {
                        id:1,
                        title:"Мамы",
                        url:"/TasksMamPage",
                        img:require("@/assets/img/Nala.jpg") 
                    },
                    {
                        id:2,
                        title:"Папы",
                        url:"/TasksDadPage",
                        img:require("@/assets/img/Simba.jpg")
                    },
                    {
                    id:3,
                        title:"Сына",
                        url:"/TasksSonPage",
                        img:require("@/assets/img/Timon.jpg")
                    },
                    {
                    id:4,
                        title:"Дочери",
                        url:"/TasksDaughterPage",
                        img:require("@/assets/img/Pumba.jpg")
                    },
                                    
                ]
            }
        },   
        
    }
</script>

<style lang="scss" scoped>
    .heading{
        &__content{
            display: flex;
            justify-content: space-between;
            gap: 12px;
        }
        &__left{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
            &__title{
                font-family: Jost;
                font-size: 30px;

            }
            &__links{
                font-size: 27px;
                padding: 15px;
                border: solid 2px rgb(217, 169, 12);
                border-radius: 34%;
                background-color: rgb(99, 224, 97);
                &:hover{
                    border: solid 2px rgb(217, 169, 12);
                    border-radius: 24%;
                    background-color: rgb(171, 224, 97); 
                }
            }
        }
        &__right{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 50px;
            &__title{
                font-family: Jost;
                font-size: 30px;

            }
            &__links{
                font-size: 27px;
                padding: 15px;
                border: solid 2px green;
                border-radius: 34%;
                background-color: rgb(240, 202, 9);
                &:hover{
                    border-radius: 24%;
                    background-color: rgb(230, 222, 103); 
                }
            }
        }
        &__center{
            padding-top: 100px;
            &__img{
                max-width:85%;
             border-radius: 70px;
            }
        }
    }
    $colorCount:#CDA274;
    
    .banner{
        margin-bottom: 10px;
        text-align: center;
        &__wrapper{
            
            box-sizing: content-box;
        }
        &__img{
            max-width:45%;
            border-radius: 70px;
        }
        &__content{
            
            left: 52px;
            top: 208px;
            width: 434px;
            
        }
        &__title{
            color: rgb(41, 47, 54);
            font-family: DM Serif Display;
            font-size: 35px;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 0%;
            text-align: center;
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