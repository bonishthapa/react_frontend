import './App.css';
import Maintitle from './components/Maintitle';
import Header from './components/Header';
import { BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register'; 	
import subtitlelist from './admin/subtitlelist';
import CreateSubTitle from './admin/create-subtitle';
import Maintitledetail from './components/Maintitledetail';
import CreateMainTitle from './admin/create-maintitle';
import MainTitleList from './admin/maintitlelist';
import EditMaintitle from './admin/EditMaintitle';
import DeleteItem from './admin/DeleteItem';


function App() {
  return (
    <div>
	    <Router>
	      	<Header />
	      	<Switch>
	      		<Route exact path="/" component={Maintitle} />
	        	<Route exact path="/login" component={Login} />
	            <Route exact path="/createpost" component={CreateMainTitle} />
	            <Route exact path="/register" component={Register} />
				<Route exact path="/maintitlelist" component={MainTitleList} />
				<Route exact path="/createsubtitle" component={CreateSubTitle} />
				<Route exact path="/subtitlelist" component={subtitlelist} />
				<Route exact path="/:slug" component={Maintitledetail} />	
				<Route exact path="/edit/:slug" component={EditMaintitle} />
				<Route exact path="/delete/:slug" component={DeleteItem} />		
	        </Switch> 
        </Router>
    </div>
  );
}

export default App;
