
export class DeleteAtividadeInput {
    id: number = 0
    constructor(id: number) {
        if (id != null && id !== undefined) {
            this.id = id;
            return
        }
    }

}