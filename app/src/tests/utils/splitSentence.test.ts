import { splitSentence } from '@/utils/splitSentence'

test('全角半角スペース両方が含まれているときに、スペース区切りで配列が返されること', () => {
  expect(splitSentence("are you a　traveli's member?")).toStrictEqual([
    'are',
    'you',
    'a',
    "traveli's",
    'member?'
  ])
})
