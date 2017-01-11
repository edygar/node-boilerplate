export default function pow(rawBase, rawPower) {
  const base = Number(rawBase);
  const power = Number(rawPower);

  if (Number.isNaN(base)) {
    throw new Error('Invalid `base` provided');
  }

  if (Number.isNaN(power)) {
    throw new Error('Invalid `power` provided');
  }

  if (power === 0) return 1;

  let result = base;
  for (let i = power; i > 1; i -= 1, result *= base);

  return result;
}
