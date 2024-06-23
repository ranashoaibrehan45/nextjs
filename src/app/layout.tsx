import { Metadata } from "next"
import Link from "next/link"
import "./styles.css"

export const metadata : Metadata = {
  title: {
    absolute: '',
    default: 'Next.js Learning',
    template: '%s | RoseSolution',
  },
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header 
          style={{
            backgroundColor: "lightblue",
            padding: "1rem",
          }}
        >
          <Link href="/">Home</Link>
          <p>Header</p>
        </header>

        {children}

        <footer
          style={{
            backgroundColor: "ghostwhite",
            padding: "1rem"
          }}
        >
          <p>Footer</p>
        </footer>
      </body>
    </html>
  )
}
