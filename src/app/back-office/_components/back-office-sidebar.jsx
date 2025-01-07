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


  
  export default function BackOfficeSidebar() {

    const userNavLinks=[
    
        {
            title: "Users",
            url: "/back-office/maintenance/users",
            label:'maintenance'
        },
        {
            title: "Settings",
            url: "/back-office/maintenance/settings",
            label:'maintenance'
        },
        {
            title: "Buidling Works Categories",
            url: "/back-office/maintenance/building-works-categories",
            label:'maintenance'
        },
        {
            title: "Mechanical Works Categories",
            url: "/back-office/maintenance/mechanical-works-categories",
            label:'maintenance'
        },
        {
            title: "Electrical Works Categories",
            url: "/back-office/maintenance/electrical-works-categories",
            label:'maintenance'
        },
        {
            title: "Civil Works Categories",
            url: "/back-office/maintenance/civil-works-categories",
            label:'maintenance'
        },
        {
            title: "Project Levy Payment Schedules",
            url: "/back-office/maintenance/project-levy-payment-schedules",
            label:'maintenance'
        },
        {
            title: "Previous Applications",
            url: "/back-office/reports/previous-applications",
            label:'reports'
        },
        {
            title: "Levy Assessment",
            url: "/back-office/reports/levy-assessment",
            label:'reports'
        },
        {
            title: "Projects Report",
            url: "/back-office/reports/projects-report",
            label:'reports'
        },
        {
            title: "Projects Registered Pivot",
            url: "/back-office/reports/projects-registered-pivot",
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
            
                <SidebarMenuItem className={`${url === '/back-office' && 'font-bold' }`}>
                    <SidebarMenuButton asChild>
                        <a href="/user">Active Applications</a>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            
            <SidebarGroupLabel className="flex items-center gap-1 border-b">
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
  