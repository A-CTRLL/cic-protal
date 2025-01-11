import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from "@/components/app-sidebar"
import UserSidebar from "./_components/user-sidebar"




export default function Layout({ children }: { children: React.ReactNode }) {

  
  return (
    <SidebarProvider>
      <UserSidebar/>
      <main className="w-full bg-slate-100">
        {/* <SidebarTrigger /> */}
        <Header/>
        {children}
      </main>
    </SidebarProvider>
  )
}

function Header(){
  return (
    <div className="h-16 w-full drop-shadow-lg bg-white">
      
    </div>
  )
}
