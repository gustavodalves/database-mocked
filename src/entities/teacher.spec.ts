import { expect, it } from 'vitest'
import { Teacher } from './teacher'

it("Create teacher", () => {
    const teacher = new Teacher({
        name: "Gustavo Duarte Alves",
        birth_date: new Date(),
        grade: '1st'
    });

    expect(teacher).instanceOf(Teacher);
})

