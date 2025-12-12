// ============================================
// IMPORTAÇÕES
// ============================================
// Importa o React e o hook useState para gerenciar estados do componente
import React, { useState } from "react";


// ============================================
// ESTILOS CSS EXPLICADOS
// ============================================

// Usamos CSS-in-JS para manter tudo organizado em um arquivo
const styles = `
  
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  /* ========================================== */
  /* ESTILOS GLOBAIS DO BODY */
  /* ========================================== */
  body {
    margin: 0;                    /* Remove margem padrão */
    padding: 0;                   /* Remove espaçamento interno padrão */
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; /* Define a fonte */
    background: linear-gradient(135deg, #f0f9f4 0%, #e8f5e9 100%); /* Fundo verde degradê */
    color: #1b5e20;               /* Cor do texto verde escuro */
    display: flex;                /* Usa flexbox para layout */
    flex-direction: column;       /* Organiza elementos em coluna */
    min-height: 100vh;            /* Altura mínima de 100% da tela */
  }

  /* ========================================== */
  /* BARRA SUPERIOR (HEADER) */
  /* ========================================== */
  .top-header {
    position: fixed;              /* Fica fixo no topo ao rolar a página */
    top: 0;                       /* Posição no topo */
    left: 0;                      /* Alinhado à esquerda */
    right: 0;                     /* Alinhado à direita (ocupa toda largura) */
    height: 70px;                 /* Altura da barra */
    padding: 0 40px;              /* Espaçamento interno lateral */
    display: flex;                /* Usa flexbox */
    align-items: center;          /* Centraliza verticalmente */
    justify-content: space-between; /* Espaça elementos nas extremidades */
    gap: 32px;                    /* Espaço entre elementos */
    background: linear-gradient(135deg, #2e7d32 0%, #388e3c 100%); /* Fundo verde degradê */
    color: white;                 /* Texto branco */
    font-size: 16px;              /* Tamanho da fonte */
    box-shadow: 0 2px 8px rgba(46, 125, 50, 0.2); /* Sombra suave */
    z-index: 10;                  /* Fica acima de outros elementos */
  }

  /* Logo no header */
  .logo-header {
    height: 50px;                 /* Altura do logo */
    width: auto;                  /* Largura automática (mantém proporção) */
    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.2)); /* Sombra no logo */
    transition: all 0.3s ease;    /* Transição suave de 0.3 segundos */
  }

  /* Logo no header quando o mouse passa por cima */
  .logo-header:hover {
    transform: translateY(-2px);  /* Move 2px para cima */
    filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3)); /* Sombra maior */
  }

  /* Container central do header */
  .header-center {
    display: flex;                /* Usa flexbox */
    align-items: center;          /* Centraliza verticalmente */
    gap: 32px;                    /* Espaço entre elementos */
    flex: 1;                      /* Ocupa espaço disponível */
    justify-content: center;      /* Centraliza horizontalmente */
  }

  /* Label "ÚLTIMAS SENHAS CHAMADAS" */
  .label-ultimas {
    font-weight: 500;             /* Texto em negrito */
    text-transform: uppercase;    /* Transforma em maiúsculas */
    letter-spacing: 0.5px;        /* Espaçamento entre letras */
    font-size: 14px;              /* Tamanho da fonte */
  }

  /* Lista das últimas senhas no topo */
  .lista-topo {
    display: flex;                /* Usa flexbox */
    gap: 16px;                    /* Espaço entre itens */
    list-style: none;             /* Remove marcadores da lista */
    margin: 0;                    /* Remove margem */
    padding: 0;                   /* Remove espaçamento interno */
  }

  /* Cada item da lista do topo */
  .item-topo {
    display: flex;                /* Usa flexbox */
    flex-direction: column;       /* Organiza em coluna */
    justify-content: space-between;      /* Centraliza verticalmente */
    color: white;                 /* Texto branco */
    width:200px;
    height:40px;}

  /* Número da senha no topo */
  .topo-numero {
    font-weight: 700;             /* Texto bem negrito */
    font-size: 18px;              /* Tamanho da fonte */
    line-height:1; }
  
  /* Informações (data/hora) da senha no topo */
  .topo-info {
    font-size: 12px;              /* Fonte menor */
    color: rgba(255, 255, 255, 0.85); /* Branco semi-transparente */
    white-space: nowrap;
  }

  /* ========================================== */
  /* CONTEÚDO PRINCIPAL */
  /* ========================================== */
  .main-container {
    flex: 1;                      /* Ocupa todo espaço disponível */
    display: flex;                /* Usa flexbox */
    flex-direction: column;       /* Organiza em coluna */
    align-items: center;          /* Centraliza horizontalmente */
    justify-content: flex-start;  /* Alinha no topo */
    padding-top: 100px;           /* Espaço no topo (para não ficar atrás do header) */
    width: 100%;                  /* Largura total */
  }

  /* Logo principal (grande no centro) */
  .logo-main {
    height: 140px;                /* Altura do logo */
    width: auto;                  /* Largura automática */
    margin-bottom: 20px;          /* Espaço abaixo */
    filter: drop-shadow(0 8px 16px rgba(46, 125, 50, 0.25)); /* Sombra verde */
    transition: all 0.3s ease;    /* Transição suave */
  }

  /* Logo principal quando o mouse passa por cima */
  .logo-main:hover {
    transform: translateY(-4px) scale(1.05); /* Move para cima e aumenta 5% */
    filter: drop-shadow(0 12px 24px rgba(46, 125, 50, 0.35)); /* Sombra maior */
  }

  /* Título "Sistema de Atendimento" */
  .titulo {
    font-size: 48px;              /* Tamanho grande */
    font-weight: 700;             /* Bem negrito */
    color: #1b5e20;               /* Verde escuro */
    margin-bottom: 40px;          /* Espaço abaixo */
    text-align: center;           /* Centralizado */
    letter-spacing: -0.5px;       /* Letras mais próximas */
  }

  /* ========================================== */
  /* BOTÕES DE EMITIR SENHA */
  /* ========================================== */
  .botoes-container {
    display: flex;                /* Usa flexbox */
    gap: 16px;                    /* Espaço entre botões */
    justify-content: center;      /* Centraliza */
    width: 100%;                  /* Largura total */
    max-width: 800px;             /* Largura máxima */
    margin-bottom: 24px;          /* Espaço abaixo */
  }

  /* Estilo base dos botões de senha */
  .btn {
    flex: 1;                      /* Todos os botões têm o mesmo tamanho */
    padding: 18px 0;              /* Espaçamento interno */
    border: none;                 /* Remove borda padrão */
    border-radius: 10px;          /* Cantos arredondados */
    color: white;                 /* Texto branco */
    font-size: 20px;              /* Tamanho da fonte */
    font-weight: 600;             /* Negrito */
    cursor: pointer;              /* Cursor de mãozinha */
    box-shadow: 0 2px 8px rgba(46, 125, 50, 0.15); /* Sombra suave */
    transition: all 0.2s ease;    /* Transição rápida */
    text-align: center;           /* Texto centralizado */
  }

  /* Botão quando está sendo clicado */
  .btn:active {
    transform: translateY(1px);   /* Move 1px para baixo (efeito de pressionar) */
  }

  /* Botão quando o mouse passa por cima */
  .btn:hover {
    box-shadow: 0 4px 12px rgba(46, 125, 50, 0.25); /* Sombra maior */
    transform: translateY(-2px);  /* Move 2px para cima */
  }

  /* Botão Senha Prioritária (SP) - verde médio */
  .btn-sp { 
    background: linear-gradient(135deg, #43a047 0%, #388e3c 100%);
  }
  
  /* Botão Senha Geral (SG) - verde claro */
  .btn-sg { 
    background: linear-gradient(135deg, #66bb6a 0%, #4caf50 100%);
  }
  
  /* Botão Senha Especial (SE) - verde escuro */
  .btn-se { 
    background: linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%);
  }

  /* ========================================== */
  /* BOTÃO CHAMAR PRÓXIMA */
  /* ========================================== */
  .btn-chamar {
    width: 100%;                  /* Largura total */
    max-width: 800px;             /* Largura máxima */
    padding: 22px 0;              /* Espaçamento interno */
    background: linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%); /* Verde escuro degradê */
    color: white;                 /* Texto branco */
    font-size: 28px;              /* Fonte grande */
    font-weight: 700;             /* Bem negrito */
    border: none;                 /* Sem borda */
    border-radius: 12px;          /* Cantos bem arredondados */
    cursor: pointer;              /* Cursor de mãozinha */
    box-shadow: 0 4px 16px rgba(27, 94, 32, 0.3); /* Sombra forte */
    margin-bottom: 40px;          /* Espaço abaixo */
    transition: all 0.2s ease;    /* Transição suave */
  }
  
  /* Botão Chamar quando o mouse passa por cima */
  .btn-chamar:hover {
    box-shadow: 0 6px 20px rgba(27, 94, 32, 0.4); /* Sombra ainda maior */
    transform: translateY(-2px);  /* Move para cima */
  }

  /* ========================================== */
  /* LISTAS (FILA E PAINEL) */
  /* ========================================== */
  .listas-area {
    width: 100%;                  /* Largura total */
    max-width: 800px;             /* Largura máxima */
    display: flex;                /* Usa flexbox */
    flex-direction: column;       /* Organiza em coluna */
    gap: 24px;                    /* Espaço entre listas */
  }

  /* Subtítulos "Fila de Espera" e "Painel" */
  .subtitulo {
    font-size: 18px;              /* Tamanho da fonte */
    background: linear-gradient(135deg, #388e3c 0%, #43a047 100%); /* Fundo verde degradê */
    color: white;                 /* Texto branco */
    text-align: center;           /* Centralizado */
    margin-bottom: 12px;          /* Espaço abaixo */
    font-weight: 600;             /* Negrito */
    padding: 12px;                /* Espaçamento interno */
    border-radius: 8px;           /* Cantos arredondados */
    letter-spacing: 0.3px;        /* Espaçamento entre letras */
  }

  /* Container de cada lista */
  .lista-box {
    background: transparent;      /* Fundo transparente */
    text-align: center;           /* Texto centralizado */
  }

  /* Lista (ul) */
  .lista-ul {
    list-style: none;             /* Remove marcadores */
    padding: 0;                   /* Remove espaçamento */
    margin: 0;                    /* Remove margem */
    display: flex;                /* Usa flexbox */
    flex-direction: column;       /* Organiza em coluna */
    gap: 8px;                     /* Espaço entre itens */
    align-items: center;          /* Centraliza itens */
  }

  /* Cada item da lista (senha) */
  .item-lista {
    font-size: 16px;              /* Tamanho da fonte */
    color: #1b5e20;               /* Verde escuro */
    background: white;            /* Fundo branco */
    padding: 12px 24px;           /* Espaçamento interno */
    border-radius: 8px;           /* Cantos arredondados */
    font-weight: 600;             /* Negrito */
    width: fit-content;           /* Largura ajustada ao conteúdo */
    border: 1px solid #c8e6c9;    /* Borda verde clara */
    box-shadow: 0 1px 3px rgba(46, 125, 50, 0.1); /* Sombra leve */
  }

  /* ========================================== */
  /* RODAPÉ COM DATA/HORA */
  /* ========================================== */
  .footer-info {
    margin-top: auto;             /* Empurra para o final da página */
    width: 100%;                  /* Largura total */
    padding: 16px 40px;           /* Espaçamento interno */
    color: #2e7d32;               /* Verde médio */
    font-size: 14px;              /* Fonte pequena */
    display: flex;                /* Usa flexbox */
    justify-content: space-between; /* Espaça elementos nas extremidades */
    background: rgba(255, 255, 255, 0.6); /* Fundo branco semi-transparente */
    border-top: 1px solid #c8e6c9; /* Borda superior verde clara */
    font-weight: 500;             /* Negrito médio */
  }

  /* ========================================== */
  /* MODAL CUSTOMIZADO (AVISOS) */
  /* ========================================== */
  
  /* Fundo escuro atrás do modal */
  .modal-overlay {
    position: fixed;              /* Fica fixo na tela */
    top: 0;                       /* Cobre toda a tela */
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6); /* Preto semi-transparente */
    backdrop-filter: blur(4px);   /* Efeito de desfoque no fundo */
    display: flex;                /* Usa flexbox */
    align-items: center;          /* Centraliza verticalmente */
    justify-content: center;      /* Centraliza horizontalmente */
    z-index: 1000;                /* Fica acima de tudo */
    animation: fadeIn 0.2s ease;  /* Animação de aparecer */
  }

  /* Animação de aparecer (fade in) */
  @keyframes fadeIn {
    from { opacity: 0; }          /* Começa invisível */
    to { opacity: 1; }            /* Termina visível */
  }

  /* Animação de subir (slide up) */
  @keyframes slideUp {
    from { 
      opacity: 0;                 /* Começa invisível */
      transform: translateY(20px) scale(0.95); /* Começa abaixo e menor */
    }
    to { 
      opacity: 1;                 /* Termina visível */
      transform: translateY(0) scale(1); /* Termina na posição normal */
    }
  }

  /* Caixa do modal (conteúdo) */
  .modal-content {
    background: white;            /* Fundo branco */
    border-radius: 16px;          /* Cantos bem arredondados */
    padding: 32px;                /* Espaçamento interno */
    max-width: 450px;             /* Largura máxima */
    width: 90%;                   /* 90% da largura da tela */
    box-shadow: 0 20px 60px rgba(46, 125, 50, 0.3); /* Sombra grande */
    animation: slideUp 0.3s ease; /* Animação de subir */
    border: 2px solid #c8e6c9;    /* Borda verde clara */
  }

  /* Ícone do modal (círculo verde com emoji) */
  .modal-icon {
    width: 64px;                  /* Largura */
    height: 64px;                 /* Altura */
    margin: 0 auto 20px;          /* Centralizado com espaço abaixo */
    background: linear-gradient(135deg, #43a047 0%, #2e7d32 100%); /* Fundo verde degradê */
    border-radius: 50%;           /* Formato circular */
    display: flex;                /* Usa flexbox */
    align-items: center;          /* Centraliza verticalmente */
    justify-content: center;      /* Centraliza horizontalmente */
    font-size: 32px;              /* Tamanho do emoji */
    color: white;                 /* Cor branca */
    box-shadow: 0 4px 12px rgba(46, 125, 50, 0.3); /* Sombra */
  }

  /* Mensagem do modal */
  .modal-message {
    font-size: 18px;              /* Tamanho da fonte */
    color: #1b5e20;               /* Verde escuro */
    text-align: center;           /* Centralizado */
    margin-bottom: 24px;          /* Espaço abaixo */
    line-height: 1.5;             /* Altura da linha */
    font-weight: 500;             /* Negrito médio */
  }

  /* Botão OK do modal */
  .modal-button {
    width: 100%;                  /* Largura total */
    padding: 14px;                /* Espaçamento interno */
    background: linear-gradient(135deg, #43a047 0%, #388e3c 100%); /* Fundo verde degradê */
    color: white;                 /* Texto branco */
    border: none;                 /* Sem borda */
    border-radius: 10px;          /* Cantos arredondados */
    font-size: 16px;              /* Tamanho da fonte */
    font-weight: 600;             /* Negrito */
    cursor: pointer;              /* Cursor de mãozinha */
    transition: all 0.2s ease;    /* Transição suave */
    box-shadow: 0 2px 8px rgba(46, 125, 50, 0.2); /* Sombra */
  }

  /* Botão OK quando o mouse passa por cima */
  .modal-button:hover {
    transform: translateY(-2px);  /* Move para cima */
    box-shadow: 0 4px 12px rgba(46, 125, 50, 0.3); /* Sombra maior */
  }

  /* Botão OK quando está sendo clicado */
  .modal-button:active {
    transform: translateY(0);     /* Volta para posição normal */
  }

  /* ========================================== */
  /* RESPONSIVIDADE (TELAS PEQUENAS) */
  /* ========================================== */
  /* Aplica estes estilos quando a tela for menor que 600px (celulares) */
  @media (max-width: 600px) {
    .titulo { font-size: 32px; }  /* Título menor */
    .logo-main { height: 90px; }  /* Logo menor */
    .logo-header { height: 40px; } /* Logo do header menor */
    .botoes-container { flex-direction: column; } /* Botões em coluna */
    .btn { font-size: 18px; }     /* Fonte menor nos botões */
    .btn-chamar { font-size: 24px; } /* Fonte menor no botão chamar */
    .top-header { 
      flex-direction: column;     /* Header em coluna */
      align-items: center;        /* Centralizado */
      height: auto;               /* Altura automática */
      padding: 16px;              /* Menos espaçamento */
    }
    .header-center {
      flex-direction: column;     /* Elementos em coluna */
      gap: 12px;                  /* Menos espaço */
    }
    .modal-content {
      padding: 24px;              /* Menos espaçamento no modal */
    }
  }
`;
