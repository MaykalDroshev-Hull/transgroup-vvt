import type { Metadata } from 'next'
import '@/index.css'

export const metadata: Metadata = {
  title: 'Trans Group VVT - International Logistics & Spedition',
  description: 'Temperature-controlled transport, warehousing, groupage and international spedition solutions in Bulgaria and Europe.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans text-gray-900 antialiased selection:bg-blue-100 selection:text-blue-900" style={{ backgroundColor: '#F7F8FA' }}>
        {children}
      </body>
    </html>
  )
}
