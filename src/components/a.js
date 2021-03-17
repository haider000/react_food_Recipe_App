import Axios from "axios";

function App()
 {
  

 let search = "chicken"
  const App_Id = "4419edfb";
  const App_Key = "8a7dd3d83b5ea100009837eaa1b3e874";


  

    const data =  Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${App_Id}&app_key=${App_Key}`
    );

    console.log(data)
  }

App();