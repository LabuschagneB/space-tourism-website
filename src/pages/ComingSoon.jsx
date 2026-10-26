import Header from "../components/Header"

export default function ComingSoon({ title }) {
  return (
    <div className="flex min-h-svh flex-col bg-space">
      <Header />
      <main className="flex flex-1 items-center justify-center px-6 text-center">
        <h1 className="font-serif text-5xl text-white uppercase md:text-7xl">{title}</h1>
      </main>
    </div>
  )
}
