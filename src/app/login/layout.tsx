import { Inter } from 'next/font/google'
import { Providers } from "@/app/providers";
const inter = Inter({ subsets: ['latin'] })
import NavbarHome from '@/components/shared/nav/NavbarHome'
import Footer from '@/components/shared/footer/Footer'
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>

        
        {children}
        <div>iciiiiferfe</div>
    </section>
  )
}