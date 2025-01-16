import { NextRequest, NextResponse } from "next/server";
import { Prisma } from '@prisma/client'

export async function GET(request:NextRequest){
  const users =await prisma.user.findMany()
    return NextResponse.json(users)}