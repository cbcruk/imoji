import { Schema } from 'effect'

export const EmojiSchema = Schema.Struct({
  emoji: Schema.String,
  hexcode: Schema.String,
  groups: Schema.String,
  subgroups: Schema.String,
  annotation: Schema.String,
  tags: Schema.String,
  openmoji_tags: Schema.NullOr(Schema.String),
  openmoji_author: Schema.String,
  openmoji_date: Schema.String,
  skintone: Schema.NullOr(Schema.String),
  skintone_combination: Schema.NullOr(Schema.String),
  skintone_base_emoji: Schema.NullOr(Schema.String),
  skintone_base_hexcode: Schema.NullOr(Schema.String),
  unicode: Schema.NullOr(Schema.Number),
  order: Schema.NullOr(Schema.Number),
})

export type Emoji = Schema.Schema.Type<typeof EmojiSchema>
