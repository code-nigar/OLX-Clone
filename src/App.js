import Cardd from "./components/card/Card";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import MyNav from "./components/MyNav/MyNav";

function App() {
  return (
    <div>
      <MyNav/>
      <div className="d-flex flex-row justify-content-around flex-wrap">
        <Cardd feature={true}/>
        <Cardd feature={false}/>
        <Cardd feature={false}/>
        <Cardd feature={true}/>
        <Cardd feature={false}/>
        <Cardd feature={false}/>
        <Cardd feature={true}/>
        <Cardd feature={false}/>
        <Cardd feature={false}/>
        <Cardd feature={true}/>
        <Cardd feature={false}/>
      </div>
    </div>
  );
}

export default App;
