import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function getUsers() {
	return prisma.user.findMany()
}

export async function setUsers({ data }: any) {
	return prisma.user.create({ data })
}
