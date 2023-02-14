// The layout component is used to wrap all pages in the app. This is where you put components that are common to all pages, such as a header, footer, or navigation menu.
import Header from '@/components/Header'
import './globals.css'
import Providers from './Providers'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      {/* In Next.js 13, it knows that the Provider component is a client side component while the Header/Navbar/SearchBox are server side components. */}
        <Providers>
          {/* Header */}
          <Header />

          {/* Navbar */}

          {/* SearchBox */}

            {children}

        </Providers>
      </body>
    </html>
  )
}
