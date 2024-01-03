import AatCategory from "../pages/aatCategory.tsx";
import {createBrowserRouter} from "react-router-dom";
import SpecialHandlingUser from "../pages/specialHandlingUser.tsx";
import SelectAllTransferList from "../pages/TransferList.tsx";
import App from "../App.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/aat",
                element: <AatCategory/>
            },
            {
                path: "/list",
                element: <SelectAllTransferList/>
            },
            {
                path: "/user",
                element: <SpecialHandlingUser/>
            }
        ]
    },

]);
export default router;
