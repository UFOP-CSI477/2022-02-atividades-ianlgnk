# Front end - Sistema de doação de sangue

<img src="https://github.com/fboliveira/CSI477-Sistemas-Web/raw/master/Codes/database-model/CSI606-sistema-doacao-sangue.png">

> Esse é um projeto em VueJS (versão 2) responsável por criar, editar, excluir e visualizar dados referente a um banco de dados de doações de sangue

## 🖥️ Tecnologias

As tecnologias abaixo são as principais, portanto outras bibliotecas e dependências que dão suporte a algumas features podem ser visualizadas no [package.json](https://github.com/UFOP-CSI477/2022-02-atividades-ianlgnk/blob/master/Atividades/atividade-pratica-02/package.json) do projeto

- NodeJS (16.15.0)
- NPM (8.5.5)
- Vue (2.6.14)
- Vuetify (2.6.0)
- VueRouter (3.5.1)
- Axios (1.1.3)

## 🧐 Para que serve essas tecnologias?

- NodeJS é popular para construção de API's REST
- NPM funciona como um gerenciador de pacotes do projeto
- Vue é um framework que bate de frente com o React
- Vuetify é uma biblioteca de components UI para facilitar a construção de interfaces
- VueRouter basicamente gerencia os componentes renderizados em tela via URL
- Axios é uma biblioteca utilizada para facilitar a realização de requests e análise de responses

## 📥 Como instalar e rodar a API?

Clone o repositório<br />
Acesse essa pasta<br />
Instale as dependências do projeto

```
git clone git@github.com:UFOP-CSI477/2022-02-atividades-ianlgnk.git
cd Atividades/atividade-pratica-02
npm install
npm run serve
```

⚠️ Caso não tenha conseguido subir o projeto, por favor, entre em contato comigo via [WhatsAPP!](https://wa.me/5533988459751)

## 📐 Arquitetura

Basicamente dentro da src temos a App.vue que é o componente raíz Vue onde toda a aplicação começa, em seguida encontramos:

- components: todos os componentes genéricos utilizados por vários outros componentes ficam salvos aqui
- plugins: nesse diretório instanciamos e criamos as configurações necessárias do VueRouter e Vuetify
- views: essa pasta fica responsável por cada tela que existe no sistema, que são alteradas via URL

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
