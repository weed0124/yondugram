import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from 'redux/configureStore';
import App from 'components/App';
import I18N from 'redux-i18n';
import { translations } from "translations";
import "ReactotronConfig";

ReactDOM.render(
    <Provider store={store}>
        <I18N translations={translations} initialLang="en" fallbackLang="en">
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter> 
        </I18N>
    </Provider>,
document.getElementById('root'));