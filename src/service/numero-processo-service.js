//Based on https://atos.cnj.jus.br/atos/detalhar/atos-normativos?documento=119

const pad = (num, padSize) => {
  return num.toString().padStart(padSize, '0')
}

export const generateNumeroProcesso = (orgao, ano) => {
  const sequence = Math.round(Math.random() * 9999999)
  const anoAjuizamento = ano ? ano : new Date().getFullYear()

  /*
  1 – STF
  2 – CNJ
  3 – STJ
  4 - Justiça Federal
  5 - Justiça do Trabalho
  6 - Justiça Eleitoral
  7 - Justiça Militar da União
  8 - Justiça dos Estados e do Distrito Federal e Territórios
  9 - Justiça Militar Estadual
  */
  const orgaoOuSegmentoJustica = orgao
    ? orgao
    : Math.round(Math.random() * 8) + 1

  let tribunal = 0
  if (orgaoOuSegmentoJustica === 4) {
    tribunal = Math.round(Math.random() * 4 + 1)
  } else if (orgaoOuSegmentoJustica === 5) {
    tribunal = Math.round(Math.random() * 23 + 1)
  } else if (orgaoOuSegmentoJustica === 6) {
    tribunal = Math.round(Math.random() * 26 + 1)
  } else if (orgaoOuSegmentoJustica === 7) {
    tribunal = Math.round(Math.random() * 11 + 1)
  } else if (orgaoOuSegmentoJustica === 8) {
    tribunal = Math.round(Math.random() * 26 + 1)
  } else if (orgaoOuSegmentoJustica === 9) {
    tribunal = [13, 21, 26][Math.round(Math.random(2))]
  }

  const origem = Math.round(Math.random() * 8998 + 1)

  const dv = checksum(
    sequence,
    anoAjuizamento,
    orgaoOuSegmentoJustica,
    tribunal,
    origem
  )

  return `${pad(sequence, 7)}-${pad(dv, 2)}.${pad(anoAjuizamento, 4)}.${pad(
    orgaoOuSegmentoJustica,
    1
  )}.${pad(tribunal, 2)}.${pad(origem, 4)}`
}

export const checksum = (
  sequence,
  anoAjuizamento,
  orgaoOuSegmentoJustica,
  tribunal,
  origem
) => {
  const r1 = sequence % 97
  const r2 =
    Number(
      `${r1}${pad(anoAjuizamento, 4)}${orgaoOuSegmentoJustica}${pad(
        tribunal,
        2
      )}`
    ) % 97
  const r3 = Number(`${r2}${pad(origem, 4)}00`) % 97
  return 98 - r3
}
