import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { subjectsColors } from '@/constants'
import qs from 'query-string'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const colorMap: Record<string, string> = {
  blue: 'bg-blue-500',
  red: 'bg-red-500',
  green: 'bg-green-500',
  purple: 'bg-purple-200',
  amber: 'bg-amber-300',
  sky: 'bg-sky-200'
}

export const getSubjectColor = (subject: string) => {
  return subjectsColors[subject as keyof typeof subjectsColors]
}

type FormUrlQueryParams = {
  params: string
  key: string
  value: string
}

type RemoveKeysFromUrlQueryParams = {
  params: string
  keysToRemove: string[]
}

export const formUrlQuery = ({ params, key, value }: FormUrlQueryParams) => {
  const queryString = qs.parse(params)
  queryString[key] = value

  return qs.stringifyUrl({
    url: window.location.pathname,
    query: queryString
  })
}
export const removeKeysFromUrlQuery = ({ params, keysToRemove }: RemoveKeysFromUrlQueryParams) => {
  const queryString = qs.parse(params)
  keysToRemove.forEach(key => {
    delete queryString[key]
  })

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: queryString
    },
    { skipNull: true }
  )
}

// export const configureAssistant = (voice: string, style: string) => {
//   const voiceId =
//     voices[voice as keyof typeof voices][
//       style as keyof (typeof voices)[keyof typeof voices]
//     ] || "sarah";

//   const vapiAssistant: CreateAssistantDTO = {
//     name: "Companion",
//     firstMessage:
//       "Hello, let's start the session. Today we'll be talking about {{topic}}.",
//     transcriber: {
//       provider: "deepgram",
//       model: "nova-3",
//       language: "en",
//     },
//     voice: {
//       provider: "11labs",
//       voiceId: voiceId,
//       stability: 0.4,
//       similarityBoost: 0.8,
//       speed: 0.9,
//       style: 0.5,
//       useSpeakerBoost: true,
//     },
//     model: {
//       provider: "openai",
//       model: "gpt-4",
//       messages: [
//         {
//           role: "system",
//           content: `You are a highly knowledgeable tutor teaching a real-time voice session with a student. Your goal is to teach the student about the topic and subject.

//                     Tutor Guidelines:
//                     Stick to the given topic - {{ topic }} and subject - {{ subject }} and teach the student about it.
//                     Keep the conversation flowing smoothly while maintaining control.
//                     From time to time make sure that the student is following you and understands you.
//                     Break down the topic into smaller parts and teach the student one part at a time.
//                     Keep your style of conversation {{ style }}.
//                     Keep your responses short, like in a real voice conversation.
//                     Do not include any special characters in your responses - this is a voice conversation.
//               `,
//         },
//       ],
//     },
//     clientMessages: [],
//     serverMessages: [],
//   };
//   return vapiAssistant;
// };
