import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRouters } from "~/routes";
import { DefaultLayout } from "./components/Layout";

function App() {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res=>res.json())
  .then(data => {
    console.log(typeof data)
  })
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
