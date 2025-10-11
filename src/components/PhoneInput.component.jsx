/**
 * @param {string} s 
 */
function onlyDigits(s) {
  return (s || "").replace(/\D/g, "");
}

/**
 * @param {string} digits
 * @param {boolean} [withCountryCode=false]
 */
function formatBrazilPhone(digits, withCountryCode = false) {
  let d = digits;
  let prefix = "";

  if (withCountryCode) {
    if (d.startsWith("55")) d = d.slice(2);
    prefix = "+55 ";
  } else {
    if (d.startsWith("55")) d = d.slice(2);
  }

  d = d.slice(0, 11);

  if (d.length <= 2) {
    return prefix + (d ? `(${d}` : "");
  }

  const ddd = d.slice(0, 2);
  const rest = d.slice(2);

  if (rest.length <= 4) {
    return `${prefix}(${ddd}) ${rest}`;
  } else if (rest.length <= 8) {
    const p1 = rest.slice(0, 4);
    const p2 = rest.slice(4);
    return `${prefix}(${ddd}) ${p1}${p2 ? "-" + p2 : ""}`;
  } else {
    const p1 = rest.slice(0, 5);
    const p2 = rest.slice(5);
    return `${prefix}(${ddd}) ${p1}${p2 ? "-" + p2 : ""}`;
  }
}

export function PhoneInput({
  value,
  onChange,
  withCountryCode = false,
  placeholder = withCountryCode ? "+55 (DD) 99999-9999" : "(DD) 99999-9999",
  name,
  id
}) {
  function handleChange(e) {
    const raw = onlyDigits(e.target.value);
    const masked = formatBrazilPhone(raw, withCountryCode);

    const errorMsg =
      raw.length < 10 ? "Número de telefone incompleto" : null;

    onChange({ value: masked, error: errorMsg });
  };

  function handlePaste(e) {
    e.preventDefault();
    const text = e.clipboardData.getData("text");
    const masked = formatBrazilPhone(onlyDigits(text), withCountryCode);
    onChange(masked);
  };

  return (
    <input
      id={id}
      name={name}
      type="tel"
      inputMode="numeric"
      autoComplete="tel"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      onPaste={handlePaste}
      onKeyDown={function(e) {
        const allowed = [
          "Backspace", "Delete", "Tab", "ArrowLeft", "ArrowRight", "Home", "End"
        ];
        if (allowed.includes(e.key)) return;
        if (!/\d/.test(e.key)) e.preventDefault();
      }}
      maxLength={withCountryCode ? 19 : 16}
      className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
    />
  );
}

