import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useLocation } from "react-router-dom"
import { navLinks } from "../data/navigation"
import { closeNav, toggleNav } from "../features/ui/uiSlice"

export default function Header() {
  const dispatch = useDispatch()
  const isNavOpen = useSelector((state) => state.ui.isNavOpen)
  const { pathname } = useLocation()

  useEffect(() => {
    dispatch(closeNav())
  }, [pathname, dispatch])

  useEffect(() => {
    document.body.style.overflow = isNavOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isNavOpen])

  return (
    <header className="relative z-30 flex items-center justify-between py-6 pr-6 pl-6 md:py-0 md:pr-0 md:pl-10 xl:pt-10 xl:pl-14">
      <NavLink to="/" className="shrink-0" aria-label="Home" end>
        <img
          src="/assets/shared/logo.svg"
          alt=""
          width="48"
          height="48"
          className="size-10 md:size-12"
        />
      </NavLink>

      <div
        className="pointer-events-none relative z-40 mt-0 mr-[-2rem] ml-16 hidden h-px min-w-8 flex-1 bg-white/25 xl:block"
        aria-hidden="true"
      />

      <button
        type="button"
        className="relative z-40 cursor-pointer md:hidden"
        aria-expanded={isNavOpen}
        aria-controls="primary-navigation"
        onClick={() => dispatch(toggleNav())}
      >
        <img
          src={
            isNavOpen
              ? "/assets/shared/icon-close.svg"
              : "/assets/shared/icon-hamburger.svg"
          }
          alt=""
          width={isNavOpen ? 20 : 24}
          height={21}
        />
        <span className="sr-only">{isNavOpen ? "Close menu" : "Open menu"}</span>
      </button>

      <nav
        id="primary-navigation"
        className={`${
          isNavOpen ? "translate-x-0" : "pointer-events-none translate-x-full"
        } fixed inset-y-0 right-0 z-30 w-[clamp(254px,53%,480px)] bg-white/5 pt-28 pr-8 pl-8 backdrop-blur-2xl transition-transform duration-300 md:pointer-events-auto md:static md:inset-auto md:flex md:h-24 md:w-auto md:translate-x-0 md:items-center md:bg-white/5 md:px-12 md:pt-0 md:backdrop-blur-xl xl:w-[55vw] xl:shrink-0 xl:px-16`}
      >
        <ul className="flex flex-col gap-8 md:h-full md:flex-row md:items-center md:gap-9 xl:w-full xl:justify-between">
          {navLinks.map((link) => {
            const active = pathname === link.to

            return (
              <li key={link.to} className="md:h-full">
                <NavLink
                  to={link.to}
                  end
                  className="group relative flex items-center gap-3 py-1 font-condensed text-base tracking-[2.7px] text-white uppercase transition-[gap] duration-300 hover:gap-4 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-white/70 md:h-full md:py-0"
                >
                  <span
                    className={`pointer-events-none absolute inset-x-0 bottom-0 h-[3px] origin-left transition-transform duration-300 ease-out ${
                      active
                        ? "scale-x-100 bg-white"
                        : "scale-x-0 bg-white/70 group-hover:scale-x-100 group-focus-visible:scale-x-100"
                    }`}
                  />
                  <span className="font-bold transition duration-300 group-hover:-translate-y-0.5 group-hover:drop-shadow-[0_0_8px_rgba(208,214,249,0.95)] group-focus-visible:-translate-y-0.5 group-focus-visible:drop-shadow-[0_0_8px_rgba(208,214,249,0.95)] md:hidden xl:inline">
                    {link.index}
                  </span>
                  <span className="inline-block tracking-[2.7px] transition-all duration-300 group-hover:tracking-[4px] group-focus-visible:tracking-[4px]">
                    {link.label}
                  </span>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
