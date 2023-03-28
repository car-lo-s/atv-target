let info = [];
let infoMoney = [];
let total = 0;
let mediaMensal;
let numeroDias = 0;
fetch("dados.json")
  .then((response) => response.json())
  .then((data) => {
    for (const key in data) {
      info.push(data[key]);
    }
    info.map((item) => {
      if (item.valor > 0) {
        infoMoney.push(item.valor);
        total = total + item.valor;
      }
    });
    const menorFaturamento = Math.min(...infoMoney);
    const maiorFaturamento = Math.max(...infoMoney);

    mediaMensal = total / infoMoney.length;

    infoMoney.map((item)=>{
      if(item>mediaMensal){
        numeroDias++;
      }
    })



  });
