// The layout component is used to wrap all pages in the app. This is where you put components that are common to all pages, such as a header, footer, or navigation menu.
import Header from '@/components/Header'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      {/* Header */}
      <Header />

      {/* Navbar */}

      {/* SearchBox */}

        {children}
      </body>
    </html>
  )
}
