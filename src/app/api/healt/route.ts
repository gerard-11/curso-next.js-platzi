

export const runtime='edge'

export async function GET(): Promise<any> {
    return Response.json(
        {status: 'ok'}
    )
}