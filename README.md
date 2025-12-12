# Sistema de Atendimento - Web Ticket

Sistema de gerenciamento de senhas para atendimento com interface web moderna e intuitiva.

## 📋 Descrição

Sistema desenvolvido para gerenciar filas de atendimento com três tipos de senhas:
- **SP (Senha Prioritária)**: Para atendimento prioritário
- **SG (Senha Geral)**: Para atendimento geral
- **SE (Senha Especial)**: Para atendimento especial/rápido

## 🚀 Funcionalidades

- ✅ Emissão de senhas com código único (formato: YYMMDD-TPSQ)
- ✅ Sistema de rodízio inteligente: SP → SE → SG → SP...
- ✅ Controle manual de expediente (Abrir/Fechar)
- ✅ Painel com últimas 3 senhas chamadas
- ✅ Fila de espera em tempo real
- ✅ Tempo médio de atendimento por tipo de senha
- ✅ Interface responsiva (funciona em celular e desktop)
- ✅ Modal customizado para avisos
- ✅ Design profissional em tons de verde

## 🛠️ Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool rápida e moderna
- **CSS-in-JS** - Estilos integrados no componente
- **JavaScript ES6+** - Sintaxe moderna

## 📦 Como Executar o Projeto

### Pré-requisitos
- Node.js instalado (versão 14 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/web_ticket.git
cd web_ticket
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto:
```bash
npm run dev
```

4. Acesse no navegador:
```
http://localhost:5173
```

## 📁 Estrutura do Projeto

```
web_ticket/
├── img/                    # Imagens e logos
│   └── logo aptile.png
├── public/                 # Arquivos públicos
├── src/                    # Código fonte
│   ├── App.jsx            # Componente principal
│   ├── App.css            # Estilos
│   ├── index.css          # Estilos globais
│   └── main.jsx           # Ponto de entrada
├── README.md              # Este arquivo
├── TODO.md                # Lista de tarefas
├── LICENSE                # Licença do projeto
└── package.json           # Dependências
```

## 🎯 Como Usar

### Emitir Senha
1. Clique em um dos botões: **Prioritária**, **Geral** ou **Especial**
2. A senha será gerada e adicionada à fila

### Chamar Próxima Senha
1. Clique no botão **"Chamar Próxima"**
2. O sistema seguirá o rodízio de prioridades
3. A senha chamada aparecerá no painel de últimas chamadas

### Controlar Expediente
- **Abrir**: Clique no botão verde "ABRIR" no header
- **Fechar**: Clique no botão vermelho "FECHAR" no header
- O indicador mostra o status atual (bolinha verde = aberto, vermelha = fechado)

## 📊 Regras de Negócio

### Formato da Senha
- **YYMMDD-TPSQ**
  - YY: Ano (2 dígitos)
  - MM: Mês (2 dígitos)
  - DD: Dia (2 dígitos)
  - TP: Tipo (SP, SG ou SE)
  - SQ: Sequencial (3 dígitos)
  - XXXX: Código aleatório (4 caracteres)
  
Exemplo: `251126-SP001-A3F9` (26/11/2025, Senha Prioritária nº 1, código A3F9)

### Tempo Médio de Atendimento
- **SP (Prioritária)**: 15 minutos
- **SG (Geral)**: 5 minutos
- **SE (Especial)**: 1 minuto (95%) ou 5 minutos (5%)

### Rodízio de Atendimento
O sistema segue a ordem: **SP → SE → SG → SP → SE → SG...**

Isso garante que:
- Senhas prioritárias sejam atendidas com frequência
- Senhas especiais (rápidas) sejam intercaladas
- Senhas gerais não fiquem muito tempo esperando

## 👥 Equipe
   NOME                     
- [Paulo Sergio = 01835151] 
- [Alyce Victoria = 01814992]
- [Thays Larissa = 01834961]
- [Eduardo Gonçalves = 01824297]
- [Leandro Gonçalves = 01800086]
- [Isabela Braz = 01861647]

## 📅 Data de Apresentação

26/11/2025 (Amanhã!)

## 📄 Licença

Este projeto está sob a licença Creative Commons - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🎓 Projeto Acadêmico

Projeto desenvolvido para fins educacionais como parte do curso [ANALISE E DESENVOLVIMENTO DE SISTEMAS].
