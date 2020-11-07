export declare class LoopQueue<T> {
    private readonly _data;
    private _front;
    private _tail;
    private _size;
    constructor(capacity?: number);
    capacity(): number;
    size(): number;
    isEmpty(): boolean;
    isFull(): boolean;
    enqueue(e: any): boolean;
    dequeue(): false | T;
    traverse(): any[];
}
