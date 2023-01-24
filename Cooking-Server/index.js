import express from "express";
import { createConnection } from "mysql";
import cors from "cors";

const App = express();
App.use(express.json());
App.use(cors());

const conn = createConnection({
  host: "localhost",
  user: "root",
  password: "Akshay@16",
  database: "cooking_recipes",
});
conn.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("sucessfully connected");
  }
});

App.get("/", (req, res) => {
  var selectQry = `select * from recipename`;
  conn.query(selectQry, (error, result) => {
    if (error) {
      res.status(500).send({ message: "error occured" });
    } else {
      res.status(200).send(result);
    }
  });
});

App.get("/category", (req, res) => {
  var selectQry = `select * from recipename`;
  conn.query(selectQry, (error, result) => {
    if (error) {
      res.status(500).send({ message: "error occured" });
    } else {
      res.status(200).send(result);
    }
  });
});

App.get("/:recipe", (req, res) => {
  var selectQry = `select * from recipename where (Category='${req.params.recipe}')or
    (\`sub category\`='${req.params.recipe}')`;
  conn.query(selectQry, (error, result) => {
    if (error) {
      res.status(500).send({ message: "error occured" });
    } else {
      res.status(200).send(result);
    }
  });
});

App.get("/recipe/:recipe", (req, res) => {
  var selectQry = `select * from recipename where \`recipe name\`='${req.params.recipe}'`;
  conn.query(selectQry, (error, result) => {
    if (error) {
      res.status(500).send({ message: "error occured" });
    } else {
      res.status(200).send(result);
    }
  });
});

App.get("/ingredients/:id", (req, res) => {
  console.log(req.params.id);
  var ingreQry = `select * from Ingredients_RecipeName where ID=${req.params.id}`;
  conn.query(ingreQry, (error, result) => {
    if (error) {
      res.status(500).send({ message: "error occured" });
    } else {
      res.status(200).send(result);
    }
  });
});
App.get("/method/:id", (req, res) => {
  var ingreQry = `select * from MethodRecipeName where ID=${req.params.id}`;
  conn.query(ingreQry, (error, result) => {
    if (error) {
      res.status(500).send({ message: "error occured" });
    } else {
      res.status(200).send(result);
    }
  });
});

App.post("/signup", (req, res) => {
  var insertQry = `insert into signup values ('${req.body.Name}','${req.body.Email}','${req.body.DOB}','${req.body.MobileNo}','${req.body.Password}')`;
  conn.query(insertQry, (error, result) => {
    if (error) {
      res.status(500).send({ message: "error in inserting" });
    } else {
      res.status(200).send({ message: "inserted successfully" });
    }
  });
});

App.get('/login/:email', (req,res) => { 
  var selectQry = `select Password from signup where Email='${req.params.email}'`
  
  conn.query(selectQry, (error, result) => {
    if (error) {
      res.status(500).send({message: "error in fetching" });
      
    } else {
      res.status(200).send(result);
    }
   })
})

App.get('/profile/:email', (req,res) => { 
  var selectQry = `select * from signup where Email='${req.params.email}'`
  
  conn.query(selectQry, (error, result) => {
    if (error) {
      res.status(500).send({message: "error in fetching" });
      
    } else {
      res.status(200).send(result);
    }
   })
})

App.post("/delete", (req, res) => {
 var delQry= `delete from signup where Email='${req.body.Email}'`
  conn.query(delQry, (error, result) => {
    if (error) {
      res.status(500).send({ message: "error in inserting" });
    } else {
      res.status(200).send({ message: "inserted successfully" });
    }
  });
});

App.post("/password", (req, res) => {
 var updQry= `update signup set password='${req.body.NewPassword}' where Email='${req.body.Email}'`
  conn.query(updQry, (error, result) => {
    if (error) {
      res.status(500).send({ message: "error in inserting" });
    } else {
      res.status(200).send({ message: "inserted successfully" });
    }
  });
});

App.listen(9800, () => {
  console.log("listning on port 9800");
});
