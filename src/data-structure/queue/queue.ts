// 数组队列
export class Queue<T> {
  private readonly _size: number;
  private _capacity: number;
  private readonly _data: Array<T>;

  constructor(size: number) {
    this._size = size;
    this._capacity = 0;
    this._data = [];
  }

  clear() {
    this._data.splice(0, this._capacity);
    this._capacity = 0;
    return true;
  }

  capacity() {
    return this._capacity;
  }

  size() {
    return this._size;
  }

  isEmpty() {
    return this._capacity === 0;
  }

  isFull() {
    return this._capacity === this._size;
  }

  front() {
    if (this.isEmpty()) {
      return null;
    }
    return this._data[0];
  }

  back() {
    if (this.isEmpty()) {
      return null;
    }
    return this._data[this._capacity - 1];
  }

  // O(1)
  enqueue(element) {
    if (this.isFull()) {
      return null;
    }
    this._data.push(element);
    this._capacity++;
    return true;
  }

  // O(n)
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    this._data.splice(0, 1);
    this._capacity--;
    return true;
  }

  traverse() {
    return this._data;
  }
}
