import gold_coin_icon from '@/assets/gold-coin.png'


const TotalCoin = () => {
    return <div className="flex my-4 justify-center space-x-2 items-center">

        <img src={gold_coin_icon} className='w-12 h-12' />
        <span className='text-5xl font-black text-white'>188 888</span>
    </div>
}

export default TotalCoin;