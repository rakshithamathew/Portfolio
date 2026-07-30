import { useEffect, useState } from "react"

/* â”€â”€â”€ Local time â”€â”€â”€ */
function useLocalTime() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const update = () => {
      const t = new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      })
      setTime(t)
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

export default useLocalTime

