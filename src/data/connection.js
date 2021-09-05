import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()

export const connect = async () => {
  await prisma.$connect()
  console.log('prisma: connected')
}

export const disconnect = async () => {
  await prisma.$disconnect()
  console.log('prisma: disconnected')
}

connect()
process.on('exit', disconnect)
