import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getRecipe, getRecipeAll } from "../service";
import "./design.css";

export function Category() {

  let [recipe, setRecipe] = useState([]);
  var params = useParams();


  useEffect(() => {
    if (params!=undefined)
    {
      getData(params.category);
    }
    else
    {
      getData(null);
      }
    
  }, []);
  
  async function getData(category) {
    if (category == null) {
      const responce = await getRecipeAll();
      console.log(responce.data);
      recipe = responce.data;
      setRecipe(recipe);
      console.log(recipe);
    }
    else {
      const responce = await getRecipe(category);
      console.log(responce.data);
      recipe = responce.data;
      setRecipe(recipe);
      console.log(recipe);
    }
  }

  useEffect(() => {
    getData(params.category);
   }, [params])

  return (
   
    <div>
      <div className=" container category_bg mt-0">
        {recipe.map((ele, index) => {
          if (index<1 &&  params.category!=undefined) {
            return (
              <div className="top">
                <h2>{ele.Category}</h2>
                <p className="mb-5">
                  {ele.categorycontent}
                </p>
                </div>
            )
          }
          else if(index < 1) { 
            return (
          
          <div className="top">
          <h2></h2>
          <p className="mb-5"> 
          </p>
              </div>
            )
          }
      })}
            <div className="row m-0 mb-5 cbox ">
        {recipe.map((ele, index) => {
          return(
              <div key={index} className="col-3 dbox ">
                <div className="mybox">
                  <div>
                  <Link to={`/recipe/${ele[`Recipe Name`]}` }>
                      <img
                        className="img-design"
                        src={ele["Description Image"]}
                        alt="Not available"
                      />
                    </Link>
                  </div>
                  <div>{ ele["Recipe Name"]}</div>
                  <br />
                    <div className="text-muted">Timing:-{ele.time}</div>
                </div>
              </div>

            )
        })}  
                        </div>
            </div>
      </div>
  );
}
