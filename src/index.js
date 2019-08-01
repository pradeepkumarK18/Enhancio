import React from 'react';
import ReactDOM from 'react-dom';
import {connect, Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import fetchFields from './thunk/thunks';
import ReduxThunk from 'redux-thunk';
import fieldsReducer from './reducers/reducers';
import removeField from './actions/removeaction';
import App from './components/App';

// Setup store
const store = createStore(fieldsReducer, applyMiddleware(ReduxThunk));

// Wrap action creator with dispatch method
const mapStateToProps = (state) =>  ({ fields: state }); 

// wrap action creator with dispatch method
const mapDispatchToProps = (dispatch) => ({ fetchFields: () => dispatch(fetchFields()), removeField: (id) => dispatch(removeField(id)) })  

// Connect react component to redux store 
const AppPage = connect(mapStateToProps, mapDispatchToProps)(App);

// Mount the component to the DOM
const element = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <AppPage />
  </Provider>,
  element
);