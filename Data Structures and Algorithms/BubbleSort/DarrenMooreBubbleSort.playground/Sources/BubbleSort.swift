/// Performs the Bubble sort algorithm to a given array of elements
///
///  - Parameter unsortedArray: The array to be sorted, containing elements that conform to the Comparable protocol
///  - Returns: A sorted array of the same elements
public func BubbleSort<Element: Comparable>(_ unsortedArray: [Element]) -> [Element] {
    // Exit early if array of length 1, the array is already sorted
    guard unsortedArray.count > 1 else { return unsortedArray }
    
    /// - array: copy the unsortedArray to save stability
    var array = unsortedArray
    var swaps = false
    var numberOfRepeats = 0
    
    repeat {
        swaps = false
        for index in 1 ..< array.count - numberOfRepeats {
    
            if array[index - 1] > array[index] {
                array.swapAt(index - 1, index)
                swaps = true
            }
        }
        numberOfRepeats += 1
    } while swaps
    
    return array
}

