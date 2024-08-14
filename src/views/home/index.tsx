import { useTonConnectModal, useTonAddress, useTonConnectUI } from '@tonconnect/ui-react'
import { useInitData, useWebApp } from '@vkruglikov/react-telegram-web-app'
import { useEffect } from 'react'

const Home = () => {
    const { open, } = useTonConnectModal()
    const address = useTonAddress()
    const [tonConnectUI, _] = useTonConnectUI()

    const [initunsafedata, initdata] = useInitData()
    const webApp = useWebApp()
    const disconnect = () => {
        tonConnectUI.disconnect()
    }
    useEffect(() => {
        // webApp?.expand()
        webApp?.disableVerticalSwipes()
    }, [])
    const invite = () => {
        const link = 'https://t.me/share/url?url=https://t.me/orangekit_bot/OrangeShow?startapp=111111111111'

        webApp.openTelegramLink(link)
    }
    return <div className='h-full'>
        <div>Open Wallet:<p className='whitespace-pre-wrap'>{address}</p></div>
        <div>
            运行平台：{webApp.platform}
            运行平台：{webApp.version}
        </div>
        <div onClick={invite}>Invite</div>
        参数：{JSON.stringify(initunsafedata?.start_param)}
        <p className='whitespace-pre-wrap'>
            {JSON.stringify(initunsafedata?.user)}
        </p>
        {
            tonConnectUI.connected ? <div onClick={disconnect}>断开</div>
                : <div onClick={open}>连接钱包</div>
        }

    </div>
}

export default Home;