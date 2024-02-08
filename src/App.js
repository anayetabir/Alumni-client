
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/LogReg/Login';
import News from './Components/News/News';
import Registration from './Components/LogReg/Registration';
import PrivateRoute from './routers/PrivateRoute';
import Stories from './Components/Stories/Stories';
import Businesses from './Components/Businesses/Businesses';
import Job from './Components/Job/Job';
import Committee from './Components/Committee/Committee';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Profile from './Components/Profile/Profile';
import Articles from './Components/Articles/Articles';
import Error from './Components/Error/Error';
import SuperAdmin from './Components/Admins/SuperAdmin/SuperAdmin';
import CreateEvent from './Components/Carouse_event/CreateEvent';
import ArticleUpdate from './Components/Articles/ArticleUpdate';
import NewsUpdate from './Components/News/NewsUpdate';
import ChangeRole from './Components/Admins/SuperAdmin/ChangeRole';
import ProfileUpdate from './Components/Profile/ProfileUpdate';
import JobUpdates from './Components/Job/JobUpdates';
import UpdateEvent from './Components/Carouse_event/UpdateEvent';
import EventReg from './Components/Carouse_event/EventReg/EventReg';




function App() {

  const router = createBrowserRouter([
    {
      path: "*",
      element: <Error />
    },
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/registration",
      element: <Registration />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/news",
      element: <PrivateRoute> <News /> </PrivateRoute>,
      loader: () => fetch('http://localhost:5000/news')
    },
    {
      path: "/NewsUpdate/:id",
      element: <PrivateRoute> <NewsUpdate /> </PrivateRoute>,
      loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
    },

    {
      path: "/story",
      element: <PrivateRoute><Stories /></PrivateRoute>,
      loader:() => fetch('http://localhost:5000/story')
    },
    {
      path: "/businesses",
      element: <Businesses />
    },
    {
      path: "/job",
      element: <Job />,
      loader: () => fetch('http://localhost:5000/job')
    },

    {
      path: '/JobUpdates/:id',
      element: <JobUpdates />,
      loader: ({ params }) => fetch(`http://localhost:5000/job/${params.id}`)
    },
    {
      path: "/committee",
      element: <Committee />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/articles",
      element: <Articles />,
      loader: () => fetch('http://localhost:5000/article')
    },
    {
      path: 'ArticleUpdate/:id',
      element: <ArticleUpdate />,
      loader: ({ params }) => fetch(`http://localhost:5000/article/${params.id}`)
    },
    {
      path: "/profile",
      element: <PrivateRoute> <Profile /> </PrivateRoute>,
      loader: () => fetch('http://localhost:5000/user')
    },
    {
      path: '/ProfileUpdate/:id',
      element: <ProfileUpdate />,
      loader: ({ params }) => fetch(`http://localhost:5000/user/${params.id}`)
    },
    {
      path: "/superadmin",
      element: <PrivateRoute> <SuperAdmin /> </PrivateRoute>,
      loader: () => fetch('http://localhost:5000/user')
    },
    {
      path: "/changerole/:id",
      element: <PrivateRoute> <ChangeRole /> </PrivateRoute>,
      loader: ({ params }) => fetch(`http://localhost:5000/user/${params.id}`)
    },
    {
      path: "/createEvent",
      element: <CreateEvent />
    },
    {
      path: "/updateEvent/:id",
      element: <UpdateEvent></UpdateEvent>,
      loader: ({ params }) => fetch(`http://localhost:5000/event/${params.id}`)
    },
    {
      path: "/readeventdetails/:id",
      element: <EventReg></EventReg>,
      loader: ({ params }) => fetch(`http://localhost:5000/event/${params.id}`)
    },
  ])



  return (
    <div className='App'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}


// old routing
// function App() {
//   return (
//     <div className='App'>
//       <BrowserRouter>
//         <Routes>
//           <Route path="*" element={<Error />} />
//           <Route path="/" element={<Home />} />
//           <Route path="/registration" element={<Registration />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/news" element={<PrivateRoute> <News></News> </PrivateRoute>} />
//           <Route path="/stories" element={<Stories />} />
//           <Route path="/businesses" element={<Businesses />} />
//           <Route path="/job" element={<Job />} />
//           <Route path="/committee" element={<Committee />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/articles" element={<Articles />} />
//           <Route path="/profile" element={<PrivateRoute> <Profile></Profile> </PrivateRoute>} />
//           <Route path="/superadmin" element={<PrivateRoute> <SuperAdmin></SuperAdmin> </PrivateRoute>} />
//           <Route path="/createEvent" element={<CreateEvent/>}/>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

export default App;
