export declare class ListNode<T> {
    value: T;
    next: ListNode<T>;
    prev: ListNode<T>;
    constructor(value: any);
}
export declare class List<T> {
    private _head;
    private _tail;
    private _size;
    private _capacity;
    constructor(size?: number);
    iterator(): Generator<T, void, unknown>;
    [Symbol.iterator](): Generator<T, void, unknown>;
    get head(): ListNode<T>;
    get tail(): ListNode<T>;
    get capacity(): number;
    get size(): number;
    isFull(): boolean;
    isEmpty(): boolean;
    append(value: T): boolean;
    prepend(value: T): boolean;
    insert(value: T, prevValue: T): boolean;
    remove(value: any): any;
    removeHead(): T;
    removeTail(): T;
    traverse(): T[];
}
