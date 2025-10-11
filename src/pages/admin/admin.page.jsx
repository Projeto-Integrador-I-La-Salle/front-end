import { NavigationMenu } from "./components/NavigationMenu.component";

export function AdminPage() {
    return (
        <div>
            <h1>Admin Page</h1>
            <div className="border rounded-sm w-[15%] h-[350px] p-3">
                <p>Navegação</p>

                <NavigationMenu />
            </div>
        </div>
    );
}

