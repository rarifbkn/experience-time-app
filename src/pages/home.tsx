import HomeLayout from "@/layout/app-home-layout";

function Home() {
  return (
    <HomeLayout>
      <div className="flex flex-col h-screen">
        <div className="flex items-center justify-end h-1/12 p-4">
          
        </div>
        <div className="container flex items-center justify-center flex-1">
          Home
        </div>
      </div>
    </HomeLayout>
  );
}

export default Home;
