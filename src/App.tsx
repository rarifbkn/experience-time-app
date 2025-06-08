import { ThemeProvider } from "@/components/theme-provider";
import { Routes } from "@/routes/routes";
import { Toaster } from "sonner";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Toaster position="top-right" />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
