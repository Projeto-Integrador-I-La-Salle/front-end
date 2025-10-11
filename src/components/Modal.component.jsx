export function Modal({ children, isOpen }) {
  return (
    <div className="w-scree h-screen relative">
      {isOpen &&
        <>
          <div className="fixed inset-0 bg-black bg-opacity-10"></div>
          <div className="border rounded-sm bg-gray-100 p-3
                      absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      z-20
                      w-[30%] fixed inset-0">
            <h1>This is a modal</h1>
            <p>Lorem ipsum</p>
          </div>
        </>
      }
      {children}
    </div>
  );
}

