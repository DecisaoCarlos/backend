export interface Atividade {

    /**
     * Identificador da atividade
     */
    id?: number
    /**
     * Descrição da atividade
     */
    descricao: string
    concluido: boolean
    createdAt: Date
    updatedAt: Date
}
