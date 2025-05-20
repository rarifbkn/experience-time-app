import { ModeToggle } from "../components/mode-toggle";

interface AuthLayoutProps {
  children: React.ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center justify-end h-1/12 p-4">
        <ModeToggle />
      </div>
      <div className="container flex items-center justify-center flex-1">
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
