import Head from "next/head"

export function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Pokemon Nextjs Practice</title>
        <meta name="description" content="A little app to practice Nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-slate-600 py-10 text-center mb-10">
        <h1 className="text-amber-400 text-6xl font-bold">PokeDex</h1>
      </header>
      <main className="container mx-auto ">{children}</main>
      <footer className="bg-slate-600 py-10 text-center">
        <p className="text-xl text-amber-400">angelhpascual ©️ 2022</p>
      </footer>
    </div>
  )
}
