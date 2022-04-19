class ArrayList {
    constructor() {
        this.count = 0;
        this.positions = {};
    }
    
    size() {
        return this.count;
    }
    
    add(val) {
        this.positions[this.count] = val;
        this.count++;
    }

    get(index) {
        if(index > this.count || index < 0) {
            return `Out of bounds`;
        }
        return this.positions[index];
    }

    set(index, val) {
        if(index > this.count || index < 0) {
            return `Out of bounds`;
        }
        this.positions[index] = val;
    }

    remove(index) {
        delete this.positions[index];
        this.count--;

        for(let i = index; i < this.count; i++) {
            this.positions[i] = this.positions[i + 1];
            delete this.positions[i + 1];
        }
    }

    toString() {
        let string = '['
        for(let i = 0; i < this.count; i++) {
            if(i === this.count -1) {
                string += `${this.positions[i]}]`  
                break;
            }
            
            string += `${this.positions[i]}, `


        }
        return string;
    }
}

const x = new ArrayList();

x.add(5);
x.add(4);
x.add(3);
x.add(2);
x.add(1);

console.log(x + '');
