import './style.css';


export function About()
{ 
    return (
        <div>
        <div className="background">
        <img src="image/background.jpg" alt="na" />
       
      </div>
          
      <div className="heading">
        <h1>About Us</h1>
      </div>
      <div className="para">
        <p>
         Crafty Recipes is here to help you cook delicious meals with less stress
          and more joy. We offer recipes and cooking advice for home cooks, by
          home cooks. Helping create “kitchen wins” is what we are all about. 
        </p> 
       
        <p>
         Crafty Recipes was founded in 2021 by Elise Bauer as a home cooking blog
          to record her favorite family recipes. Today, Crafty Recipes has grown
          into a trusted resource for home cooks with more than 3,000 tested
          recipes, guides, and meal plans, drawing over 15 million readers each
          month from around the world. We are supported by a diverse group of
          recipe developers, food writers, recipe and product testers,
          photographers, and other creative professionals.
        </p>
      </div>
      <div className="image-div">
        
          <ul className="image ">
            <li className="brand"><img src="image/pizza.jpg" height="100px" /></li>
            <li className="brand"><img src="image/Misal-pav.jpg" height="100px" /></li>
            <li className="brand"><img src="image/pancake.jpg" height="100px" /></li>
            <li className="brand"><img src="image/Idli.jpg"height="100px"/></li>
          </ul>
        
      </div>
      </div>
    );
}