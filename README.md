# api-mensage
api-node - Versão 2

Desenvolvimento [npm run dev] (Rodando um server local para ambiente de desenvolvimento)

Produção [npm run start] (Rodar o comando para compilação do ecmascript16 em ecmascript15 para leitura dos browsers e starta a aplicação)

O projeto roda atualmente no heroku, então para deploy de alterações:

[
git add .
git commit -m "Informação"
git push heroku master
heroku logs --rail (Visualização dos logs)
]

Obs: O código de produção se encontra na pasta dist

Processo de desenvolvimento

Alterar o arquivo que se encontra em src e rodar o comando npm run start para assim gerar o código compilado em dist e assim poder subir no heroku
