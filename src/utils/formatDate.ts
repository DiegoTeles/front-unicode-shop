export function formatDate(data: string) {
  const partes = data.split('-');
  const ano = partes[0];
  const mes = partes[1];

  const dataFormatada = `${mes}/${ano}`;

  return dataFormatada;
}
