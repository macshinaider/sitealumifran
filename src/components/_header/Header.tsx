import Image from 'next/image'

export default function Header(){
    return (
        <header className=" flex w-full justify-center bg-slate-700">
            <Image src="/logo.png" alt='Logo' width={300} height={300}/>
        </header>
    )
}