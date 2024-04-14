<template>
    <nav class="header center">
       <!-- <div class="container"> -->
            <div class="header__left">                
                    
                    <router-link class="header__left__logo" to="/"><img  src="../assets/img/logoHakuna.png" alt="переход на главную старницу"></router-link>
                    <nav class="header__left__links">
                        <router-link class="header__left__link" v-for="link in links" :key="link.id" :to="link.url ">
                            {{link.title }} 
                        <svg class="header__img"  xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" fill="green">
                        <path d="m6,6c-3.421,0-6,1.72-6,4v10.25c0,2.173,2.523,3.75,6,3.75s6-1.577,6-3.75v-10.25c0-2.28-2.579-4-6-4Zm3,8.988c-.09.284-1.132,1.012-3,1.012-1.879,0-2.923-.737-3-1v-1.502c.872.321,1.892.502,3,.502s2.128-.181,3-.502v1.49Zm-3-5.988c1.843,0,2.881.708,2.996,1-.115.292-1.153,1-2.996,1-1.868,0-2.91-.728-3-.978v-.01c.09-.284,1.132-1.012,3-1.012Zm0,12c-1.725,0-2.783-.563-3-.838v-1.664c.872.321,1.892.502,3,.502s2.128-.181,3-.502v1.664c-.217.275-1.275.838-3,.838Zm7.889-12c-.35-1.695-1.571-3.113-3.348-4h6.958c.828,0,1.5.672,1.5,1.5v1c0,.828-.672,1.5-1.5,1.5h-3.611Zm10.111-3.5v13c0,3.033-2.468,5.5-5.5,5.5h-3.5c-.828,0-1.5-.671-1.5-1.5s.672-1.5,1.5-1.5h3.5c1.379,0,2.5-1.122,2.5-2.5V5.5c0-1.378-1.121-2.5-2.5-2.5h-9c-.909,0-1.747.494-2.188,1.29-.401.725-1.314.986-2.039.585-.725-.401-.986-1.314-.584-2.039.969-1.749,2.812-2.835,4.812-2.835h9c3.032,0,5.5,2.467,5.5,5.5Zm-5,7c0,.829-.672,1.5-1.5,1.5h-1c-.828,0-1.5-.671-1.5-1.5s.672-1.5,1.5-1.5h1c.828,0,1.5.671,1.5,1.5Zm0,5c0,.829-.672,1.5-1.5,1.5h-1c-.828,0-1.5-.671-1.5-1.5s.672-1.5,1.5-1.5h1c.828,0,1.5.671,1.5,1.5Z"/>
                        </svg>

                        </router-link>
                    </nav>
            </div>
            <nav class="header__right">
                <span class="header__right__tasks">Задачи:</span>
                 <router-link  class="header__right__links" v-for="link in taskLinks" :key="link.id" :to="link.url ">
                   <img  class="header__img"  src="../assets/img/iconPencil.png" alt=""> {{link.title }}
                </router-link>
            </nav>    
        <!-- </div> -->
    </nav>
</template>

<script>
    export default {
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
                        url:"/TasksPage"
                    },
                    {
                        id:2,
                        title:"Папы",
                        url:"/TasksDadPage"
                    },
                    {
                    id:3,
                        title:"Сына",
                        url:"/TasksSonPage"
                    },
                    {
                    id:4,
                        title:"Дочери",
                        url:"/TasksDaughterPage"
                    },
                                    
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

.header{
    display: flex;
    justify-content:space-between ;
    margin-top: 15px;
    margin-bottom: 10px;
    &__left{
        display: flex;
        justify-content:space-between ;
        gap:20px;
       

        &__logo img{
            height: 90px;
        }
        &__links{
            display: flex;
            justify-content:space-between ;
            gap:20px;
            padding: 20px 5px;
            font-size: 20px;
        }
        &__link{
            &:hover{
                color:green; 
            }
        }
    }
    &__right{
        display: flex;
        justify-content:space-between ;
        gap:20px;
        &__tasks{
            font-size: 20px;
            padding: 10px 5px;
        }
        &__links{
            display: flex;
            justify-content:space-between ;
            gap:10px;
            padding: 20px 5px;
            font-size: 20px;
            &:hover{
                color:green;
               
            }
            
        }
    }
    &__img{
        height: 20px;
    }

}
@media (max-width:1024px) {
    .header{
    
    &__left{
         gap:10px;
       
        &__logo img{
            height: 70px;
        }
        &__links{           
            gap:10px;
            padding: 10px 5px;
            font-size: 14px;
        }
        
    }
    &__right{
         gap:10px;
        &__tasks{
            font-size: 16px;
            padding: 10px 5px;
        }
        &__links{
            gap:5px;
            padding: 20px 5px;
            font-size: 16px;
        }
    }
    &__img{
        height: 15px;
    }

    }
    
}
@media (max-width:767px) {
    .header{
    flex-direction: column;
    align-items: center;
        &__left{
            gap:7px;
            
       
        &__logo img{
            height: 30px;
        }
        &__links{           
            gap:7px;
            padding: 2px 5px;
            font-size: 12px;
        }
        
    }
    &__right{
         gap:10px;
        &__tasks{
            font-size: 12px;
            padding: 10px 5px;
        }
        &__links{
            gap:5px;
            padding: 20px 5px;
            font-size: 12px;
        }
    }
    &__img{
        height: 10px;
    }
    } 
}
</style>
