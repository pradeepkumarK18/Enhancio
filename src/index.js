import React from 'react';
import ReactDOM from 'react-dom';
import {connect, Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import fetchUsers from './thunk/thunks';
import ReduxThunk from 'redux-thunk';
import usersReducer from './reducers/reducers';
import App from './components/App';

// Setup store
const store = createStore(usersReducer, applyMiddleware(ReduxThunk));

// Wrap action creator with dispatch method
const mapStateToProps = (state) =>  ({ users: state }); 

// wrap action creator with dispatch method
const mapDispatchToProps = (dispatch) => ({ fetchUsers: () => dispatch(fetchUsers()) })  

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