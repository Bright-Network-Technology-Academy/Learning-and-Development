/// Performs the Merge sort algorithm on a given array of elements
///
/// Recursive sort that divides input array in to halves until base case of array of length 1 is reached before reassembling
/// array by merging smaller arrays in sorted order.
/// 
/// - Parameter array: The array to be sorted, containing elements that conform to the Comparable protocol
/// - Returns: A sorted array of the same elements
public func MergeSort<Element: Comparable>(_ array: [Element]) -> [Element] {
    
    // Base Case - array of length 1 by definition is already sorted
    guard array.count > 1 else { return array }
    
    let middle = array.count / 2
    let leftArray = Array(array[..<middle])
    let rightArray = Array(array[middle...])
    
    return merge(MergeSort(leftArray), MergeSort(rightArray))
}

private func merge<Element: Comparable>(_ leftArray: [Element], _ rightArray: [Element]) -> [Element] {
    var result: [Element] = []
    
    var leftIndex = 0
    var rightIndex = 0
    
    while leftIndex < leftArray.count && rightIndex < rightArray.count {
        if leftArray[leftIndex] < rightArray[rightIndex] {
            result.append(leftArray[leftIndex])
            leftIndex += 1
        } else if leftArray[leftIndex] > rightArray[rightIndex] {
            result.append(rightArray[rightIndex])
            rightIndex += 1
        } else {
            result.append(leftArray[leftIndex])
            leftIndex += 1
            
            result.append(rightArray[rightIndex])
            rightIndex += 1
        }
    }
    
    if leftIndex < leftArray.count {
        result.append(contentsOf: leftArray[leftIndex...])
    }
    if rightIndex < rightArray.count {
        result.append(contentsOf: rightArray[rightIndex...])
    }
    
    return result
}
