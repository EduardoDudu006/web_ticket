// ============================================
// IMPORTAÇÕES
// ============================================
import { useState } from "react";
import { styles } from "./styles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

// ============================================
// COMPONENTE PRINCIPAL
// ============================================
export default function App() {
  // ==========================================
  // ESTADOS DO SISTEMA
  // ==========================================
  const [senhas, setSenhas] = useState([]);
  const [painel, setPainel] = useState([]);
  const [contador, setContador] = useState({ SP: 0, SG: 0, SE: 0 });
  const [indicePrioridade, setIndicePrioridade] = useState(0);
  const [modalAberto, setModalAberto] = useState(false);
  const [modalMensagem, setModalMensagem] = useState("");
  const [expedienteAberto, setExpedienteAberto] = useState(true);

  // ==========================================
  // FUNÇÕES AUXILIARES
  // ==========================================
  
  function podeAtender() {
    return expedienteAberto;
  }

  function abrirExpediente() {
    setExpedienteAberto(true);
    mostrarModal("Expediente aberto! Sistema pronto para atendimento.");
  }

  function fecharExpediente() {
    setExpedienteAberto(false);
    mostrarModal("Expediente fechado! Não será possível emitir ou chamar senhas.");
    setSenhas([]);
  }

  function calcularTempoMedio(tipo) {
    let tempoCalculado = 0;

    if (tipo === "SP") {
      tempoCalculado = 15;
    } else if (tipo === "SG") {
      tempoCalculado = 5;
    } else if (tipo === "SE") {
      let milissegundos = new Date().getMilliseconds();
      let resto = milissegundos % 20;
      tempoCalculado = resto === 0 ? 5 : 1;
    }

    return tempoCalculado + " min";
  }

  function gerarCodigoId(tipo, anoTexto, mes, dia) {
    const YY = anoTexto[2] + anoTexto[3];
    let MM = mes < 10 ? "0" + mes : mes;
    let DD = dia < 10 ? "0" + dia : dia;

    let novoValorContador = contador[tipo] + 1;
    const novoContador = { ...contador, [tipo]: novoValorContador };
    setContador(novoContador);

    let numeroSequencial;
    if (novoValorContador < 10) numeroSequencial = "00" + novoValorContador;
    else if (novoValorContador < 100) numeroSequencial = "0" + novoValorContador;
    else numeroSequencial = novoValorContador;

    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let codigoAleatorio = '';
    for (let i = 0; i < 4; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      codigoAleatorio += caracteres[indiceAleatorio];
    }

    return YY + MM + DD + "-" + tipo + numeroSequencial + "-" + codigoAleatorio;
  }

  function mostrarModal(mensagem) {
    setModalMensagem(mensagem);
    setModalAberto(true);
  }

  function fecharModal() {
    setModalAberto(false);
  }

  // ==========================================
  // FUNÇÃO: EMITIR NOVA SENHA
  // ==========================================
  function emitirSenha(tipo) {
    if (!podeAtender()) {
      mostrarModal("Expediente encerrado! (07h às 17h)");
      return;
    }

    const agora = new Date();
    let dia = agora.getDate();
    let mes = agora.getMonth() + 1;
    let ano = agora.getFullYear();
    let hora = agora.getHours();
    let min = agora.getMinutes();
    let seg = agora.getSeconds();

    let diaF = dia < 10 ? "0" + dia : dia;
    let mesF = mes < 10 ? "0" + mes : mes;
    let horaF = hora < 10 ? "0" + hora : hora;
    let minF = min < 10 ? "0" + min : min;
    let segF = seg < 10 ? "0" + seg : seg;

    const estiloData = diaF + "/" + mesF + "/" + ano;
    const estiloHora = horaF + ":" + minF + ":" + segF;
    const idGerado = gerarCodigoId(tipo, String(ano), mes, dia);

    const novaSenha = {
      numero: idGerado,
      tipo: tipo,
      data: estiloData,
      horario: estiloHora,
      tempo: null
    };

    setSenhas([...senhas, novaSenha]);
  }

  // ==========================================
  // FUNÇÃO: CHAMAR PRÓXIMA SENHA
  // ==========================================
  function chamarProxima() {
    if (!podeAtender()) {
      if (senhas.length > 0) {
        mostrarModal("Expediente encerrado. Senhas restantes serão descartadas.");
        setSenhas([]);
      } else {
        mostrarModal("Expediente encerrado.");
      }
      return;
    }

    if (senhas.length === 0) return;

    const ordem = ["SP", "SE", "SG"];
    let indexEncontrado = -1;
    let senhaEncontrada = null;
    let tentativas = 0;
    let buscaAtual = indicePrioridade;

    while (indexEncontrado === -1 && tentativas < 3) {
      let prioridade = ordem[buscaAtual];

      for (let i = 0; i < senhas.length; i++) {
        if (senhas[i].tipo === prioridade) {
          indexEncontrado = i;
          senhaEncontrada = senhas[i];
          break;
        }
      }

      if (indexEncontrado !== -1) {
        let proximo = buscaAtual + 1;
        if (proximo > 2) proximo = 0;
        setIndicePrioridade(proximo);
      } else {
        buscaAtual++;
        if (buscaAtual > 2) buscaAtual = 0;
        tentativas++;
      }
    }

    if (indexEncontrado !== -1) {
      senhaEncontrada.tempo = calcularTempoMedio(senhaEncontrada.tipo);

      const novaFila = senhas.filter((_, i) => i !== indexEncontrado);
      setSenhas(novaFila);

      const novoPainel = [senhaEncontrada, ...painel].slice(0, 5);
      setPainel(novoPainel);
    }
  }

  // ==========================================
  // RENDERIZAÇÃO DAS LISTAS
  // ==========================================
  const htmlFila = senhas.map((item) => (
    <li key={item.numero} className="item-lista">
      {item.numero} ({item.tipo}) - {item.horario}
    </li>
  ));

  const htmlPainel = painel.map((item) => (
    <li key={item.numero} className="item-lista" style={{
      background: 'white',
      border: '2px solid #43a047',
      marginBottom: '7px'
    }}>
      <div style={{ fontSize: '16px', fontWeight: '700', color: '#1b5e20' }}>
        {item.numero}
      </div>
      <div style={{ fontSize: '14px', color: '#2e7d32', marginTop: '1px' }}>
        {item.data} - {item.horario}
      </div>
    </li>
  ));

  // ==========================================
  // RENDERIZAÇÃO DA INTERFACE
  // ==========================================
  return (
    <>
      <style>{styles}</style>

      <Header 
        painel={painel}
        expedienteAberto={expedienteAberto}
        onAbrirExpediente={abrirExpediente}
        onFecharExpediente={fecharExpediente}
      />

      <div className="main-container">
        <h1 className="titulo">Sistema de Atendimento</h1>

        <div className="botoes-container">
          <button className="btn btn-sp" onClick={() => emitirSenha("SP")}>
            PRIORITÁRIA
          </button>
          <button className="btn btn-sg" onClick={() => emitirSenha("SG")}>
            GERAL
          </button>
          <button className="btn btn-se" onClick={() => emitirSenha("SE")}>
            ESPECIAL
          </button>
        </div>

        <button className="btn-chamar" onClick={chamarProxima}>
          CHAMAR PRÓXIMA
        </button>

        <div className="listas-area">
          <div className="lista-box">
            <h3 className="subtitulo">Fila de Espera</h3>
            <ul className="lista-ul">
              {senhas.length > 0 ? htmlFila : (
                <span style={{ color: "#242121ff" }}>Sem fila de espera</span>
              )}
            </ul>
          </div>

          <div className="lista-box">
            <h3 className="subtitulo">Painel (Últimas 5)</h3>
            <div style={{
              background: 'linear-gradient(135deg, #e8f5e9 0%, #f1f8f4 100%)',
              padding: '20px',
              borderRadius: '12px',
              border: '2px solid #81c784',
              minHeight: '50px'
            }}>
              <ul className="lista-ul">
                {htmlPainel.length > 0 ? htmlPainel : (
                  <span style={{ color: "#666", fontStyle: "italic", fontSize: '16px' }}>
                    Nenhuma chamada recente
                  </span>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <Modal 
        aberto={modalAberto}
        mensagem={modalMensagem}
        onFechar={fecharModal}
      />
    </>
  );
}
