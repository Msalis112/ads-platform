import { useState } from "react"
import Button from "../Button"
import Drawer from "../Drawer"

const Wallet = () => {

    const [open, setOpen] = useState(false)
    return <>
        <Button onClick={() => { setOpen(true) }}>Wallet</Button>
        <Drawer open={open} onClose={() => { setOpen(false) }} >
            <p>dddddddddddddddddddddddddddddd</p>
            <p>dddddddddddddddddddddddddddddd</p>
            <p>dddddddddddddddddddddddddddddd</p>
            <p>dddddddddddddddddddddddddddddd</p>
            <p>dddddddddddddddddddddddddddddd</p>
            <p>dddddddddddddddddddddddddddddd</p>
        </Drawer>
    </>
}

export default Wallet;