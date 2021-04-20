import { FC } from "react"
import Page404 from "./routes/404/404"
import Home from "./routes/Home/Home"

type RoutesTypes = {
    name: string,
    Component: FC<any>,
    path: string
}[]

const routes: RoutesTypes = [
    {
        name: "Home",
        Component: Home,
        path: "/"
    },
    {
        name: "404",
        Component: Page404,
        path: "*"
    }
]

export default routes