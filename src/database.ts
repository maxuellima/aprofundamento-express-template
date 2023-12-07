import { ACCOUNT_TYPE, TAccount, Tcharacter, POWER_TYPE } from "./types";

export const accounts: TAccount[] = [
    {
        id: "a001",
        ownerName: "Ciclano",
        balance: 10000,
        type: ACCOUNT_TYPE.GOLD
    },
    {
        id: "a002",
        ownerName: "Astrodev",
        balance: 500000,
        type: ACCOUNT_TYPE.BLACK
    },
    {
        id: "a003",
        ownerName: "Fulana",
        balance: 20000,
        type: ACCOUNT_TYPE.PLATINUM
    }
]

export const characters: Tcharacter[] = [
    {
        id: "lotr001",
        name: "Frodo",
        powerType: POWER_TYPE.HIDE,
        age: 33
    },
    {
        id: "lotr002",
        name: "Samwise Gamgee",
        powerType: POWER_TYPE.SPEED,
        age: 47
    },
    {
        id: "lotr003",
        name: "Merry Brandybuck",
        powerType: POWER_TYPE.STRENGTH,
        age: 36
    },
    {
        id: "lotr004",
        name: "Peregrin Took",
        powerType: POWER_TYPE.HIDE,
        age: 39
    },
    {
        id: "lotr005",
        name: "Boromir",
        powerType: POWER_TYPE.STRENGTH,
        age: 48
    },
    {
        id:"lotr006",
        name: "Legolas",
        powerType: POWER_TYPE.ARCHERY,
        age: 1000
    },
    {
        id:"lotr007",
        name: "Aragorn",
        powerType: POWER_TYPE.STRENGTH,
        age: 43
    },
    {
        id:"lotr008",
        name: "Arwen",
        powerType: POWER_TYPE.SPEED,
        age: 45
    }
]