import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/client";


// This is for GET METHOD
export async function GET(request:NextRequest){
  const users =await prisma.user.findMany()
    return NextResponse.json(users)}

    // this for POST METHOD 
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Create a new user in the database
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
      },
    });

    // Return the newly created user with a status of 201
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);

    // Return an error response with a status of 500
    return NextResponse.json(
      { error: "An error occurred while creating the user." },
      { status: 500 }
    );
  }
}
