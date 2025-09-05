import { validationMessage } from "@/shared/constants";
import { NextResponse } from "next/server";
import { ResponseCode } from "./types";

export type DataInformation = {
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
};

export type ResponseNextApiType<T = object | string> = {
  data?: T;
  message?: string;
  code?: ResponseCode;
};

/* eslint-disable-next-line */
export default {
  2000: ({ code, message, data }: ResponseNextApiType) => {
    return NextResponse.json(
      {
        code: code || 200,
        message: message || "Sukses!",
        data,
      },
      { status: 200 }
    );
  },
  2001: ({ code, message, data }: ResponseNextApiType) => {
    return NextResponse.json(
      {
        code: code || 201,
        message: message || "Sukses!",
        data,
      },
      { status: 200 }
    );
  },
  4000: ({ code, message, data }: ResponseNextApiType) => {
    return NextResponse.json(
      {
        code: code || 400,
        message: message || "Tidak valid!",
        data,
      },
      { status: 200 }
    );
  },
  4001: (payload?: ResponseNextApiType) => {
    return NextResponse.json(
      {
        code: "4001",
        message: payload?.message || "Tidak diizinkan!",
        data: payload?.data,
      },
      { status: 200 }
    );
  },
  4002: ({ code, message, data }: ResponseNextApiType) => {
    return NextResponse.json(
      {
        code: code || 402,
        message: message || "Ditolak!",
        data,
      },
      { status: 200 }
    );
  },
  4003: ({ code, message, data }: ResponseNextApiType) => {
    return NextResponse.json(
      {
        code: code || 403,
        message: message || "Forbidden!",
        data,
      },
      { status: 200 }
    );
  },
  4004: ({ code, message, data }: ResponseNextApiType) => {
    return NextResponse.json(
      {
        code: code || 404,
        message: message || "Tidak ditemukan!",
        data,
      },
      { status: 200 }
    );
  },
  4005: ({ code, message, data }: ResponseNextApiType) => {
    return NextResponse.json(
      {
        code: code || 405,
        message: message || "Tidak diizinkan!",
        data,
      },
      { status: 200 }
    );
  },
  4008: ({ data }: ResponseNextApiType) => {
    return NextResponse.json(
      {
        code: "4008",
        message: "Mohon periksa kembali jaringan Anda!",
        data,
      },
      { status: 200 }
    );
  },
  4029: ({ code, message, data }: ResponseNextApiType) => {
    return NextResponse.json(
      {
        code: code || 429,
        message: message || "Permintaan dibatasi!",
        data,
      },
      { status: 200 }
    );
  },
  5000: (payload?: ResponseNextApiType) => {
    return NextResponse.json(
      {
        code: payload?.code || 500,
        message: payload?.message || validationMessage()[500](),
      },
      { status: 200 }
    );
  },
};
