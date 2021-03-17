import React,{useState, useEffect} from "react";
import "./App.css";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Axios from "axios";

function App() {
  
  const [search, setSearch] = useState("chicken");
  const [recipes, setRecipes] = useState([]);

  const App_Id = "4419edfb";
  const App_Key = "62c8cbd071f043a3c93dc204394210eb";


  const onInputChange = (e) => {
    setSearch(e.target.value);
  };

  const getRecipes = async () =>{
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${App_Id}&app_key=${App_Key}`
    );
  console.log(response)
    setRecipes(response.data.hits)

  }

  useEffect( () => {
   getRecipes();
  },[]);


  return (
    <div className="App">
      

      <Header 
      search={search} 
      onInputChange={onInputChange}
      />
      <div className="container my-4 ">
        <Recipes recipes={recipes}/>
      </div>
      
    </div>
  );
}

export default App;
