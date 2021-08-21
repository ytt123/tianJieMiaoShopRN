import { useState, useEffect, useRef } from 'react'

const useIndex = () => {
  let intervalTime: any = useRef(null)
  const [timenum, setTimenum] = useState<number>(0)

  useEffect(() => {
    intervalTime.current = setInterval(() => {
      setTimenum(time => ++time)
      console.log(timenum)
    }, 1000)

    return () => {
      clearInterval(intervalTime.current)
    }
  }, [timenum])

  let hour = Math.floor(timenum / 60 / 60)
  let min = Math.floor((timenum - hour * 60 * 60) / 60)
  let sec = Math.floor(timenum - hour * 60 * 60 - min * 60)

  let hourStr = ('00' + hour.toString()).slice(-2)
  let minStr = ('00' + min.toString()).slice(-2)
  let secStr = ('00' + sec.toString()).slice(-2)
  return { hourStr, minStr, secStr }
}

export default useIndex
