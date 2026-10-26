import { Link } from "react-router-dom"
import Header from "../components/Header"

export default function Home() {
  return (
    <div className="bg-home flex min-h-svh flex-col">
      <Header />
      <main className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col items-center justify-center gap-20 px-6 py-12 text-center md:px-10 xl:flex-row xl:items-end xl:justify-between xl:px-[165px] xl:pb-32 xl:text-left">
        <div className="xl:max-w-[540px]">
          <p className="font-condensed text-base tracking-[2.7px] text-lavender uppercase md:text-[20px] md:tracking-[3.38px] xl:text-[28px] xl:tracking-[4.75px]">
            So, you want to travel to
          </p>
          <h1 className="font-serif mt-4 text-[80px] leading-none text-white uppercase md:mt-6 md:text-[150px]">
            Space
          </h1>
          <p className="mx-auto mt-4 max-w-[444px] font-sans text-[15px] leading-[25px] text-lavender md:mt-6 md:text-base md:leading-7 xl:mx-0 xl:text-lg xl:leading-8">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of
            it. Well sit back, and relax because we’ll give you a truly out of
            this world experience!
          </p>
        </div>

        <Link
          to="/destination"
          className="group relative grid size-[150px] shrink-0 cursor-pointer place-items-center md:size-[242px] xl:size-[274px]"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-white/10 transition-transform duration-700 ease-out group-hover:scale-150"
          />
          <span className="font-serif relative z-10 grid size-full place-items-center rounded-full bg-white text-[20px] tracking-[1.25px] text-space uppercase md:text-[32px] md:tracking-[2px]">
            Explore
          </span>
        </Link>
      </main>
    </div>
  )
}
