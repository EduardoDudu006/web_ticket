// ============================================
// ESTILOS CSS DO SISTEMA
// ============================================

export const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: linear-gradient(135deg, #f0f9f4 0%, #e8f5e9 100%);
    color: #1b5e20;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  /* BARRA SUPERIOR (HEADER) */
  .top-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    padding: 0 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    background: linear-gradient(135deg, #2e7d32 0%, #388e3c 100%);
    color: white;
    font-size: 16px;
    box-shadow: 0 2px 8px rgba(46, 125, 50, 0.2);
    z-index: 10;
  }

  .logo-header {
    height: 50px;
    width: auto;
    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.2));
    transition: all 0.3s ease;
  }

  .logo-header:hover {
    transform: translateY(-2px);
    filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3));
  }

  .header-center {
    display: flex;
    align-items: center;
    gap: 32px;
    flex: 1;
    justify-content: center;
  }

  .label-ultimas {
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-size: 13px;
  }

  .lista-topo {
    display: flex;
    gap: 16px;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .item-topo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: white;
    gap:10px;
    width:160px;
    height:40px;
  }

  .topo-numero {
    font-weight: 700;
    font-size: 18px;
    line-height:1;
  }
  
  .topo-info {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.85);
    whit-space:nowrap;
  }

  /* CONTEÚDO PRINCIPAL */
  .main-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 100px;
    width: 100%;
  }

  .logo-main {
    height: 100px;
    width: auto;
    margin-bottom: 20px;
    filter: drop-shadow(0 8px 16px rgba(46, 125, 50, 0.25));
    transition: all 0.3s ease;
  }

  .logo-main:hover {
    transform: translateY(-4px) scale(1.05);
    filter: drop-shadow(0 12px 24px rgba(46, 125, 50, 0.35));
  }

  .titulo {
    font-size: 48px;
    font-weight: 700;
    color: #1b5e20;
    margin-bottom: 40px;
    text-align: center;
    letter-spacing: -0.5px;
  }

  /* BOTÕES DE SENHA */
  .botoes-container {
    display: flex;
    gap: 16px;
    justify-content: center;
    width: 100%;
    max-width: 800px;
    margin-bottom: 24px;
  }

  .btn {
    flex: 1;
    padding: 18px 0;
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(46, 125, 50, 0.15);
    transition: all 0.2s ease;
    text-align: center;
  }

  .btn:active {
    transform: translateY(1px);
  }

  .btn:hover {
    box-shadow: 0 4px 12px rgba(46, 125, 50, 0.25);
    transform: translateY(-2px);
  }

  .btn-sp { 
    background: linear-gradient(135deg, #43a047 0%, #388e3c 100%);
  }
  
  .btn-sg { 
    background: linear-gradient(135deg, #66bb6a 0%, #4caf50 100%);
  }
  
  .btn-se { 
    background: linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%);
  }

  /* BOTÃO CHAMAR */
  .btn-chamar {
    width: 100%;
    max-width: 800px;
    padding: 22px 0;
    background: linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%);
    color: white;
    font-size: 28px;
    font-weight: 700;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    box-shadow: 0 4px 16px rgba(27, 94, 32, 0.3);
    margin-bottom: 40px;
    transition: all 0.2s ease;
  }
  
  .btn-chamar:hover {
    box-shadow: 0 6px 20px rgba(27, 94, 32, 0.4);
    transform: translateY(-2px);
  }

  /* LISTAS (Fila e Painel) */
  .listas-area {
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .subtitulo {
    font-size: 18px;
    background: linear-gradient(135deg, #388e3c 0%, #43a047 100%);
    color: white;
    text-align: center;
    margin-bottom: 12px;
    font-weight: 600;
    padding: 12px;
    border-radius: 8px;
    letter-spacing: 0.3px;
  }

  .lista-box {
    background: transparent;
    text-align: center;
  }

  .lista-ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
  }

  .item-lista {
    font-size: 17px;
    color: #1b5e20;
    background: #f1f8f4;
    padding: 1px 20px;
    border-radius: 8px;
    font-weight: 700;
    width: fit-content;
    border: 2px solid #43a047;
    box-shadow: 0 2px 8px rgba(46, 125, 50, 0.25);
  }

  /* RODAPÉ COM DATA/HORA */
  .footer-info {
    margin-top: auto;
    width: 100%;
    padding: 16px 40px;
    color: #2e7d32;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.6);
    border-top: 1px solid #c8e6c9;
    font-weight: 500;
  }

  /* MODAL CUSTOMIZADO */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    animation: fadeIn 0.2s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideUp {
    from { 
      opacity: 0;
      transform: translateY(20px) scale(0.95);
    }
    to { 
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  .modal-content {
    background: white;
    border-radius: 16px;
    padding: 32px;
    max-width: 450px;
    width: 90%;
    box-shadow: 0 20px 60px rgba(46, 125, 50, 0.3);
    animation: slideUp 0.3s ease;
    border: 2px solid #c8e6c9;
  }

  .modal-icon {
    width: 64px;
    height: 64px;
    margin: 0 auto 20px;
    background: linear-gradient(135deg, #43a047 0%, #2e7d32 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    color: white;
    box-shadow: 0 4px 12px rgba(46, 125, 50, 0.3);
  }

  .modal-message {
    font-size: 18px;
    color: #1b5e20;
    text-align: center;
    margin-bottom: 24px;
    line-height: 1.5;
    font-weight: 500;
  }

  .modal-button {
    width: 100%;
    padding: 14px;
    background: linear-gradient(135deg, #43a047 0%, #388e3c 100%);
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 2px 8px rgba(46, 125, 50, 0.2);
  }

  .modal-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(46, 125, 50, 0.3);
  }

  .modal-button:active {
    transform: translateY(0);
  }

  /* BOTÕES DE CONTROLE DO EXPEDIENTE */
  .controle-expediente {
    display: flex;
    gap: 12px;
  }

  .btn-expediente {
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .btn-abrir {
    background: linear-gradient(135deg, #43a047 0%, #388e3c 100%);
    color: white;
    box-shadow: 0 2px 6px rgba(67, 160, 71, 0.3);
  }

  .btn-abrir:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(67, 160, 71, 0.4);
  }

  .btn-fechar {
    background: linear-gradient(135deg, #e53935 0%, #c62828 100%);
    color: white;
    box-shadow: 0 2px 6px rgba(229, 57, 53, 0.3);
  }

  .btn-fechar:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(229, 57, 53, 0.4);
  }

  .btn-expediente:active {
    transform: translateY(0);
  }

  .btn-expediente:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  .status-expediente {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-weight: 600;
    padding: 8px 16px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.2);
  }

  .status-indicator {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    animation: pulse 2s infinite;
  }

  .status-aberto {
    background: #4caf50;
  }

  .status-fechado {
    background: #f44336;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  /* Responsividade */
  @media (max-width: 600px) {
    .titulo { font-size: 32px; }
    .logo-main { 
      height: 90px;
    }
    .logo-header { 
      height: 40px;
    }
    .botoes-container { flex-direction: column; }
    .btn { font-size: 18px; }
    .btn-chamar { font-size: 24px; }
    .top-header { 
      flex-direction: column; 
      align-items: center; 
      height: 1px;
      padding: 16px;
    }
    .header-center {
      flex-direction: column;
      gap: 12px;
    }
    .modal-content {
      padding: 24px;
    }
    .controle-expediente {
      flex-direction: column;
      width: 100%;
    }
    .btn-expediente {
      width: 100%;
    }
  }

  .totais-container {
    background: #f5f5f5;
    padding: 20px;
    border-radius: 10px;
  }
`;
