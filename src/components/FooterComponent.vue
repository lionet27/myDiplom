<template>
    <footer class="footer center">
        <div class="footer__interno">
            <!-- <a class="footer__interno__logo" href="/index.html"><img src="../assets/img/LogoInterno.svg" alt="переход на главную старницу"></a> -->
           <router-link to=""></router-link>
            <!-- <p class="footer__interno__text">It is a long established fact that a reader will be distracted lookings.</p> -->
           
            <div class="footer__interno__birdIn">
                <!-- <a href=""><img src="../assets/img/bird.svg" alt=""></a>
                <a href=""><img src="../assets/img/in.svg" alt=""></a> -->
            </div>

        </div>
        <nav class="footer__pages">
            <h4 class="footer__pages__title">Полезная информация</h4>
            <div class="footer__pages__links">
               
                <router-link v-for="link in links" :key="link.id" :to="link.url ">
                    {{link.title }}
                 </router-link>
            

            </div>
            
        </nav>
       
    </footer>
</template>

<script>
    export default {
        data() {
            return {
                links:[
                    {
                        id:1,
                        title:"Главная",
                        url:"/"
                    },
                    {
                        id:2,
                        title:"Советы по тайм-менеджменту",
                        url:"/TimeManagementAdvicesPage"
                    },
                    {
                        id:3,
                        title:"Blog",
                        url:"/Blog"
                    },
                
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
    .footer{
      justify-content: space-between;
        gap: 10px;
        margin-bottom: 134px;
        margin-top: 100px;
    
    &__interno{
        &__logo{
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
            margin-bottom: 31px;
        }
        &__birdIn{
            display: flex;
            gap: 54px;
            justify-content: flex-start;
            
        }
    }
        

    
    &__pages{
        margin-left: 101px;
        &__title{
            color: rgb(41, 47, 54);
            font-family: DM Serif Display;
            font-size: 25px;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 0%;
            text-align: left;
        }
    
        &__links{
            display: flex;
            flex-direction: column;
           
            color: rgb(77, 80, 83);
            font-family: Jost;
            font-size: 22px;
            font-weight: 400;
            line-height: 300%;
            letter-spacing: 1%;
            text-align: left;
        }
    }
    &__contact{
        margin-left: 129px;
        &__title{
            color: rgb(41, 47, 54);
            font-family: DM Serif Display;
            font-size: 25px;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 0%;
            text-align: left;
            margin-bottom: 26px;
        }
        &__adress{
            color: rgb(77, 80, 83);
            font-family: Jost;
            font-size: 22px;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 1%;
        }
    }
}
</style>