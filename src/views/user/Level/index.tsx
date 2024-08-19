

const Level = () => {
    return <div className="px-4 text-white">
        <span className="inline-block mb-2 px-4 py-0.5 bg-gray-300/30 rounded-full">Sliver</span>
        <div className="w-full h-4 rounded-full p-[1px]  bg-gray-600 border-gray-500 border-0.5">
            <div className="w-1/2 h-full bg-blue-400 rounded-full"></div>
        </div>
        <div className="text-right">
            <span className="text-sm px-1">level</span>
            <span className="text-base">2</span><span className="px-1 text-sm">/</span><span className="text-sm">5</span>
        </div>
    </div>
}

export default Level;