
//COLOCANDO OS ZEROS TIPO ZEROPAD NA FRENTE DO NUMERO
function adicionarZeros(numero) {
    return numero.toString().padStart(2, '0');
  }
  //colocar a hora atual no texto do btn(classe do HTML)
  setInterval(() => {
    let dataAtual = new Date();
    let horas = adicionarZeros (dataAtual.getHours());
    let minutos = adicionarZeros(dataAtual.getMinutes());
    let segundos = adicionarZeros(dataAtual.getSeconds());
  
    let horaFormatada = `${horas}:${minutos}:${segundos}`;
    btn.textContent=(horaFormatada);

    let data = new Date();
    let dia = adicionarZeros(data.getDate());
    let mes = adicionarZeros(data.getMonth()+1);
    let ano = data.getFullYear();
     
    let dia2 = new Date();
    let diaSemana = dia2.getDay();
    let dias = [" Domingo", " Segunda-Feira"," Terça-Feira", " Quarta-Feira", " Quinta-Feira", " Sexta-Feira", " Sábado"] ;
    

    let dt = `${dia}/${mes}/${ano}`;
    btn2.textContent =(dt + dias[diaSemana]);
    
  }, 1000);
   
  let btn = document.querySelector(".btn1");
  let btn2 = document.querySelector(".btn2");
 

  
 