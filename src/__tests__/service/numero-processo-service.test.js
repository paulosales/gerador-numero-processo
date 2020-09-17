import {
  generateNumeroProcesso,
  checksum,
} from '../../service/numero-processo-service'

describe('NumeroProcessoService', () => {
  describe('#generate-numero-processo', () => {
    describe('when generate 50 random process numbers', () => {
      it('the checksum should be valid', () => {
        for (let i = 0; i < 50; i++) {
          let np = generateNumeroProcesso()
          let [
            _,
            sequence,
            dv,
            anoAjuizamento,
            orgaoOuSegmentoJustica,
            tribunal,
            origem,
          ] = np.match(/(\d+)-(\d+).(\d+).(\d).(\d+).(\d+)/)
          let calculatedChecksum = checksum(
            sequence,
            anoAjuizamento,
            orgaoOuSegmentoJustica,
            tribunal,
            origem
          )

          const mod97 = BigInt(`${sequence}${anoAjuizamento}${orgaoOuSegmentoJustica}${tribunal}${origem}${dv}`) % 97n
          expect(calculatedChecksum.toString().padStart(2, '0')).toBe(dv)
          expect(mod97.toString()).toBe("1")
        }
      })
    })
  })
})
