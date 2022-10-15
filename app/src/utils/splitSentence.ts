// 文章を受け取って単語区切りで配列に格納する関数
export const splitSentence = (sentence: string) => {
  const arr = sentence.replaceAll('　', ' ').split(' ')
  return arr
}
