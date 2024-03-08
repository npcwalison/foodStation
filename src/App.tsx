import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

//import_components
import Header from "./components/header";
import Footer from "./components/footer";


//import_screens
import HomeScreen from "./screens/home";
import FormScreen from "./screens/form";


//create_routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />
  },
  {
    path: "/form",
    element: <FormScreen />
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
