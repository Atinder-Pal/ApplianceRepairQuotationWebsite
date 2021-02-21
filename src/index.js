import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/shared/NavBar/NavBar';
import Footer from './components/shared/Footer/Footer';
import LandingPage from './components/LandingPage/LandingPage';
import ApplianceRepair from './components/ApplianceRepair/ApplianceRepair';
import ContactUs from './components/ContactUs/ContactUs';
import QuotationForm from './components/QuotationForm/QuotationForm';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
	<React.Fragment>
		<Provider store={store}>
			<Router>
				<NavBar />
				<Switch>
					<Route path="/" exact component={LandingPage} />
					<Route
						path="/appliancerepair"
						exact
						component={() => (
							<ApplianceRepair someText="Please fill out the form below and get your quotation" />
						)}
					/>
					<Route path="/quotation" exact component={QuotationForm} />
					<Route path="/contact" exact component={ContactUs} />
				</Switch>
				<Footer />
			</Router>
		</Provider>
	</React.Fragment>,
	document.getElementById('root')
);
