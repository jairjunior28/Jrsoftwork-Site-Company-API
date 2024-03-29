import { PrismaClient } from '@prisma/client';
import {Response, response} from 'express';
export const prisma = new PrismaClient();
 
async function connect() {
    await prisma.$connect();
    // console.log('funcionou')
}
 
export function getUsers() {
    return prisma.user.findMany();
}

export function getUser(id: string) {
    return prisma.user.findUnique({
        where: { id }
    })
}
export async function addUser(newUser: any) {
    const user = await prisma.user.findMany({
        where: { email: newUser.email },
      })
      await console.log(user)
      if(user.length>0)
      return {message:'erron'}


    return prisma.user.create({
        data: newUser
    });
}

export function updateUser(id: string, newData: any) {
    return prisma.user.update({
        where: { id },
        data: newData
    })
}

export async function deleteUser(id: string) {
    return prisma.user.delete({
        where: { id }
    })
}