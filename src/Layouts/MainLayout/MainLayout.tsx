import { Footer, Navbar } from 'component/common';
import { FC } from 'react';

interface Props {
  children: JSX.Element | JSX.Element[]
}

const MainLayout: FC<Props> = ({ children }) => (
  <>
    <Navbar />
    <main className="min-h-[calc(100vh-12rem)] lg:min-h-[calc(100vh-8.5rem)] text-white p-4 max-w-screen-2xl mx-auto">
      {children}
    </main>
    <Footer />
  </>
);

export default MainLayout;