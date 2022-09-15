interface Game {
    id: string,
    title: string,
    bannerUrl: string,
    adsCount: number
}

export default function GameCover({ id, title, bannerUrl, adsCount }: Game) {
    return (
        <a href="" className='relative rouded-lg'>
            <img className='rounded-lg' src={bannerUrl} alt="game cover" />
            <div className='w-full pt-16 pb-4 px-4 bg-gameInfo-grad absolute bottom-0 left-0 right-0 rounded-b-lg'>
                <strong className='font-bold text-white block'>{title}</strong>
                <span className='text-zinc-300 text-sm'>
                    {adsCount} anúncio{adsCount > 1 ? 's' : ''}
                </span>
            </div>
        </a>
    )
}