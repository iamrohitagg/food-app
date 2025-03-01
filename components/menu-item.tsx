import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { useCart } from "@/hooks/use-cart";

interface MenuItemProps {
  item: {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    popular?: boolean;
  };
}

export function MenuItem({ item }: MenuItemProps) {
  const { addItem } = useCart();

  return (
    <Card>
      <CardContent className="p-4 flex gap-4">
        <div className="relative w-24 h-24">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
            <div className="text-right">
              <div className="font-semibold">${item.price.toFixed(2)}</div>
              <Button
                size="sm"
                className="mt-2"
                aria-label={`Add ${item.name} to cart`}
                onClick={() => addItem(item)}
              >
                <Plus className="w-4 h-4" aria-hidden="true" />
                Add
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
