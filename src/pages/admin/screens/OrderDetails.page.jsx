import { useEffect } from 'react';
import { useParams } from 'react-router';

import { useOrders } from '../../../hooks/useOrder.hook';

import { NavigationMenu } from '../components/NavigationMenu.component';

import { formatDate } from '../../../utils';

export function OrderDetailsAdminPage() {
    const { id } = useParams();
    const { order, getOrder } = useOrders();

    useEffect(function() {
        getOrder(id);
    }, [id, getOrder]);

    /**
     * @param {OrderHistory} order
     * @returns {String}
     * */
    function getTotalValue(order) {
        if (!order) {
            return "";
        }

        const productLabel = order?.itens?.length === 1 ? 'produto' : 'produtos';
        const formatedDate = formatDate(order?.dataReserva);
        return `• ${formatedDate} • ${order?.itens?.length} ${productLabel}`
    };

    return (
        <div className="h-full overflow-hidden bg-gray-50">
            <h1 className="p-4">Página de Administrador</h1>
            <div className="flex h-full">
                <NavigationMenu />
                <div className="flex justify-center border rounded-sm h-[90%] mx-5 bg-white overflow-scroll w-full">
                    {/* Main Content */}
                    <div className="flex-1 p-8 flex justify-center">
                        <div className="max-w-6xl w-full">
                            {/* Header */}
                            <div className="flex justify-between items-center mb-8">
                                <div>
                                    <h1 className="text-2xl font-semibold text-gray-900">
                                        Detalhes da reserva
                                        <span
                                            className="text-gray-400 text-sm font-normal ml-2">
                                            {getTotalValue(order)}
                                        </span>
                                    </h1>
                                </div>
                                <a href="/admin/pedidos/historico" className="text-red-600 hover:text-red-700 font-medium">Voltar</a>
                            </div>

                            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
                                <div className="grid grid-cols-2 gap-8 mb-6">
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase mb-1">Código:</p>
                                        <p className="font-medium text-gray-900">#{order?.id}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase mb-1">Método de Pagamento:</p>
                                        <p className="font-medium text-gray-900">{order?.metodoPagamento}</p>
                                    </div>
                                </div>

                                <div className="border-t border-gray-200 pt-6 space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Subtotal:</span>
                                        <span className="font-medium text-gray-900">${parseFloat(order?.valorTotal).toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Desconto:</span>
                                        <span className="font-medium text-gray-900">{order?.desconto || '0'}</span>
                                    </div>
                                    <div className="flex justify-between text-lg pt-3 border-t border-gray-200">
                                        <span className="font-semibold text-gray-900">Total</span>
                                        <span className="font-bold text-red-600">${parseFloat(order?.valorTotal).toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Product Table */}
                            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                                <table className="w-full">
                                    <thead className="bg-gray-50 border-b border-gray-200">
                                        <tr>
                                            <th className="text-left px-6 py-4 text-xs font-semibold text-gray-600 uppercase">Produto</th>
                                            <th className="text-left px-6 py-4 text-xs font-semibold text-gray-600 uppercase">Preço</th>
                                            <th className="text-left px-6 py-4 text-xs font-semibold text-gray-600 uppercase">Quantidade</th>
                                            <th className="text-left px-6 py-4 text-xs font-semibold text-gray-600 uppercase">Subtotal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {order?.itens?.map(function(orderHistoryItem) {
                                            return (
                                                <tr key={orderHistoryItem.id} className="border-b border-gray-200 last:border-0">
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-2xl">
                                                                {orderHistoryItem?.produto?.imagens?.[0]?.url}
                                                            </div>
                                                            <span className="font-medium text-gray-900">{orderHistoryItem?.produto?.nome}</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 text-gray-900">${parseFloat(orderHistoryItem?.produto?.preco).toFixed(2)}</td>
                                                    <td className="px-6 py-4 text-gray-900">x{orderHistoryItem?.quantidade}</td>
                                                    <td className="px-6 py-4 font-medium text-gray-900">
                                                        ${parseFloat(orderHistoryItem?.quantidade * orderHistoryItem?.produto?.preco).toFixed(2)}
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

