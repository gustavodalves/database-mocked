import { it, describe, expect } from "vitest";
import { Teacher } from "../entities/teacher";
import { database } from "./database";

describe('create tables on database', () => {
    it("should be able to create table on Database", async () => {
        await database.createTable<Teacher>({
            name: 'teachers',
        })
    
        expect(database.tables).length(1)
    })

    it("should not be able to create table already exists", async () => {
        expect(database.createTable<Teacher>({
            name: 'teachers',
        })).rejects.toBeInstanceOf(Error)
    })

    it("should be able to create table alreadys not exists", async () => {
        await database.createTable<Teacher>({
            name: 'alumns',
        })

        expect(database.tables).length(2)
    })
})
