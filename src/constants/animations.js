import { batch, Fade, MoveIn, MoveOut, Zoom } from "react-scroll-motion"

export const ZoomInUp = batch(Fade(10), Zoom(0), MoveOut(0, -300))
export const SlideInOutLeft = batch(MoveIn(-100, 0), MoveOut(100, 0))
export const SlideInOutRight = batch(MoveIn(100, 0), MoveOut(-100, 0))
export const SlideUp = batch(MoveIn(0, 200), MoveOut(0, -200))
export const SlideDown = batch(MoveIn(0, -200), MoveOut(0, 200))
