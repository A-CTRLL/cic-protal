import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from "@/components/app-sidebar"
import UserSidebar from "./_components/user-sidebar"




export default function Layout({ children }: { children: React.ReactNode }) {

  
  return (
    <SidebarProvider>
      <UserSidebar/>
      <main className="w-full">
        {/* <SidebarTrigger /> */}
        {children}
      </main>
    </SidebarProvider>
  )
}
