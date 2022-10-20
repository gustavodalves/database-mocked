import { it, expect } from 'vitest';
import { Teacher } from '../entities/teacher';
import { Table } from './Table';

it('should be able to create data', () => {
    const table = new Table('teacher')

    table.add(new Teacher({
        name: 'Gustavo',
        birth_date: new Date(),
        grade: '1st'
    }))

    expect(table.data).length(1)
})

it('should be able to remove data by id', async () => {
    const table = new Table('teacher')

    table.add(new Teacher({
        name: 'Gustavo',
        birth_date: new Date(),
        grade: '1st'
    }))

    table.add(new Teacher({
        name: 'Gustavo',
        birth_date: new Date(),
        grade: '1st'
    }))

    const firstId = table.data[0].props.id
    const secondId = table.data[1].props.id

    await table.remove('id', firstId)
    expect(table.data).length(1)
    expect(table.data[0].props.id).toEqual(secondId)
})