import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

//import_components
import Header from "./components/header";
import Footer from "./components/footer";


//import_screens
import RequestsScreen from "./screens/requests";
import RegisterScreen from "./screens/register";


//create_routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <RequestsScreen />
  },
  {
    path: "/register-screen",
    element: <RegisterScreen />
  }
])

function App() {
  return (
    <div className="app-container">
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
