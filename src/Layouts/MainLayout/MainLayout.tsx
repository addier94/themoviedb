import { Footer, Navbar } from 'component/common';
import { FC } from 'react';

interface Props {
  children: JSX.Element | JSX.Element[]
}

const MainLayout: FC<Props> = ({ children }) => (
  <>
    <Navbar />
    <main className="min-h-[calc(100vh-12rem)] lg:min-h-[calc(100vh-5rem)] text-white p-4 max-w-screen-2xl mx-auto pt-32 lg:pt-24">
      {children}
    </main>
    <Footer />
  </>
);

export default MainLayout;
