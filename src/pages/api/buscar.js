import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:8000'
})

export const busca = async(url, setDado) => {
  const response = await api.get(url)
  var empList = []
  //alert("aaaa: "+response.data.length);
  //console.log("length: "+);
  for(var i = 0; i < response.data.length;i++){
    console.log("entrou");
    empList[i] = new Object();
    for(var j = 0; j < response.data[i].length; j++){
      empList[i].id = i+1;
      if(j == 0){
        empList[i].tema = response.data[i][j];
        //alert("tema1: "+empList[i].tema);
        //empList[i].subtema = "subtema";
      }
      else if(j == 1){
        empList[i].subtema = response.data[i][j].toString();
      }
      else if(j == 2){

        var dateinicio = new Date(response.data[i][j].toString());
        empList[i].dataInicio = dateinicio.toLocaleDateString();

      }
      else if(j == 3){
        var datefim = new Date(response.data[i][j].toString());
        empList[i].dataFim = datefim.toLocaleDateString();
      }
      else if(j == 4){
        empList[i].requisitos = response.data[i][j];
      }
    }
    
  }

  setDado(empList)
}

export const buscaIdeiasAdmin = async(url, setDado) => {
  const response = await api.get(url)
  var empList = []
  //alert("aaaa: "+response.data.length);
  console.log("salve: "+response.data);
  for(var i = 0; i < response.data.length;i++){
    console.log("entrou");
    empList[i] = new Object();
    for(var j = 0; j < response.data[i].length; j++){
      empList[i].id = i+1;
      if(j == 0){
        empList[i].tema = response.data[i][j];
        //alert("tema1: "+empList[i].tema);
        //empList[i].subtema = "subtema";
      }
      else if(j == 1){
        empList[i].subtema = response.data[i][j].toString();
      }
      else if(j == 2){
        empList[i].responsavel = response.data[i][j].toString();
      }
      else if(j == 3){
        empList[i].email = response.data[i][j].toString();
      }
      else if(j == 4){
        empList[i].integrantes = response.data[i][j];
      }
      else if(j == 5){
        empList[i].quesito = response.data[i][j];
      }
      else if(j == 6){
        empList[i].descricao = response.data[i][j];
      }
    }
    
  }

  setDado(empList)
}

/** 
axios.get(`http://localhost:8000/gettemas`)
.then(response => {
  //var response = JSON.parse(res);
  //console.log(response.data[0]);
  for(var i = 0; i < response.length;i++){
    for(var j = 0; j < response[i].length; j++){
      empList[i].id = i+1;
      if(j == 0){
        empList[i].tema = response[i][j];
        console.log(empList[i].tema);
        empList[i].subtema = "subtema";
      }
      else if(j == 1){
        empList[i].dataInicio = response[i][j];
      }
      else if(j == 2){
        empList[i].dataFim = response[i][j];
      }
      else if(j == 3){
        empList[i].requisitos = response[i][j];
      }
    }
    
  }
  
})**/