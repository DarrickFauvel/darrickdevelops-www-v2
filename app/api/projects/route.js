import { NextResponse } from "next/server"

export async function GET() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
  const data = await response.json()

  return NextResponse.data
}
