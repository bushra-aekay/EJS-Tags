import express from "express";
import { dirname } from "path";
import { title } from "process";
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;


app.get("/", (req,res) =>{
   const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent:
        "<em> This is some em text</em>",
   };
    res.render(__dirname + "/views/index.ejs", data);
});

app.listen( port, ()=>{
    console.log(`Listening for requests at ${port} `);
});