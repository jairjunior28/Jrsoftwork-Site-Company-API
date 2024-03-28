import { PrismaClient } from '@prisma/client';
export const prisma = new PrismaClient();
 
async function connect() {
    await prisma.$connect();
    // console.log('funcionou')
}
 
export function getPosts() {
    return prisma.post.findMany();
}

export function getPost(id: string) {
    return prisma.post.findUnique({
        where: { id }
    })
}export function addPost(newPost: any) {
    return prisma.post.create({
        data: newPost
    });
}

export function updatePost(id: string, newData: any) {
    return prisma.post.update({
        where: { id },
        data: newData
    })
}

export async function deletePost(id: string) {
    return prisma.post.delete({
        where: { id }
    })
}