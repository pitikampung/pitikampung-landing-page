"use client";

import { Button, Image } from "@/components/atoms";
import { DialogDrawer, InputText } from "@/components/molecules";
import { formatRupiah } from "@/shared/utils";
import { FC, useState } from "react";

interface CartItem {
  id: number;
  name: string;
  img: string;
  variant?: string;
  price: number;
  quantity: number;
}

interface ModalCartProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const ModalCart: FC<ModalCartProps> = ({ open, setOpen }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Telur Ayam Kampung",
      img: "/images/products/telur-1.jpg",
      variant: "10 butir",
      price: 28000,
      quantity: 1,
    },
    {
      id: 2,
      name: "Ayam Kampung Potong",
      img: "/images/products/ayam-1.jpg",
      variant: "1kg",
      price: 85000,
      quantity: 1,
    },
  ]);
  const [note, setNote] = useState("");

  const handleQuantity = (id: number, type: "inc" | "dec") => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "inc"
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    const phoneNumber = "6282139994797"; // ganti dengan nomor WA tujuan
    const message =
      `Halo, saya ingin pesan:\n\n` +
      cartItems
        .map(
          (item) =>
            `• ${item.name} ${item.variant ? `(${item.variant})` : ""} x${
              item.quantity
            } = ${formatRupiah(item.price * item.quantity)}`
        )
        .join("\n") +
      `\n\nSubtotal: ${formatRupiah(subtotal)}` +
      (note ? `\nCatatan: ${note}` : "");

    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <DialogDrawer
      open={open}
      setOpen={setOpen}
      title="Keranjang Belanja"
      onCancel={() => setOpen(false)}
      cancelButton="Tutup"
      onSubmit={handleCheckout}
      submitButton="Lanjutkan"
      className="py-4"
      disabledSubmitButton={cartItems.length === 0}
    >
      <div className="flex flex-col gap-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <Image
                src={item.img}
                alt={item.name}
                width={56}
                height={56}
                className="w-14 h-14 rounded-md object-cover"
              />
              <div className="flex flex-col">
                <p className="font-medium text-gray-800">{item.name}</p>
                {item.variant && (
                  <p className="text-sm text-gray-500">{item.variant}</p>
                )}
              </div>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div>
                <Button
                  variant="secondaryOutline"
                  size="icon"
                  onClick={() => handleQuantity(item.id, "dec")}
                >
                  −
                </Button>
              </div>
              <span className="px-2 text-center">{item.quantity}</span>
              <div>
                <Button
                  variant="secondaryOutline"
                  size="icon"
                  onClick={() => handleQuantity(item.id, "inc")}
                >
                  +
                </Button>
              </div>
              <p className="ml-4 font-semibold text-gray-800">
                {formatRupiah(item.price)}
              </p>
            </div>
          </div>
        ))}

        {/* Note InputText */}
        <div>
          <InputText
            placeholder="Tambahkan catatan..."
            value={note}
            setValue={setNote}
            type="text"
          />
        </div>

        {/* Totals */}
        <div className="border-t border-gray-200 pt-4 flex flex-col gap-2">
          <div className="flex justify-between text-gray-700">
            <p>Subtotal</p>
            <p>{formatRupiah(subtotal)}</p>
          </div>
          <div className="flex justify-between text-lg font-bold text-gray-900">
            <p>Total</p>
            <p>{formatRupiah(subtotal)}</p>
          </div>
        </div>
      </div>
    </DialogDrawer>
  );
};
