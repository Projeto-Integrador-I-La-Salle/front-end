/**
 * Returns the equivalent tailwind font weight class based on number value,
 * if the value is not found or valid, the default will be font-normal.
 *
 * @param {number} weight 
 * @returns {string} relative tailwind font weight class.
 * */
export function getFontWeight(weight) {
  if (typeof weight !== 'number') {
    throw new Error("[ERROR]: Invalid parameter type. Expected number.");
  }

  const map = {
    400: 'font-normal',
    500: 'font-medium',
    600: 'font-semibold',
  };

  return map[weight] || 'font-normal';
}

/**
 * @param {String} date
 * @returns {String}
 * */
/**
 * Converte várias representações de data para o formato "DD mês, YYYY"
 * - Não usa new Date() nem toLocaleString() nem outros helpers nativos de Date.
 * - Aceita:
 *    "YYYY-MM-DD"
 *    "YYYY-MM-DD HH:MM:SS"
 *    "DD/MM/YYYY"
 *    "DD-MM-YYYY"
 *    { year: 2025, month: 11, day: 25 }  (month 1..12)
 *
 * Exemplo: formatToPtBr("2025-11-25 03:36:13") -> "25 novembro, 2025"
 */
export function formatDate(input) {
  // nomes dos meses em português (1 -> janeiro)
  const months = [
    '', // índice 0 inútil para facilitar mapeamento 1..12
    'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
    'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
  ];

  // função auxiliar para transformar valores em inteiro sem usar parseInt (apenas Number)
  function toIntSafe(s) {
    // se já vier número
    if (typeof s === 'number') return Math.floor(s);
    // remover espaços e caracteres não numéricos no início/fim
    let str = '' + s;
    // aceitar sinais e dígitos, parar ao encontrar caracter não dígito (simples)
    let res = 0;
    let sign = 1;
    let i = 0;
    if (str[0] === '+' || str[0] === '-') {
      if (str[0] === '-') sign = -1;
      i = 1;
    }
    for (; i < str.length; i++) {
      const c = str.charCodeAt(i);
      if (c >= 48 && c <= 57) { // '0'..'9'
        res = res * 10 + (c - 48);
      } else break;
    }
    return res * sign;
  }

  // recebe day, month, year e retorna string formatada
  function buildOut(dayN, monthN, yearN) {
    // zero pad simples: se <10, acrescenta '0' na frente
    const dayStr = (dayN < 10 ? '0' + dayN : '' + dayN);
    const monthName = months[monthN] || ('mês' + monthN);
    return dayStr + ' ' + monthName + ', ' + yearN;
  }

  // se for objeto {year, month, day}
  if (typeof input === 'object' && input !== null && !Array.isArray(input)) {
    const y = toIntSafe(input.year);
    const m = toIntSafe(input.month);
    const d = toIntSafe(input.day);
    return buildOut(d, m, y);
  }

  // se for string, normalizar
  if (typeof input === 'string') {
    let s = input.trim();

    // caso: "YYYY-MM-DD" ou "YYYY-MM-DD HH:MM:SS"
    // detectar se primeiro bloco tem 4 dígitos seguido de '-'
    if (s.length >= 10 && s[4] === '-') {
      // extrair os 3 primeiros blocos separados por '-' (ano, mes, dia)
      const parts = [];
      let cur = '';
      for (let i = 0; i < s.length && parts.length < 3; i++) {
        const ch = s[i];
        if (ch === '-') {
          parts.push(cur);
          cur = '';
        } else if (ch === ' ') {
          // se encontrar espaço antes de coletar 3 partes, empurrar cur e parar
          parts.push(cur);
          cur = '';
          break;
        } else {
          cur += ch;
        }
      }
      if (parts.length < 3 && cur !== '' && parts.length < 3) parts.push(cur);
      // caso a string tivesse "YYYY-MM-DD HH:MM:SS", cur contém dia (ou já foi empurrado)
      const year = toIntSafe(parts[0]);
      const month = toIntSafe(parts[1]);
      const day = toIntSafe(parts[2]);
      return buildOut(day, month, year);
    }

    // caso: "DD/MM/YYYY" ou "DD-MM-YYYY"
    // procurar separador '/' ou '-'
    let sep = null;
    for (let i = 0; i < s.length; i++) {
      const ch = s[i];
      if (ch === '/' || ch === '-') { sep = ch; break; }
    }
    if (sep) {
      const parts = [];
      let cur = '';
      for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        if (ch === sep) {
          parts.push(cur);
          cur = '';
        } else {
          cur += ch;
        }
      }
      if (cur !== '') parts.push(cur);
      // se vier no formato DD/MM/YYYY
      if (parts.length >= 3) {
        const d = toIntSafe(parts[0]);
        const m = toIntSafe(parts[1]);
        const y = toIntSafe(parts[2]);
        return buildOut(d, m, y);
      }
    }

    // fallback: tentar extrair qualquer sequência de 3 números grandes na string:
    const groups = [];
    let curNum = '';
    for (let i = 0; i < s.length; i++) {
      const c = s.charCodeAt(i);
      if (c >= 48 && c <= 57) {
        curNum += String.fromCharCode(c);
      } else {
        if (curNum !== '') {
          groups.push(curNum);
          curNum = '';
        }
      }
    }
    if (curNum !== '') groups.push(curNum);

    // se acharmos 3 grupos como YYYY MM DD ou DD MM YYYY, tentar decidir
    if (groups.length >= 3) {
      // se o primeiro tiver 4 dígitos, assumir Y M D (YYYY MM DD)
      if (groups[0].length === 4) {
        const y = toIntSafe(groups[0]);
        const m = toIntSafe(groups[1]);
        const d = toIntSafe(groups[2]);
        return buildOut(d, m, y);
      } else {
        // caso mais provável DD MM YYYY
        const d = toIntSafe(groups[0]);
        const m = toIntSafe(groups[1]);
        const y = toIntSafe(groups[2]);
        return buildOut(d, m, y);
      }
    }
  }

  // se nada bateu, retornar input bruto (ou informar erro)
  return String(input);
}

