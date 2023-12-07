import express, { Request, Response } from 'express'
import cors from 'cors'
import { accounts, characters } from './database'
import { ACCOUNT_TYPE, POWER_TYPE, Tcharacter } from './types'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

app.get("/ping", (req: Request, res: Response) => {
    res.send("Pong!")
})

app.get("/accounts", (req: Request, res: Response) => {
    res.send(accounts)
})

//getAccountById
app.get("/accounts/:id", (req: Request, res: Response )=>{
    const idToFind = req.params.id
    const result = accounts.find((account)=>{
        return account.id === idToFind
    })

    res.send(result)
})

app.delete("/accounts/:id",(req: Request, res: Response)=>{
    const idToDelete = req.params.id

    const accountIndex: number = accounts.findIndex((account)=>account.id === idToDelete)
    if (accountIndex >= 0){
        accounts.splice(accountIndex,1)
        console.log(accounts)
    }
    res.send("Item deletado com sucesso!")
})

//editAccount
app.put("/accounts/:id", (req: Request, res: Response)=>{
    const accountToEdit = req.params.id

    const newId = req.body.id as string | undefined
    const newOwnerName = req.body.ownerName as string | undefined
    const newBalance =  req.body.balance as number | undefined
    const newType  = req.body.type as ACCOUNT_TYPE | undefined

    const result = accounts.find((account)=>{
        return account.id === accountToEdit
    })

    if(result){
        result.id = newId || result.id
        result.ownerName = newOwnerName || result.ownerName
        result.type = newType || result.type
        result.balance = isNaN(Number(newBalance)) ? result.balance : newBalance as number
    }

res.status(200).send("Atualização realizada com sucesso!")

})


//Criar
app.post("/lotr", (req: Request, res: Response)=>{
    const id = req.body.id as string
    const name = req.body.name as string
    const powerType = req.body.powerType as POWER_TYPE
    const age = req.body.age as number

    const newCharacter = {
        id,
        name,
        powerType,
        age
}
characters.push(newCharacter)
res.status(201).send("Personagem cadastrado com sucesso!")


})

//Pegar
app.get("/lotr",(req:Request, res: Response )=>{
    const nameToFind = req.query.name as string;
 if(nameToFind){
  const result: Tcharacter[] = characters.filter((character) => {
    return character.name.toLowerCase().includes(nameToFind.toLowerCase());
  });
  res.send(result);
 }
    res.send(characters)
})

//Editando o personagem

app.put("/lotr/:id",(req:Request, res: Response)=>{
    const characterToEdit = req.params.id;

    const newId = req.body.id as string | undefined
    const newName = req.body.name as string | undefined
    const newPowerType = req.body.powerType as POWER_TYPE | undefined
    const newAge = req.body.age as number | undefined

    const result = characters.find((character)=>{
        return character.id === characterToEdit
    })

    if(result){
        result.id = newId || result.id
        result.name = newName || result.name
        result.powerType = newPowerType || result.powerType
        result.age = isNaN(Number(newAge)) ? result.age : newAge as number
    }
    res.status(200).send("Dados atualizados com sucesso!")
})

//Deletar personagem

app.delete("/lotr/:id",(request: Request, response: Response )=>{
    const characterToDelete = request.params.id

    const characterIndex: number = characters.findIndex((character)=>{
        return character.id === characterToDelete
    })
    if(characterIndex >= 0){
        characters.splice(characterIndex,1)
    }
    response.status(201).send("Personagem removido com sucesso!")
})