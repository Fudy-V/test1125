import { prisma } from "@/lib/prismaClient";
import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
  try {
    const id = await req.json();
    if (!id) {
      return NextResponse.json({ error: "IDが必要です" }, { status: 400 });
    }

    await prisma.todo.delete({
      where: { id },
    });
  } catch (error) {
    console.error("削除に失敗しました", error);
    return NextResponse.json({ error: "削除に失敗" }, { status: 500 });
  }
}
