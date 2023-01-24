import './Cookingfinal.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { useEffect, useState } from 'react';
import { getRecipeHome } from '../service';
import { Link } from 'react-router-dom';

export function Home() { 
      
    let [recipe, setRecipe] = useState([]);

  async function getData() {
    const responce = await getRecipeHome();
    console.log(responce.data);
    recipe = responce.data;
    setRecipe(recipe);
    console.log(recipe);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
        <div className="main_body row m-0 p-0">
        <div className="row p-0 image_body">
          <div
            className="div_image p-0 col-6 d-flex justify-content-center align-items-center">
            <img
              src="/image/front_page1.jpg"
              alt="Not found"
              className="front_image img-fluid rounded p-0"
            />
          </div>
          <div
            className="col-6 p-0 d-flex justify-content-center align-items-center"  
          >
            <p className="p-0 fs-3 m-0 w-75 text-center content-1 ">
              Food, glorious food…The way to a man’s heart is through his
              stomach…An army marches on its stomach….and there are so many
              other cliches that all centre around one of life’s necessities –
              Eating. Here is a collection of Indian food recipes which would
              bring out the food diversity spread across the entire country.
            </p>
          </div>
        </div>

        <div
          className="row px-5 m-0 category_body d-flex justify-content-center align-items-center"
        >
          <div className="mt-5 text-center">
            <p className=" text-muted mt-5">
              <marquee behavior="scroll" direction="right"
                 className="h4">Ready to cook?</marquee>
            </p>
        </div>
        {recipe.map((ele, index) => {
          if (index <= 3) {
            return (
              <div key={index} className="col-3 ind_body px-3">
                <Link to={`/recipe/${ele[`Recipe Name`]}` } className="hover_img">
                  <img src={ele["Description Image"]} alt="" className="img-fluid end_img" />
                  <p className="text-center fs-4 m-0">{ ele["Recipe Name"]}</p></Link>
              </div>
            );
          }
          else
          {
            return;
            }

        })}
          
        </div>
      </div>  
    );
}