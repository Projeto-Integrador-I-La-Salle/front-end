import { useState } from "react";

export function NavigationMenu() {
    const [sections, setSections] = useState([
        {
            label: 'Pedidos',
            expanded: false,
            subsections: []
        },
        {
            label: 'Produtos',
            expanded: false,
            subsections: [
                { label: 'Novo Produto' },
                { label: 'Gerenciar Produtos', 'href': '/admin/produtos' },
                { label: 'Importar Produtos' },
            ]
        },
        {
            label: 'Promoções',
            expanded: false,
            subsections: [
                { label: 'Nova Promoção' },
                { label: 'Gerenciar Promoções' },
            ]
        },
        {
            label: 'Clientes',
            expanded: false,
            subsections: []
        },
        {
            label: 'Configurações',
            expanded: false,
            subsections: []
        },
    ]);

    function handleSectionClick(clickedSection) {
        setSections(function(prevSections) {
            return prevSections.map(function(section) {
                return section.label === clickedSection.label
                    ? { ...section, expanded: !section.expanded }
                    : section
            });
        });
    }

    return (
        <div className="border rounded-sm w-[15%] h-[350px] p-3 ml-10 bg-white">
            <p>Navegação</p>
            <hr className="my-1" />

            <div className="flex flex-col gap-1 cursor-default select-none">
                {sections.map(section => (
                    <div
                        key={section.label}
                        draggable={false}
                        onDragStart={e => e.preventDefault()}
                        style={{ WebkitUserDrag: "none", userDrag: "none" }}
                        className="select-none"
                    >
                        <a
                            href="#"
                            className="hover:bg-red-300 p-1 block rounded transition-colors"
                            draggable={false}
                            onDragStart={e => e.preventDefault()}
                            onClick={function(e) {
                                e.preventDefault();
                                handleSectionClick(section);
                            }}
                        >
                            {section.label}
                        </a>

                        {section.expanded && section.subsections.length > 0 && (
                            <div className="flex flex-col ml-6 mt-1">
                                {section.subsections.map(function(subsection) {
                                    return (
                                        <a
                                            key={subsection.label}
                                            href={subsection.href || '#'}
                                            className="text-sm text-gray-700 hover:text-black transition-colors"
                                        >
                                            {subsection.label}
                                        </a>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

