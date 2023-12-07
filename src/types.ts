export enum ACCOUNT_TYPE {
    BRONZE = "Bronze",
    SILVER = "Prata",
    GOLD = "Ouro",
    PLATINUM = "Platina",
    BLACK = "Black"
}

export type TAccount = {
    id: string,
    ownerName: string,
    balance: number,
    type: ACCOUNT_TYPE
}

export enum POWER_TYPE{
    HIDE = "Sorrateiro",
    WIZARD = "Magia",
    STRENGTH = "Força",
    SPEED = "Veloz",
    ARCHERY =  "Arqueiro"  
}

export type Tcharacter = {
    id: string,
    name: string,
    powerType: POWER_TYPE,
    age: number
}
