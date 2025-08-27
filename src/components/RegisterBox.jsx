function RegisterBox() {
  return (
    <div className="flex items-center justify-center ">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Cadastre-se
        </h2>
        <form className="space-y-5">
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
            />
          </div>
          <div>
            <label
              htmlFor="telefone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Contato:
            </label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              placeholder="Ex: (99) 99999-9999"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-xl font-semibold shadow-md transition duration-300"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
export default RegisterBox;
