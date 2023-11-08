import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import AppRouter, { history } from './routers/AppRouter';
import "./App.css";
import configureStore from './store/configureStore';
import { clearBlogs, getBlogsFromDatabase } from "./actions/blogs"
import { Provider } from 'react-redux';
import "./firebase/firebaseConfig"
import { getAuth } from 'firebase/auth';
import { loginAction, logoutAction } from './actions/auth';

const store = configureStore()

const result =(
    <Provider store={store}>
        <AppRouter />
    </Provider>
    )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className="">...Loading</div>    
)


getAuth().onAuthStateChanged(function(user){
    if(user){
        store.dispatch(loginAction(user.uid))
        store.dispatch(getBlogsFromDatabase()).then(()=>{
            root.render(result);
            if(history.location.pathname==="/"){
                history.push("/blogs")
            }
            })
        console.log("giriş yapıldı")
        
    }else{
        store.dispatch(logoutAction())
        store.dispatch(clearBlogs())
        root.render(result);
        console.log("çıkış yapıldı")
        history.push("/")
    }

})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
