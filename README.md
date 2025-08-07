# 📬 email-cleaner-node

Um script simples em Node.js que se conecta à sua conta de e-mail via IMAP e **remove automaticamente e-mails antigos** (por padrão, com mais de 365 dias).

Ideal para manter sua caixa de entrada limpa e organizada de forma automatizada.

---

## ⚙️ Tecnologias usadas

- Node.js
- [imap-simple](https://www.npmjs.com/package/imap-simple)
- dotenv
- moment
- chalk

---

## 🚀 Como usar

### 1. Clone o repositório ou crie os arquivos localmente:

```bash
git clone https://github.com/seu-usuario/email-cleaner-node.git
cd email-cleaner-node
```

### 2. Instale as dependências:

```bash
npm install
```

### 3. Configure as credenciais no arquivo `.env`:

```env
EMAIL=seuemail@gmail.com
PASSWORD=sua_senha_de_aplicativo
```

> ⚠️ Para Gmail: ative a verificação em duas etapas e gere uma **senha de app** em  
[https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)

---

### 4. Execute o script:

```bash
node index.js
```

Por padrão, o script procura e apaga e-mails com mais de **365 dias**.

---

## ✅ Resultado esperado

- Conexão à caixa de entrada
- Busca por e-mails antigos
- Marcação para exclusão
- Expurgo definitivo
- Log colorido no terminal

---

## 📂 Estrutura do projeto

```
email-cleaner-node/
├── index.js         # Script principal
├── config.js        # Configurações de conexão IMAP
├── .env             # Suas credenciais (NÃO versionar)
├── package.json
└── README.md
```

---

## 🔐 Segurança

- NUNCA compartilhe sua `.env` nem suas credenciais.
- Use **senhas de aplicativo** sempre que possível.
- Recomenda-se executar esse script em um ambiente local seguro.

---

## 🧠 Ideias para melhorias

- Permitir escolha do número de dias via argumento: `--days=30`
- Adicionar filtros (excluir apenas promoções ou newsletters)
- Criar uma interface web simples com Express ou FastAPI
- Registrar logs em arquivo `.log`

---

## 👨‍💻 Autor

**Carmon Ntefula**  
🔗 [linkedin.com/in/carmonntefula](https://www.linkedin.com/in/carmonntefula)  
🐙 [github.com/Carmondev](https://github.com/Carmondev)