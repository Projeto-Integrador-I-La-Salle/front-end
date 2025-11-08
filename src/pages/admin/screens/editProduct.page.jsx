import { useCallback, useContext, useEffect, useState } from "react";

import { Link, useNavigate, useParams } from "react-router";

import { useProducts } from "../../../../products.hook";

import { NavigationMenu } from "../components/NavigationMenu.component";
import { ImageCard } from "../components/ImageCard.component";
import { useModal } from "../../../../useModal.hook";
import useUnsavedChanges from "../../../hooks/useUnsavedChanges.hook";
import { LoaderContext } from "../../../contexts/LoaderContext";
import { deleteById } from "../../../api/products.api";

function MyCustomModal({ closeModal, productId, navigate }) {
    const base = "w-1/2 h-10 rounded-sm transition-colors duration-300";

    function buttonStyle(variant = "cancel") {
        const colors = {
            cancel: "bg-green-300 hover:bg-green-400",
            continue: "bg-red-300 hover:bg-red-400",
        };

        return `${base} ${colors[variant]}`;
    };

    function handleCancelButtonClick() {
        closeModal();
    }

    async function handleContinueButtonClick() {
        try {
            // TODO(Nathan): Better error handling.
            await deleteById(productId);

            closeModal();

            navigate(-1);
        } catch (err) {
            console.error('[ERROR]: An error occured while trying to delete product, reason:', err);
        }
    }

    return (
        <div className="p-5 flex flex-col gap-5 text-center">
            <p>
                Você tem certeza que deseja deletar o produto? <br /> Essa é uma ação <strong><u>irreversível</u></strong>.
            </p>
            <div className="flex justify-evenly gap-5">
                <button
                    onClick={handleContinueButtonClick}
                    className={buttonStyle("continue")}
                >
                    Sim
                </button>
                <button
                    onClick={handleCancelButtonClick}
                    className={buttonStyle("cancel")}
                >
                    Não
                </button>
            </div>
        </div>
    );
}

export function EditProductAdminPage() {
    const { id } = useParams();
    const { getById, product } = useProducts();
    const [formData, setFormData] = useState({
        name: "",
        category: "",
        code: "",
        description: "",
        price: 0,
        quantity: 0,
        images: new Array()
    });
    const [hasUnsavedData, setHasUnsavedData] = useState(false);
    const { openModal, closeModal } = useModal();
    const { setIsLoading } = useContext(LoaderContext);
    const navigate = useNavigate();

    useUnsavedChanges(
        hasUnsavedData,
        "Você tem alterações não salvas. Tem certeza que deseja sair?"
    );

    const verifyHasNewData = useCallback(function() {
        if (
            product.nome !== formData.name ||
            product.categoria.tipo !== formData.category ||
            product.codigo !== formData.code ||
            product.descricao !== formData.description ||
            product.preco !== formData.price ||
            product.qtdEstoque !== formData.quantity ||
            !areImagesEqual(product.imagens, formData.images)
        ) {
            return true;
        }
        return false;
    }, [formData, product]);

    useEffect(function() {
        if (id) {
            getById(id);
        }
    }, [id, getById]);

    useEffect(function() {
        if (product) {
            setFormData({
                name: product.nome || "",
                category: product.categoria?.tipo || "",
                code: product.codigo || "",
                description: product.descricao || "",
                price: product.preco || 0,
                quantity: product.qtdEstoque || 0,
                images: product.imagens || new Array()
            });
        }
    }, [product]);

    useEffect(function() {
        if (!product) {
            return;
        };

        setHasUnsavedData(verifyHasNewData());
    }, [formData, product, verifyHasNewData]);

    function areImagesEqual(a, b) {
        return JSON.stringify(a) === JSON.stringify(b);
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (!hasUnsavedData) {
            return;
        }

        if (hasNewImages) {
            await uploadImage();
        }
    }

    function hasNewImages() {
        // TODO: Not Implemented Yet.
        return true;
    }

    async function uploadImage() {
        setIsLoading(true);

        const formDataToBeSent = new FormData();
        formData.images.forEach((imgFile) => formDataToBeSent.append('images[]', imgFile));

        try {
            const res = await fetch(
                `http://localhost:8000/api/produtos/${product.id}/imagens`,
                {
                    method: 'POST',
                    body: formDataToBeSent
                }
            );

            await res.json();
            setHasUnsavedData(false);
        } catch (error) {
            console.error("[ERROR]: An error ocurred while trying to perfome POST request, ", error);
        } finally {
            setIsLoading(false);
        }
    }

    function handleChange(e) {
        const { name, value, type } = e.target;

        setFormData(function(previousState) {
            if (Array.isArray(type)) {
                const currentArray = previousState[name] || [];
                return { ...previousState, [name]: [...currentArray, value] };
            }

            return {
                ...previousState,
                [name]: value
            };
        });
    }

    function handleDeleteButtonClick() {
        openModal(
            <MyCustomModal
                closeModal={closeModal}
                productId={product?.id}
                navigate={navigate}
            />,
            { showCloseButton: false }
        );
    }

    return (
        <div className="h-full overflow-hidden bg-gray-50 cursor-default select-none"> {/* 1️⃣ ocupa a tela toda e bloqueia scroll */}
            <h1 className="p-4">Admin Page</h1>

            <div className="flex h-full">
                <NavigationMenu />
                <form onSubmit={handleSubmit} className="border rounded-sm w-screen h-[90%] mx-5 bg-white">
                    <div className="p-5 h-full">
                        <div className="flex gap-1 mb-3">
                            <p className="text-gray-200">Home &gt;</p>
                            <Link to="/admin" className="text-gray-200 hover:text-gray-300">Todos os produtos &gt;</Link>
                            <p>Detalhes do produto</p>
                        </div>
                        <div className="flex justify-between h-full">
                            <div className="w-1/2"> {/* Inputs left-side*/}
                                <div className="flex flex-col gap-5 h-full">
                                    <div className="flex flex-col">
                                        <label>Nome</label>
                                        <input
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="border border-2 rounded-sm w-5/6 p-1"
                                        />
                                    </div>

                                    <div className="flex">
                                        <div className="flex flex-col">
                                            <label>Categoria</label>
                                            <input
                                                name="category"
                                                value={formData.category}
                                                onChange={handleChange}
                                                className="border border-2 rounded-sm w-5/6 p-1"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <label>Código</label>
                                            <input
                                                name="code"
                                                value={formData.code}
                                                onChange={handleChange}
                                                className="border border-2 rounded-sm w-5/6 p-1"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-1 w-5/6">
                                        <label className="text-sm font-medium text-gray-700">Descrição</label>
                                        <textarea
                                            name="description"
                                            value={formData.description}
                                            placeholder="Produto sem descrição."
                                            onChange={handleChange}
                                            rows={20}
                                            className="border border-gray-300 rounded-md p-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="w-1/2">  {/* Inputs right-side (images) */}
                                <p>Imagens do produto</p>
                                <div className="flex flex-col h-5/6">
                                    <div className="h-1/3 mb-20">
                                        <div className="flex gap-2 items-center w-full h-full">
                                            <div className="w-2/3 flex h-full gap-2">
                                                <ImageCard
                                                    image={formData.images?.[0]?.url}
                                                    handleChange={handleChange}
                                                    size="M"
                                                />
                                                <ImageCard
                                                    image={formData.images?.[1]?.url}
                                                    handleChange={handleChange}
                                                    size="M"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-2 h-full justify-between w-1/3">
                                                <ImageCard
                                                    image={formData.images?.[2]?.url}
                                                    handleChange={handleChange}
                                                    size="P"
                                                />
                                                <ImageCard
                                                    image={formData.images?.[3]?.url}
                                                    handleChange={handleChange}
                                                    size="P"
                                                />
                                            </div>
                                        </div>
                                        <p>Você precisa adicionar pelo menos uma imagem. Preste atenção à qualidade das imagens que adiciona.</p>
                                    </div>

                                    <div className="h-1 /2"> {/* Infos adicionais */}
                                        <div className="flex justify-between">
                                            <div className="flex flex-col">
                                                <label>Preço</label>
                                                <input
                                                    name="price"
                                                    value={formData.price}
                                                    onChange={handleChange}
                                                    className="border border-2 rounded-sm p-1"
                                                />
                                            </div>
                                            <div className="flex flex-col">
                                                <label>Valor de Custo (TODO: Ajustar)</label>
                                                <input
                                                    value={formData.price}
                                                    onChange={handleChange}
                                                    className="border border-2 rounded-sm p-1"
                                                />
                                            </div>
                                            <div className="flex flex-col">
                                                <label>Quantidade em Estoque</label>
                                                <input
                                                    name="quantity"
                                                    value={formData.quantity}
                                                    onChange={handleChange}
                                                    className="border border-2 rounded-sm p-1"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-end gap-5 p-5"> {/* Botões Controle */}
                                    <button
                                        type="submit"
                                        className={`p-3 rounded-sm transition-colors duration-300
                                                ${hasUnsavedData
                                                ? 'bg-green-300 hover:bg-green-400'
                                                : 'bg-gray-300 cursor-not-allowed'
                                            }`}

                                    >
                                        Salvar Alterações
                                    </button>
                                    <button
                                        type="button"
                                        className="p-3 rounded-sm bg-red-300 hover:bg-red-400"
                                        onClick={handleDeleteButtonClick}
                                    >
                                        Deletar produto
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div >
    );
}

