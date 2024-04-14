<template>
    <footer class="footer center">
       
        <nav class="footer__pages">
            
                <router-link class="footer__link" v-for="link in links" :key="link.id" :to="link.url ">
                    {{link.title }}
                 </router-link>
           
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
                        title:"О приложении",
                        url:"/DescriptionPage"
                    },
                
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
    .footer{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        text-align: center;
        margin-top: 10px;
    
        &__pages{
                display: flex;
                justify-content: space-between;
                color: rgb(29, 132, 235);
                font-family: Jost;
                font-size: 20px;
                font-weight: 400;
                line-height: 300%;
                text-align: left;
            
            }
        &__link{
            &:hover{
                    color: blue;
                }
        }    
     
    }
    @media (max-width:1024px) {
        .footer{
            margin-top: 5px;
            &__pages{
                font-size: 18px;
            }
        }
    }   
    @media (max-width:767px) {
        .footer{
            margin-top: 5px;
            &__pages{
                font-size: 14px;
            }
        }
    } 

</style>