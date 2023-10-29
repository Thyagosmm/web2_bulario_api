let http = require("http");
let server = http.createServer(function (requisicao, resposta) {
  fetch(
    "https://bula.vercel.app/pesquisar?nome=" +
      requisicao.url.substring(1) +
      "&pagina=1",
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.content[0], data.content[1]);
      let html =
        "<!DOCTYPE html><html lang='pt-br'><head>    <meta charset='UTF-8'>    <meta name='viewport' content='width=device-width, initial-scale=1.0'>    <title>Document</title></head><body>";
      for (let i = 0; i < data.content.length; i++) {
        html +=
          "<h1>Nome do Produto " +
          (i + 1) +
          ": " +
          data.content[i].nomeProduto +
          "</h1></p>" +
          "</p><p>ID Produto: " +
          data.content[i].idProduto +
          "</p>" +
          "</p><p>Expediente: " +
          data.content[i].expediente +
          "</p>" +
          "</p><p>CNPJ: " +
          data.content[i].cnpj +
          "<p>Número de Registro " +
          (i + 1) +
          ": " +
          data.content[i].numeroRegistro +
          "</p>" +
          "</p><p>Número da Transação: " +
          data.content[i].numeroTransacao +
          "</p>" +
          "</p><p>Data: " +
          data.content[i].data +
          "</p>" +
          "</p><p>Número do Processo: " +
          data.content[i].numProcesso +
          "</p>" +
          "<p>Razão Social: " +
          data.content[i].razaoSocial +
          "</p><p>ID da Bula do Paciente: " +
          data.content[i].idBulaPacienteProtegido +
          "</p>" +
          "</p><p>ID da Bula do Profissional: " +
          data.content[i].idBulaProfissionalProtegido +
          "</p>";
      }
      html += "</body></html>";
      resposta.end(html);
    })
    .catch((error) => {
      console.error("Erro:", error);
      let html = "<h1>PAGE NOT FOUND</h1>";
      resposta.end(html);
    });
});
server.listen(3000);
