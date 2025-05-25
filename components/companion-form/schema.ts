'use client'

import { z } from 'zod'

export const formSchema = z.object({
    name: z.string().min(2, { message: 'Companion is required'}),
    subject: z.string().min(2, { message: 'Subject is required'}),
    topic: z.string().min(2, { message: 'Topic is required'}),
    voice: z.string().min(2, { message: 'Voice is required'}),
    style: z.string().min(2, { message: 'Style is required'}),
    duration: z.coerce.number().min(1, { message: 'Duration is required'}),
})