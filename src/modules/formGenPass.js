import genPass from './generators';

const pass_generated = document.querySelector('.pass-generated');
const char_qnt = document.querySelector('.char-qnt');
const chk_cap = document.querySelector('.chk-cap');
const chk_small = document.querySelector('.chk-small');
const chk_num = document.querySelector('.chk-num');
const chk_sym = document.querySelector('.chk-sym');
const gen_pass = document.querySelector('.generate-pass');

export default () => {
  gen_pass.addEventListener('click', () => {
    pass_generated.innerHTML = gen();
  });
};

function gen() {
  const pass = genPass(char_qnt.value, chk_cap.checked, chk_small.checked, chk_num.checked, chk_sym.checked);
  return pass || 'Nada selecionado.';
}