fetch("https://bula.vercel.app/pesquisar?nome=AMOXICILINA&pagina=1", {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data.content[0]);
  })
  .catch((error) => {
    console.error("Erro:", error);
  });
