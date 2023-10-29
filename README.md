# requisicao_api

Tema: Clínica Odontológica
Dupla: Thyago Silva e Gideão Ferreira

O link da API: https://bula.vercel.app/#req_cf75a38fdbdc4312b1e62a6544de5a93

Escolha: essa API foi escolhida porque pode ser uma ferramento valiosa para profissionais da odontologia. Ela permite que dentistas e outros profissionais de saúde bucal pesquisem informações sobre medicamentos de forma rápida e fácil. Usando a API Bulario, o dentista pode pesquisar o medicamento pelo nome e obter informações importantes, como o número de registro, a razão social do fabricante e até mesmo a bula do medicamento. Além disso, a API Bulario também pode ser útil para pesquisadores em odontologia. Eles podem usar a API para coletar dados sobre vários medicamentos para estudos ou análises.

Parâmetro: quando uma requisição é recebida, o servidor faz uma requisição GET para a API Bulario, buscando informações sobre um medicamento específico. O nome do medicamento é extraído da URL da requisição (por exemplo, se você acessar http://localhost:3000/AMOXICILINA, o servidor buscará informações sobre o medicamento “AMOXICILINA”).

Resultado da requisição: retorna uma lista de medicamentos que correspondem ao nome fornecido. Cada item na lista é um objeto que contém várias propriedades, como o nome do produto, o número do registro, o expediente, o cnpj, o número de transação, a data, o número do processo, a razão social, o id da bula do paciente e o id da bula do profissional.

Impressão: o código então percorre cada item na lista de medicamentos retornados e cria uma string HTML contendo as informações do medicamento. Esta string HTML é então enviada como resposta à requisição original.

Conclusão: portanto, se tudo funcionar corretamente, ao acessar http://localhost:3000/NOME_DO_MEDICAMENTO em seu navegador, você verá uma página HTML listando informações sobre todos os medicamentos que correspondem ao NOME_DO_MEDICAMENTO.
