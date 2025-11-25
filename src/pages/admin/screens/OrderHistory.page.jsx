import { useNavigate } from "react-router";
import { useOrderHistory } from "../../../hooks/useOrderHistory.hook";
import { formatDate } from "../../../utils";
import { NavigationMenu } from "../components/NavigationMenu.component";

export function OrderHistoryAdminPage() {
    const { orders } = useOrderHistory();
    const navigate = useNavigate();

    const headers = ['#', 'Código', 'Data Retirada', 'Total', 'Status', 'Data Reserva'];

    /**
     * @param {OrderHistory} order
     * @returns {String}
     * */
    function getTotalValue(order) {
        const totalValue = `R$${order.valorTotal}`;
        const productLabel = order.itens.length === 1 ? 'produto' : 'produtos';
        const productAmount = `(${order.itens.length} ${productLabel})`;
        return `${totalValue} ${productAmount}`;
    };

    return (
        <div className="h-full overflow-hidden bg-gray-50">
            <h1 className="p-4">Página de Administrador</h1>

            <div className="flex h-full">
                <NavigationMenu />
                <div className="border rounded-sm w-screen h-[90%] mx-5 bg-white">
                    <div className="flex flex-col h-full">
                        <h1 className="border-b p-2">Estoque de Produtos</h1>

                        <div className="overflow-y-auto border cursor-default" id="scroll-box">
                            <table className="w-full border-collapse text-left">
                                <thead className="sticky top-0 bg-gray-100">
                                    <tr className="border-b">
                                        {headers && headers.length > 0 &&
                                            headers.map(function(header, index) {
                                                return (
                                                    <th key={index} className="p-2">
                                                        {header}
                                                    </th>
                                                );
                                            })}
                                    </tr>
                                </thead>

                                <tbody>
                                    {orders?.length > 0 ? (
                                        orders.map(function(order, index) {
                                            return (
                                                <tr
                                                    key={order.id}
                                                    className="hover:bg-gray-100 cursor-pointer border-b"
                                                    onClick={function() {
                                                        navigate(`/admin/pedidos/${order.id}`);
                                                    }}
                                                >
                                                    <td className="p-2">{index + 1}</td>
                                                    <td className="p-2">{order.id}</td>
                                                    <td className="p-2">{formatDate(order.dataRetirada)}</td>
                                                    <td className="p-2">{getTotalValue(order)}</td>
                                                    <td className="p-2">{order.status}</td>
                                                    <td className="p-2">{formatDate(order.dataReserva)}</td>
                                                </tr>
                                            );
                                        })
                                    ) : (
                                        <tr>
                                            <td colSpan="5" className="p-4 text-gray-500">
                                                Não há produtos cadastrados.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

