let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas:  [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
 ];

//Nomes e Notas

atletas.forEach(function(name){
  let nameAtleta = name.nome;
  console.log(`\nAtleta: ${nameAtleta}`);

  let pontos = name.notas.sort();
  console.log(`Notas Obtidas: ${pontos}`);

  //Organizando e descartando notas

  let pontosOrganizados = name.notas;
 
  pontosOrganizados.sort(function(a,b){
    if(a > b) {
        return 1;
    }
    if(a < b) {
        return -  1;
    }
    else {
        return 0;
    }
  });
  let maioresNotas = pontosOrganizados.slice(1,4)

  let soma = 0;
  let media = 0

  maioresNotas.forEach(function(maiores){
    soma = soma + maiores;

    media = soma / maioresNotas.length;
    
  })

  console.log(`Média válida: ${media}`)

});



