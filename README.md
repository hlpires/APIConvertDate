Projeto de API de Conversão de Datas
Este projeto é uma API simples desenvolvida em Node.js usando o framework Express. A API tem como objetivo fornecer informações sobre datas e conversões entre diferentes formatos de tempo, como Unix e UTC.

Funcionalidades
A API oferece as seguintes funcionalidades:

Retorno da data atual em formato Unix e UTC:

URL: /api
Resposta: Retorna a data e hora atuais tanto no formato Unix (timestamp) quanto no formato UTC (horário padrão).
Conversão de uma data Unix para UTC:

URL: /api/:date
Exemplo de uso: /api/1450137600
Resposta: Converte o timestamp Unix fornecido para o formato UTC.
Se o timestamp for válido (maior que 1 bilhão), ele será convertido para uma data UTC legível.
Conversão de uma data UTC para Unix:

URL: /api/:date
Exemplo de uso: /api/2015-12-25
Resposta: Converte uma data fornecida no formato UTC para o formato Unix (timestamp).
Saudação simples:

URL: /api/hello
Resposta: Retorna uma saudação "hello API" em formato JSON.
Tecnologias Utilizadas
Node.js: Ambiente de execução para JavaScript.
Express: Framework minimalista para desenvolvimento de APIs.
CORS (Cross-Origin Resource Sharing): Permite o acesso à API de diferentes origens (cross-origin).
JavaScript: Linguagem de programação usada para lógica de negócios e manipulação de dados.
Como Usar
Instalação das dependências: Para rodar a aplicação em sua máquina, é necessário ter o Node.js instalado. Após isso, basta instalar as dependências do projeto:

bash
Copy code
npm install
Executando o servidor: Com as dependências instaladas, você pode iniciar o servidor com o comando:

bash
Copy code
npm start
O servidor será iniciado na porta 3000 (ou outra porta definida pela variável de ambiente PORT).

Utilização da API:

Acesse http://localhost:3000/api para obter a data e hora atuais.
Para conversão de uma data Unix para UTC, utilize o formato http://localhost:3000/api/{timestamp}.
Para converter uma data UTC para Unix, use o formato http://localhost:3000/api/{data-utc}.
Utilize http://localhost:3000/api/hello para obter a saudação da API.
Exemplo de Respostas da API
Requisição: /api/1450137600

Resposta:
json
Copy code
{
  "unix": 1450137600,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
Requisição: /api/2015-12-25

Resposta:
json
Copy code
{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
Requisição: /api/hello

Resposta:
json
Copy code
{
  "greeting": "hello API"
}