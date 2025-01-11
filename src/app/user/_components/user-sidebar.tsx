'use client'
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
import ManageProfileAvatar from "@/components/manage-profile-avatar"
import { usePathname } from "next/navigation"


  
  export default function UserSidebar() {

    const userNavLinks=[
        {
          title: "New Applications",
          url: "/user/applications/new",
          label:'applications'
        },
        {
          title: "Active Applications",
          url: "/user/applications/active",
          label:'applications'
        },
        {
          title: "Rejected Applications",
          url: "/user/applications/rejected",
          label:'applications'
        },
        {
          title: "Company",
          url: "/user/maintenance/company",
          label:'maintenance'
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
            url: "/user/reports/transaction-history",
            label:'reports'
        },
    
    
      ]


      const url=usePathname()


    return (
      <Sidebar className="list-none">
        <SidebarHeader className="  px-4">
           <AppLogo/>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup />
            
                <SidebarMenuItem  >
                    <SidebarMenuButton asChild>
                        <a href="/user" className={`${url == '/user' && 'font-bold' }`}>Dashboard</a>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            
            <SidebarGroupLabel className="flex items-center gap-1 border-b">
              Applications
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {
                    userNavLinks.filter(link => link.label === 'applications').map((link) => (
                      <SidebarMenuItem key={link.title} className={`${url === link.url ? 'font-bold' : ''}`}>
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
                      <SidebarMenuItem key={link.title} className={`${url === link.url ? 'font-bold' : ''}`}>
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
                      <SidebarMenuItem key={link.title} className={`${url === link.url ? 'font-bold' : ''}`}>
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
                      <SidebarMenuItem key={link.title} className={`${url === link.url ? 'font-bold' : ''}`}>
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
        <SidebarFooter className="bg-slate-200">
            <ManageProfileAvatar avator={
                {
                    image:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
                    email:"b2V2l@example.com"
                }
            }/>
        </SidebarFooter>
      </Sidebar>
    )
  }
  