export interface Audit {
    id?: number
    createdAt?: string
    updatedAt?: string
    deletedAt?: any
}

export interface User extends Audit {
    firstName?: string
    lastName?: string
    email?: string
    tasks?: Task[]
}

export interface Task extends Audit {
    title?: string
    description?: string
    done?: boolean
    userId?: number
}