import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='bg-slate-200 mb-8 py-4'>
        <div className='container mx-auto flex justify-center'>
          <div>
            <Link href="/">
              <h1 className="text-black font-roboto text-5xl mb-2">LUKE 10X</h1>
              <span className="block text-center text-gray-500 text-xxs block">FULLSTACK DEVELOPER & CODE INSTRUCTOR</span>  
            </Link>
          </div>
          <span className='mx-auto'>{/* -- header :: nothing for now -- */}</span>{' '}
        </div>
      </header>
      <main className='container mx-auto flex-1'>{children}</main>
      <footer className='bg-slate-200 mt-8 py-4'>
        <div className='container mx-auto flex justify-center'>
          &copy; 2023 Luke 10X
        </div>
      </footer>
    </div>
  );
} 