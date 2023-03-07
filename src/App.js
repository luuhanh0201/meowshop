import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRouters } from "~/routes";
import { DefaultLayout } from "./components/Layout";

function App() {
 
  return (
    <Router>
      <div className="App">
        <Routes>
        
            {publicRouters.map((route, index) => {
              const Layout = route.layout === null ? Fragment : DefaultLayout;
              const Page = route.component
              return <Route key={index} path={route.path} element={<Layout><Page /></Layout>} />
            })}
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
