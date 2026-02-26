# Projeto de Testes Automatizados - Banco Web

## 🎯 Objetivo

Este repositório contém automações de testes da aplicação **Banco Web** desenvolvidas durante a Mentoria 2.0 do Julio de Lima. O propósito é demonstrar como estruturar e executar validações utilizando **Cypress** com JavaScript, adotando comandos customizados, geração de relatórios e organização de cenário de teste.

## 🧩 Componentes do Projeto

- **Cypress**: framework principal de automação de interface.
- **Mocha e Mochawesome**: utilizados para geração de relatórios (via `cypress-mochawesome-reporter`).
- **Custom commands**: abstrações em `cypress/support/commands` para ações recorrentes (`login`, `transferências`, etc.).
- **Fixtures**: dados de teste (e.g., credenciais) em `cypress/fixtures`.
- **Tests (e2e)**: especificações de cenários em `cypress/e2e` (`login.cy.js`, `transferencias.cy.js`).
- **Aplicações externas necessárias**:
  - [banco-api](https://github.com/welitaluisa/banco-api)
  - [banco-web](https://github.com/welitaluisa/banco-web)

> As aplicações **API** e **Web** devem estar em execução para os testes funcionarem.

## 📂 Estrutura de Pastas

```
├── cypress.config.js          # Configuração do Cypress
├── package.json              # Dependências e scripts
├── cypress/
│   ├── e2e/                  # testes end-to-end
│   │   ├── login.cy.js
│   │   └── transferencias.cy.js
│   ├── fixtures/             # dados de teste
│   │   ├── credenciais.json
│   │   └── example.json
│   ├── support/
│   │   ├── commands.js       # registro de comandos customizados
│   │   ├── e2e.js            # suporte global do Cypress
│   │   └── commands/         # comandos individuais
│   │       ├── common.js
│   │       ├── login.js
│   │       └── transferencias.js
├── reports/                  # relatórios gerados
│   └── html/
│       ├── index.html
│       ├── assets/
│       ├── screenshots/
│       └── videos/
├── screenshots/
└── videos/
```

### **Descritivo das pastas**

- **e2e/**: contém os arquivos de especificação de cenários reais. Cada `.cy.js` corresponde a um fluxo testado.
- **fixtures/**: armazena dados estáticos consumidos pelos testes, reduzindo duplicação e facilitando manutenção.
- **support/commands/**: comandos reutilizáveis que encapsulam ações repetitivas (e.g., executar login, navegar até página de transferências).
- **reports/**: saída de relatórios HTML e recursos estáticos gerados ao final dos testes.
- **screenshots/ videos/**: capturas de tela e gravações de execução, feitas automaticamente pelo Cypress em caso de falhas ou quando configurado.

## 🛠️ Como instalar e executar

1. **Clonar o repositório**
   ```bash
   git clone https://github.com/welitaluisa/banco-web-tests.git
   cd banco-web-tests
   ```

2. **Instalar dependências**
   ```bash
   npm install
   ```

3. **Preparar aplicações externas**
   - Inicie a API do banco: [`banco-api`](https://github.com/welitaluisa/banco-api)
   - Inicie a interface web: [`banco-web`](https://github.com/welitaluisa/banco-web)

4. **Executar testes**
   - **Modo GUI**:
     ```bash
     npx cypress open
     ```
     e escolha o spec desejado.

   - **Modo headless (linha de comando)**:
     ```bash
     npm run cy:run
     ```
     (script configurado no `package.json`)

5. **Visualizar relatórios**
   Ao concluir a execução, um relatório HTML será gerado em `reports/html/index.html`. Abra-o no navegador para análise detalhada.

## 🧾 Tests e Commands

- **login.cy.js**: valida o fluxo de autenticação com credenciais válidas e inválidas.
- **transferencias.cy.js**: verifica operações de transferência entre contas.

Os arquivos de teste utilizam comandos personalizados definidos em `cypress/support/commands`:

- `login()` em `login.js` → encapsula a entrada de usuário, senha e submissão do formulário.
- `transferencia()` em `transferencias.js` → preenche formulário de transferência e submete.
- `common.js` contém utilitários genéricos (e.g., `getToken()`).

Esses comandos permitem maior legibilidade e reutilização, mantendo os specs concentrados na lógica de negócios dos testes.

## ✅ Como contribuir

1. Abra uma *issue* descrevendo o que deseja modificar ou adicionar.
2. Crie um branch com sua feature/fix.
3. Envie um *pull request* explicando as mudanças e como testá-las.

## 📄 Licença

Este projeto segue os termos de licenciamento padrão do repositório original (sem especificação adicional). Consulte o `LICENSE` caso disponível.

