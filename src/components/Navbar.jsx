function Navbar({ page, onNavigate }) {
  return (
    <header className="border-b border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <button
          onClick={() => onNavigate('home')}
          className="flex w-fit items-center gap-3 text-left"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white">
            P
          </span>

          <span>
            <span className="block text-xl font-bold tracking-tight text-white">
              PayFlow
            </span>
            <span className="block text-xs text-slate-400">
              Personal finance
            </span>
          </span>
        </button>

        <nav className="flex flex-wrap gap-2">
          <button
            onClick={() => onNavigate('home')}
            className={`rounded-lg px-3 py-2 text-sm font-medium transition sm:px-4 ${
              page === 'home'
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            Overview
          </button>

          <button
            onClick={() => onNavigate('send')}
            className={`rounded-lg px-3 py-2 text-sm font-medium transition sm:px-4 ${
              page === 'send'
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}>
            Send Money
          </button>

          <button
            onClick={() => onNavigate('transactions')}
            className={`rounded-lg px-3 py-2 text-sm font-medium transition sm:px-4 ${
              page === 'transactions'
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            Transactions
          </button>

          <button
            onClick={() => onNavigate('analytics')}
            className={`rounded-lg px-3 py-2 text-sm font-medium transition sm:px-4 ${
              page === 'analytics'
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}>
            Analytics
           </button>
           </nav>
          </div>
          </header>
        )
       }
        export default Navbar