import { RNGSequence } from './random';

export const RUOTE = [
  'Bari',
  'Cagliari',
  'Firenze',
  'Genova',
  'Milano',
  'Napoli',
  'Palermo',
  'Roma',
  'Torino',
  'Venezia',
  'Nazionale',
];

export function enalotto() {
  const estrazioni: { [routa: string]: number[] } = {};

  for (const routa of RUOTE) {
    const estrazione = RNGSequence(5, 1, 100);
    estrazioni[routa] = estrazione;
  }

  return estrazioni;
}
