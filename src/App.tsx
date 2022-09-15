import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog'
import Logo from './assets/logoNLW.svg';
import CreateAd from './components/CreateAd';
import GameItem from './components/GameCover';
import instance from './connection';
import './styles/main.css';
import { GameController } from 'phosphor-react';
import { Input } from './components/Form/input';

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
        <Dialog.Portal>
          <Dialog.Overlay className='bg-black/60 inset-0 fixed' />
          <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg'>
            <Dialog.Title className='font-black'>
              Publique um anúncio
              <form action="" className='mt-8 flex flex-col gap-4 font-semibold'>
                <div className='flex flex-col gap-2'>
                  <label className='' htmlFor="game">Qual o game?</label>
                  <Input id='game' placeholder='Selecione o game que deseja jogar' />
                </div>

                <div className='flex flex-col gap-2'>
                  <label className='' htmlFor="nickname">Seu nome (ou nickname)</label>
                  <Input className='w-[408]' id='nickname' type="text" placeholder='Como te chamam dentro do game?' />
                </div>

                <div className='grid grid-cols-2 gap-4'>
                  <div className='flex flex-col gap-2'>
                    <label className='' htmlFor="yearsPlaying">Joga há quantos anos?</label>
                    <Input className='w-48' id='yearsPlaying' type="text" placeholder='Tudo bem ser zero' />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label className='' htmlFor="discord">Qual o seu Discord?</label>
                    <Input className='w-48' id='discord' type="text" placeholder='Usuario#0000' />
                  </div>
                </div>

                <div className='flex gap-6'>
                  <div className='flex flex-col gap-2'>
                    <label className='' htmlFor="weekDays">Quando costuma jogar?</label>
                    <div className='grid grid-cols-4 gap-2'>
                      <button
                        title='Domingo'
                        className='w-8 h-8 rouded bg-zinc-900'
                        type='button'
                      >
                        D
                      </button>
                      <button
                        title='Segunda'
                        className='w-8 h-8 rouded bg-zinc-900'
                        type='button'
                      >
                        S
                      </button>
                      <button
                        title='Terça'
                        className='w-8 h-8 rouded bg-zinc-900'
                        type='button'
                      >
                        T
                      </button>
                      <button
                        title='Quarta'
                        className='w-8 h-8 rouded bg-zinc-900'
                        type='button'
                      >
                        Q
                      </button>
                      <button
                        title='Quinta'
                        className='w-8 h-8 rouded bg-zinc-900'
                        type='button'
                      >
                        Q
                      </button>
                      <button
                        title='Sexta'
                        className='w-8 h-8 rouded bg-zinc-900'
                        type='button'
                      >
                        S
                      </button>
                      <button
                        title='Sábado'
                        className='w-8 h-8 rouded bg-zinc-900'
                        type='button'
                      >
                        S
                      </button>
                    </div>
                  </div>
                  <div className='flex flex-col gap-2 flex-1'>
                    <label className='' htmlFor="hours">Qual horário do dia?</label>
                    <div className='grid grid-cols-2 gap-2'>
                      <Input className='w-20' id='hourStart' type="time" placeholder='De' />
                      <Input className='w-20' id='hourEnd' type="time" placeholder='Até' />
                    </div>
                  </div>
                </div>
                <div className='mt-2 flex gap-2 text-sm '>
                  <Input type="checkbox" />
                  Costumo me conectar ao chat de voz
                </div>
                <footer className='flex gap-4 justify-end'>
                  <Dialog.Close
                    type='button'
                    className='bg-zinc-500 hover:bg-zinc-600 px-5 h-12 rounded-md'
                  >
                    Cancelar
                  </Dialog.Close>
                  <button className='flex items-center gap-3 px-5 rounded-md bg-violet-500 hover:bg-violet-600' type='submit'>
                    <GameController size={24} />
                    Encontrar duo
                  </button>
                </footer>
              </form>
            </Dialog.Title>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

    </div >
  )
}

export default App
