import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Outlet } from "react-router-dom"

type tabTypes = {
    defaultValue: string;
    items: { label: string; value: string }[]
}
export default function TabsDemo({ defaultValue, items }: tabTypes) {
    return (
        <Tabs defaultValue={defaultValue}>
            <div className="flex items-center">
                <TabsList>
                    {
                        items.map((item) => (
                            <TabsTrigger value={item.value}>{item.label}</TabsTrigger>
                        ))
                    }
                </TabsList>
                <div className="ml-auto flex items-center gap-2">
                    <Outlet/>
                </div>
            </div>
            <TabsContent value="all">
                <Outlet />
            </TabsContent>
        </Tabs>
    )
}
