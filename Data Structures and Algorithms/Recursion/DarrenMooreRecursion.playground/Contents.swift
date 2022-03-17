example(of: "nested addition of array containing numbers and more arrays") {
    let array: [Any] = [1, 2, 3, 4, 5, [6, 7, 8], 9, [[10, 11], 12, 13, [14]]]
    print("let array: [Any] = [1, 2, 3, 4, 5, [6, 7, 8], 9, [[10, 11], 12, 13, [14]]]")
    print("NestedAddition(array)")
    print("Result: \(NestedAddition(array))")
}


example(of: "five factorial") {
    print("5 x 4 x 3 x 2 x 1 = \(5 * 4 * 3 * 2 * 1)")
    print("Factorial(5)")
    print("Result: \(Factorial(5))")
}
