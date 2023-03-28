const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  };
  
  const faturamentoTotal = Object.values(faturamentoPorEstado).reduce((total, valor) => total + valor, 0);
  
  const percentuaisPorEstado = {};
  
  for (const estado in faturamentoPorEstado) {
    percentuaisPorEstado[estado] = ((faturamentoPorEstado[estado] / faturamentoTotal) * 100).toFixed(2);
  }
  
  console.log("Percentual de representação por estado:");
  console.table(percentuaisPorEstado);