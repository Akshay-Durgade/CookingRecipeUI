import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getRecipe } from "../service";
import "./design.css";

export function Categorysub() {

  let [recipe, setRecipe] = useState([]);
  var params = useParams();

  async function getData(category) {
    const responce = await getRecipe(category);
    console.log(responce.data);
    recipe = responce.data;
    setRecipe(recipe);
    console.log(recipe);
  }

  useEffect(() => {
    getData(params.category);
  }, []);

  useEffect(() => {
    getData(params.category);
   }, [params])

  return (
    <div>
      <div className=" container category_bg mt-0">
        {recipe.map((ele, index) => {
          if (index < 1) {
            return (
              <div className="top mb-5">
                <h2>{ele['Sub Category']}</h2>
                </div>
        
            )
          }
          else { 
            return
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
