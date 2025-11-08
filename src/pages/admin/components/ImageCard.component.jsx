import { useEffect, useRef, useState } from "react";

import ImageIcon from "../../../assets/icons/icon-image.png";


export function ImageCard({ size, image, handleChange }) {
    const [imgUrl, setImgUrl] = useState(image || "");
    const containerRef = useRef(null);

    useEffect(() => {
        setImgUrl(image || "");
    }, [image]);

    useEffect(function() {
        const container = containerRef.current;

        function handlePaste(e) {
            const items = e.clipboardData.items;

            for (let i = 0; i < items.length; i++) {
                const item = items[i];

                if (item.type.indexOf("image") !== -1) {
                    const blob = item.getAsFile();

                    const url = URL.createObjectURL(blob);
                    setImgUrl(url);

                    handleChange({
                        target: {
                            name: "images",
                            value: blob,
                            type: new Array()
                        }
                    });

                    break;
                }
            }
        }

        if (container) {
            container.addEventListener("paste", handlePaste);
        }

        return function() {
            if (container) {
                container.removeEventListener("paste", handlePaste);
            }
        };
    }, [handleChange]);

    if (imgUrl) {
        if (size === 'M') {
            return (
                <div className="flex items-center justify-center relative p-1 rounded-md group transition w-1/2">
                    <div className="
                        absolute inset-0
                        bg-transparent
                        group-hover:bg-black/10
                        rounded-md
                        transition-colors"
                    >
                    </div>
                    <img
                        src={imgUrl}
                        alt="Uploaded or pasted"
                        className="
                          relative z-10
                          rounded-md
                          duration-300
                          group-hover:scale-105"
                    />
                </div>
            );
        }
        if (size === 'P') {
            return (
                <div className="flex items-center justify-center relative p-1 rounded-md group transition h-1/2 w-full">
                    <div className="
                    absolute inset-0
                    bg-transparent
                    group-hover:bg-black/10
                    rounded-md
                    transition-colors
                ">
                    </div>
                    <img
                        src={imgUrl}
                        alt="Uploaded or pasted"
                        className="
                      relative z-10
                      rounded-md
                      duration-300
                        w-[35%]
                      group-hover:scale-105
                "/>
                </div>
            );
        }
    }

    return (
        <div
            ref={containerRef}
            tabIndex={0}
            onMouseEnter={function() {
                containerRef.current?.focus()
            }}
            onMouseLeave={function() {
                containerRef.current?.blur()
            }}
            className={`p-1 border border-dashed rounded-sm hover:bg-gray-100
                        hover:border-black text-xs select-none flex flex-col w-full h-full
                        items-center justify-center text-center gap-1 transition-colors duration-300 ease-in-out`}
        >
            <img src={ImageIcon} width={15} height={15} />
            <div className={`${size === "M" && "flex flex-col"}`}>
                <p className="inline">
                    Arraste a imagem aqui ou
                </p>
                <p className="pl-1 inline text-blue-700 hover:text-blue-500 hover:underline cursor-pointer">
                    clique para colar.
                </p>
            </div>
        </div >
    );
}

