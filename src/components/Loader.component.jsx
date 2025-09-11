export function Loader({ children, isLoading }) {
    return (
        <div className="w-screen h-screen relative">
            {isLoading && (
                <div className="fixed inset-0 flex items-center justify-center bg-white/80 z-50">
                    <div className="w-16 h-16 border-4 border-t-blue-500 border-gray-200 rounded-full animate-spin"></div>
                </div>
            )}
            {children}
        </div>
    );
}

