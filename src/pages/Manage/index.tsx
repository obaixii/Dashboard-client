import {
    File,
    PlusCircle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Link } from "react-router-dom"
import { CardDemo, Dropdown, TableDemo } from "@/components"

export default function Manage() {
    return (
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            <div className="flex flex-col sm:gap-4 ">
                <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                    <Tabs defaultValue="all">
                        <div className="flex items-center">
                            <TabsList>
                                <TabsTrigger value="all">All</TabsTrigger>
                                <TabsTrigger value="in-stock">In Stock</TabsTrigger>
                                <TabsTrigger value="out-of-stock">Out of Stock</TabsTrigger>
                            </TabsList>
                            <div className="ml-auto flex items-center gap-2">
                                <Dropdown action="filter" label="Filter by" items={["Active", "Draft", "Archived"]} />
                                <Button size="sm" variant="outline" className="h-8 gap-1">
                                    <File className="h-3.5 w-3.5" />
                                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Export</span>
                                </Button>
                                <Button size="sm" className="h-8 gap-1" asChild>
                                    <Link to="/add-products">
                                        <PlusCircle className="h-3.5 w-3.5" />
                                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Add Product</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                        <TabsContent value="all">
                            <CardDemo title="Products" description=" Manage your products and view their sales performance." component={<TableDemo />} />
                        </TabsContent>
                    </Tabs>
                </main>
            </div>

        </main>
    )
}
