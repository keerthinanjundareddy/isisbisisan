import Layout1 from "../src/pages/Layout1/Layout1";
import Layout2 from "../src/pages/Layout2/Layout2";
import Layout3 from "../src/pages/Layout3/Layout3";
import Layout4 from "../src/pages/Layout4/Layout4";
import Layout5 from "../src/pages/Layout5/Layout5";
import Layout6 from "../src/pages/Layout6/Layout6";
import Login from "../src/component/Login";
import SignUp from "../src/component/SignUp";
import ForgotPassword from "../src/component/ForgotPassword";
import Shopify from "../src/component/Shopify"

const routes = [
  { path: "/", component: Layout1 },
  { path: "/shopify", component:Shopify },
  { path: "/Layout4", component: Layout4 },
  { path: "/Layout5", component: Layout5 },
  { path: "/Layout6", component: Layout6 },
  { path: "/Login", component: Login },
  { path: "/SignUp", component: SignUp },

  { path: "/ForgotPassword", component: ForgotPassword },

  // { path: "/readmore", component: Readmore},

];

export default routes;
