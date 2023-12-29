import Header from "./header.tsx";
import Body from "./body.tsx";
import Footer from "./footer.tsx";

export default function Main({children}) {
    return <div className="main">
        <Header></Header>
        <Body>{children}</Body>
        <Footer></Footer>
    </div>
}
