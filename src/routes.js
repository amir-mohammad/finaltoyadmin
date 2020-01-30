import DashbardPage from "./components/DashbardPage";
import Product from "./components/Product";


const routes = [
    {
        path:"/dashboard",
        name:"Dashbard",
        icon:'dashboard',
        component: DashbardPage,
        page:'/admin',
        show:true
    },
    {
        path:"/product",
        name:"Product",
        icon:'dashboard',
        component: Product,
        page:'/admin',
        show:true
    }
]

export default routes;