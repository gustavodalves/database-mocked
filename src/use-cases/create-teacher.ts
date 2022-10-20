import { TeacherProps } from "../entities/teacher";
import { TeacherRepository } from "../repositories/TeacherRepository";

interface CreateTeacherRequest extends TeacherProps {}
interface CreateTeacherResponse extends TeacherProps {}

export class CreateTeacher {
    async execute({ name, birth_date, grade }: CreateTeacherRequest): Promise<CreateTeacherResponse> {
        const repository = new TeacherRepository()

        return await repository.create({
            name,
            birth_date,
            grade
        })
    }
}
