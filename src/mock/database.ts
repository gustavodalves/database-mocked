import { Teacher } from "../entities/teacher";
import { Table, TableProps } from "./Table";

class Database {
    public tables: Table<any>[] = [];

    dropDatabase(): void {
        this.tables = []
    }

    async createTable<T>(tableProps: TableProps<T>): Promise<void> {
        const isTableExists = this.tables.find(table => {
            return table.name === tableProps.name
        })

        if(isTableExists) {
            throw new Error('Table already exists')
        }

        const newTable = new Table(tableProps.name);
        this.tables.push(newTable)
    }

    async findTable(name: string): Promise<number | null> {
        const indexTable = this.tables.findIndex(table => table.name === name)
        return indexTable
    }
}

export const database = new Database();
