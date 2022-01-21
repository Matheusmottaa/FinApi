const express = require('express'); /*Importa o express;*/ 
const app = express(); 
app.use(express.json());

app.listen(3333) //Passar por parâmetro a porta que a aplicação será incializada.
 
app.get("/courses", (request, response) => { 
  const query = request.query; 
  console.log(query); 
  return response.json(["Curso 1", "Curso 2", "Curso 3"]); 
});  /* Request é tudo que estamos recebendo da nossa requisição, reponse é tudo aqui que vamos retornar da nossa requisição */

app.post("/courses", (request, response)=>{
  const body = request.body; 
  console.log(body); 
  return response.json(["Curso 1", "Curssssoos 2", "Cursoass 3", "Cuddso 4", "blabla"]); 
}); 

app.put("/courses/:id", (request, response) =>{ 
  const params = request.params; 
  console.log(params); 
  return response.json(["Curso 6", "Cusrso 2", "Cursos 3", "Curssso 4"]); 
}); 

app.patch("/courses/:id", (request, response) =>{ 
  return response.json(["Curso 6", "Curso 7", "Cursos 3", "Curso 4"]); 
}); 

app.delete("/courses/:id", (request, response)=>{ 
  return response.json(["Cudrdddsfddfso 1", "Curso 2", "Curddso 4"]); 
}); 


