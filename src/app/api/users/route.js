import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({message:"This is users route"},{status:200})
}