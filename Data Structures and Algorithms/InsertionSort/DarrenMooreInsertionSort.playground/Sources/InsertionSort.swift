/// Performs the Insertion sort algorithm to a given array of elements
///
/// - Parameter unsortedArray: The array to be sorted, containing elements that conform to the Comparable protocol
/// - Returns: A sorted array of the same elements
public func InsertionSort<Element: Comparable>(_ unsortedArray: [Element]) -> [Element] {
    // Exit early if array of length 1, the array is already sorted
    guard unsortedArray.count > 1 else { return unsortedArray }
    
    /// - array: copy the unsortedArray to save stability
    var array = unsortedArray
    
    for index in 1 ..< array.count {
        var currentIndex = index
        
        while currentIndex > 0 && array[currentIndex - 1] > array[currentIndex] {
            array.swapAt(currentIndex - 1, currentIndex)
            currentIndex -= 1
        }
        
    }
    return array
}

