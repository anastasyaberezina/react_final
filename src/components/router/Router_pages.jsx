import { BrowserRouter as Router, Route, Switch, Link } from react - router - dom;
import Index from "../pages/Index";
import Catalog from "../pages/Catalog";
import Basket from "../pages/Basket";
import Product from "../pages/Product";
import Registration from "../pages/Registration";

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/index" component={Index} />
                <Route exact path="/catalog" component={Catalog} />
                <Route exact path="/basket" component={Basket} />
                <Route exact path="/product" component={Product} />
                <Route exact path="/registration" component={Registration} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;