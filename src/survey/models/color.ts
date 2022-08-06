export enum Color {
    Orange = 1,
    Gray = 2,
    Pink = 3,
    Black = 4,
}

export interface ColorChoice {
    color: Color
    name: string
    hex: string
}