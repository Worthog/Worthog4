import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable'
import LoadingComponent from './LoadingComponent'
import { UserIsAuthenticated } from '../../features/auth/authWrapper';

const AsyncHomePage = Loadable({
  loader: () => import('../../features/home/HomePage'),
  loading: LoadingComponent
})
const AsyncEventDashboard = Loadable({
  loader: () => import('../../features/event/EventDashboard/EventDashboard'),
  loading: LoadingComponent
})
const AsyncNavBar  = Loadable({
  loader: () => import('../../features/nav/NavBar/NavBar'),
  loading: LoadingComponent
})
const AsyncEventForm = Loadable({
  loader: () => import('../../features/event/EventForm/EventForm'),
  loading: LoadingComponent
})
const AsyncSettingsDashboard = Loadable({
  loader: () => import('../../features/user/Settings/SettingsDashboard'),
  loading: LoadingComponent
})
const AsyncUserDetailedPage = Loadable({
  loader: () => import('../../features/user/UserDetailed/UserDetailedPage'),
  loading: LoadingComponent
})

const AsyncUserItemsPage = Loadable({
  loader: () => import('../../features/user/UserItems/UserItemsPage'),
  loading: LoadingComponent
})

const AsyncPeopleDashboard = Loadable({
  loader: () => import('../../features/user/PeopleDashboard/PeopleDashboard'),
  loading: LoadingComponent
})
const AsyncEventDetailedPage = Loadable({
  loader: () => import('../../features/event/EventDetailed/EventDetailedPage'),
  loading: LoadingComponent
})
const AsyncModalManager = Loadable({
  loader: () => import('../../features/modals/ModalManager'),
  loading: LoadingComponent
})
const AsyncNotFound = Loadable({
  loader: () => import('../../app/layout/NotFound'),
  loading: LoadingComponent
})
const AsyncAddDeviceForm = Loadable({
  loader: () => import('../../features/device/DeviceForm/DeviceForm'),
  loading: LoadingComponent
})

const AsyncDeviceForm = Loadable({
  loader: () => import('../../features/device/DeviceForm/DeviceForm'),
  loading: LoadingComponent
})

const AsyncTaskPage = Loadable({
  loader: () => import('../../features/device/DeviceTasks/DeviceTasks'),
  loading: LoadingComponent
})

const stats = Loadable({
  loader: () => import('../../features/stats/stats'),
  loading: LoadingComponent
})

const stat2 = Loadable({
  loader: () => import('../../features/table/stat2'),
  loading: LoadingComponent
})

const vline = Loadable({
  loader: () => import('../../features/charts/VlineChart'),
  loading: LoadingComponent
})

const DemoTable = Loadable({
  loader: () => import('../../features/device/DeviceTasks/DemoTable'),
  loading: LoadingComponent
})

const AsyncConnectPage = Loadable({
  loader: () => import('../../features/device/DeviceConnect/DeviceConnect'),
  loading: LoadingComponent
})


const AsyncAddBrewForm = Loadable({
  loader: () => import('../../features/brews/BrewForm/BrewForm'),
  loading: LoadingComponent
})

const AsyncDeviceDashboard = Loadable({
  loader: () => import('../../features/device/DeviceDashboard/DeviceDashboard'),
  loading: LoadingComponent
})

const AsyncDeviceContainer = Loadable({
  loader: () => import('../../features/device/DeviceContainer'),
  loading: LoadingComponent
})

const AsyncGallery = Loadable({
  loader: () => import('../../features/gallery/Gallery-Container'),
  loading: LoadingComponent
})

const AsyncBlogs = Loadable({
  loader: () => import('../../features/blog/Blog-Container'),
  loading: LoadingComponent
})

const AsyncBlogForm = Loadable({
  loader: () => import('../../features/blog/BlogForm/BlogForm'),
  loading: LoadingComponent
})

const AsyncNewBlog = Loadable({
  loader: () => import('../../features/blog/BlogForm/BlogForm'),
  loading: LoadingComponent
})

const AsyncBlogDemo = Loadable({
  loader: () => import('../../features/blog/blogdemo/demo'),
  loading: LoadingComponent
})

const AsyncBlogEdit = Loadable({
  loader: () => import('../../features/blog/BlogEdit/BlogEdit'),
  loading: LoadingComponent
})

//AsyncTodoContainer}

const AsyncTodoContainer = Loadable({
  loader: () => import('../../features/todos/ToDoContainer'),
  loading: LoadingComponent
})


const AsyncToDoForm = Loadable({
  loader: () => import('../../features/todos/ToDoForm'),
  loading: LoadingComponent
})

const AsyncNotes = Loadable({
  loader: () => import('../../features/notes/notes'),
  loading: LoadingComponent
})

class App extends Component {
  render() {
    return (
      <div>
        <AsyncModalManager/>
        <Switch>
          <Route exact path="/" component={AsyncHomePage} />          
        </Switch>

        <Route
          path="/(.+)"
          render={() => (
            <div>
              <AsyncNavBar />
              <Container className="main" style={{marginTop : "100px"  }} >
                <Switch>
                  <Route path="/blogs" component={AsyncBlogs} />
                  <Route path="/blognew" component={AsyncNewBlog} />
                  <Route path="/blog/:id" component={AsyncBlogForm} />
                  <Route path="/blogdemo" component={AsyncBlogDemo} />
                  <Route path="/blogedit/:id" component={AsyncBlogEdit} />
                  <Route path="/blogedit" component={AsyncBlogEdit} />
                  <Route path="/events" component={AsyncEventDashboard} />
                  <Route path="/event/:id" component={AsyncEventDetailedPage} />
                  <Route path="/useritems/:id" component={AsyncUserItemsPage} />
                  <Route path="/manage/:id" component={UserIsAuthenticated(AsyncEventForm)} />
                  <Route path="/people" component={UserIsAuthenticated(AsyncPeopleDashboard)} />
                  <Route path="/profile/:id" component={UserIsAuthenticated(AsyncUserDetailedPage)} />
                  <Route path="/settings" component={UserIsAuthenticated(AsyncSettingsDashboard)} />
                  <Route path="/createEvent" component={UserIsAuthenticated(AsyncEventForm)} />
                  <Route path="/addDevice" component={UserIsAuthenticated(AsyncAddDeviceForm)} />
                  <Route path="/addBrew" component={UserIsAuthenticated(AsyncAddBrewForm)} />
                  <Route path="/devices" component={AsyncDeviceContainer} />
                  <Route path="/device/stats" component={stats} />
                  <Route path="/device/stats/demo" component={DemoTable} />
                  <Route path="/device/table" component={stat2} />
                  <Route path="/device/chart" component={vline} />
                  <Route path="/device/dashboard/:id" component={AsyncDeviceDashboard} />
                  <Route path="/device/:id" component={AsyncDeviceForm} />
                  <Route path="/todos" component={AsyncTodoContainer} />
                  <Route path="/addtodo" component={AsyncToDoForm} />
                  <Route path="/todo/:id" component={AsyncToDoForm} />
                  <Route path="/gallery" component={AsyncGallery} />
                  <Route path="/task/:id" component={AsyncTaskPage} />
                  <Route path="/connect/:id" component={AsyncConnectPage} />
                  <Route path="/error" component={AsyncNotFound} />
                  <Route path="/notes" component={AsyncNotes} />
                 
                  <Route component={AsyncNotFound} />
                </Switch>
              </Container>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
