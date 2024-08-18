import { useState } from "react"
import Button from "../Button"
import Drawer from "../Drawer"

const Setting = () => {

    const [open, setOpen] = useState(false)
    return <>
        <Button onClick={() => { setOpen(true) }}>Setting</Button>
        <Drawer open={open} onClose={() => { setOpen(false) }} >
            <p>settingsettingsettingsettingsettingsetting</p>
            <p>settingsettingsettingsettingsettingsetting</p>
            <p>settingsettingsettingsettingsettingsetting</p>
            <p>settingsettingsettingsettingsettingsetting</p>
            <p>settingsettingsettingsettingsettingsetting</p>
            <p>settingsettingsettingsettingsettingsetting</p>
            <p>settingsettingsettingsettingsettingsetting</p>
            <p>settingsettingsettingsettingsettingsetting</p>
        </Drawer>
    </>
}

export default Setting;