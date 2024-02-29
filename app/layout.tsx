import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import AuthProvider from '@/components/providers/AuthProvider'
import {ToastProvider} from '@/components/providers/toaster-provider'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: '함께 학습하는 라이브 스터디 플랫폼 | Lise',
  description:
    '실시간 공동 학습과 채팅 기능을 통해 혼자 공부할 때의 동기 부족 문제를 극복할 수 있습니다. 프로그래밍, 디자인, 마케팅 등 다양한 분야에서 지식을 넓히고 싶어하는 학습자들의 커뮤니티에 참여해보세요.',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/icons/icon.png',
        href: '/icons/icon.png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
