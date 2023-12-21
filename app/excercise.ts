export function greet (name: string[]): string {
  if (name.length === 0) {
    return 'Hello, my friend.'
  }
  const wordExceptLastWord = name.slice(0, name.length - 1)
  const wordJoin = wordExceptLastWord.join(', ')
  const Lastword = name[name.length - 1]
  return `Hello, ${filterWord([wordJoin, Lastword], ' and ')}.`
}

function filterWord (wordtofilter: string[], separator: string): string {
  return wordtofilter.filter(w => w).join(separator)
}
