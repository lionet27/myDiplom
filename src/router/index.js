import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import TasksPage from '@/pages/TasksPage.vue';
import TimeManagementAdvicesPage from '@/pages/TimeManagementAdvicesPage.vue';
import TasksAddPage from '@/pages/TasksAddPage.vue';
import TasksDadPage from '@/pages/TasksDadPage.vue';
import TasksSonPage from '@/pages/TasksSonPage.vue';
import TasksDaughterPage from '@/pages/TasksDaughterPage.vue';

import NotFound from '@/pages/NotFoundPage.vue';

const routes=[
    {
        path:"/",
        name:"HomePage",
        component:HomePage,
    },
    {
        path:"/TasksPage",
        name:"TasksPage",
        component:TasksPage,
    },
    {
        path:"/TasksDadPage",
        name:"TasksDadPage",
        component:TasksDadPage,
    },
    {
        path:"/TasksSonPage",
        name:"TasksSonPage",
        component:TasksSonPage,
    },
    {
        path:"/TasksDaughterPage",
        name:"TasksDaughterPage",
        component:TasksDaughterPage,
    },
    {
        path:"/TasksAddPage",
        name:"TasksAddPage",
        component:TasksAddPage,
    },
    {
        path:"/TimeManagementAdvicesPage",
        name:"TimeManagementAdvicesPage",
        component:TimeManagementAdvicesPage,
    },
  
    {
        path:"/:CatchAll(.*)",
        name:"404",
        component:NotFound,
    },
    
]



const router=createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to,from,savedPosition){
        return {
            top:0,
        }
    }
})

export default router