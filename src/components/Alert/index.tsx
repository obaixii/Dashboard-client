import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

type AlertDialogBoxType = {
    title: string;
    description: string;
    action: string;
}
export default function AlertDialogBox({ title, description, action }: AlertDialogBoxType) {
    console.log(title, description, action);

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
