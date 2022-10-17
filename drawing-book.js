function pageCount(n, p) {
  if (
    n === 1 ||
    n === p ||
    (n % 2 !== 0 && n - 1 === p)
  )
    return 0

  let n_aux = n
  let p_aux = p
  if (n_aux % 2 !== 0)
    n_aux--
  if (p_aux % 2 !== 0)
    p_aux--

  const from_beginning = Math.floor(p_aux / 2)
  const from_end = Math.ceil((n_aux - p_aux) / 2)

  return from_beginning < from_end ? from_beginning : from_end
}