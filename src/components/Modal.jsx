// ============================================
// COMPONENTE MODAL
// ============================================

export default function Modal({ aberto, mensagem, onFechar }) {
  if (!aberto) return null;

  return (
    <div className="modal-overlay" onClick={onFechar}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-icon">ℹ️</div>
        <div className="modal-message">{mensagem}</div>
        <button className="modal-button" onClick={onFechar}>
          ENTENDI
        </button>
      </div>
    </div>
  );
}
