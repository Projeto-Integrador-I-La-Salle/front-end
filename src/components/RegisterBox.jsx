import { useState } from "react";
import { PhoneInput } from "./PhoneInput.component";
import { register } from "../api/auth.api";
import { useNavigate } from "react-router";

function RegisterBox() {
  const [nameForm, setNameForm] = useState({ value: '', error: null });
  const [emailForm, setEmailForm] = useState({ value: '', error: null });
  const [passwordForm, setPasswordForm] = useState({ value: '', error: null });
  const [contactForm, setContactForm] = useState({ value: '', error: null });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    const data = {
      name: nameForm.value,
      email: emailForm.value,
      password: passwordForm.value,
      telefone: contactForm.value
    };

    // TODO: error handling.
    const res = await register(data);

    if (res.hasError) {
      setError(res.data);
      setLoading(false);
      return;
    }

    if (res.statusCode === 201) {
      setLoading(false);
      alert(res.data?.message || "Usuário registrado com sucesso!");
      navigate("/");
    }
  }

  return (
    <div className="flex items-center justify-center ">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Cadastre-se
        </h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nome completo:
            </label>
            <input
              type="text"
              placeholder="Digite seu nome"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
              required
              onChange={function(e) {
                setNameForm({ value: e.target.value, error: null })
              }}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email:
            </label>
            <input
              type="email"
              placeholder="Digite seu email"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
              required
              onChange={function(e) {
                setEmailForm({ value: e.target.value, error: null })
              }}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Senha:
            </label>
            <input
              type="password"
              placeholder="Digite sua senha"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
              required
              onChange={function(e) {
                setPasswordForm({ value: e.target.value, error: null })
              }}
            />
          </div>
          <div>
            <label
              htmlFor="telefone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Contato:
            </label>
            <PhoneInput
              name="telefone"
              value={contactForm.value}
              id="telefone"
              placeholder="Ex: (51) 99999-9999"
              onChange={setContactForm}
            />
          </div>
          {error?.length > 0 && <p className="text-branding-error">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-xl font-semibold shadow-md transition duration-300"
          >
            <span className="pr-1">{loading ? "Carregando" : "Cadastrar-se"}</span>
            {loading && (
              <span
                className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
              />
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
export default RegisterBox;

