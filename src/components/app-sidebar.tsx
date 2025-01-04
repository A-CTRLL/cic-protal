import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
  } from "@/components/ui/sidebar"
import AppLogo from "./app-logo"
  
  export default function AppSidebar() {
    return (
      <Sidebar>
        <SidebarHeader className="  px-4">
           <AppLogo/>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup />
          <SidebarGroup />
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    )
  }
  