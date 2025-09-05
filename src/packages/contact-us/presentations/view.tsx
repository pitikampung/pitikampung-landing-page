"use client";

import { Button } from "@/components/atoms";
import { InputText, InputTextarea, Maps } from "@/components/molecules";
import { ContactSchema } from "@/shared/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type ContactForm = {
  name: string;
  city?: string;
  message: string;
};

export const ContactUsView = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ContactForm>({
    mode: "onChange",
    resolver: zodResolver(ContactSchema),
  });

  const onSubmit = (data: ContactForm) => {
    const text = `Halo, saya ${data.name}%0AAsal Kota: ${
      data.city || "-"
    }%0A%0A${data.message}`;
    window.open(`https://wa.me/6282139994797?text=${text}`, "_blank");
    reset();
    setTimeout(() => {
      window.location.reload();
    }, 300);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-18 space-y-12 mt-18">
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-bold">Hubungi Kami</h1>
        <p className="text-gray-600">
          Kami siap membantu Anda. Silakan hubungi kami melalui form, email,
          atau WhatsApp.
        </p>
      </div>

      {/* Info Kontak */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white shadow rounded-xl text-center">
          <p className="font-semibold">WhatsApp</p>
          <a
            href="https://wa.me/6282139994797"
            target="_blank"
            className="text-primary-default font-medium"
          >
            0821-3999-4797
          </a>
        </div>
        <div className="p-6 bg-white shadow rounded-xl text-center">
          <p className="font-semibold">Email</p>
          <a
            href="mailto:ternakayamsidoarjo@gmail.com"
            className="text-ocean-default font-medium"
          >
            ternakayamsidoarjo@gmail.com
          </a>
        </div>
        <div className="p-6 bg-white shadow rounded-xl text-center">
          <p className="font-semibold">Lokasi</p>
          <p className="text-gray-600">Sidoarjo, Jawa Timur</p>
        </div>
      </div>

      {/* Form Kontak */}
      <div className="bg-white p-8 shadow rounded-xl space-y-6">
        <h2 className="text-xl font-bold">Kirim Pesan</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <InputText
            type="text"
            name="name"
            register={register}
            label="Nama Lengkap"
            size="lg"
            useLabelInside
            required
            errorMessage={errors?.name?.message}
          />
          <InputText
            type="text"
            name="city"
            register={register}
            label="Asal Kota"
            size="lg"
            useLabelInside
          />
          <InputTextarea
            label="Pesan"
            required
            useLabelInside
            register={register}
            name="message"
            errorMessage={errors.message?.message}
          />
          <Button type="submit" disabled={!isValid} size="xl">
            Kirim via WhatsApp
          </Button>
        </form>
      </div>

      {/* Maps */}
      <div>
        <Maps position={[-7.449554, 112.711726]} zoom={12} />
      </div>
    </div>
  );
};
