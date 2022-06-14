import React, { Suspense } from 'react';
import { Navigate, Route, Routes, useRoutes } from 'react-router-dom';

import Expenses from "./Components/Expenses/Expenses";
import Header from './Components/Header/Header';
import AuthContext from './context/authContext';
import FavAuthor from './pages/Authors/FavAuthor/FavAuthor';


const HookDemo = React.lazy(() => import("./Components/Demo/Hooks/HookDemo"))
const Authors = React.lazy(() => import("./pages/Authors/Authors"))
const Books = React.lazy(() => import("./pages/Books/Books"))
const NewBook = React.lazy(() => import("./pages/Books/NewBook/NewBook"))

function App() {
  let elements = useRoutes([
    {
      path : "/expenses",
      element : <Expenses />
    },{
      path : "/hooks",
      element : <HookDemo />
    },{
      path : "/authors",
      element : <Authors />,
      children : [
        {
          path : ":authorId/books/add-new",
          element : <NewBook />
        },{
          path : ":authorId/books",
          element : <Books />
        },{
          path : ":authorId",
          element : <FavAuthor />
        }
      ]
    }
  ])
  return (
    <AuthContext.Provider value={{isLoggedIn : false}}>
    <div className="App">
      <Header />
      <h4>Hello React!!</h4>
      <Suspense fallback={<p>Loading...</p>}>
      {elements}
      </Suspense>
    </div>
    </AuthContext.Provider>
  );
}

export default App;


// {/* <Routes>
//       {/* <Route path="/" exact>     
//         <Navigate to="/expenses" />  
//       </Route> */}
//       <Route path="/expenses" element={<Expenses />} />
//       <Route path="/hooks" element={<HookDemo />} />
      
//       <Route path="/authors/*" element={<Authors />} >
//         <Route path=":authorId/books/add-new" element={<NewBook />} />
//         <Route path = ":authorId/books" element={<Books />} />
//         <Route path=":authorId" element={<FavAuthor />} />
//       </Route>

//       </Routes> */}




// const [showComp, setShowComp] = useState(true);

// const clickHandler = () => setShowComp(!showComp)



// <HookDemo />
      
// {/* <UseEffectDemo /> */}

// {/* <UseReducerDemo /> */}

// {/* <Expenses /> */}

// {/* <hr /> */}

// {/* <button onClick={clickHandler}>Toggle Component</button> */}

// {/* {showComp ? <ClassBased /> :  "Click button to see component"} */}
// {/* {showComp && <ClassBased />} */}