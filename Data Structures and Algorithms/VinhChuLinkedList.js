class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }
    
    push(val) {
        // Create a new node
        let newNode = new Node(val);
        if(!this.head) {
            // If the linkedlist is empty then set the new node to be the head and tail
            this.head = this.tail = newNode;
        } else {
            // If it isn't empty then set the next node of the current tail to the new node
            // Also set the tail to be the new node.
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
        // Increment the count
        this.count++;
        // Don't exactly need this but is nice to have something returned to show success
        return this;
    }

    pop() {
        // If empty then return undefined
        if(!this.head) return undefined;
        // Create two pointers starting from head
        let current = this.head;
        let newTail = current;
        // Loop through the current, once the next item is null you stop
        while(current.next) {
            // As long as you haven't hit null, your current hasn't hit the last item (tail)
            // Since your new tail is lagging behind the current by 1, it hasn't reached the second last item
            // Once it does the loop breaks
            newTail = current;
            current = current.next;
        }
        // Set your tail to be the new tail
        this.tail = newTail;
        // Break off the connection to the old tail and set it to null
        this.tail.next = null;
        // Decrement the count
        this.count--;
        // if the count hits 0 then set the head and tail to be null
        if(this.count === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if(!this.head) return undefined;
        // set a new variable to be the current head
        let current = this.head;
        // set the head to be the current head's next node
        this.head = current.next;
        this.count--;
        // if the count is 0 then you've removed the last element and tail needs to be set to null
        if(this.count === 0) {
            this.tail = null;
        }
        return current;
    }

    unshift(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = this.tail = newNode;
        } else {
            // set the new node's next to be the current head and the head to be the new node
            newNode.next = this.head;
            this.head = newNode;
        }
        this.count++;
        return this;
    }

    get(index) {
        // if index is out of bounds (less than 0 or higher than the count) return null
        if(index < 0 || index >= this.count) return null;
        // need a counter to help loop through
        let counter = 0;
        let current = this.head;
        // as long as the counter isn't equal to the index passed we keep iterating through
        while(counter !== index) {
            // set the current to be the next node
            current = current.next;
            // increment the counter so you're not stuck in an infinite loop
            // also once we reach the index that was passed we want to stop so we have the correct node.
            counter++;
        }
        // return the node we wanted
        return current;
    }

    set(index, val) {
        // use the get method from above to find our node
        let found = this.get(index);
        // if it exist then execute the code block
        if(found) {
            // set the value of the found node to the new value;
            found.val = val;
            // return true to show success
            return true;
        }
        // nothing found, return false
        return false;
    }

    insert(index, val) {
        if(index < 0 || index > this.count) return false;
        // if index is equal to the length then you're adding to the end
        // ! converts it to a boolean operator
        // since we push something that returns true (truthy) and the ! is a negator which will return the opposite
        // so we double negate to return true
        if(index === this.count) return !!this.push(val);
        // if index is 0 then you're adding to the start
        // similar for the above for why !!
        if(index === 0) return !!this.unshift(val);
        let newNode = new Node(val);

        // find the position to insert between
        // use index - 1 to get the one before as you're trying to insert at the exact index
        let prev = this.get(index - 1);
        // create temp variable to hold the value of the next node
        let temp = this.prev.next;
        // set the prev.next to be the new node
        prev.next = newNode;
        // make the next value of the new node to be the temp value
        newNode.next = temp;
        this.count++
        return true;
    }

    remove(index) {
        if(index < 0 || index >= this.count) return undefined;
        // if index is the last item then we are just popping
        if(index === this.count - 1) return this.pop();
        // similarly if its 0 then we are just shifting
        if(index === 0) return this.shift();

        // get previous node
        let prev = this.get(index - 1)
        // make a variable for the node we want to remove
        let removed = prev.next;
        // set the previous node to the removed node's next value
        prev.next = removed.next;
        this.count--;
        // return the removed node
        return removed;
    }

    reverse() {
        // create a variable for start
        let node = this.head;
        // reverse the head and tail
        this.head = this.tail;
        this.tail = node;
        // create new variables to do the swaps
        let next;
        // set to null because you're going to set the value of next for the new tail to null
        let prev = null;
        // loop through and swap the nodes pointer
        for(let i = 0; i < this.count; i++) {
            // store the next value of the node
            next = node.next;
            // set the next value of the node
            node.next = prev;
            // swap the nodes
            prev = node;
            node = next;
        }
        return this;
    }
}

// Doubly linked list are the same but your starting node has another value, previous.
