export declare class Stack<T> {
    private _capacity;
    private readonly _size;
    private readonly _data;
    constructor(size?: number);
    clear(): boolean;
    capacity(): number;
    size(): number;
    isEmpty(): boolean;
    isFull(): boolean;
    push(element: any): boolean;
    pop(): T;
    top(): T;
    traverse(): T[];
}
