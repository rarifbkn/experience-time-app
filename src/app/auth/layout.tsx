export default async function ({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md p-8">
          <h1 className="text-2xl font-bold mb-6">
            Aplicación de experiencias en el tiempo
          </h1>
          {children}
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2 bg-slate-100"></div>
    </div>
  );
}
