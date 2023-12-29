import Sidebar from "./sidebar.tsx";
import Content from "./content.tsx";

export default function Body({children}) {
    return <div className="body">
        <Sidebar></Sidebar>
        <Content>{children}</Content>
    </div>
}
