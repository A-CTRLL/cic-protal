import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"
import AppLogo from "@/components/app-logo"


  
  export default function UserSidebar() {

    const userNavLinks=[
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
        {
            title: "Project",
            url: "/user/maintenance/projects",
            label:'maintenance'
        },
        {
            title: "Transaction History",
            url: "/user/enquiries/transaction-history",
            label:'enquiries'
        },
        {
            title: "Active projects",
            url: "/user/reports/active-projects",
            label:'reports'
        },
        {
            title: "Completed projects",
            url: "/user/reports/completed-projects",
            label:'reports'
        },
        {
            title: "Transaction History",
            url: "/user/reports/completed-projects",
            label:'reports'
        },
    
    
      ]



    return (
      <Sidebar>
        <SidebarHeader className="  px-4">
           <AppLogo/>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup />
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                        <a href="/user/profile">Active Applications</a>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
            <SidebarGroupLabel className="flex items-center gap-1 border-b">
              Applications
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {
                    userNavLinks.filter(link => link.label === 'applications').map((link) => (
                      <SidebarMenuItem key={link.title}>
                        <SidebarMenuButton asChild>
                          <a href={link.url}>
                            {link.title}
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))
                }
              </SidebarMenu>
            </SidebarGroupContent>
            <SidebarGroupLabel className="flex items-center gap-1 border-b ">
              Maintenance
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {
                    userNavLinks.filter(link => link.label === 'maintenance').map((link) => (
                      <SidebarMenuItem key={link.title}>
                        <SidebarMenuButton asChild>
                          <a href={link.url}>
                            {link.title}
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))
                }
              </SidebarMenu>
            </SidebarGroupContent>
            <SidebarGroupLabel className="flex items-center gap-1 border-b ">
              Enquiries
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {
                    userNavLinks.filter(link => link.label === 'enquiries').map((link) => (
                      <SidebarMenuItem key={link.title}>
                        <SidebarMenuButton asChild>
                          <a href={link.url}>
                            {link.title}
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))
                }
              </SidebarMenu>
            </SidebarGroupContent>
            <SidebarGroupLabel className="flex items-center gap-1 border-b ">
              Reports
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {
                    userNavLinks.filter(link => link.label === 'reports').map((link) => (
                      <SidebarMenuItem key={link.title}>
                        <SidebarMenuButton asChild>
                          <a href={link.url}>
                            {link.title}
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))
                }
              </SidebarMenu>
            </SidebarGroupContent>
          <SidebarGroup />
          
        </SidebarContent>
        <SidebarFooter>

        </SidebarFooter>
      </Sidebar>
    )
  }
  