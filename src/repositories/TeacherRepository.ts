import { Teacher, TeacherProps } from "../entities/teacher";
import { database } from "../mock/database";

interface TeacherRepositoryMethods {
    create(teacher: TeacherProps): Promise<Teacher>;
}

export class TeacherRepository implements TeacherRepositoryMethods {
    async create(teacher: TeacherProps): Promise<Teacher> {
        let table = await database.findTable('teachers')

        if(!table && table !== 0) {
            database.createTable<Teacher>({
                name: 'teachers'
            })

            table = await database.findTable('teachers')
        }
        const teacherToAdd = new Teacher(teacher)
        database.tables[table ?? 0].add(teacherToAdd)
        return teacherToAdd
    }
}
