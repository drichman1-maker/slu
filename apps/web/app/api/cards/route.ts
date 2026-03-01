import { prisma } from "@slugger/db/client"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  
  const grader = searchParams.get("grader")
  const grade = searchParams.get("grade")
  const playerSlug = searchParams.get("player")
  const minPrice = searchParams.get("minPrice")
  const maxPrice = searchParams.get("maxPrice")
  
  const where: any = {}
  
  if (playerSlug) {
    where.player = {
      slug: playerSlug,
    }
  }
  
  if (grader || grade) {
    where.gradedCards = {
      some: {},
    }
    
    if (grader) {
      where.gradedCards.some.grader = grader
    }
    
    if (grade) {
      where.gradedCards.some.grade = grade
    }
  }

  const cards = await prisma.card.findMany({
    where,
    include: {
      player: true,
      set: true,
      gradedCards: true,
    },
    orderBy: {
      fairValueScore: "desc",
    },
  })

  return NextResponse.json(cards)
}
