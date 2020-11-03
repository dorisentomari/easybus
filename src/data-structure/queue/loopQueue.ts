// 循环队列
export class LoopQueue<T> {
  private readonly _data: Array<T>;
  private _front: number;
  private _tail: number;
  private _size: number;

  constructor(capacity = 10) {
    this._data = Array.from({ length: capacity + 1 });
    this._front = 0;
    this._tail = 0;
    this._size = 0;
  }

  capacity() {
    return this._data.length - 1;
  }

  size() {
    return this._size;
  }

  isEmpty() {
    return this._front === this._tail;
  }

  isFull() {
    return (this._tail + 1) % this._data.length === this._front;
  }

  enqueue(e) {
    if (this.isFull()) {
      return false;
    }
    this._data[this._tail] = e;
    this._tail = (this._tail + 1) % this._data.length;
    this._size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return false;
    }

    const ret = this._data[this._front];
    this._data[this._front] = null;
    this._front = (this._front + 1) % this._data.length;
    this._size--;
    return ret;
  }

  traverse() {
    const res = [];
    for (let i = this._front; i !== this._tail; i = (i + 1) % this._data.length) {
      res.push(this._data[i]);
    }
    return res;
  }
}
