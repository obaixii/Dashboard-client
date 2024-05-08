"use client"

import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

export default function ToastWithAction() {
  const { toast } = useToast()

  return (
    <Button size="sm"
      variant="default"
      onClick={() => {
        toast({
          title: "Product Added Successfully",
          description: "The product was added successfully to your inventory",
          action: <ToastAction altText="Try again">View</ToastAction>,
        })
      }}
    >
      Add Product
    </Button>
  )
}
