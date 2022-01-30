import { LoginView, RegisterView } from 'component/Auth';
import { Footer, Navbar } from 'component/common';
import { AuthModal } from 'component/common/Modal';
import { appSelector } from 'features/hooks';
import { FC } from 'react';
import { authModalViewT } from 'types/UiType';

interface Props {
  children: JSX.Element | JSX.Element[]
}

const ModalView: React.FC<{authModalView: string}> = ({ authModalView }) => (
  <AuthModal>
    {authModalView === authModalViewT.LOGIN_VIEW && <LoginView />}
    {authModalView === authModalViewT.SIGNUP_VIEW && <RegisterView />}
  </AuthModal>
);

const ModalUI: React.FC = () => {
  const { authModalView, authModal } = appSelector((state) => state.ui);
  return authModal ? (
    <ModalView authModalView={authModalView} />
  ) : null;
};

const MainLayout: FC<Props> = ({ children }) => (
  <>
    <Navbar />
    <ModalUI />
    <main className="min-h-[calc(100vh-12rem)] lg:min-h-[calc(100vh-5rem)] text-white p-4 max-w-screen-2xl mx-auto pt-32 lg:pt-24">
      {children}
    </main>
    <Footer />
  </>
);

export default MainLayout;
