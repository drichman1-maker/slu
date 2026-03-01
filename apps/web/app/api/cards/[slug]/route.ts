import { prisma } from "@slugger/db/client"
import { NextResponse } from "next/server"

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const card = await prisma.card.findUnique({
    where: {
      slug: params.slug,
    },
    include: {
      player: true,
      set: true,
      gradedCards: {
        include: {
          sales: {
            orderBy: {
              date: "desc",
            },
            take: 10,
          },
        },
      },
    },
  })

  if (!card) {
    return NextResponse.json(
      { error: "Card not found" },
      { status: 404 }
    )
  }

  return NextResponse.json(card)
}
