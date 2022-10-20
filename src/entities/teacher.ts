import {v4 as uuidv4} from 'uuid';

export interface TeacherProps {
    name: string;
    birth_date: Date;
    grade: string;
    id?: string;
}

export class Teacher {
    private props: TeacherProps;

    get name(): string {
        return this.props.name
    }

    get birth_date(): Date {
        return this.props.birth_date
    }

    get grade(): string {
        return this.props.grade
    }

    constructor(props: TeacherProps) {
        this.props = {
            ...props,
            id: props.id || uuidv4()
        };
    }
}
