"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useCart } from "@/hooks/use-cart";

export function RestaurantCart() {
  const { items } = useCart();
  console.log("items ", items);
  return (
    <Card className="p-4 sticky top-4">
      <h3 className="font-semibold text-lg mb-4">Your Order</h3>
      <div className="text-center text-muted-foreground">
        <p>{`${items.length > 0 ? items.length : "No"} items in cart`}</p>
        <Button className="mt-4">{`${
          items?.length > 0 ? "View" : "Start"
        } Order`}</Button>
      </div>
    </Card>
  );
}
