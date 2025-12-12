// relatorio

function gerarRelatorio(senhas, tipoRelatorio, dataFiltro) {
  let totalEmitidas = 0;
  let totalAtendidas = 0;

  let emitidasPorTipo = { normal: 0, prioritaria: 0, rapida: 0 };
  let atendidasPorTipo = { normal: 0, prioritaria: 0, rapida: 0 };

  let listaDetalhada = [];
  let index = 0;

  for (let i = 0; i < senhas.length; i++) {
    let s = senhas[i];

    if (tipoRelatorio === "diario") {
      if (
        s.data.getFullYear() !== dataFiltro.getFullYear() ||
        s.data.getMonth() !== dataFiltro.getMonth() ||
        s.data.getDate() !== dataFiltro.getDate()
      ) {
        continue;
      }
    }

    if (tipoRelatorio === "mensal") {
      if (
        s.data.getFullYear() !== dataFiltro.getFullYear() ||
        s.data.getMonth() !== dataFiltro.getMonth()
      ) {
        continue;
      }
    }

    totalEmitidas++;
    emitidasPorTipo[s.tipo]++;

    if (s.status === "atendida") {
      totalAtendidas++;
      atendidasPorTipo[s.tipo]++;
    }

    listaDetalhada[index] = {
      numero: s.numero,
      tipo: s.tipo,
      dataEmissao: formatarData(s.data),
      horaEmissao: formatarHora(s.data),
      dataAtendimento: s.atendidaEm ? formatarData(s.atendidaEm) : "",
      horaAtendimento: s.atendidaEm ? formatarHora(s.atendidaEm) : "",
      guiche: s.guiche ? s.guiche : ""
    };

    index++;
  }

  let somaTempos = 0;
  let qtdTM = 0;

  for (let i = 0; i < senhas.length; i++) {
    let s = senhas[i];
    if (s.atendidaEm) {
      let tempo = s.atendidaEm - s.data;
      somaTempos += tempo;
      qtdTM++;
    }
  }

  let tm = qtdTM > 0 ? somaTempos / qtdTM : 0;

  return {
    dataReferencia: dataFiltro,
    totalEmitidas,
    totalAtendidas,
    emitidasPorTipo,
    atendidasPorTipo,
    listaDetalhada,
    tm
  };
}

function formatarData(d) {
  let dia = d.getDate();
  let mes = d.getMonth() + 1;
  let ano = d.getFullYear();
  return (dia < 10 ? "0" + dia : dia) + "/" +
         (mes < 10 ? "0" + mes : mes) + "/" +
         ano;
}

function formatarHora(d) {
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  return (h < 10 ? "0" + h : h) + ":" +
         (m < 10 ? "0" + m : m) + ":" +
         (s < 10 ? "0" + s : s);
}