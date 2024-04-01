import { PrismaClient } from "@prisma/client";
import { empty } from "@prisma/client/runtime/library.js";
import { Response, response } from "express";
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
    where: { id },
  });
}
export async function addUser(newUser: any, res: Response) {
  const user = await prisma.user.findMany({
    where: { email: newUser.email },
  });
  console.log(user);
  if (user.length === 0) {
    const newUserAdded = await prisma.user.create({
      data: newUser,
    });
    return res
      .status(201)
      .json({ ...newUserAdded, message: "User added with success!" });
  } else {
    console.log("error");
    return res.status(401).json({ message: "Error already exists email." });
  }
}

export function updateUser(id: string, newData: any) {
  return prisma.user.update({
    where: { id },
    data: newData,
  });
}

export async function deleteUser(id: string) {
  return prisma.user.delete({
    where: { id },
  });
}
