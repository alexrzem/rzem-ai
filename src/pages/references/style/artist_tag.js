import { z } from 'zod';
import { Chat, LMStudioClient } from '@lmstudio/sdk';
const client = new LMStudioClient();

const tagSchema = z.object({
    artist: z.string(),
    tags: z.array(z.string()),
});

const chat = Chat.from([
    { role: 'system', content: 'You are an art historian. Your results should be a JSON formatted list.' },
    { role: 'user', content: '3 tags for the art style of Slim Aarons' },
]);

const model = await client.llm.model('openai/gpt-oss-20b');
const result = await model.respond(chat);

console.log(result.content);
console.log(result.parsed);
