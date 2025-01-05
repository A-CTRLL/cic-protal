import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from "@/components/app-sidebar"
import BackOfficeSidebar from "./_components/back-office-sidebar"




export default function Layout({ children }: { children: React.ReactNode }) {

  
  return (
    <SidebarProvider>
      <BackOfficeSidebar/>
      <main className="w-full">
        {/* <SidebarTrigger /> */}
        {children}
      </main>
    </SidebarProvider>
  )
}
