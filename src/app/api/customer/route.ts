import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prismaClient from "@/lib/prisma"

export async function POST(request: Request) {
    const session = await getServerSession(authOptions)

    if(!session || !session.user) {
        return NextResponse.json({ error: "Unauthorized"}, { status: 401 })
    }

    const { name, email, phone, address, userId } = await request.json()

    try {
        await prismaClient.customer.create({
            data: {
                name,
                email,
                phone,
                address: address ? address : null,
                userId
            }
        })

        return NextResponse.json({ message: "Cliente cadastrado com sucesso" })

    } catch (err) { // eslint-disable-line
        return NextResponse.json({ error: "Failed create new customer"}, { status: 400 })
    }
}

export async function DELETE(request: Request) {
    const session = await getServerSession(authOptions)

    if(!session || !session.user) {
        return NextResponse.json({ error: "Unauthorized"}, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('id')

    if(!userId) {
        return NextResponse.json({ error: "Missing customer ID"}, { status: 400 })
    }

    const findTickets = await prismaClient.ticket.findFirst({
        where: {
            customerId: userId as string
        }
    })

    if(findTickets?.status === "ABERTO") {
        return NextResponse.json({ error: "Cliente possui tickets atribuídos, não pode ser excluído." }, { status: 400 })
    }

    try {
        await prismaClient.customer.delete({
            where: {
                id: userId as string
            }
        })

        return NextResponse.json({ message: "Cliente excluído com sucesso!" })
    } catch (err) { // eslint-disable-line
        return NextResponse.json({ error: "Failed delete customer"}, { status: 400 })
    }
}