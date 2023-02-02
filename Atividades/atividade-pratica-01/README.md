# API RESTful - Sistema de doação de sangue

<img src="https://github.com/fboliveira/CSI477-Sistemas-Web/raw/master/Codes/database-model/CSI606-sistema-doacao-sangue.png">

> Esse é um projeto em NodeJS responsável por criar uma API para manipular um banco de dados referente a doações de sangue.

## 🖥️ Tecnologias

As tecnologias abaixo são as principais, portanto outras bibliotecas e dependências que dão suporte a algumas features podem ser visualizadas no [package.json](https://github.com/UFOP-CSI477/2022-02-atividades-ianlgnk/blob/master/Atividades/atividade-pratica-01/package.json) do projeto

- NodeJS (16.15.0)
- NPM (8.5.5)
- Express (4.18.2)
- Typescript (4.9.5)
- Prisma (4.9.0)
- PostgreSQL 15

## 🧐 Para que serve essas tecnologias?

- NodeJS é popular para construção de API's REST
- NPM funciona como um gerenciador de pacotes do projeto
- Express é um framework utilizado com o NodeJS para facilitar o desenvolvimento de aplicações back-end
- TypeScript é um superconjunto do JavaScript que dá maior suporte a tipagem de variáveis e funções, impactando diretamente na qualidade de código
- Prisma é um ORM para facilitar o mapeamento e manipulação das entidades do sistema
- PostgreSQL é o banco de dados relacional utilizado nesse projeto
  - ⚠️ Instale também o [pgAdmin](https://www.pgadmin.org) visto que ele facilita a visualização e criação do banco de dados

## 📥 Como instalar e rodar a API?

Clone o repositório<br />
Acesse essa pasta<br />
Instale as dependências do projeto

```
git clone git@github.com:UFOP-CSI477/2022-02-atividades-ianlgnk.git
cd Atividades/atividade-pratica-01
npm install
```

Agora é hora de criar o banco de dados via [pgAdmin](https://www.pgadmin.org)<br />
Primeiramente, acesse na aba 'Servers' a opção 'PostgreSQL 15'<br />
Agora clique com o botão direito em 'Databases' e selecione a opção 'Create -> Database'<br />
Defina o nome como desejar, eu sugiro 'banco_sanguineo'<br />
Clique em 'Save' e pronto, o banco está pronto para receber as migrations 🥳

Nessa etapa você precisará criar um arquivo '.env' nessa mesma pasta com um valor 'DATABASE_URL' de acordo com os dados do seu banco. Isso porque devemos ofertar ao Prisma a URL de acesso ao nosso banco para manipulação dos dados e das estruturas<br />

Exemplo DATABASE_URL:

```
# USERNAME - nome de usuário do banco
# PASSWORD - senha do usuario no banco
# HOST - link do host
# PORT - porta em que o banco está rodando
# DATABASENAME - nome do banco que você criou
# SCHEMANAME - nome do schema dentro do banco

DATABASE_URL="postgresql://USERNAME:PASSWORD@HOST:PORT/DATABASENAME?schema=SCHEMANAME"
```

Como ficou o meu .env:

```
# USERNAME - postgres
# PASSWORD - admin
# HOST - localhost
# PORT - 5432
# DATABASENAME - banco_sanguineo
# SCHEMANAME - public

DATABASE_URL="postgresql://postgres:admin@localhost:5432/banco_sanguineo?schema=public"
```

⚠️ Fique atento com os '#', eles são comentários no .env e não são obrigatórios estarem no arquivo!

Nesse momento, iremos sincronizar o esquema do Prisma com o nosso banco de dados para que seja possível que o Prisma consiga manipular os dados dentro das tabelas desse banco, portanto execute o seguinte comando:

```
npx prisma db push
```

Pronto! Agora a sua base de dados está sincronizada com o esquema do Prisma 🥳

Uma vez que as dependências estão corretamente instaladas e o banco devidamente configurado e sincronizado, podemos rodar a API em ambiente de desenvolvimento com o seguinte comando:

```
npm run dev
```

Caso queira buildar o projeto e executá-lo em produção, execute:

```
npm run build
npm run start
```

⚠️ Caso não tenha conseguido subir o projeto, por favor, entre em contato comigo via [WhatsAPP!](https://wa.me/5533988459751)

## 📬 Como consultar a API?

Essa API possui as seguintes rotas disponíveis:

- '/pessoa'
- '/tipoSanguineo'
- '/estado'
- '/cidade'
- '/unidade'
- '/localColeta'
- '/doacao'
- '/produto'
- '/distribuicao'

Além disso, cada uma dessas rotas possuem subrotas:

- GET '/'

  > Retorna todos registros daquela entidade

- GET '/:id'

  > Retorna um registro com base no id da entidade

- GET '/nome/:name'

  > Retorna todos registros que contém parte do nome informado da entidade

  > ⚠️ Somente as entidades que tem o campo 'nome' desfrutam desse endpoint!

- POST '/'

  > Cria e retorna uma nova entidade

- PUT '/:id'

  > Edita e retorna a entidade pelo id

- DELETE '/:id'
  > Excluí e retorna a entidade pelo id

Exemplo de consulta à API:

- GET 'http://localhost:4001/estado'

  > Retorna todos os estados encontrados

- GET 'http://localhost:4001/estado/1'

  > Retorna o estado de id 1

- GET 'http://localhost:4001/estado/nome/erais'

  > Retorna todos os estados que o nome contém a string 'erais'

- POST 'http://localhost:4001/estado'

  > Cria e retorna o estado recém criado

- PUT 'http://localhost:4001/estado/1'

  > Atualiza e retorna o estado atualizado de id 1

- DELETE 'http://localhost:4001/estado/1'
  > Excluí e retorna o estado excluído de id 1

## 📐 Arquitetura

Utilizamos duas pastas principais dentro da src sendo elas:

- <b>modules:</b> cada pasta dentro da modules representa alguma entidade do sistema e nela serão encontrados 4 arquivos, sendo eles:
  - <b>repository.ts:</b> responsável exclusivamente pela comunicação com o banco de dados através do Prisma
  - <b>service.ts:</b> essa camada fica a par de validar as regras de negócio e solicitar a repository para persistir as mudanças no banco
  - <b>controller.ts:</b> os controllers se responsabilizam por validar os dados passados para a API e encaminha essas informações para a service
  - <b>index.ts:</b> nesse passo configuramos as rotas e qual método da controller ficará responsável para cada chamada
- <b>shared:</b> nessa pasta ficam guardados arquivos que são utilizados por toda a aplicação, como o APIError, instância do Prisma, entre outros.

## 🤝 Contribuidores

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/ianlgk">
        <img src="https://avatars.githubusercontent.com/u/80867137?v=4" width="100px;" alt="Ian Langkammer Batista - Photo from GitHub"/><br>
        <sub>
          <b>ian langkammer batista</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
