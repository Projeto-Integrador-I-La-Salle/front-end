function InputBox({label, placeholeder}) {
    return(
        <div>
            <label  className="block text-sm font-medium text-gray-600 mb-1">{label}</label>
            <input type="text" placeholder={placeholeder} className="w-full px-4 py-2 border border-gray-100 rounded-md focus:ring-1 focus:ring-red-500 focus:border-red-500 outline-none"/>
        </div>
    );
}
export { InputBox };
