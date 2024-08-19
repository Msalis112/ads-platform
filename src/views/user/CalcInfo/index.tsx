
import gold_coin_icon from '@/assets/gold-coin.png'

const CalcInfo = () => {
    return <div className="flex space-x-8 justify-center items-center text-white">
        <div>
            <div className="text-sm mb-1">Earn per tap</div>
            <div className='flex space-x-1 justify-center items-center'>
                <img className='w-7 h-7' src={gold_coin_icon} alt="" />
                <span >+2</span>
            </div>
        </div>
        <div>
            <div className="text-sm mb-1">Earn per tap</div>
            <div className='flex space-x-1 justify-center items-center'>
                <img className='w-7 h-7' src={gold_coin_icon} alt="" />
                <span >3.8M</span>
            </div>
        </div>
        <div>
            <div className="text-sm mb-1">Earn per tap</div>
            <div className='flex space-x-1 justify-center items-center'>
                <img className='w-7 h-7' src={gold_coin_icon} alt="" />
                <span >28.9K</span>
            </div>
        </div>
    </div>
}

export default CalcInfo