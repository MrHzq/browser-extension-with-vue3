import dayjs from "dayjs"

export const formatTime = (t = new Date()) =>
  dayjs(t).format("YYYY-MM-DD HH:mm:ss")
