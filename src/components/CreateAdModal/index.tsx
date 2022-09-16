import * as Checkbox from '@radix-ui/react-checkbox';
import * as Dialog from '@radix-ui/react-dialog';
import * as Select from '@radix-ui/react-select';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { CaretDown, Check, GameController } from 'phosphor-react';
import { FormEvent, useEffect, useState } from 'react';
import instance from '../../connection';
import { Input } from '../Form';

interface Game {
    id: string;
    title: string;
}

export function CreateAdModal() {
    const [games, setGames] = useState<Game[]>([]);
    const [value, setValue] = useState('');
    const [useVoiceChat, setUseVoiceChat] = useState(false);
    const [weekDays, setWeekDays] = useState<string[]>([]);

    const handleCreateAd = async (e: FormEvent) => {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);
        const data = Object.fromEntries(formData);
        const formatedWeekDays = weekDays.join(', ');
        const selectedGame = games.find((item) => {
            return item.title === data.game;
        })

        if (!data.name || !data.yearsPlaying || !data.discord || !weekDays.length || !data.hourStart || !data.hourEnd) return;

        try {
            await instance.post(`/games/${selectedGame.id}/ads`, {
                name: data.name,
                yearsPlaying: Number(data.yearsPlaying),
                discord: data.discord,
                weekDays: formatedWeekDays,
                hourStart: data.hourStart,
                hourEnd: data.hourEnd,
                useVoiceChat
            });
            alert('Anúncio criado com sucesso.');
        } catch (error) {
            console.log(error);
            alert('Erro ao criar o anúncio.');
        }
    }

    const loadGames = async () => {
        const { data } = await instance.get('/games');
        setGames(data);
    }

    useEffect(() => {
        loadGames()
    }, []);

    return (
        <Dialog.Portal>
            <Dialog.Overlay className='bg-black/60 inset-0 fixed' />
            <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg'>
                <Dialog.Title className='font-black'>
                    Publique um anúncio
                    <form onSubmit={handleCreateAd} className='mt-8 flex flex-col gap-4 font-semibold'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="game">Qual o game?</label>
                            <Select.Root onValueChange={setValue} name='game'>
                                <Select.Trigger className={`flex items-center justify-between bg-zinc-900 py-3 px-4 rounded text-sm ${!value && 'text-zinc-500'}`}>
                                    <Select.Value className='placeholder:text-zinc-500' placeholder='Selecione o game que deseja jogar' />
                                    <Select.Icon>
                                        <CaretDown size={24} />
                                    </Select.Icon>
                                </Select.Trigger>
                                <Select.Portal>
                                    <Select.Content className='py-3 px-4 rounded text-sm bg-zinc-900 text-white'>
                                        <Select.Viewport>
                                            {games.map((item) => {
                                                return (
                                                    <Select.Item value={item.title} key={item.title} className='cursor-pointer'>
                                                        <Select.ItemText>{item.title}</Select.ItemText>
                                                    </Select.Item>
                                                )
                                            })}
                                        </Select.Viewport>
                                    </Select.Content>
                                </Select.Portal>
                            </Select.Root>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label htmlFor="nickname">Seu nome (ou nickname)</label>
                            <Input name='name' id='nickname' className='w-[408]' type="text" placeholder='Como te chamam dentro do game?' />
                        </div>

                        <div className='grid grid-cols-2 gap-4'>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                                <Input name='yearsPlaying' className='w-48' id='yearsPlaying' type="text" placeholder='Tudo bem ser zero' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="discord">Qual o seu Discord?</label>
                                <Input name='discord' className='w-48' id='discord' type="text" placeholder='Usuario#0000' />
                            </div>
                        </div>

                        <div className='flex gap-6'>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="weekDays">Quando costuma jogar?</label>
                                <ToggleGroup.Root
                                    type='multiple'
                                    orientation='horizontal'
                                    className='grid grid-cols-4 gap-2'
                                    value={weekDays}
                                    onValueChange={setWeekDays}
                                >
                                    <ToggleGroup.Item
                                        value='1'
                                        title='sun'
                                        className={`w-8 h-8 rounded-md ${weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                        type='button'
                                    >
                                        D
                                    </ToggleGroup.Item>
                                    <ToggleGroup.Item
                                        value='2'
                                        title='mon'
                                        className={`w-8 h-8 rounded-md ${weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                        type='button'
                                    >
                                        S
                                    </ToggleGroup.Item>
                                    <ToggleGroup.Item
                                        value='3'
                                        title='tue'
                                        className={`w-8 h-8 rounded-md ${weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                        type='button'
                                    >
                                        T
                                    </ToggleGroup.Item>
                                    <ToggleGroup.Item
                                        value='4'
                                        title='wed'
                                        className={`w-8 h-8 rounded-md ${weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                        type='button'
                                    >
                                        Q
                                    </ToggleGroup.Item>
                                    <ToggleGroup.Item
                                        value='5'
                                        title='thu'
                                        className={`w-8 h-8 rounded-md ${weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                        type='button'
                                    >
                                        Q
                                    </ToggleGroup.Item>
                                    <ToggleGroup.Item
                                        value='6'
                                        title='fri'
                                        className={`w-8 h-8 rounded-md ${weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                        type='button'
                                    >
                                        S
                                    </ToggleGroup.Item>
                                    <ToggleGroup.Item
                                        value='7'
                                        title='sat'
                                        className={`w-8 h-8 rounded-md ${weekDays.includes('7') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                        type='button'
                                    >
                                        S
                                    </ToggleGroup.Item>
                                </ToggleGroup.Root>
                            </div>
                            <div className='flex flex-col gap-2 flex-1'>
                                <label htmlFor="hours">Qual horário do dia?</label>
                                <div className='grid grid-cols-2 gap-2'>
                                    <Input name='hourStart' className='w-20 font-semibold' id='hourStart' type="time" placeholder='De' />
                                    <Input name='hourEnd' className='w-20 font-semibold' id='hourEnd' type="time" placeholder='Até' />
                                </div>
                            </div>
                        </div>
                        <label className='mt-2 flex gap-2 text-sm items-center cursor-pointer'>
                            <Checkbox.Root
                                className='w-6 h-6 p-1 rounded bg-zinc-900'
                                checked={useVoiceChat}
                                onCheckedChange={() => {
                                    setUseVoiceChat(!useVoiceChat);
                                }}
                            >
                                <Checkbox.Indicator>
                                    <Check className='w-4
                                     h-4 text-emerald-400' />
                                </Checkbox.Indicator>
                            </Checkbox.Root>
                            Costumo me conectar ao chat de voz
                        </label>
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
        </Dialog.Portal >
    )
}