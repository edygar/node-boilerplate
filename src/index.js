import pow from '~/pow';

const base = process.argv[process.argv.length - 2];
const power = process.argv[process.argv.length - 1];
const result = pow(base, power);

process.stdout.write(`${base}^${power}=${result}\n`);
