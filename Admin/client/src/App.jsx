// src/App.jsx
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/HomePage';
import Layout from './components/Layout';

import User from './User Management/Read Users/User'
import Add from './User Management/Add Users/Add';
import Update from './User Management/Update Users/Update';

import Genetic from './Genetic Engineering/Read Genetic/Genetic';
import AddGenetic from './Genetic Engineering/Add Genetic/AddGenetic';
import UpdateGenetic from './Genetic Engineering/Update Genetic/UpdateGenetic';

import Pest from './Pest_Disease/getpest/Pest';
import AddPest from './Pest_Disease/addpest/Addpest';
import UpdatePest from './Pest_Disease/updatepest/Editpest';

import Fertilizer from './Fertilizer Recommender/getfertilizer/Fertilizer';
import Addfertilizer from './Fertilizer Recommender/addfertilizer/Addfertilizer';
import Editfertilizer from './Fertilizer Recommender/updatefertilizer/Editfertilizer';

import Warehouse from './Warehouse Management/Read Warehouses/Warehouse';
import AddWarehouse from './Warehouse Management/Add Warehouses/AddWarehouse';
import UpdateWarehouse from './Warehouse Management/Update Warehouses/UpdateWarehouse';
import DistributionOptimize from './Warehouse Management/Distribution_Optimize/DistributionOptimize';

import ReadFertilizerReq from './Fertilizer_Request/Read_Fertilizer_Req/ReadFertilizerReq';
import AddFertilizerReq from './Fertilizer_Request/Add_Fertlizer_Req/AddFertilizerReq';

import DistributionMap from './Distribution View/DistributionMap';
import FertilizerManage from './Fertilizer_Request/Fertilizer_Manage/FertilizerManage';
import FertilizerManageEach from './Fertilizer_Request/Fertilizer_Manage/FertilizerManageEach';





function App() {

  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout><Home /></Layout>
    },

    // User Links
    {
      path: "/users",
      element: <Layout><User /></Layout>
    },
    {
      path: "/create",
      element: <Layout><Add /></Layout>
    },
    {
      path: "/edit/:id",
      element: <Layout><Update /></Layout>
    },

    // Genetic Links
    {
      path: "/genetics",
      element: <Layout><Genetic /></Layout>
    },
    {
      path: "/create_genetic",
      element: <Layout><AddGenetic /></Layout>
    },
    {
      path: "/editgenetic/:id",
      element: <Layout><UpdateGenetic /></Layout>
    },

    // Pest and Disease
    {
      path: "/pest",
      element: <Layout><Pest /></Layout>
    },
    {
      path: "/addpest",
      element: <Layout><AddPest /></Layout>,
    },
    {
      path: "/updatepest/:id",
      element: <Layout><UpdatePest /></Layout>,
    },

    // Fertilizer Recommender
    {
      path: "/fertilizer",
      element: <Layout><Fertilizer /></Layout>,
    },
    {
      path: "/addfertilizer",
      element: <Layout><Addfertilizer /></Layout>,
    },
    {
      path: "/editfertilizer/:id",
      element: <Layout><Editfertilizer /></Layout>,
    },

    // Warehouse Links
    {
      path: "/warehouses",
      element: <Layout><Warehouse /></Layout>
    },
    {
      path: "/create_Warehouse",
      element: <Layout><AddWarehouse /></Layout>
    },
    {
      path: "/edit_warehouse/:id",
      element: <Layout><UpdateWarehouse /></Layout>
    },
    {
      path: "/distibution_Opt",
      element: <Layout><DistributionOptimize /></Layout>
    },
    

    // Fertilizer requests Links
    {
      path: "/fertilizerRequests",
      element: <Layout>< ReadFertilizerReq/></Layout>
    },
    {
      path: "/create_req",
      element: <Layout><AddFertilizerReq /></Layout>
    },

    //map 
    {
      path: "/DistributionMap",
      element: <Layout><DistributionMap /></Layout>
    },

    {
      path: "/manage_req",
      element: <Layout><FertilizerManage /></Layout>
    },
    {
      path: "/manage_each", 
      element: <FertilizerManageEach />
    }


  ]);

  return (
    <div className='App'>
      <RouterProvider router={route} />
    </div>
  );
}

export default App;