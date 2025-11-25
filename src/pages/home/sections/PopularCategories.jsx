import imgCapacete from '../../../assets/img-capacete.jpg';

export function PopularCategories() {
    const items = [
        {
            id: 1,
            label: 'Capacetes',
            image: imgCapacete
        },
        {
            id: 2,
            label: 'Acessórios',
            image: imgCapacete
        },
        {
            id: 3,
            label: 'Roupas',
            image: imgCapacete
        },
        {
            id: 4,
            label: 'Pneus',
            image: imgCapacete
        },
        {
            id: 5,
            label: 'Luvas',
            image: imgCapacete
        },
        {
            id: 6,
            label: 'Jaquetas',
            image: imgCapacete
        },
        {
            id: 7,
            label: 'Protetores',
            image: imgCapacete
        }
    ];

    return (
        <div className="mx-[10%] font-poppins">
            <h1 className="my-5 font-semibold text-3xl">Categorias Populares</h1>
            <div className="flex gap-10 select-none">
                {items?.map(item => {
                    return (
                        <div key={item.id} className="flex flex-col items-center shadow-md justify-center border w-[200px] h-[200px] rounded-md
                transition-colors duration-300 ease-in-out
                hover:border-[#8E1616] cursor-pointer
                hover:shadow-xl
                ">
                            <img src={item.image} className="w-[150px] h-[150px]" />
                            <p className="font-medium text-large">{item.label}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

