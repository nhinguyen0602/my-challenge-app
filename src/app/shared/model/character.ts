import { Book } from './book'

export class Character{
	url: string
    name: string
	gender: string
	culture: string
	born: Date
	died: Date
	titles: string[]
	aliases: string[]
	books: Book[]
	povBooks: Book[]
	tvSeries: string[]
	playedBy: string[]
}