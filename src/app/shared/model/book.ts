import { Character } from './character'

export class Book{
    name: string
    isbn: string
	authors: string[]
	numberOfPages: number
	publisher: string
	country: string
	mediaType: string
    released: Date
    characters: Character[]
    povCharacters: Character[]
}