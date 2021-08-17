import React from 'react';
import { Route,Switch } from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import About from './About';
import Products from './Products';
import Testimonials from './Testimonials';
import Contact from './Contact';

const Header = () => {
    const Error=()=>{
        return(<div>
            <div className="errorPage text-center m-5">
             <h3 >404! Page Not Found</h3>

            </div>
        </div>)
    }
    return (<>
    <div className="container-fluid">
        <Menu/>
</div>
    
    <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/about" component={About}/>
       <Route exact path="/product" component={Products}/>
       <Route exact path="/testimonials" component={Testimonials}/>
       <Route exact path="/contact" component={Contact}/>
       <Route  component={Error}/>
       </Switch>
    </>
     )
};

export default Header;
