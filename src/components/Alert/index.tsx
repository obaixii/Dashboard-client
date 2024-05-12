import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

type AlertDialogBoxType = {
    action: "logout" | "delete";
}
export default function AlertDialogBox({ action }: AlertDialogBoxType) {
    let title = "";
    let description = "";

    if (action === "logout") {
        title = "Do you want to Logout?";
        description = "This action cannot be undone. Any unsaved data will be lost.";
        
    } else if (action === "delete") {
        title = "Do you want to Delete this Product?";
        description = "This action cannot be undone. Any unsaved data will be lost.";
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild >
                <Button variant="ghost" className="w-full bg-red-600  hover:bg-red-500 text-white font-medium">{action}</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                    <AlertDialogDescription>{description}</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction className=" bg-red-600 hover:bg-red-500 text-white font-medium">{action}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
