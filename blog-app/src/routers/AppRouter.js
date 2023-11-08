import React from 'react'
import { Switch,Route, BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'
//import Homepage from '../components/Homepage'
import BlogListPage from '../components/BlogListPage'
import BlogDetailsPage from '../components/BlogDetailsPage'
import NotFoundPage from '../components/NotFoundPage'
import AddBLogPage from '../components/AddBLogPage'
import EditBlogPage from '../components/EditBlogPage'
import { LoginPage } from '../components/LoginPage'
import { createBrowserHistory} from 'history'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createBrowserHistory()

 
const AppRouter = () => {
  return (
    <BrowserRouter history={history}>
        <div className="">
            <Switch>
                <PublicRoute path="/" component={ LoginPage } exact/>
                <PrivateRoute path="/blogs" component={ BlogListPage } exact/>
                <PrivateRoute path="/create" component={ AddBLogPage } />
                <PrivateRoute path="/blogs/:id" component={ BlogDetailsPage } />
                <PrivateRoute path="/edit/:id" component={ EditBlogPage } />
                <Route path="" component={ NotFoundPage }exact/>
            </Switch>
        </div>
    </BrowserRouter>
  )
}

export default AppRouter