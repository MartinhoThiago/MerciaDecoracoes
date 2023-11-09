# Mércia - Decoração e Locação

## Visão Geral

Mércia - Decoração e Locação é um projeto de website que oferece serviços de decoração e locação para eventos variados, como casamentos, festas de debutante e eventos infantis. O site permite que os usuários naveguem por categorias de decoração, visualizem portfólios e solicitem orçamentos.

## Tecnologias Utilizadas

### Front-end

- **HTML**: Estrutura do site.
- **CSS**: Estilos para a apresentação do site.
- **JavaScript**: Funcionalidades interativas e dinâmicas.

### Back-end

- **Node.js**: Ambiente de execução do JavaScript no servidor.
- **Express**: Framework do Node.js para criar a API e gerenciar as rotas e requisições HTTP.
- **MySQL**: Sistema de gerenciamento de banco de dados para armazenamento de dados do site.

## Recursos

- Página principal com informações sobre os serviços oferecidos.
- Seção de categorias de decoração com imagens e links para páginas detalhadas.
- Formulário de contato para solicitação de orçamentos.
- Seções promocionais para destacar serviços específicos.
- Rodapé com informações de contato e navegação rápida.

## Configuração e Instalação

Para configurar e executar o projeto localmente, siga estas etapas:

### Pré-requisitos

- Node.js (versão recomendada: 12.x ou superior)
- NPM (incluído com o Node.js)
- MySQL (versão recomendada: 5.7 ou superior)

### Instalação

1. Clone o repositório do projeto:
   ```sh
   git clone https://github.com/MartinhoThiago/MerciaDecoracoes.git
   ```
2. Navegue até a pasta do projeto e instale as dependências:
   ```sh
   cd MerciaDecoracoes-Main
   npm install
   ```
3. Crie um banco de dados MySQL e configure o arquivo `Server.js` com as credenciais do banco de dados.
4. Inicie o servidor Express, na pasta JS, onde o server.js está localizado:
   ```sh
   node server.js
   ```
5. Abra o navegador e acesse `http://localhost:3000` para visualizar o site.

