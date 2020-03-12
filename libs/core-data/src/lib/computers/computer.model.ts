export interface Computer {
  id: number,
  make: string,
  name: String,
  ram: number,
  isDesktop: boolean
}

export const emptyComputer: Computer = {
  id: null,
  make: '',
  name: '',
  ram: null,
  isDesktop: null
}
