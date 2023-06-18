import './globals.css'
import MenuContextProvider from './contexts/mobileMenuContext'


export const metadata = {
  title: 'Welcome To Cryptous',
  description: 'Make better buisness with crypto currency. We offer users a fully operatinal long-term rental platform. It plans to leverage blockchain technology.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <MenuContextProvider>
      <body>{children}</body>
      </MenuContextProvider>
    </html>
  )
}
