/// Calculates the factorial of number n for positive integers
///
///  - Parameter positiveInteger: The positive integer whose factorial is to be calculated
///  - Returns: the factorial of the positive integer input

public func Factorial(_ positiveInteger: UInt) -> UInt {
    guard positiveInteger > 1 else { return 1 }
    return positiveInteger * Factorial(positiveInteger - 1)
}

