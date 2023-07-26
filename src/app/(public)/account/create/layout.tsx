export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <h3>New Account</h3>
      {children}
    </>
  )
}
