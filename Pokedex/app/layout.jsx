export const metadata = {
  title: 'Pokedex',
  description: 'Search for any Pokemon',
}
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}