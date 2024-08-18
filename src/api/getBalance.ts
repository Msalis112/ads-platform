import TonRequest from "@/utils/tonRequest";

// 获取余额
export function getAddressBalance(address: string): Promise<{ ok: boolean, result: string }> {
    return TonRequest.get('/getAddressBalance', { params: { address } })
}