import { useState } from "react"
import Button from "../Button"
import Drawer from "../Drawer"

import setting_icon from '@/assets/setting.png'

const Setting = () => {

    const [open, setOpen] = useState(false)
    return <>
        <Button icon={setting_icon} onClick={() => { setOpen(true) }}></Button>
        <Drawer open={open} onClose={() => { setOpen(false) }} placement="top">
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