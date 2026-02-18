import type { PromoBlock as PromoBlockType } from '../data/content'

type Props = { block: PromoBlockType }

export function PromoBlock({ block }: Props) {
  const { tagline, headline, description, image, imageAlt, reverse } = block
  return (
    <section className={`promo-block ${reverse ? 'promo-block--reverse' : ''}`}>
      <div className="promo-block__image-wrap">
        <img src={image} alt={imageAlt} className="promo-block__image" loading="lazy" />
      </div>
      <div className="promo-block__content">
        <p className="promo-block__tagline">{tagline}</p>
        <h2 className="promo-block__headline">{headline}</h2>
        <p className="promo-block__description">{description}</p>
      </div>
    </section>
  )
}
