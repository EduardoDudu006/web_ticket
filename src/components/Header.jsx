// ============================================
// COMPONENTE HEADER (BARRA SUPERIOR)
// ============================================

export default function Header({ 
  painel, 
  expedienteAberto, 
  onAbrirExpediente, 
  onFecharExpediente 
}) {
  // Cria a lista das últimas senhas chamadas
  const htmlTopo = [];
  const limite = painel.length > 5 ? 5 : painel.length;
  
  for (let i = 0; i < limite; i++) {
    const item = painel[i];
    htmlTopo[i] = (
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
    );
  }

  return (
    <div className="top-header">
      <img src="../img/logo aptile.png" alt="Logo" className="logo-header" />

      <div className="header-center">
        <span className="label-ultimas">ÚLTIMAS SENHAS CHAMADAS:</span>
        <ul className="lista-topo">
          {htmlTopo.length > 0 ? htmlTopo : (
            <span style={{ color: "rgba(255,255,255,0.7)", fontStyle: "italic" }}>
              Nenhuma senha chamada
            </span>
          )}
        </ul>
      </div>

      <div className="controle-expediente">
        <div className="status-expediente">
          <span className={`status-indicator ${expedienteAberto ? 'status-aberto' : 'status-fechado'}`}></span>
          <span>{expedienteAberto ? 'ABERTO' : 'FECHADO'}</span>
        </div>

        <button
          className="btn-expediente btn-abrir"
          onClick={onAbrirExpediente}
          disabled={expedienteAberto}
        >
          ABRIR
        </button>

        <button
          className="btn-expediente btn-fechar"
          onClick={onFecharExpediente}
          disabled={!expedienteAberto}
        >
          FECHAR
        </button>
      </div>
    </div>
  );
}
