import './styles/main.css';
import Logo from './assets/logoNLW.svg';
import { MagnifyingGlassPlus } from 'phosphor-react';

function App() {
  return (
    <div className='max-w-[1440px] mx-auto flex flex-col items-center m-20'>
      <img src={Logo} alt="NLW logo" />
      <h1 className='text-[64px] text-white font-black mt-20'>Seu <span className='bg-nlw-gradient text-transparent bg-clip-text'>duo</span> está aqui.</h1>
      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a href="" className='relative rouded-lg'>
          <img src='/gameCover.png' alt="game cover" />
          <div className='w-full pt-16 pb-4 px-4 bg-gameInfo-grad absolute bottom-0 left-0 right-0 rounded-b-lg'>
            <strong className='font-bold text-white block'>Game Name</strong>
            <span className='text-zinc-300 text-sm'>X Anúncios</span>
          </div>
        </a>
        <a href="" className='relative rouded-lg'>
          <img src='/gameCover.png' alt="game cover" />
          <div className='w-full pt-16 pb-4 px-4 bg-gameInfo-grad absolute bottom-0 left-0 right-0 rounded-b-lg'>
            <strong className='font-bold text-white block'>Game Name</strong>
            <span className='text-zinc-300 text-sm'>X Anúncios</span>
          </div>
        </a>
        <a href="" className='relative rouded-lg'>
          <img src='/gameCover.png' alt="game cover" />
          <div className='w-full pt-16 pb-4 px-4 bg-gameInfo-grad absolute bottom-0 left-0 right-0 rounded-b-lg'>
            <strong className='font-bold text-white block'>Game Name</strong>
            <span className='text-zinc-300 text-sm'>X Anúncios</span>
          </div>
        </a>
        <a href="" className='relative rouded-lg'>
          <img src='/gameCover.png' alt="game cover" />
          <div className='w-full pt-16 pb-4 px-4 bg-gameInfo-grad absolute bottom-0 left-0 right-0 rounded-b-lg'>
            <strong className='font-bold text-white block'>Game Name</strong>
            <span className='text-zinc-300 text-sm'>X Anúncios</span>
          </div>
        </a>
        <a href="" className='relative rouded-lg'>
          <img src='/gameCover.png' alt="game cover" />
          <div className='w-full pt-16 pb-4 px-4 bg-gameInfo-grad absolute bottom-0 left-0 right-0 rounded-b-lg'>
            <strong className='font-bold text-white block'>Game Name</strong>
            <span className='text-zinc-300 text-sm'>X Anúncios</span>
          </div>
        </a>
        <a href="" className='relative rouded-lg'>
          <img src='/gameCover.png' alt="game cover" />
          <div className='w-full pt-16 pb-4 px-4 bg-gameInfo-grad absolute bottom-0 left-0 right-0 rounded-b-lg'>
            <strong className='font-bold text-white block'>Game Name</strong>
            <span className='text-zinc-300 text-sm'>X Anúncios</span>
          </div>
        </a>
      </div>

      <div className='mt-8 pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden'>
        <div className='bg-[#2A2634] px-8 py-6 rounded-lg flex justify-between items-center'>
          <div>
            <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
            <span className='text-zinc-400 block'>Publique um anúncio para encontrar novos players!</span>
          </div>
          <button className='py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex items-center gap-3'>
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
