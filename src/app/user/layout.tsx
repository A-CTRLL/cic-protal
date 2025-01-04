import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from "@/components/app-sidebar"
import UserSidebar from "./_components/user-sidebar"




export default function Layout({ children }: { children: React.ReactNode }) {

  const endNavLinks=[
    {
      title: "Construction Firm Regestration",
      url: "/user/firm-registration",
      label:'applications'
    },
    {
      title: "Project Regestration",
      url: "/user/project-registration",
      label:'applications'
    },


  ]
  return (
    <SidebarProvider>
      <UserSidebar/>
      <main>
        {/* <SidebarTrigger /> */}
        {children}
      </main>
    </SidebarProvider>
  )
}
