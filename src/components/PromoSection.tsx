import { promoBlocks } from '../data/content'
import { PromoBlock } from './PromoBlock'

export function PromoSection() {
  return (
    <div className="promo-section">
      {promoBlocks.map((block) => (
        <PromoBlock key={block.id} block={block} />
      ))}
    </div>
  )
}
