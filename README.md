# Typed Full Stack Client

Aplicação front-end moderna desenvolvida em TypeScript, projetada para atuar como cliente de uma stack full stack tipada. O projeto oferece uma base robusta e escalável para consumir APIs, exibir dados dinâmicos e construir interfaces ricas utilizando tecnologias atuais do ecossistema web.

## Principais Funcionalidades e Casos de Uso

- Consumo de APIs REST/GraphQL com tipagem automática (suporte a OpenAPI via Orval)
- Interface responsiva e customizável com Tailwind CSS
- Estrutura modular para fácil expansão e manutenção
- Suporte a ambientes modernos de desenvolvimento (Vite, TypeScript)
- Pronto para integração com autenticação, gerenciamento de estado e testes

## Stack e Tecnologias Utilizadas

- **TypeScript** (90%): Linguagem principal para garantir tipagem estática e segurança.
- **JavaScript**: Complementa funcionalidades onde necessário.
- **HTML** e **CSS**: Estrutura e estilização base.
- **Vite**: Build tool e servidor de desenvolvimento rápido.
- **Tailwind CSS**: Utilitário para estilização moderna.
- **Orval**: Geração automática de clientes a partir de OpenAPI.
- **ESLint**: Padronização de código.
- **PostCSS**: Processamento avançado de CSS.

## Estrutura de Pastas e Arquivos

```
├── .gitignore                # Arquivos e pastas ignorados pelo Git
├── README.md                 # Documentação do projeto
├── eslint.config.js          # Configuração do ESLint
├── index.html                # Página HTML principal da aplicação
├── orval.config.ts           # Configuração do Orval para geração de API clients
├── package.json              # Dependências e scripts do projeto
├── package-lock.json         # Lockfile do npm
├── postcss.config.js         # Configuração do PostCSS
├── src/                      # Código-fonte principal (componentes, rotas, páginas, etc.)
├── tailwind.config.js        # Configuração do Tailwind CSS
├── tsconfig.json             # Configuração global do TypeScript
├── tsconfig.app.json         # Configuração TS específica da aplicação
├── tsconfig.node.json        # Configuração TS para ambiente Node.js
├── vite.config.ts            # Configuração do Vite
```

### Explicação das partes relevantes

- **src/**: Onde está todo o código-fonte da aplicação. Normalmente contém componentes, páginas, hooks, serviços de API e estilos adicionais.
- **orval.config.ts**: Permite gerar automaticamente clientes para APIs baseados em OpenAPI/Swagger.
- **tailwind.config.js** e **postcss.config.js**: Customização avançada dos utilitários e processamento de estilos.
- **eslint.config.js**: Garante a padronização e qualidade do código.
- **tsconfig.\***: Arquivos de configuração do compilador TypeScript para diferentes contextos de build.
- **vite.config.ts**: Ajustes do ambiente de desenvolvimento/build.

## Instalação e Execução Local

### Pré-requisitos

- [Node.js](https://nodejs.org/) (recomendado: versão 18+)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Passo a passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/Cardosofiles/typed-full-stack-client.git
   cd typed-full-stack-client
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configure variáveis de ambiente (se necessário)**
   - Crie um arquivo `.env` na raiz do projeto, se for necessário definir endpoints ou chaves de API.
   - Exemplo:
     ```
     VITE_API_URL=https://sua-api.com
     ```

4. **(Opcional) Gere clientes de API**
   ```bash
   npm run orval
   # ou
   yarn orval
   ```

5. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```
   Acesse em `http://localhost:5173` (ou porta exibida no terminal).

## Como Executar Testes

> Se existirem testes configurados, utilize:
```bash
npm test
# ou
yarn test
```
Consulte o `package.json` para detalhes ou comandos específicos.

## Exemplos de Uso das Funcionalidades

- **Consumo de API**: Ao configurar corretamente o endpoint da API no `.env`, os componentes do `src/` consomem e exibem dados automaticamente.
- **Customização Visual**: Edite `tailwind.config.js` para alterar o tema e utilitários.
- **Geração de clients tipados**: Utilize o comando `npm run orval` após atualizar a especificação OpenAPI.

## Boas Práticas e Recomendações

- Sempre siga o padrão de código definido pelo ESLint.
- Utilize TypeScript para todos os novos componentes e serviços.
- Prefira variáveis de ambiente para informações sensíveis.
- Realize testes antes de subir alterações.
- Utilize branches para desenvolvimento de novas features ou correções.
- Mantenha o projeto e dependências atualizados.
- Documente endpoints, componentes e regras de negócio.

---

Contribuições são bem-vindas! Para dúvidas ou sugestões, utilize as issues do repositório.



## 📫 Contato

<div align="center">

<a href="mailto:cardosofiles@outlook.com">
  <img src="https://img.shields.io/badge/Email-0078D4?style=for-the-badge&logo=microsoftoutlook&logoColor=white" alt="Email"/>
</a>
<a href="https://www.linkedin.com/in/joaobatista-dev/" target="_blank">
  <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/>
</a>
<a href="https://github.com/Cardosofiles" target="_blank">
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
</a>
<a href="https://cardosofiles.dev/" target="_blank">
  <img src="https://img.shields.io/badge/Portfólio-222222?style=for-the-badge&logo=about.me&logoColor=white" alt="Portfólio"/>
</a>

</div>
