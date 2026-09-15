export const publishedExamples = [
  'lens-calculator',
  'reatom-jsx-gallery',
] as const

export type PublishedExample = (typeof publishedExamples)[number]
