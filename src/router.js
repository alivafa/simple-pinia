import {createRouter , createWebHistory} from"vue-router"
import homeApp from "@/homeApp"
import contactApp from "@/contactApp"


const routes = [
    {path:"/" , name:"home" , component:homeApp},
    {path: "/contact" , name: "contact" , component: contactApp}
]

const router = createRouter({
   history:createWebHistory(),
    routes
})
 export default router