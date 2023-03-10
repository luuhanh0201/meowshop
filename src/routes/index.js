import Home from "~/components/pages/Home";
import CatAccessories from "~/components/pages/CatAccessories";
import CatFood from "~/components/pages/CatFood";
import CatFurniture from "~/components/pages/CatFurniture";
import CatProofHome from "~/components/pages/CatProofHome";
import CatFeeders from "~/components/pages/CatFeeders";
import CatLittleBoxes from "~/components/pages/CatLittleBoxes";
import CatHouses from "~/components/pages/CatHouses";
import Blogs from "~/components/pages/Blogs";
import SignUp from "~/components/pages/SignUP";
import LogIn from "~/components/pages/LogIn";



const publicRouters = [
    { path: '/', component: Home },
    { path: '/shop-pet', component: CatProofHome },
    { path: '/cat-food', component: CatFood }, 
    { path: '/cat-accessories', component: CatAccessories },
    { path: '/cat-furniture', component: CatFurniture },
    { path: '/cat-feeders', component: CatFeeders },
    { path: '/cat-little-boxes', component: CatLittleBoxes },
    { path: '/cat-houses', component: CatHouses },
    { path: '/blog', component: Blogs },
    { path: '/signup', component: SignUp, layout: null },
    { path: '/login', component: LogIn, layout: null },
]
const privateRouters = [

]


export { publicRouters, privateRouters }
