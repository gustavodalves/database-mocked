export interface TableProps<T> {
    data?: T[];
    name: string;
}

export class Table<T> implements TableProps<T> {
    data: T[];
    name: string;

    constructor(name: string) {
        this.data = [];
        this.name = name
    }

    async add(data: T): Promise<T> {
        this.data.push(data)
        return data;
    }

    async remove(field: any, value: any): Promise<void> {
        try {
            const dataToRemoved = this.data.findIndex((item: T) => {
                const { props } = item
                return props[field] === value
            })

            if(dataToRemoved && dataToRemoved !== 0) {
                throw new Error('value not exists')
            }

            this.data.splice(dataToRemoved, 1) 
        } catch(err) {
            throw new Error(err)
        }
    }
}