import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import LoadingPage from "../middlewares/Loading";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Product from "../pages/Product";
import MainLayout from "../layout/MainLayout";
// import GeminiChat from "../components/GeminiChat";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <LoadingPage />,
    },{
      path: '/home',
      element: <MainLayout><Home /></MainLayout>,
      // children: [
      //   { index: true, element: <Home /> },
      // ],
    },{
      path: '/services',
      element: <MainLayout><Services /></MainLayout>,
      children: [
        { index: true, element: <Services /> },
      ],
    },{
      path: '/contact',
      element: <MainLayout><Contact /></MainLayout>,
      children: [
        { index: true, element: <Contact /> },
      ],
    },{
      path: '/products',
      element: <MainLayout><Product /></MainLayout>,
      children: [
        { index: true, element: <Product /> },
      ],
    }
    // ,{
    //     path: '/chat',
    //     element: <MainLayout><GeminiChat /></MainLayout>,
    // }
])
  