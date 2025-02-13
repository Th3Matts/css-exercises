//Chamar o resultado da integração realizada e converter em JSON
var raw = fastdialer.getIntegracao("ESPECIALIDADE");

var dados = JSON.parse(raw);

//Trazer a opção digitada pelo cliente
var especialidade = fastdialer.getCampo("ESPECIALIDADE");

//consultar o id da especialidade selecionada
for (var i = 0; i < dados.content.length; i++) {
  var esp = dados.content[i].nome;

  if (esp.indexOf(especialidade) !== -1) {
    var index = i;
    var encontrado = "S";
    break;
  }
}

var especialidade_id = dados.content[index].especialidade_id;
fastdialer.setCampo("ESPECIALIDADE_ID", especialidade_id);

//Gerar data para consultar horários disponível
var data = new Date();

var data_start =
  data.getDate() + "-" + (data.getMonth() + 1) + "-" + data.getFullYear();
fastdialer.setCampo("DATA_START", data_start);

//Data para os próximos 20 dias
data.setDate(data.getDate() + 20);

var data_end =
  data.getDate() + "-" + (data.getMonth() + 1) + "-" + data.getFullYear();
fastdialer.setCampo("DATA_END", data_end);


fastdialer.setCampo("MENSAGEM_VALOR", "")
switch (especialidade) {
  case "Clínica Geral":
    fastdialer.setCampo("VALOR_CONSULTA", "R$180,00");
    break
  case "Nutrição":
    fastdialer.setCampo("VALOR_CONSULTA", "R$220,00");
    break;
  case "Ortopedia":
    fastdialer.setCampo("VALOR_CONSULTA", "R$230,00");
    break;
  case "Dermatologia":
    fastdialer.setCampo("VALOR_CONSULTA", "R$245,00");
    break;
  case "Angiologia e Vascular":
    fastdialer.setCampo("VALOR_CONSULTA", "R$245,00");
    break;
  case "Coloproctologia":
    fastdialer.setCampo("VALOR_CONSULTA", "R$245,00");
    break;
  case "Gastroenterologia":
    fastdialer.setCampo("VALOR_CONSULTA", "R$245,00");
    break;
  case "Oftalmologia":
    fastdialer.setCampo("VALOR_CONSULTA", "R$250,00");
    break;
  case "Urologia":
    fastdialer.setCampo("VALOR_CONSULTA", "R$245,00");
    break;
  case "Otorrinolaringologia":
    fastdialer.setCampo("VALOR_CONSULTA", "R$250,00");
    break;
  case "Ginecologia":
    fastdialer.setCampo("VALOR_CONSULTA", "R$298,00");
    fastdialer.setCampo(
      "MENSAGEM_VALOR",
      "_Em consultas de Ginecologia, temos o valor do Papanicolau incluso_"
    );
    break;
//  case "Cardiologia":
//    fastdialer.setCampo("VALOR_CONSULTA", "R$295,00");
//    fastdialer.setCampo(
//      "MENSAGEM_VALOR",
//      "_Em consultas de Cardiologia, temos o valor do Eletrocardiograma incluso_"
//    );
//    break;
}
