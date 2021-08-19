import { Geolocation, Position } from 'react-native-amap-geolocation'

export const getCurrentPosition = (): Promise<Position> => {
  return new Promise((resove, reject) => {
    try {
      Geolocation.getCurrentPosition(
        (Position: any) => {
          resove(Position)
        },
        err => {
          console.log(err)
        },
      )
    } catch (error) {}
  })
}
