import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Provider } from 'react-redux'

import routes from './routes'
import store from './store/store'

import './index.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { pageSlide, pageTransition } from './util/animations';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>

            <Router>
                <AnimatePresence exitBeforeEnter>
                    <Switch>
                        {routes.map(({path, Component}) => (
                            <Route path={path} key={path} exact>
                                <motion.div
                                    initial="initial"
                                    animate="in"
                                    exit="out"
                                    variants={pageSlide}
                                    transition={pageTransition}
                                >
                                    <Component />
                                </motion.div>
                            </Route>
                        ))}
                    </Switch>
                </AnimatePresence>
            </Router>
            
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
