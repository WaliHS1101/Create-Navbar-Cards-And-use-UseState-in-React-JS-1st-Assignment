import Cards from "./Cards";
import Navbar from "./Navbar";
import { Test1, Test2 } from "./Test1";

import BMW3M3 from "./img/BMW 3 M3.jpg"
import BMW5Series from "./img/BMW 5 Series.jpg"
import BMWM8 from "./img/BMW M8.jpg"
import BMWX3 from "./img/BMW X3.jpg"
import BMWX5 from "./img/BMW X5.jpg"
import BMWX6 from "./img/BMW X6.jpg"






let NavLinks = ["Home", "Service", "Contact", "About"]

let CardsImg = [
    { img: BMW3M3, name: "BMW 3 M3" },
    { img: BMW5Series, name: "BMW 5 Series" },
    { img: BMWM8, name: "BMW M8" },
    { img: BMWX3, name: "BMW X3" },
    { img: BMWX5, name: "BMW X5" },
    { img: BMWX6, name: "BMW X6" }
]

function App() {
    return (
        <>
            <Navbar NLinks={NavLinks} />
            <Cards Card={CardsImg} />
            <Test1 />
            <Test2 />
        </>
    )
}

export default App;