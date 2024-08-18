import { useState, useEffect } from 'react'
import { useTonAddress } from '@tonconnect/ui-react'
import { getAddressBalance } from '@/api/getBalance'
import { BigNumber } from 'bignumber.js'


const useBalance = () => {
    const address = useTonAddress()
    const [balance, setBalance] = useState<string>()
    const [loading, setLoading] = useState<boolean>(false)
    useEffect(() => {
        if (!address) return
        setLoading(true)
        getAddressBalance(address).then(res => {
            const bignumber = new BigNumber(res.result)
            const value = bignumber.shiftedBy(-9).toString()
            setBalance(value)
            setLoading(false)
        })
    }, [address])

    return { loading, balance, address }
}

export default useBalance;