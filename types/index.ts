export enum Player {
  X = 'X',
  O = 'O',
}

export type Cell = Player | null

export type Board = Cell[]

export type Line = [number, number, number]
