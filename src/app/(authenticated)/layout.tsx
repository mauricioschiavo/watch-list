import { Clock } from "@/components/clock/clock"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <h1>Logged</h1>
      <Clock />
      {children}
    </>
  )
}
