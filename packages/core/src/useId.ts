let uid = 0
export function useId(prefix = 'v') {
  const id = `${prefix}-${++uid}`
  return id
}
