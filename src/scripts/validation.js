import * as Yup from 'yup';

function CheckDate(pObj) {
  try {
    const expReg = /^((0[1-9]|[12]\d)\/(0[1-9]|1[0-2])|30\/(0[13-9]|1[0-2])|31\/(0[13578]|1[02]))\/(19|20)?\d{2}$/;
    let aRet = true;
    if (pObj && pObj.match(expReg) && pObj.length == 10) {
      const dia = pObj.substring(0, 2);
      const mes = pObj.substring(3, 5);
      const ano = pObj.substring(6, 10);
      if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && dia > 30) {
        aRet = false;
      } else if (ano % 4 != 0 && mes == 2 && dia > 28) {
        aRet = false;
      } else if (ano % 4 == 0 && mes == 2 && dia > 29) {
        aRet = false;
      }
    } else {
      aRet = false;
    }
    return aRet;
  } catch (e) {
    return false;
  }
}

Yup.addMethod(Yup.string, 'datebr', function(message) {
  return this.test('datebr', message || 'Data invalida!', value =>
    CheckDate(value)
  );
});
