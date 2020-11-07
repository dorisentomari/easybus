export declare class Queue<T> {
    private readonly _size;
    private _capacity;
    private readonly _data;
    constructor(size: number);
    clear(): boolean;
    capacity(): number;
    size(): number;
    isEmpty(): boolean;
    isFull(): boolean;
    front(): T;
    back(): T;
    enqueue(element: any): boolean;
    dequeue(): boolean;
    traverse(): T[];
}
