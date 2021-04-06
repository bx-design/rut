import {
  isRutValid,
  isFakeRut,
  isCompanyRut,
  cleanRut,
  getRutDigits,
  getRutVerifier,
  deconstructRut,
  getVerificationCode,
  elevenModule,
  formatRut,
  validateRut,
  validateCompanyRut
} from './'

describe('rut utils', () => {
  const ruts = {
    rut1_script: '4783180-6',
    rut1_no_script: '47831806',
    rut1_dots_script: '4.783.180-6',
    rut1_dots_no_script: '4.783.1806',
    rut2_script: '23575004-k',
    rut2_no_script: '23575004k',
    rut2_dots_script: '23.575.004-k',
    rut2_dots_no_script: '23.575.004k',
    rut3_script: '24558760-0',
    rut3_no_script: '245587600',
    rut3_dots_script: '24.558.760-0',
    rut3_dots_no_script: '24.558.7600',
    rut4_script: '18111354-5',
    rut4_no_script: '181113545',
    rut4_dots_script: '18.111.354-5',
    rut4_dots_no_script: '18.111.3545'
  }
  const companyRuts = {
    rut1_script: '82948009-3',
    rut1_no_script: '829480093',
    rut1_dots_script: '82.948.009-3',
    rut1_dots_no_script: '82.948.0093',
    rut2_script: '79482028-7',
    rut2_no_script: '794820287',
    rut2_dots_script: '79.482.028-7',
    rut2_dots_no_script: '79.482.0287',
    rut3_script: '71957851-9',
    rut3_no_script: '719578519',
    rut3_dots_script: '71.957.851-9',
    rut3_dots_no_script: '71.957.8519',
    rut4_script: '64926364-7',
    rut4_no_script: '649263647',
    rut4_dots_script: '64.926.364-7',
    rut4_dots_no_script: '64.926.3647'
  }
  const fakeRut = {
    script: '11111111-1',
    no_script: '111111111',
    dots_script: '11.111.111-1',
    dots_no_script: '11.111.1111'
  }
  test('isRutValid fn', () => {
    expect(isRutValid(ruts.rut1_script)).toBeTruthy()
    expect(isRutValid(ruts.rut1_no_script)).toBeTruthy()
    expect(isRutValid(ruts.rut1_dots_script)).toBeTruthy()
    expect(isRutValid(ruts.rut1_dots_no_script)).toBeTruthy()
    expect(isRutValid(ruts.rut2_script)).toBeTruthy()
    expect(isRutValid(ruts.rut2_no_script)).toBeTruthy()
    expect(isRutValid(ruts.rut2_dots_script)).toBeTruthy()
    expect(isRutValid(ruts.rut2_dots_no_script)).toBeTruthy()
    expect(isRutValid(ruts.rut3_script)).toBeTruthy()
    expect(isRutValid(ruts.rut3_no_script)).toBeTruthy()
    expect(isRutValid(ruts.rut3_dots_script)).toBeTruthy()
    expect(isRutValid(ruts.rut3_dots_no_script)).toBeTruthy()
    expect(isRutValid(ruts.rut4_script)).toBeTruthy()
    expect(isRutValid(ruts.rut4_no_script)).toBeTruthy()
    expect(isRutValid(ruts.rut4_dots_script)).toBeTruthy()
    expect(isRutValid(ruts.rut4_dots_no_script)).toBeTruthy()

    expect(isRutValid(companyRuts.rut1_script)).toBeTruthy()
    expect(isRutValid(companyRuts.rut1_no_script)).toBeTruthy()
    expect(isRutValid(companyRuts.rut1_dots_script)).toBeTruthy()
    expect(isRutValid(companyRuts.rut1_dots_no_script)).toBeTruthy()
    expect(isRutValid(companyRuts.rut2_script)).toBeTruthy()
    expect(isRutValid(companyRuts.rut2_no_script)).toBeTruthy()
    expect(isRutValid(companyRuts.rut2_dots_script)).toBeTruthy()
    expect(isRutValid(companyRuts.rut2_dots_no_script)).toBeTruthy()
    expect(isRutValid(companyRuts.rut3_script)).toBeTruthy()
    expect(isRutValid(companyRuts.rut3_no_script)).toBeTruthy()
    expect(isRutValid(companyRuts.rut3_dots_script)).toBeTruthy()
    expect(isRutValid(companyRuts.rut3_dots_no_script)).toBeTruthy()
    expect(isRutValid(companyRuts.rut4_script)).toBeTruthy()
    expect(isRutValid(companyRuts.rut4_no_script)).toBeTruthy()
    expect(isRutValid(companyRuts.rut4_dots_script)).toBeTruthy()
    expect(isRutValid(companyRuts.rut4_dots_no_script)).toBeTruthy()

    expect(isRutValid(fakeRut.script)).toBeTruthy()
    expect(isRutValid(fakeRut.no_script)).toBeTruthy()
    expect(isRutValid(fakeRut.dots_script)).toBeTruthy()
    expect(isRutValid(fakeRut.dots_no_script)).toBeTruthy()
  })

  test('isFakeRut fn', () => {
    expect(isFakeRut(ruts.rut1_script)).toBeFalsy()
    expect(isFakeRut(ruts.rut1_no_script)).toBeFalsy()
    expect(isFakeRut(ruts.rut1_dots_script)).toBeFalsy()
    expect(isFakeRut(ruts.rut1_dots_no_script)).toBeFalsy()
    expect(isFakeRut(ruts.rut2_script)).toBeFalsy()
    expect(isFakeRut(ruts.rut2_no_script)).toBeFalsy()
    expect(isFakeRut(ruts.rut2_dots_script)).toBeFalsy()
    expect(isFakeRut(ruts.rut2_dots_no_script)).toBeFalsy()
    expect(isFakeRut(ruts.rut3_script)).toBeFalsy()
    expect(isFakeRut(ruts.rut3_no_script)).toBeFalsy()
    expect(isFakeRut(ruts.rut3_dots_script)).toBeFalsy()
    expect(isFakeRut(ruts.rut3_dots_no_script)).toBeFalsy()
    expect(isFakeRut(ruts.rut4_script)).toBeFalsy()
    expect(isFakeRut(ruts.rut4_no_script)).toBeFalsy()
    expect(isFakeRut(ruts.rut4_dots_script)).toBeFalsy()
    expect(isFakeRut(ruts.rut4_dots_no_script)).toBeFalsy()

    expect(isFakeRut(companyRuts.rut1_script)).toBeFalsy()
    expect(isFakeRut(companyRuts.rut1_no_script)).toBeFalsy()
    expect(isFakeRut(companyRuts.rut1_dots_script)).toBeFalsy()
    expect(isFakeRut(companyRuts.rut1_dots_no_script)).toBeFalsy()
    expect(isFakeRut(companyRuts.rut2_script)).toBeFalsy()
    expect(isFakeRut(companyRuts.rut2_no_script)).toBeFalsy()
    expect(isFakeRut(companyRuts.rut2_dots_script)).toBeFalsy()
    expect(isFakeRut(companyRuts.rut2_dots_no_script)).toBeFalsy()
    expect(isFakeRut(companyRuts.rut3_script)).toBeFalsy()
    expect(isFakeRut(companyRuts.rut3_no_script)).toBeFalsy()
    expect(isFakeRut(companyRuts.rut3_dots_script)).toBeFalsy()
    expect(isFakeRut(companyRuts.rut3_dots_no_script)).toBeFalsy()
    expect(isFakeRut(companyRuts.rut4_script)).toBeFalsy()
    expect(isFakeRut(companyRuts.rut4_no_script)).toBeFalsy()
    expect(isFakeRut(companyRuts.rut4_dots_script)).toBeFalsy()
    expect(isFakeRut(companyRuts.rut4_dots_no_script)).toBeFalsy()

    expect(isFakeRut(fakeRut.script)).toBeTruthy()
    expect(isFakeRut(fakeRut.no_script)).toBeTruthy()
    expect(isFakeRut(fakeRut.dots_script)).toBeTruthy()
    expect(isFakeRut(fakeRut.dots_no_script)).toBeTruthy()
  })

  test('isCompanyRut fn', () => {
    expect(isCompanyRut(ruts.rut1_script)).toBeFalsy()
    expect(isCompanyRut(ruts.rut1_no_script)).toBeFalsy()
    expect(isCompanyRut(ruts.rut1_dots_script)).toBeFalsy()
    expect(isCompanyRut(ruts.rut1_dots_no_script)).toBeFalsy()
    expect(isCompanyRut(ruts.rut2_script)).toBeFalsy()
    expect(isCompanyRut(ruts.rut2_no_script)).toBeFalsy()
    expect(isCompanyRut(ruts.rut2_dots_script)).toBeFalsy()
    expect(isCompanyRut(ruts.rut2_dots_no_script)).toBeFalsy()
    expect(isCompanyRut(ruts.rut3_script)).toBeFalsy()
    expect(isCompanyRut(ruts.rut3_no_script)).toBeFalsy()
    expect(isCompanyRut(ruts.rut3_dots_script)).toBeFalsy()
    expect(isCompanyRut(ruts.rut3_dots_no_script)).toBeFalsy()
    expect(isCompanyRut(ruts.rut4_script)).toBeFalsy()
    expect(isCompanyRut(ruts.rut4_no_script)).toBeFalsy()
    expect(isCompanyRut(ruts.rut4_dots_script)).toBeFalsy()
    expect(isCompanyRut(ruts.rut4_dots_no_script)).toBeFalsy()

    expect(isCompanyRut(companyRuts.rut1_script)).toBeTruthy()
    expect(isCompanyRut(companyRuts.rut1_no_script)).toBeTruthy()
    expect(isCompanyRut(companyRuts.rut1_dots_script)).toBeTruthy()
    expect(isCompanyRut(companyRuts.rut1_dots_no_script)).toBeTruthy()
    expect(isCompanyRut(companyRuts.rut2_script)).toBeTruthy()
    expect(isCompanyRut(companyRuts.rut2_no_script)).toBeTruthy()
    expect(isCompanyRut(companyRuts.rut2_dots_script)).toBeTruthy()
    expect(isCompanyRut(companyRuts.rut2_dots_no_script)).toBeTruthy()
    expect(isCompanyRut(companyRuts.rut3_script)).toBeTruthy()
    expect(isCompanyRut(companyRuts.rut3_no_script)).toBeTruthy()
    expect(isCompanyRut(companyRuts.rut3_dots_script)).toBeTruthy()
    expect(isCompanyRut(companyRuts.rut3_dots_no_script)).toBeTruthy()
    expect(isCompanyRut(companyRuts.rut4_script)).toBeTruthy()
    expect(isCompanyRut(companyRuts.rut4_no_script)).toBeTruthy()
    expect(isCompanyRut(companyRuts.rut4_dots_script)).toBeTruthy()
    expect(isCompanyRut(companyRuts.rut4_dots_no_script)).toBeTruthy()

    expect(isCompanyRut(fakeRut.script)).toBeFalsy()
    expect(isCompanyRut(fakeRut.no_script)).toBeFalsy()
    expect(isCompanyRut(fakeRut.dots_script)).toBeFalsy()
    expect(isCompanyRut(fakeRut.dots_no_script)).toBeFalsy()
  })

  test('cleanRut fn', () => {
    expect(cleanRut(ruts.rut1_script)).toBe('47831806')
    expect(cleanRut(ruts.rut1_no_script)).toBe('47831806')
    expect(cleanRut(ruts.rut1_dots_script)).toBe('47831806')
    expect(cleanRut(ruts.rut1_dots_no_script)).toBe('47831806')
    expect(cleanRut(ruts.rut2_script)).toBe('23575004K')
    expect(cleanRut(ruts.rut2_no_script)).toBe('23575004K')
    expect(cleanRut(ruts.rut2_dots_script)).toBe('23575004K')
    expect(cleanRut(ruts.rut2_dots_no_script)).toBe('23575004K')
    expect(cleanRut(ruts.rut3_script)).toBe('245587600')
    expect(cleanRut(ruts.rut3_no_script)).toBe('245587600')
    expect(cleanRut(ruts.rut3_dots_script)).toBe('245587600')
    expect(cleanRut(ruts.rut3_dots_no_script)).toBe('245587600')
    expect(cleanRut(ruts.rut4_script)).toBe('181113545')
    expect(cleanRut(ruts.rut4_no_script)).toBe('181113545')
    expect(cleanRut(ruts.rut4_dots_script)).toBe('181113545')
    expect(cleanRut(ruts.rut4_dots_no_script)).toBe('181113545')

    expect(cleanRut(companyRuts.rut1_script)).toBe('829480093')
    expect(cleanRut(companyRuts.rut1_no_script)).toBe('829480093')
    expect(cleanRut(companyRuts.rut1_dots_script)).toBe('829480093')
    expect(cleanRut(companyRuts.rut1_dots_no_script)).toBe('829480093')
    expect(cleanRut(companyRuts.rut2_script)).toBe('794820287')
    expect(cleanRut(companyRuts.rut2_no_script)).toBe('794820287')
    expect(cleanRut(companyRuts.rut2_dots_script)).toBe('794820287')
    expect(cleanRut(companyRuts.rut2_dots_no_script)).toBe('794820287')
    expect(cleanRut(companyRuts.rut3_script)).toBe('719578519')
    expect(cleanRut(companyRuts.rut3_no_script)).toBe('719578519')
    expect(cleanRut(companyRuts.rut3_dots_script)).toBe('719578519')
    expect(cleanRut(companyRuts.rut3_dots_no_script)).toBe('719578519')
    expect(cleanRut(companyRuts.rut4_script)).toBe('649263647')
    expect(cleanRut(companyRuts.rut4_no_script)).toBe('649263647')
    expect(cleanRut(companyRuts.rut4_dots_script)).toBe('649263647')
    expect(cleanRut(companyRuts.rut4_dots_no_script)).toBe('649263647')

    expect(cleanRut(fakeRut.script)).toBe('111111111')
    expect(cleanRut(fakeRut.no_script)).toBe('111111111')
    expect(cleanRut(fakeRut.dots_script)).toBe('111111111')
    expect(cleanRut(fakeRut.dots_no_script)).toBe('111111111')
  })

  test('getRutDigits fn', () => {
    expect(getRutDigits(ruts.rut1_script)).toBe('4783180')
    expect(getRutDigits(ruts.rut1_no_script)).toBe('4783180')
    expect(getRutDigits(ruts.rut1_dots_script)).toBe('4783180')
    expect(getRutDigits(ruts.rut1_dots_no_script)).toBe('4783180')
    expect(getRutDigits(ruts.rut2_script)).toBe('23575004')
    expect(getRutDigits(ruts.rut2_no_script)).toBe('23575004')
    expect(getRutDigits(ruts.rut2_dots_script)).toBe('23575004')
    expect(getRutDigits(ruts.rut2_dots_no_script)).toBe('23575004')
    expect(getRutDigits(ruts.rut3_script)).toBe('24558760')
    expect(getRutDigits(ruts.rut3_no_script)).toBe('24558760')
    expect(getRutDigits(ruts.rut3_dots_script)).toBe('24558760')
    expect(getRutDigits(ruts.rut3_dots_no_script)).toBe('24558760')
    expect(getRutDigits(ruts.rut4_script)).toBe('18111354')
    expect(getRutDigits(ruts.rut4_no_script)).toBe('18111354')
    expect(getRutDigits(ruts.rut4_dots_script)).toBe('18111354')
    expect(getRutDigits(ruts.rut4_dots_no_script)).toBe('18111354')

    expect(getRutDigits(companyRuts.rut1_script)).toBe('82948009')
    expect(getRutDigits(companyRuts.rut1_no_script)).toBe('82948009')
    expect(getRutDigits(companyRuts.rut1_dots_script)).toBe('82948009')
    expect(getRutDigits(companyRuts.rut1_dots_no_script)).toBe('82948009')
    expect(getRutDigits(companyRuts.rut2_script)).toBe('79482028')
    expect(getRutDigits(companyRuts.rut2_no_script)).toBe('79482028')
    expect(getRutDigits(companyRuts.rut2_dots_script)).toBe('79482028')
    expect(getRutDigits(companyRuts.rut2_dots_no_script)).toBe('79482028')
    expect(getRutDigits(companyRuts.rut3_script)).toBe('71957851')
    expect(getRutDigits(companyRuts.rut3_no_script)).toBe('71957851')
    expect(getRutDigits(companyRuts.rut3_dots_script)).toBe('71957851')
    expect(getRutDigits(companyRuts.rut3_dots_no_script)).toBe('71957851')
    expect(getRutDigits(companyRuts.rut4_script)).toBe('64926364')
    expect(getRutDigits(companyRuts.rut4_no_script)).toBe('64926364')
    expect(getRutDigits(companyRuts.rut4_dots_script)).toBe('64926364')
    expect(getRutDigits(companyRuts.rut4_dots_no_script)).toBe('64926364')

    expect(getRutDigits(fakeRut.script)).toBe('11111111')
    expect(getRutDigits(fakeRut.no_script)).toBe('11111111')
    expect(getRutDigits(fakeRut.dots_script)).toBe('11111111')
    expect(getRutDigits(fakeRut.dots_no_script)).toBe('11111111')
  })

  test('getRutVerifier fn', () => {
    expect(getRutVerifier(ruts.rut1_script)).toBe('6')
    expect(getRutVerifier(ruts.rut1_no_script)).toBe('6')
    expect(getRutVerifier(ruts.rut1_dots_script)).toBe('6')
    expect(getRutVerifier(ruts.rut1_dots_no_script)).toBe('6')
    expect(getRutVerifier(ruts.rut2_script)).toBe('K')
    expect(getRutVerifier(ruts.rut2_no_script)).toBe('K')
    expect(getRutVerifier(ruts.rut2_dots_script)).toBe('K')
    expect(getRutVerifier(ruts.rut2_dots_no_script)).toBe('K')
    expect(getRutVerifier(ruts.rut3_script)).toBe('0')
    expect(getRutVerifier(ruts.rut3_no_script)).toBe('0')
    expect(getRutVerifier(ruts.rut3_dots_script)).toBe('0')
    expect(getRutVerifier(ruts.rut3_dots_no_script)).toBe('0')
    expect(getRutVerifier(ruts.rut4_script)).toBe('5')
    expect(getRutVerifier(ruts.rut4_no_script)).toBe('5')
    expect(getRutVerifier(ruts.rut4_dots_script)).toBe('5')
    expect(getRutVerifier(ruts.rut4_dots_no_script)).toBe('5')

    expect(getRutVerifier(companyRuts.rut1_script)).toBe('3')
    expect(getRutVerifier(companyRuts.rut1_no_script)).toBe('3')
    expect(getRutVerifier(companyRuts.rut1_dots_script)).toBe('3')
    expect(getRutVerifier(companyRuts.rut1_dots_no_script)).toBe('3')
    expect(getRutVerifier(companyRuts.rut2_script)).toBe('7')
    expect(getRutVerifier(companyRuts.rut2_no_script)).toBe('7')
    expect(getRutVerifier(companyRuts.rut2_dots_script)).toBe('7')
    expect(getRutVerifier(companyRuts.rut2_dots_no_script)).toBe('7')
    expect(getRutVerifier(companyRuts.rut3_script)).toBe('9')
    expect(getRutVerifier(companyRuts.rut3_no_script)).toBe('9')
    expect(getRutVerifier(companyRuts.rut3_dots_script)).toBe('9')
    expect(getRutVerifier(companyRuts.rut3_dots_no_script)).toBe('9')
    expect(getRutVerifier(companyRuts.rut4_script)).toBe('7')
    expect(getRutVerifier(companyRuts.rut4_no_script)).toBe('7')
    expect(getRutVerifier(companyRuts.rut4_dots_script)).toBe('7')
    expect(getRutVerifier(companyRuts.rut4_dots_no_script)).toBe('7')

    expect(getRutVerifier(fakeRut.script)).toBe('1')
    expect(getRutVerifier(fakeRut.no_script)).toBe('1')
    expect(getRutVerifier(fakeRut.dots_script)).toBe('1')
    expect(getRutVerifier(fakeRut.dots_no_script)).toBe('1')
  })

  test('deconstructRut', () => {
    expect(deconstructRut(ruts.rut1_script)).toEqual({
      digits: '4783180',
      verifier: '6'
    })
    expect(deconstructRut(ruts.rut1_no_script)).toEqual({
      digits: '4783180',
      verifier: '6'
    })
    expect(deconstructRut(ruts.rut1_dots_script)).toEqual({
      digits: '4783180',
      verifier: '6'
    })
    expect(deconstructRut(ruts.rut1_dots_no_script)).toEqual({
      digits: '4783180',
      verifier: '6'
    })
    expect(deconstructRut(ruts.rut2_script)).toEqual({
      digits: '23575004',
      verifier: 'K'
    })
    expect(deconstructRut(ruts.rut2_no_script)).toEqual({
      digits: '23575004',
      verifier: 'K'
    })
    expect(deconstructRut(ruts.rut2_dots_script)).toEqual({
      digits: '23575004',
      verifier: 'K'
    })
    expect(deconstructRut(ruts.rut2_dots_no_script)).toEqual({
      digits: '23575004',
      verifier: 'K'
    })
    expect(deconstructRut(ruts.rut3_script)).toEqual({
      digits: '24558760',
      verifier: '0'
    })
    expect(deconstructRut(ruts.rut3_no_script)).toEqual({
      digits: '24558760',
      verifier: '0'
    })
    expect(deconstructRut(ruts.rut3_dots_script)).toEqual({
      digits: '24558760',
      verifier: '0'
    })
    expect(deconstructRut(ruts.rut3_dots_no_script)).toEqual({
      digits: '24558760',
      verifier: '0'
    })
    expect(deconstructRut(ruts.rut4_script)).toEqual({
      digits: '18111354',
      verifier: '5'
    })
    expect(deconstructRut(ruts.rut4_no_script)).toEqual({
      digits: '18111354',
      verifier: '5'
    })
    expect(deconstructRut(ruts.rut4_dots_script)).toEqual({
      digits: '18111354',
      verifier: '5'
    })
    expect(deconstructRut(ruts.rut4_dots_no_script)).toEqual({
      digits: '18111354',
      verifier: '5'
    })

    expect(deconstructRut(companyRuts.rut1_script)).toEqual({
      digits: '82948009',
      verifier: '3'
    })
    expect(deconstructRut(companyRuts.rut1_no_script)).toEqual({
      digits: '82948009',
      verifier: '3'
    })
    expect(deconstructRut(companyRuts.rut1_dots_script)).toEqual({
      digits: '82948009',
      verifier: '3'
    })
    expect(deconstructRut(companyRuts.rut1_dots_no_script)).toEqual({
      digits: '82948009',
      verifier: '3'
    })
    expect(deconstructRut(companyRuts.rut2_script)).toEqual({
      digits: '79482028',
      verifier: '7'
    })
    expect(deconstructRut(companyRuts.rut2_no_script)).toEqual({
      digits: '79482028',
      verifier: '7'
    })
    expect(deconstructRut(companyRuts.rut2_dots_script)).toEqual({
      digits: '79482028',
      verifier: '7'
    })
    expect(deconstructRut(companyRuts.rut2_dots_no_script)).toEqual({
      digits: '79482028',
      verifier: '7'
    })
    expect(deconstructRut(companyRuts.rut3_script)).toEqual({
      digits: '71957851',
      verifier: '9'
    })
    expect(deconstructRut(companyRuts.rut3_no_script)).toEqual({
      digits: '71957851',
      verifier: '9'
    })
    expect(deconstructRut(companyRuts.rut3_dots_script)).toEqual({
      digits: '71957851',
      verifier: '9'
    })
    expect(deconstructRut(companyRuts.rut3_dots_no_script)).toEqual({
      digits: '71957851',
      verifier: '9'
    })
    expect(deconstructRut(companyRuts.rut4_script)).toEqual({
      digits: '64926364',
      verifier: '7'
    })
    expect(deconstructRut(companyRuts.rut4_no_script)).toEqual({
      digits: '64926364',
      verifier: '7'
    })
    expect(deconstructRut(companyRuts.rut4_dots_script)).toEqual({
      digits: '64926364',
      verifier: '7'
    })
    expect(deconstructRut(companyRuts.rut4_dots_no_script)).toEqual({
      digits: '64926364',
      verifier: '7'
    })

    expect(deconstructRut(fakeRut.script)).toEqual({
      digits: '11111111',
      verifier: '1'
    })
    expect(deconstructRut(fakeRut.no_script)).toEqual({
      digits: '11111111',
      verifier: '1'
    })
    expect(deconstructRut(fakeRut.dots_script)).toEqual({
      digits: '11111111',
      verifier: '1'
    })
    expect(deconstructRut(fakeRut.dots_no_script)).toEqual({
      digits: '11111111',
      verifier: '1'
    })
  })

  test('getVerificationCode fn', () => {
    expect(getVerificationCode(getRutDigits(ruts.rut1_script))).toBe('6')
    expect(getVerificationCode(getRutDigits(ruts.rut1_no_script))).toBe('6')
    expect(getVerificationCode(getRutDigits(ruts.rut1_dots_script))).toBe('6')
    expect(getVerificationCode(getRutDigits(ruts.rut1_dots_no_script))).toBe(
      '6'
    )
    expect(getVerificationCode(getRutDigits(ruts.rut2_script))).toBe('k')
    expect(getVerificationCode(getRutDigits(ruts.rut2_no_script))).toBe('k')
    expect(getVerificationCode(getRutDigits(ruts.rut2_dots_script))).toBe('k')
    expect(getVerificationCode(getRutDigits(ruts.rut2_dots_no_script))).toBe(
      'k'
    )
    expect(getVerificationCode(getRutDigits(ruts.rut3_script))).toBe('0')
    expect(getVerificationCode(getRutDigits(ruts.rut3_no_script))).toBe('0')
    expect(getVerificationCode(getRutDigits(ruts.rut3_dots_script))).toBe('0')
    expect(getVerificationCode(getRutDigits(ruts.rut3_dots_no_script))).toBe(
      '0'
    )
    expect(getVerificationCode(getRutDigits(ruts.rut4_script))).toBe('5')
    expect(getVerificationCode(getRutDigits(ruts.rut4_no_script))).toBe('5')
    expect(getVerificationCode(getRutDigits(ruts.rut4_dots_script))).toBe('5')
    expect(getVerificationCode(getRutDigits(ruts.rut4_dots_no_script))).toBe(
      '5'
    )

    expect(getVerificationCode(getRutDigits(companyRuts.rut1_script))).toBe('3')
    expect(getVerificationCode(getRutDigits(companyRuts.rut1_no_script))).toBe(
      '3'
    )
    expect(
      getVerificationCode(getRutDigits(companyRuts.rut1_dots_script))
    ).toBe('3')
    expect(
      getVerificationCode(getRutDigits(companyRuts.rut1_dots_no_script))
    ).toBe('3')
    expect(getVerificationCode(getRutDigits(companyRuts.rut2_script))).toBe('7')
    expect(getVerificationCode(getRutDigits(companyRuts.rut2_no_script))).toBe(
      '7'
    )
    expect(
      getVerificationCode(getRutDigits(companyRuts.rut2_dots_script))
    ).toBe('7')
    expect(
      getVerificationCode(getRutDigits(companyRuts.rut2_dots_no_script))
    ).toBe('7')
    expect(getVerificationCode(getRutDigits(companyRuts.rut3_script))).toBe('9')
    expect(getVerificationCode(getRutDigits(companyRuts.rut3_no_script))).toBe(
      '9'
    )
    expect(
      getVerificationCode(getRutDigits(companyRuts.rut3_dots_script))
    ).toBe('9')
    expect(
      getVerificationCode(getRutDigits(companyRuts.rut3_dots_no_script))
    ).toBe('9')
    expect(getVerificationCode(getRutDigits(companyRuts.rut4_script))).toBe('7')
    expect(getVerificationCode(getRutDigits(companyRuts.rut4_no_script))).toBe(
      '7'
    )
    expect(
      getVerificationCode(getRutDigits(companyRuts.rut4_dots_script))
    ).toBe('7')
    expect(
      getVerificationCode(getRutDigits(companyRuts.rut4_dots_no_script))
    ).toBe('7')

    expect(getVerificationCode(getRutDigits(fakeRut.script))).toBe('1')
    expect(getVerificationCode(getRutDigits(fakeRut.no_script))).toBe('1')
    expect(getVerificationCode(getRutDigits(fakeRut.dots_script))).toBe('1')
    expect(getVerificationCode(getRutDigits(fakeRut.dots_no_script))).toBe('1')
  })

  test('elevenModule fn', () => {
    expect(elevenModule(1)).toBe('10')
    expect(elevenModule(2)).toBe('9')
    expect(elevenModule(3)).toBe('8')
    expect(elevenModule(4)).toBe('7')
    expect(elevenModule(5)).toBe('6')
    expect(elevenModule(6)).toBe('5')
    expect(elevenModule(7)).toBe('4')
    expect(elevenModule(8)).toBe('3')
    expect(elevenModule(9)).toBe('2')
    expect(elevenModule(10)).toBe('1')
    expect(elevenModule(11)).toBe('11')
  })

  test('formatRut fn', () => {
    expect(formatRut(ruts.rut1_no_script)).toBe('4.783.180-6')
    expect(formatRut(ruts.rut2_no_script)).toBe('23.575.004-K')
    expect(formatRut(ruts.rut3_no_script)).toBe('24.558.760-0')
    expect(formatRut(ruts.rut4_no_script)).toBe('18.111.354-5')
    expect(formatRut(companyRuts.rut1_no_script)).toBe('82.948.009-3')
    expect(formatRut(companyRuts.rut2_no_script)).toBe('79.482.028-7')
    expect(formatRut(companyRuts.rut3_no_script)).toBe('71.957.851-9')
    expect(formatRut(companyRuts.rut4_no_script)).toBe('64.926.364-7')
    expect(formatRut(fakeRut.no_script)).toBe('11.111.111-1')
  })

  test('validateRut fn', () => {
    expect(validateRut(ruts.rut1_script)).toBeTruthy()
    expect(validateRut(ruts.rut1_no_script)).toBeTruthy()
    expect(validateRut(ruts.rut1_dots_script)).toBeTruthy()
    expect(validateRut(ruts.rut1_dots_no_script)).toBeTruthy()
    expect(validateRut(ruts.rut2_script)).toBeTruthy()
    expect(validateRut(ruts.rut2_no_script)).toBeTruthy()
    expect(validateRut(ruts.rut2_dots_script)).toBeTruthy()
    expect(validateRut(ruts.rut2_dots_no_script)).toBeTruthy()
    expect(validateRut(ruts.rut3_script)).toBeTruthy()
    expect(validateRut(ruts.rut3_no_script)).toBeTruthy()
    expect(validateRut(ruts.rut3_dots_script)).toBeTruthy()
    expect(validateRut(ruts.rut3_dots_no_script)).toBeTruthy()
    expect(validateRut(ruts.rut4_script)).toBeTruthy()
    expect(validateRut(ruts.rut4_no_script)).toBeTruthy()
    expect(validateRut(ruts.rut4_dots_script)).toBeTruthy()
    expect(validateRut(ruts.rut4_dots_no_script)).toBeTruthy()
    expect(validateRut(companyRuts.rut1_script)).toBeTruthy()
    expect(validateRut(companyRuts.rut1_no_script)).toBeTruthy()
    expect(validateRut(companyRuts.rut1_dots_script)).toBeTruthy()
    expect(validateRut(companyRuts.rut1_dots_no_script)).toBeTruthy()
    expect(validateRut(companyRuts.rut2_script)).toBeTruthy()
    expect(validateRut(companyRuts.rut2_no_script)).toBeTruthy()
    expect(validateRut(companyRuts.rut2_dots_script)).toBeTruthy()
    expect(validateRut(companyRuts.rut2_dots_no_script)).toBeTruthy()
    expect(validateRut(companyRuts.rut3_script)).toBeTruthy()
    expect(validateRut(companyRuts.rut3_no_script)).toBeTruthy()
    expect(validateRut(companyRuts.rut3_dots_script)).toBeTruthy()
    expect(validateRut(companyRuts.rut3_dots_no_script)).toBeTruthy()
    expect(validateRut(companyRuts.rut4_script)).toBeTruthy()
    expect(validateRut(companyRuts.rut4_no_script)).toBeTruthy()
    expect(validateRut(companyRuts.rut4_dots_script)).toBeTruthy()
    expect(validateRut(companyRuts.rut4_dots_no_script)).toBeTruthy()
    expect(validateRut(fakeRut.script)).toBeFalsy()
    expect(validateRut(fakeRut.no_script)).toBeFalsy()
    expect(validateRut(fakeRut.dots_script)).toBeFalsy()
    expect(validateRut(fakeRut.dots_no_script)).toBeFalsy()
  })

  test('validateCompanyRut fn', () => {
    expect(validateCompanyRut(ruts.rut1_script)).toBeFalsy()
    expect(validateCompanyRut(ruts.rut1_no_script)).toBeFalsy()
    expect(validateCompanyRut(ruts.rut1_dots_script)).toBeFalsy()
    expect(validateCompanyRut(ruts.rut1_dots_no_script)).toBeFalsy()
    expect(validateCompanyRut(ruts.rut2_script)).toBeFalsy()
    expect(validateCompanyRut(ruts.rut2_no_script)).toBeFalsy()
    expect(validateCompanyRut(ruts.rut2_dots_script)).toBeFalsy()
    expect(validateCompanyRut(ruts.rut2_dots_no_script)).toBeFalsy()
    expect(validateCompanyRut(ruts.rut3_script)).toBeFalsy()
    expect(validateCompanyRut(ruts.rut3_no_script)).toBeFalsy()
    expect(validateCompanyRut(ruts.rut3_dots_script)).toBeFalsy()
    expect(validateCompanyRut(ruts.rut3_dots_no_script)).toBeFalsy()
    expect(validateCompanyRut(ruts.rut4_script)).toBeFalsy()
    expect(validateCompanyRut(ruts.rut4_no_script)).toBeFalsy()
    expect(validateCompanyRut(ruts.rut4_dots_script)).toBeFalsy()
    expect(validateCompanyRut(ruts.rut4_dots_no_script)).toBeFalsy()
    expect(validateCompanyRut(companyRuts.rut1_script)).toBeTruthy()
    expect(validateCompanyRut(companyRuts.rut1_no_script)).toBeTruthy()
    expect(validateCompanyRut(companyRuts.rut1_dots_script)).toBeTruthy()
    expect(validateCompanyRut(companyRuts.rut1_dots_no_script)).toBeTruthy()
    expect(validateCompanyRut(companyRuts.rut2_script)).toBeTruthy()
    expect(validateCompanyRut(companyRuts.rut2_no_script)).toBeTruthy()
    expect(validateCompanyRut(companyRuts.rut2_dots_script)).toBeTruthy()
    expect(validateCompanyRut(companyRuts.rut2_dots_no_script)).toBeTruthy()
    expect(validateCompanyRut(companyRuts.rut3_script)).toBeTruthy()
    expect(validateCompanyRut(companyRuts.rut3_no_script)).toBeTruthy()
    expect(validateCompanyRut(companyRuts.rut3_dots_script)).toBeTruthy()
    expect(validateCompanyRut(companyRuts.rut3_dots_no_script)).toBeTruthy()
    expect(validateCompanyRut(companyRuts.rut4_script)).toBeTruthy()
    expect(validateCompanyRut(companyRuts.rut4_no_script)).toBeTruthy()
    expect(validateCompanyRut(companyRuts.rut4_dots_script)).toBeTruthy()
    expect(validateCompanyRut(companyRuts.rut4_dots_no_script)).toBeTruthy()
    expect(validateCompanyRut(fakeRut.script)).toBeFalsy()
    expect(validateCompanyRut(fakeRut.no_script)).toBeFalsy()
    expect(validateCompanyRut(fakeRut.dots_script)).toBeFalsy()
    expect(validateCompanyRut(fakeRut.dots_no_script)).toBeFalsy()
  })
})
