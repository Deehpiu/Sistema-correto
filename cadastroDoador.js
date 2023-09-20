
// Um array para armazenar os doadores
let doadores = []

// Função para cadastrar um doador
function cadastrarDoador() {
    const nome = prompt ("Qual seu nome completo?")
    const idade = prompt ("Qual sua idade?")
    const peso =  prompt ("Qual seu peso?")
    const tipoSanguineo =  prompt ("Qual seu tipo sanguineo?")
    const ultimaDoacao = prompt ("Quando foi sua ultima doação? (dd/mm/aaaa)")
  
    //As informações de cada usuário vão ser armazenadas neste objeto
    const doador = {
      nome: nome,
      idade: idade,
      peso: peso,
      tipoSanguineo: tipoSanguineo,
      ultimaDoacao: ultimaDoacao
     
    };
    //Crie um código que adiciona o objeto doador ao array doadores
    doadores.push(doador)

    console.log (doadores)

    //Este código retorna uma mensagem. Deixe inalterado
    alert("Doador cadastrado com sucesso!");

  }
  
  // Função para listar os doadores
  function listarDoadores() {
    let resultado = "===== LISTAGEM DE DOADORES =====";
    for (let doador of doadores){
      resultado += `\n NOME: ${doador.nome}`
      resultado += `\n IDADE: ${doador.idade}`
      resultado += `\n PESO: ${doador.peso}`
      resultado += `\n TIPO SANGUINIO: ${doador.tipoSanguineo}`
      resultado += `\n ÚLTIMA DOAÇÃO: ${doador.ultimaDoacao}`
  };
    //Aqui vai o código que lista todos os doadores
    console.log(resultado)
  }
  
  // Função para buscar doadores por tipo sanguíneo
  function buscarPorTipoSanguineo() {
    const tipoSanguineo = prompt("Digite o tipo sanguíneo desejado: ");
    let resultado = `Digite o tipo sanguíneo desejado: ${tipoSanguineo}\n`;
  
    resultado += "========================\n";
    resultado += "RESULTADO DA BUSCA:\n";
    resultado += "========================\n";
    
    for (let doador of doadores){
      if (tipoSanguineo === doador.tipoSanguineo){
      
      resultado += `\n NOME: ${doador.nome}`
      resultado += `\n IDADE: ${doador.idade}`
      resultado += `\n PESO: ${doador.peso}`
      resultado += `\n TIPO SANGUINIO: ${doador.tipoSanguineo}`
      resultado += `\n ÚLTIMA DOAÇÃO: ${doador.ultimaDoacao}`
      }   
    }
    //Aqui vai o código que busca doadores por tipo sanguíneo
    console.log(resultado);
  }
  
  // Função para buscar doadores por data da última doação
  function buscarPorDataUltimaDoacao() {
    const dataDesejada = prompt("Digite a data desejada (dd/mm/aaaa): ");
    let resultado = `Digite a data desejada: ${dataDesejada}\n`;
  
    resultado += "========================\n";
    resultado += "RESULTADO DA BUSCA:\n";
    resultado += "========================\n";
  
    //Aqui vai o código que busca os doadores por data da última doação
    for (let doador of doadores){
      if (dataDesejada === doador.ultimaDoacao){
      
      resultado += `\n NOME: ${doador.nome}`
      resultado += `\n IDADE: ${doador.idade}`
      resultado += `\n PESO: ${doador.peso}`
      resultado += `\n TIPO SANGUINIO: ${doador.tipoSanguineo}`
      resultado += `\n ÚLTIMA DOAÇÃO: ${doador.ultimaDoacao}`
      }   
    }
    console.log(resultado);
  }
  
  // Função para executar a ação com base na opção selecionada no menu suspenso
  function executarAcao() {
    const opcoes = document.getElementById("opcoes");
    const opcaoSelecionada = opcoes.value;
  
    switch (opcaoSelecionada) {
      case "cadastrar":
        cadastrarDoador();
        break;
      case "listar":
        listarDoadores();
        break;
      case "buscarTipo":
        buscarPorTipoSanguineo();
        break;
      case "buscarData":
        buscarPorDataUltimaDoacao();
        break;
      case "sair":
        console.log("Encerrando o programa.");
        break;
      default:
        console.log("Opção inválida. Tente novamente.");
    }
  } 