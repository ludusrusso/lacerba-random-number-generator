export function RNG(min: number, max: number) {
  const rng = Math.random();

  // rng * (max - min) + min
  // rng = 0 -> min
  // rng = 1 -> max

  return Math.trunc(rng * (max - min) + min);
}

export function RNGSequence(len: number, min: number, max: number) {
  if (len > max - min) {
    throw new Error(`cannon find ${len} numbers between ${min} and ${max}`);
  }
  const res: number[] = [];
  while (res.length < len) {
    const rn = RNG(min, max);
    if (res.includes(rn)) {
      continue;
    }
    res.push(rn);
  }
  return res;
}
