import Link from "next/link";
import {House} from 'lucide-react'

export default function Home() {
  return (
    <header className="fixed flex bg-gray-300 w-full h-28 p-2  justify-between items-center sm:h-20">
      <div>
      <House size={48} color="#386fc7" />
      </div>

      <div>
        <div>

          <ul className="flex gap-4 mr-10 ">
            <li>
              <Link href='/' className="text-[#386fc7] text-2xl sm:text-7Xl }">
              Home
              </Link>
            </li>
            <li>
              <Link href='/' className="text-[#386fc7] text-2xl">
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link href='/' className="text-[#386fc7] text-2xl">
              Suporte
              </Link>
            </li>

          </ul>

        </div>
      </div>
    </header>
  );
}
