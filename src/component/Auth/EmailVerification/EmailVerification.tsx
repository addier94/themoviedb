import './EmailVerification.css';
import { BiError } from 'react-icons/bi';

const EmailVerification = () => (
  <div className="LoginView bg-gray3-main max-w-sm w-full px-8 h-[300px] m-auto">
    <h6 className="bg-yellow-main flex justify-center relative mb-16">
      <span className="absolute bg-yellow-main px-12 py-3 -mt-[8px] rounded-sm">Email Verification</span>
    </h6>
    <BiError className="text-red-600 mx-auto w-20 h-20 mt-20" />
    <p className="text-red-500 text-2xl text-center">Please Check your email for verify your account</p>
  </div>
);

export default EmailVerification;
