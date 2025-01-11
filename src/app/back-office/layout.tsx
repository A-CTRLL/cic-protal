import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from "@/components/app-sidebar"
import BackOfficeSidebar from "./_components/back-office-sidebar"



function Header(){
  return (
    <div className="h-16 w-full drop-shadow-lg bg-white">
      
    </div>
  )
}

export default function Layout({ children }: { children: React.ReactNode }) {

  
  return (
    <SidebarProvider>
      <BackOfficeSidebar/>
      <main className="w-full bg-slate-100">
        {/* <SidebarTrigger /> */}
        <Header/>
        {children}
      </main>
    </SidebarProvider>
  )
}
