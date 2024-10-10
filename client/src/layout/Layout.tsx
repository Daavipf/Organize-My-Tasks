import Sidebar from "@/layout/Sidebar.tsx"
import MainContent from "@/layout/MainContent.tsx"
import ItemContent from "@/layout/ItemContent.tsx"

export default function Layout(){
    return (
        <main className="w-screen h-screen bg-slate-50 grid grid-cols-12">
            <Sidebar/>
            <MainContent/>
            <ItemContent/>
        </main>
    )
}