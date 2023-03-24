# **CSI606-2021-02 - Remoto - Trabalho Final - Resultados**

## _Aluna(o): Ian Langkammer Batista_

---

### Resumo

A plataforma de gerenciamento de estágios é uma ferramenta online que facilita a divulgação e o controle de estágios para estudantes e empresas. Ela permite que as empresas publiquem vagas de estágio e que os estudantes possam se candidatar a elas, além de oferecer recursos para gerenciamento das vagas vigentes, assim como também os estudantes também pode gerenciar as suas candidaturas.

### 1. Funcionalidades implementadas

- Login
- Cadastro
- Cadastro de vagas
- Inscrição em vagas
- Edição de vaga
- Cancelamento da inscrição
- Atualizar dados da conta
- Logout
- Visualização de candidatos

### 2. Funcionalidades previstas e não implementadas

- Menu de busca de vagas, todas as vagas exibidas

### 3. Outras funcionalidades implementadas

- JWT token para autenticação durante os request

### 4. Principais desafios e dificuldades

- JWT, pois nunca havia configurado do zero o JWT em um projeto

### 5. Instruções para instalação e execução

1. Clone o repositório
2. Acessar os diretórios "frontend" e "backend" dentro desse diretório
3. Utilizando o NodeJS 16.15.0, executar:

```
npm run install
```

4. Para subir o frontend:

```
npm run serve
```

5. Criar o banco de dados estagio_now e configurar o .env do backend para acessar o banco corretamente via Prisma
6. Para subir o backend:

```
npm run dev
```
