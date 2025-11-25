// src/components/LoginBox.jsx
import { useState } from "react";
import { login } from "../api/auth.api";
import { setCookie } from "../services/cookies";
import { useNavigate } from "react-router";

function LoginBox() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    const response = await login({ email: email, password: senha });
    if (response.hasError) {
      setError(response.data);
      setLoading(false);
      return;
    }

    if (response.statusCode === 422) {
      setError(response.data);
      setLoading(false);
      return;
    }

    if (response.statusCode === 200) {
      // XXX: show modal? response.data.message
      setCookie("token", "Bearer " + response?.data?.access_token, 1);
      setLoading(false);
      setError("");
      navigate("/");
    }
  };

  return (
    <div className="flex items-center justify-center  ">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Campo de Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
              placeholder="Digite seu email"
              required
            />
          </div>

          {/* Campo de Senha */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Senha
            </label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
              placeholder="Digite sua senha"
              required
            />
          </div>

          {error?.length > 0 && <p className="text-branding-error">{error}</p>}

          {/* Botão de Login */}
          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-3 w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-xl font-semibold shadow-md transition duration-300"
          >
            <span>{loading ? "Carregando" : "Entrar"}</span>
            {loading && (
              <span
                className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
              />
            )}
          </button>
        </form>

        {/* Link para cadastro */}
        <p className="mt-6 text-sm text-center text-gray-600">
          Não tem uma conta?{" "}
          <a
            href="/cadastro"
            className="text-red-600 hover:text-red-800 font-medium"
          >
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginBox;
