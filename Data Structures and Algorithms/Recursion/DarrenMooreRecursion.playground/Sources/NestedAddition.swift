/// Performs addition on given array containing integers and nested arrays
///
///  - Parameter array: The array containing integers and arrays of nested integers
///  - Returns sum: The sum of all nested integers

public func NestedAddition(_ array: [Any]) -> Int {
    var sum = 0
    
    for item in array {
        if let integer = item as? Int {
            sum += integer
        } else if let nestedArray = item as? [Any] {
            sum += NestedAddition(nestedArray)
        }
    }
    
    return sum
}
