function Circle (radius: number): Shape {
    return {
        computeArea: function (): number {
            return Math.PI * radius * radius
        }
    }
}

export { Circle }
