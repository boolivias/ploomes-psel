function compareTriplets(a, b) {
  let a_score, b_score
  a_score = b_score = 0

  a.forEach((a_rate, index) => {
    if (a_rate > b[index])
      a_score++
    else if (a_rate < b[index])
      b_score++
  })

  return [a_score, b_score]
}