import { enalotto, RUOTE } from './src/enalotto';

function createRuotaCnt(ruotaName: string, estrazioni: number[]) {
  const routaDiv = document.createElement('div');
  routaDiv.className = `ruota ${ruotaName.toLowerCase()}`;
  const nameH2 = document.createElement('h2');
  nameH2.innerText = ruotaName;
  nameH2.className = 'ruota-title';
  routaDiv.appendChild(nameH2);

  for (const num of estrazioni) {
    const numP = document.createElement('p');
    numP.innerText = '' + num;
    const numDiv = document.createElement('div');
    numDiv.className = 'ruota-estrazione';
    numDiv.appendChild(numP);
    routaDiv.appendChild(numDiv);
  }

  return routaDiv;
}

const container = document.getElementById('cnt');
const estrazioni = enalotto();
if (container) {
  const pre = document.createElement('pre');

  for (const ruota of RUOTE) {
    const ruotaEstrazioni = estrazioni[ruota];
    const routaDiv = createRuotaCnt(ruota, ruotaEstrazioni);
    container.appendChild(routaDiv);
  }
}
