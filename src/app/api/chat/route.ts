
import {OpenAI} from "openai";

export const runtime = "edge";

export async function POST(req: Request) {
    console.log("🔥 API HIT");

    const client = new OpenAI();

    const response = await client.responses.create({
        model: "gpt-5.2",
        input: "Write a one-sentence bedtime story about a unicorn."
    });

    console.log(response.output_text);
}
