public func BubbleSort<Element: Comparable>(_ dataset: [Element]) -> [Element] {
    var array = dataset
    var swaps = false
    var numberOfRepeats = 0
    
    repeat {
        swaps = false
        for i in 1 ..< array.count - numberOfRepeats {
    
            if array[i] < array[i - 1] {
                let temp = array[i - 1]
                array[i - 1] = array[i]
                array[i] = temp
                
                swaps = true
            }
        }
        numberOfRepeats += 1
    } while swaps
    
    return array
}

