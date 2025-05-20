import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { AppSideBar } from "@/components/app-side-bar";
import { ModeToggle } from "@/components/mode-toggle";

interface HomeLayoutProps {
  children: React.ReactNode;
}

function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <SidebarProvider>
      <AppSideBar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />

            {/* <Breadcrumb>
            <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href="#">
            Building Your Application
            </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
              <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
              </BreadcrumbList>
              </Breadcrumb> */}
          </div>
          <ModeToggle />
        </header>
        <main className="flex-1">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default HomeLayout;
