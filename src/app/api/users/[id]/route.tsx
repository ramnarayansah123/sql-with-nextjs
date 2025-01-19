import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/client";



// This is for GET METHOD
export async function GET(request:NextRequest,
{params}: {params: {id: string}}

){
  const user =await prisma.user.findUnique({
    where:{id:parseInt(params.id)}
  })
  if(!user)
    return NextResponse.json({error:"user not found"},{status:201})
    return NextResponse.json(user)}

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

// This is for PUT METHOD

export async function PUT(request: NextRequest,{params}: {params:{id:string}}) {
  
  const body = await request.json();

  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id), },
  });

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return NextResponse.json(updatedUser);
}


//This is Delete Method 

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(id, 10),
    },
  });

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  await prisma.user.delete({
    where: { id: user.id },
  });

  return NextResponse.json({ message: 'User successfully deleted' });
}


