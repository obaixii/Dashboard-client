import { Login, SignUp } from "@/components/index";
import { useLocation } from "react-router-dom";

export default function Form() {
    const { pathname } = useLocation();
    console.log(pathname);

    return (
        <div className="w-full lg:grid min-h-screen lg:grid-cols-2">
            <div className="h-screen flex order-2 items-center justify-center py-12">
                <div className="mx-auto grid w-[350px] gap-6">
                    {
                        pathname === "/login" ?
                            <Login />
                            :
                            <SignUp />
                    }
                </div>
            </div>
            <div className="hidden bg-muted lg:block">
                <img
                    // src="https://ucarecdn.com/ca7afad5-c335-4660-a7c1-d812631795eb/-/crop/1499x843/0,79/-/preview/-/quality/lighter/-/format/auto/-/scale_crop/1920x1080/center/"
                    src="/placeholder.svg"
                    alt="Image"
                    className="h-full w-full object-cover bg-gray-800 dark:brightness-[0.7] dark:grayscale"
                />
            </div>
        </div>
    )
}
