// ============================================
// COMPONENTE FOOTER (RODAPÉ)
// ============================================

export default function Footer() {
  const formatarDataHora = (date) => {
    let d = date.getDate();
    let m = date.getMonth() + 1;
    let y = date.getFullYear();
    let h = date.getHours();
    let min = date.getMinutes();
    let s = date.getSeconds();

    d = d < 10 ? '0' + d : d;
    m = m < 10 ? '0' + m : m;
    h = h < 10 ? '0' + h : h;
    min = min < 10 ? '0' + min : min;
    s = s < 10 ? '0' + s : s;

    return `Data: ${d}/${m}/${y} - Horário: ${h}:${min}:${s}`;
  };

  return (
    <div className="footer-info">
      <span>{formatarDataHora(new Date())}</span>
      <span>Aptile</span>
    </div>
  );
}
