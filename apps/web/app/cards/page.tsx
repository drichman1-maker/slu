import { getCards } from '../../lib/data'
import { ClientCardsPage } from './ClientCardsPage'

export default function CardsPage() {
  const cards = getCards()

  return <ClientCardsPage cards={cards} />
}
