export function formatCurrency(value: number) {
  return new Intl.NumberFormat('pt-ao', { style: 'currency', currency: 'AOA'}).format(value);

}
