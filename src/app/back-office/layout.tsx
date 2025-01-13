import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from "@/components/app-sidebar"
import BackOfficeSidebar from "./_components/back-office-sidebar"
import { IoMdNotifications } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { RiLogoutBoxRFill } from "react-icons/ri";
import Link from "next/link";



function Header(){
  return (
    <div className="h-16 w-full drop-shadow-lg px-4 flex justify-between items-center bg-white">
        <h1 className="text-2xl font-bold  ">Construction Industry Council</h1>
        <div className="flex items-center gap-4">
            <Link href='/'>
               <IoMdNotifications />
               
            </Link>
            <Link href='/'> 
               <IoSettings />
            </Link>
            <Link href='/'>
               <RiLogoutBoxRFill/>
            </Link>
        </div>
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
