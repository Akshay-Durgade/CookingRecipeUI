import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getIngredients, getMethod, getRecipe, getRecipeFinal } from "../service/index";
import './trial.css';

export function Recipe() {
  let [recipe, setRecipe] = useState([]);
  let [ingre, setIngre] = useState([]);
  let [method, setMethod] = useState([]);
  var params=useParams()

  async function getData(rec) {
    const responce = await getRecipeFinal(rec);
    recipe = responce.data;
    setRecipe(recipe);
    var id = responce.data[0].ID;
    const ringre = await getIngredients(id);
    setIngre(ringre.data);
    const rmethod = await getMethod(id);
    setMethod(rmethod.data);
  }

  useEffect(() => {
    getData(params.name);
  }, []);
  return recipe.map((ele, index) => {
    return (
      <div key={index} className="container-1 m-0">
        <div className="content">
          <p className="title">{ele["Recipe Name"]}</p>
          <br />
          <p className="heading_subtitle">{ele["Recipe Description"]}</p>
          <br />
          <div className="comment_recipe">
            <button type="button" className="jump_to_recipe">
              <a href="#ingredients">
                <span className="arrow-text">Jump To Recipe</span>
              </a>
            </button>
          </div>
          <div className="recipepic">
            <img
              src={ele["Description Image"]}
              alt="recipepic"
              id="recipepic"
            />
          </div>
          <div className="ingredients">
            <p id="ingredients">Ingredients</p>
          </div>
          <div className="ingredients-list">
            <ul id="indgredients-list">
              {ingre.map((element, index) => {
                return (
                  <li key={index}>
                    <span>{element.Ingredients}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="method">
            <p>Method</p>
          </div>
          <div className="method-details">
            <ol className="method-details-ol">
              {method.map((element, index) => {
                if (element.Image)
                  return (
                    <li key={index}>
                      <span>{element["Method Heading"]}</span>
                      <ul>
                        <li>{element.Content}</li>
                      </ul>
                      <img src={element.Image} alt="" className="img-fluid method-details-img" />
                    </li>
                  );
                else
                { 
                  return<li key={index}>
                  <span>{element["Method Heading"]}</span>
                  <ul>
                    <li>{element.Content}</li>
                  </ul>
                </li>
                }
              })}
            </ol>
          </div>
        </div>
      </div>
    );
  });
}
