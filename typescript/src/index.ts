import { newRenderer } from "./renderer.js"
import { Circle } from "./shapes/circle.js"
import { Rectangle } from "./shapes/rectangle.js"

const rectangle: Shape = Rectangle(2, 3)
const circle: Shape = Circle(5)
const renderer1 = newRenderer(rectangle)
const renderer2 = newRenderer(circle)
renderer1.draw()
renderer2.draw()
