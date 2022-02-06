// export default function groupBy <Type, Key extends keyof Type> (list: Type[], getKey: (item: Type) => Key): Map<Type, Key> {
//   const map = new Map()

//   list.forEach((item: Type) => {
//     const key = getKey(item)
//     const collection = map.get(key)

//     if (!collection) {
//       map.set(key, [item])
//     } else {
//       collection.push(item)
//     }
//   })

//   return map
// }

interface ILoanSet {
  loanAmount: number
  baseInterestRate: number
  loans: []
}

export default function groupBy <Type, Key extends keyof Type> (list: Type[], getKey: (item: Type) => Key): ILoanSet {
  const map = list.reduce((previous, currentItem) => {
    const group = getKey(currentItem)
    if (!previous[group]) { previous[group] = [] }
  }, {})

  // return list.reduce((previous, currentItem) => {
  //   const group = getKey(currentItem)
  //   if (!previous[group]) previous[group] = []
  //   previous[group].push(currentItem)
  //   return previous;
  // }, {} as Record<K, T[]>)
}
