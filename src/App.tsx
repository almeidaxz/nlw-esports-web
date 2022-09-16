import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog'
import Logo from './assets/logoNLW.svg';
import CreateAd from './components/CreateAd';
import GameItem from './components/GameCover';
import instance from './connection';
import './styles/main.css';
import { CreateAdModal } from './components/CreateAdModal';

interface Game {
  id: string,
  title: string,
  bannerUrl: string,
  _count: {
    ads: number
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  const loadGames = async () => {
    const { data } = await instance.get('/games');
    setGames(data);
  }

  useEffect(() => {
    loadGames()
  }, [])

  return (
    <div className='max-w-[1440px] mx-auto flex flex-col items-center m-16'>
      <img src={Logo} alt="NLW logo" />
      <h1 className='text-[60px] text-white font-black mt-16'>Seu <span className='bg-nlw-gradient text-transparent bg-clip-text'>duo</span> está aqui.</h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        {games.map((game) => {
          return (
            <GameItem
              key={game.id}
              id={game.id}
              title={game.title}
              bannerUrl={game.bannerUrl}
              adsCount={game._count.ads}
            />
          )
        })}
      </div>

      <Dialog.Root>
        <CreateAd />
        <CreateAdModal />
      </Dialog.Root>

    </div >
  )
}

export default App