import { Card } from "@/components/ui/card"

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
      <Card className="w-full max-w-md p-6 space-y-6 shadow-lg">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
          <p className="text-muted-foreground">
            Enter your credentials to access your account
          </p>
        </div>
        {children}
      </Card>
    </div>
  )
}
