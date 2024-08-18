import { useTonConnectModal, useTonConnectUI } from '@tonconnect/ui-react'
import Avatar from '@/component/Avatar'
import { useInitData, useWebApp } from '@vkruglikov/react-telegram-web-app'
import useBalance from '@/hooks/useBalance'
import Wallet from '@/component/Wallet'
import Setting from '@/component/Setting'
import { useMemo } from 'react'

const User = () => {
    const { balance, address } = useBalance()
    const { open, } = useTonConnectModal()
    const [tonConnectUI, _] = useTonConnectUI()
    const [initunsafedata] = useInitData()
    const webApp = useWebApp()
    const disconnect = () => {
        tonConnectUI.disconnect()
    }
    const invite = () => {
        const link = 'https://t.me/share/url?url=https://t.me/orangekit_bot/OrangeShow?startapp=111111111111'
        webApp.openTelegramLink(link)
    }

    const username = useMemo(() => {
        return initunsafedata?.user?.first_name + ' ' + initunsafedata?.user?.last_name
    }, [initunsafedata])

    return <div className='h-full bg-full-home'>
        <div className='p-5 flex justify-between'>
            <Avatar name={username} />
            <div>
                <Setting />
                <Wallet />
            </div>
        </div>
        <div>Open Wallet:<p className='whitespace-pre-wrap'>{address}</p></div>
        <div>余额：{balance}</div>
        <div onClick={invite}>Invite</div>
        参数：{JSON.stringify(initunsafedata?.start_param)}
        {
            tonConnectUI.connected ? <div onClick={disconnect}>断开</div>
                : <div onClick={open}>连接钱包</div>
        }
    </div>
}

export default User;