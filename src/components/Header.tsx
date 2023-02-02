export default function Header({ children }) {
  return (
    <header className="sticky flex flex-row items-center justify-between px-3 mx-20 transition-colors bg-gray-200 shadow-xl opacity-100 dark:bg-gray-700 rounded-xl top-5">
      <div className="transition hover:scale-125">
        <a href="/">
          <img src="/my-favicon.svg" alt="logo" className="object-contain w-12 h-12" />
        </a>
      </div>
      <nav className="flex py-2 list-none">{children}</nav>
    </header>
  )
}
