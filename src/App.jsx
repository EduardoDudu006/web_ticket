// ============================================
// IMPORTAÇÕES
// ============================================
// Importa o React e o hook useState para gerenciar estados do componente
import React, { useState } from "react";

// ============================================
// ESTILOS CSS
// ============================================
// Todos os estilos do sistema em uma única constante
// Usamos CSS-in-JS para manter tudo organizado em um arquivo
const styles = `
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
    height: 70px;
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
    font-size: 14px;
  }

  .lista-topo {
    display: flex;
    gap: 24px;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .item-topo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
  }

  .topo-numero {
    font-weight: 700;
    font-size: 16px;
  }
  
  .topo-info {
    font-size: 11px;
    color: rgba(255, 255, 255, 0.85);
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
    height: 140px;
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
    padding: 14px 28px;
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
      height: auto;
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
`;

// ============================================
// COMPONENTE PRINCIPAL
// ============================================
export default function App() {
  
  // ==========================================
  // ESTADOS DO SISTEMA
  // ==========================================
  // Estados são variáveis que quando mudam, fazem o React atualizar a tela
  
  // senhas: Array que guarda todas as senhas na fila de espera
  const [senhas, setSenhas] = useState([]);
  
  // painel: Array que guarda as últimas 5 senhas chamadas (histórico)
  const [painel, setPainel] = useState([]);
  
  // contador: Objeto que conta quantas senhas de cada tipo foram emitidas hoje
  // Exemplo: { SP: 5, SG: 10, SE: 3 }
  const [contador, setContador] = useState({ SP: 0, SG: 0, SE: 0 });
  
  // indicePrioridade: Controla o rodízio de atendimento (0=SP, 1=SE, 2=SG)
  const [indicePrioridade, setIndicePrioridade] = useState(0);
  
  // modalAberto: Controla se o modal de aviso está visível ou não
  const [modalAberto, setModalAberto] = useState(false);
  
  // modalMensagem: Guarda o texto que será exibido no modal
  const [modalMensagem, setModalMensagem] = useState("");

  // expedienteAberto: Controla manualmente se o expediente está aberto ou fechado
  // true = aberto, false = fechado
  const [expedienteAberto, setExpedienteAberto] = useState(true);

  // ==========================================
  // FUNÇÃO 1: VERIFICAR HORÁRIO DE ATENDIMENTO
  // ==========================================
  // Verifica se o sistema pode atender
  // Prioriza o controle manual sobre o horário automático
  function podeAtender() {
    // Se o expediente está aberto manualmente, pode atender
    // (ignora verificação de horário)
    if (expedienteAberto) return true;
    
    // Se chegou aqui, o expediente está fechado manualmente
    return false;
  }

  // ==========================================
  // FUNÇÕES DE CONTROLE DO EXPEDIENTE
  // ==========================================
  // Abre o expediente manualmente
  function abrirExpediente() {
    setExpedienteAberto(true);
    mostrarModal("Expediente aberto! Sistema pronto para atendimento.");
  }

  // Fecha o expediente manualmente
  function fecharExpediente() {
    setExpedienteAberto(false);
    mostrarModal("Expediente fechado! Não será possível emitir ou chamar senhas.");
    // Limpa a fila de senhas
    setSenhas([]);
  }

  // ==========================================
  // FUNÇÃO 2: CALCULAR TEMPO MÉDIO DE ATENDIMENTO
  // ==========================================
  // Calcula o tempo estimado de atendimento baseado no tipo de senha
  function calcularTempoMedio(tipo) {
    let tempoCalculado = 0;

    if (tipo === "SP") {
      // Senha Prioritária: 15 minutos fixo
      tempoCalculado = 15;
    } 
    else if (tipo === "SG") {
      // Senha Geral: 5 minutos fixo
      tempoCalculado = 5;
    } 
    else if (tipo === "SE") {
      // Senha Especial: 95% das vezes 1 minuto, 5% das vezes 5 minutos
      let milissegundos = new Date().getMilliseconds();
      let resto = milissegundos % 20;
      
      // Se o resto for 0 (5% de chance), tempo é 5 minutos
      if (resto === 0) tempoCalculado = 5; 
      // Caso contrário (95% de chance), tempo é 1 minuto
      else tempoCalculado = 1; 
    }
    
    return tempoCalculado + " min";
  }

  // ==========================================
  // FUNÇÃO 3: GERAR CÓDIGO DA SENHA
  // ==========================================
  // Gera um código único no formato: YYMMDD-TPSQ-XXXX (com código aleatório)
  // Exemplo: 251126-SP001-A3F9 (26/11/2025, Senha Prioritária número 1, código A3F9)
  function gerarCodigoId(tipo, anoTexto, mes, dia) {
    // Pega os 2 últimos dígitos do ano (2024 -> 24)
    const YY = anoTexto[2] + anoTexto[3]; 

    // Formata mês com 2 dígitos (1 -> 01, 12 -> 12)
    let MM = mes < 10 ? "0" + mes : mes;
    
    // Formata dia com 2 dígitos (5 -> 05, 25 -> 25)
    let DD = dia < 10 ? "0" + dia : dia;

    // Incrementa o contador do tipo de senha
    let novoValorContador = contador[tipo] + 1;
    
    // Cria uma cópia do contador e atualiza o tipo específico
    const novoContador = { SP: contador.SP, SG: contador.SG, SE: contador.SE };
    if (tipo === "SP") novoContador.SP = novoValorContador;
    else if (tipo === "SG") novoContador.SG = novoValorContador;
    else if (tipo === "SE") novoContador.SE = novoValorContador;

    // Atualiza o estado do contador
    setContador(novoContador);

    // Formata o número sequencial com 3 dígitos (1 -> 001, 25 -> 025)
    let numeroSequencial;
    if (novoValorContador < 10) numeroSequencial = "00" + novoValorContador;
    else if (novoValorContador < 100) numeroSequencial = "0" + novoValorContador;
    else numeroSequencial = novoValorContador;

    // Gera código aleatório de 4 caracteres (letras e números)
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let codigoAleatorio = '';
    for (let i = 0; i < 4; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      codigoAleatorio += caracteres[indiceAleatorio];
    }

    // Retorna o código completo: YYMMDD-TPSQ-XXXX
    return YY + MM + DD + "-" + tipo + numeroSequencial + "-" + codigoAleatorio;
  }

  // ==========================================
  // FUNÇÕES DO MODAL
  // ==========================================
  // Exibe o modal com uma mensagem personalizada
  function mostrarModal(mensagem) {
    setModalMensagem(mensagem); // Define o texto do modal
    setModalAberto(true);        // Abre o modal
  }

  // Fecha o modal
  function fecharModal() {
    setModalAberto(false);
  }

  // ==========================================
  // FUNÇÃO 4: EMITIR NOVA SENHA
  // ==========================================
  // Cria uma nova senha e adiciona na fila de espera
  function emitirSenha(tipo) {
    // Verifica se está no horário de atendimento
    if (podeAtender() === false) {
        mostrarModal("Expediente encerrado! (07h às 17h)");
        return; // Para a execução da função
    }

    // Pega a data e hora atual
    const agora = new Date();
    let dia = agora.getDate();
    let mes = agora.getMonth() + 1; // Janeiro é 0, então soma 1
    let ano = agora.getFullYear();
    let hora = agora.getHours();
    let min = agora.getMinutes();
    let seg = agora.getSeconds();

    // Formata com 2 dígitos (exemplo: 5 vira 05)
    let diaF = dia < 10 ? "0" + dia : dia;
    let mesF = mes < 10 ? "0" + mes : mes;
    let horaF = hora < 10 ? "0" + hora : hora;
    let minF = min < 10 ? "0" + min : min;
    let segF = seg < 10 ? "0" + seg : seg;

    // Monta as strings formatadas
    const estiloData = diaF + "/" + mesF + "/" + ano;  // Exemplo: 26/11/2024
    const estiloHora = horaF + ":" + minF + ":" + segF; // Exemplo: 14:30:25

    // Gera o código único da senha
    const idGerado = gerarCodigoId(tipo, String(ano), mes, dia);

    // Cria o objeto da nova senha com todas as informações
    const novaSenha = { 
        numero: idGerado,      // Código da senha (ex: 241126-SP001)
        tipo: tipo,            // Tipo: SP, SG ou SE
        data: estiloData,      // Data formatada
        horario: estiloHora,   // Hora formatada
        tempo: null            // Tempo de atendimento (será calculado depois)
    };

    // Adiciona a nova senha no final da fila
    // Criamos uma nova lista copiando a antiga e adicionando a nova senha
    let novaLista = [];
    for (let i = 0; i < senhas.length; i++) {
      novaLista[i] = senhas[i]; // Copia cada senha existente
    }
    novaLista[novaLista.length] = novaSenha; // Adiciona a nova no final

    // Atualiza o estado com a nova lista
    setSenhas(novaLista);
  }

  // ==========================================
  // FUNÇÃO 5: CHAMAR PRÓXIMA SENHA (COM RODÍZIO)
  // ==========================================
  // Chama a próxima senha seguindo a ordem de prioridade: SP -> SE -> SG -> SP...
  function chamarProxima() {
    // Verifica se está no horário de atendimento
    if (podeAtender() === false) {
        if (senhas.length > 0) {
            // Se ainda tem senhas na fila, descarta todas
            mostrarModal("Expediente encerrado. Senhas restantes serão descartadas.");
            setSenhas([]); 
        } else {
            mostrarModal("Expediente encerrado.");
        }
        return;
    }

    // Se não tem nenhuma senha na fila, não faz nada
    if (senhas.length === 0) return;

    // Define a ordem de prioridade do rodízio
    // 0=SP (Prioritária), 1=SE (Especial), 2=SG (Geral)
    const ordem = ["SP", "SE", "SG"];
    
    let indexEncontrado = -1;    // Posição da senha encontrada na fila
    let senhaEncontrada = null;  // Objeto da senha encontrada
    let tentativas = 0;          // Contador de tentativas
    let buscaAtual = indicePrioridade; // Começa pela prioridade atual

    // Loop para buscar uma senha seguindo o rodízio
    // Tenta até 3 vezes (uma para cada tipo de senha)
    while(indexEncontrado === -1 && tentativas < 3) {
        let prioridade = ordem[buscaAtual]; // Pega o tipo atual (SP, SE ou SG)

        // Procura na fila uma senha do tipo atual
        for (let i = 0; i < senhas.length; i++) {
            if (senhas[i].tipo === prioridade) {
                indexEncontrado = i;
                senhaEncontrada = senhas[i];
                break; // Encontrou! Para de procurar
            }
        }

        // Se encontrou uma senha
        if (indexEncontrado !== -1) {
            // Avança para a próxima prioridade no rodízio
            let proximo = buscaAtual + 1;
            if (proximo > 2) proximo = 0; // Volta para o início (0)
            setIndicePrioridade(proximo);
        } else {
            // Não encontrou, tenta o próximo tipo
            buscaAtual++;
            if (buscaAtual > 2) buscaAtual = 0; // Volta para o início
            tentativas++;
        }
    }

    // Se encontrou uma senha para chamar
    if (indexEncontrado !== -1) {
       // Calcula o tempo estimado de atendimento
       senhaEncontrada.tempo = calcularTempoMedio(senhaEncontrada.tipo);

       // REMOVE A SENHA DA FILA
       let novaFila = [];
       let cont = 0;
       for (let i = 0; i < senhas.length; i++) {
         // Copia todas as senhas, exceto a que foi chamada
         if (i !== indexEncontrado) {
           novaFila[cont] = senhas[i];
           cont++;
         }
       }
       setSenhas(novaFila); // Atualiza a fila

       // ADICIONA A SENHA NO PAINEL (histórico das últimas 3)
       let novoPainel = [];
       novoPainel[0] = senhaEncontrada; // Coloca a nova senha no topo
       
       let contP = 1;
       // Copia as senhas antigas do painel (máximo 2, para ter 3 no total)
       for (let i = 0; i < painel.length; i++) {
         if (contP < 3) {
           novoPainel[contP] = painel[i];
           contP++;
         }
       }
       setPainel(novoPainel); // Atualiza o painel
    }
  }

  // ==========================================
  // FUNÇÕES DE FORMATAÇÃO E RENDERIZAÇÃO
  // ==========================================
  
  // Formata a data e hora para exibir no rodapé
  const formatarDataHoraRodape = (date) => {
    let d = date.getDate();
    let m = date.getMonth() + 1;
    let y = date.getFullYear();
    let h = date.getHours();
    let min = date.getMinutes();
    let s = date.getSeconds();
    
    // Adiciona zero à esquerda se necessário (5 -> 05)
    d = d < 10 ? '0'+d : d;
    m = m < 10 ? '0'+m : m;
    h = h < 10 ? '0'+h : h;
    min = min < 10 ? '0'+min : min;
    s = s < 10 ? '0'+s : s;

    return `Data: ${d}/${m}/${y} - Horário: ${h}:${min}:${s}`;
  }

  // ==========================================
  // PREPARAÇÃO DOS ELEMENTOS HTML
  // ==========================================
  
  // Cria a lista HTML das senhas na fila de espera
  let htmlFila = [];
  for (let i = 0; i < senhas.length; i++) {
    let item = senhas[i];
    htmlFila[i] = (
      <li key={item.numero} className="item-lista">
        {item.numero} ({item.tipo}) - {item.horario}
      </li>
    );
  }

  // Cria a lista HTML das últimas senhas chamadas (máximo 3)
  let htmlTopo = [];
  let limite = painel.length > 3 ? 3 : painel.length;
  for (let i = 0; i < limite; i++) {
    let item = painel[i];
    htmlTopo[i] = (
      <li key={item.numero} className="item-lista" style={{
        background: 'white',
        border: '2px solid #43a047',
        marginBottom: '8px'
      }}>
        <div style={{fontSize: '18px', fontWeight: '700', color: '#1b5e20'}}>
          {item.numero}
        </div>
        <div style={{fontSize: '14px', color: '#2e7d32', marginTop: '4px'}}>
          {item.data} - {item.horario}
        </div>
      </li>
    );
  }

  // ==========================================
  // RENDERIZAÇÃO DA INTERFACE
  // ==========================================
  // Aqui montamos toda a estrutura visual do sistema
  return (
    <>
      {/* Injeta os estilos CSS na página */}
      <style>{styles}</style>

      {/* ====================================== */}
      {/* BARRA SUPERIOR (HEADER) */}
      {/* ====================================== */}
      <div className="top-header">
        <img src="/img/logo2.png" alt="Logo" className="logo-header" />
        
        <div className="header-center">
          <span className="label-ultimas">ÚLTIMAS SENHAS CHAMADAS:</span>
          <ul className="lista-topo">
            {htmlTopo.length > 0 ? htmlTopo : <span style={{color: "rgba(255,255,255,0.7)", fontStyle: "italic"}}>Nenhuma senha chamada</span>}
          </ul>
        </div>

        {/* Controles do Expediente */}
        <div className="controle-expediente">
          {/* Indicador de Status */}
          <div className="status-expediente">
            <span className={`status-indicator ${expedienteAberto ? 'status-aberto' : 'status-fechado'}`}></span>
            <span>{expedienteAberto ? 'ABERTO' : 'FECHADO'}</span>
          </div>

          {/* Botão Abrir */}
          <button 
            className="btn-expediente btn-abrir" 
            onClick={abrirExpediente}
            disabled={expedienteAberto}
          >
            ABRIR
          </button>

          {/* Botão Fechar */}
          <button 
            className="btn-expediente btn-fechar" 
            onClick={fecharExpediente}
            disabled={!expedienteAberto}
          >
            FECHAR
          </button>
        </div>
      </div>

      {/* ====================================== */}
      {/* ÁREA PRINCIPAL DO SISTEMA */}
      {/* ====================================== */}
      <div className="main-container">
        {/* Logo da empresa */}
        <img src="/img/logo2.png" alt="Logo" className="logo-main" />
        
        {/* Título do sistema */}
        <h1 className="titulo">Sistema de Atendimento</h1>

        {/* ====================================== */}
        {/* BOTÕES PARA EMITIR SENHAS */}
        {/* ====================================== */}
        <div className="botoes-container">
          {/* Botão Senha Prioritária (SP) */}
          <button className="btn btn-sp" onClick={() => emitirSenha("SP")}>
            PRIORITÁRIA
          </button>
          
          {/* Botão Senha Geral (SG) */}
          <button className="btn btn-sg" onClick={() => emitirSenha("SG")}>
            GERAL
          </button>
          
          {/* Botão Senha Especial (SE) */}
          <button className="btn btn-se" onClick={() => emitirSenha("SE")}>
            ESPECIAL
          </button>
        </div>

        {/* ====================================== */}
        {/* BOTÃO PARA CHAMAR PRÓXIMA SENHA */}
        {/* ====================================== */}
        <button className="btn-chamar" onClick={chamarProxima}>
          CHAMAR PRÓXIMA
        </button>

        {/* ====================================== */}
        {/* ÁREA DAS LISTAS (FILA E PAINEL) */}
        {/* ====================================== */}
        <div className="listas-area">
          
          <div className="lista-box">
            <h3 className="subtitulo">Fila de Espera</h3>
            <ul className="lista-ul">
              {senhas.length > 0 ? htmlFila : <span style={{color: "#242121ff"}}>Sem fila de espera</span>}
            </ul>
          </div>

          <div className="lista-box">
            <h3 className="subtitulo">Painel (Últimas 3)</h3>
            <div style={{
              background: 'linear-gradient(135deg, #e8f5e9 0%, #f1f8f4 100%)',
              padding: '20px',
              borderRadius: '12px',
              border: '2px solid #81c784',
              minHeight: '100px'
            }}>
              <ul className="lista-ul">
                {htmlTopo.length > 0 ? htmlTopo : <span style={{color: "#666", fontStyle: "italic", fontSize: '16px'}}>Nenhuma chamada recente</span>}
              </ul>
            </div>
          </div>

        </div>

      </div>

      {/* ====================================== */}
      {/* RODAPÉ COM DATA/HORA E NOME DO SISTEMA */}
      {/* ====================================== */}
      <div className="footer-info">
        {/* Exibe data e hora atual (atualiza automaticamente) */}
        <span>{formatarDataHoraRodape(new Date())}</span>
        
        {/* Nome do sistema */}
        <span>Sistema Aptile</span>
      </div>

      {/* ====================================== */}
      {/* MODAL CUSTOMIZADO (AVISOS) */}
      {/* ====================================== */}
      {/* Só aparece quando modalAberto é true */}
      {modalAberto && (
        <div className="modal-overlay" onClick={fecharModal}>
          {/* Conteúdo do modal */}
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Ícone de informação */}
            <div className="modal-icon">ℹ️</div>
            
            {/* Mensagem do modal */}
            <div className="modal-message">{modalMensagem}</div>
            
            {/* Botão para fechar */}
            <button className="modal-button" onClick={fecharModal}>
              ENTENDI
            </button>
          </div>
        </div>
      )}
    </>
  );
}