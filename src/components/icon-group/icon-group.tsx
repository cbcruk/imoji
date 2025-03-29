import { EmojiSchema } from '../../schema/emoji'
import { IconImage } from '../icon-image/icon-image'

type IconGroupProps = {
  items: EmojiSchema[]
}

export function IconGroup({ items }: IconGroupProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {items.map((item) => (
        <IconImage key={item.hexcode} hexcode={item.hexcode} />
      ))}
    </div>
  )
}
