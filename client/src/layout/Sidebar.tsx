import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Menu, Search, ChevronsRight, List, StickyNote, Plus, Settings } from "lucide-react"

export default function Sidebar(){
    return (
        <aside className="col-span-2 p-4 rounded-s-lg rounded-bl-lg bg-white shadow flex flex-col">
            <div className="flex justify-between">
                <h3 className="font-semibold text-lg">Menu</h3>
                <Button variant="ghost">
                    <Menu/>
                </Button>
            </div>
            <div className="p-2.5 mb-4 flex gap-2 items-center">
                <Search />
                <Input className="" name="search-query" placeholder="Buscar"/>
            </div>
            <Separator />
            <div className="mt-4">
                <h4 className="font-semibold">Tarefas</h4>
                <Button variant="ghost" className="w-full justify-between">
                    <div className="flex items-center gap-2">
                        <ChevronsRight size={16}/>
                        <span className="text-sm font-normal">Próximas</span>
                    </div>
                    <span className="w-4 h-4 bg-slate-200 rounded-full flex items-center justify-center text-xs">9</span>
                </Button>
                <Button variant="ghost" className="w-full justify-between">
                    <div className="flex items-center gap-2">
                        <List size={16}/>
                        <span className="text-sm font-normal">Hoje</span>
                    </div>
                    <span className="w-4 h-4 bg-slate-200 rounded-full flex items-center justify-center text-xs">2</span>
                </Button>
                <Button variant="ghost" className="w-full justify-between">
                    <div className="flex items-center gap-2">
                        <StickyNote size={16}/>
                        <span className="text-sm font-normal">Notas Adesivas</span>
                    </div>
                    <span className="w-4 h-4 bg-slate-200 rounded-full flex items-center justify-center hidden text-xs">1</span>
                </Button>
            </div>
            <div className="mt-4">
                <h4 className="font-semibold">Listas</h4>
                <Button variant="ghost" className="w-full justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-md bg-red-300"></div>
                        <span className="text-sm font-normal">Pessoal</span>
                    </div>
                    <span className="w-4 h-4 bg-slate-200 rounded-full flex items-center justify-center text-xs">3</span>
                </Button>
                <Button variant="ghost" className="w-full justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-md bg-emerald-300"></div>
                        <span className="text-sm font-normal">Trabalho</span>
                    </div>
                    <span className="w-4 h-4 bg-slate-200 rounded-full flex items-center justify-center text-xs">5</span>
                </Button>
                <Button variant="ghost" className="w-full mt-2 justify-between">
                    <div className="flex items-center gap-2">
                        <Plus size={16}/>
                        <span className="text-sm font-normal">Nova Lista</span>
                    </div>
                </Button>
            </div>
            <div className="mt-4">
                <h4 className="font-semibold">Tags</h4>
                <div className="w-full mt-2 flex gap-2">
                    <Badge>Tag 1</Badge>
                    <Badge>Tag 2</Badge>
                    <Badge>Tag 3</Badge>
                </div>
            </div>
            <div className="mt-auto">
                <Button variant="ghost" className="w-full mt-2 justify-between">
                    <div className="flex items-center gap-2">
                        <Settings size={16}/>
                        <span className="text-sm font-normal">Configurações</span>
                    </div>
                </Button>
            </div>
        </aside>
    )
}