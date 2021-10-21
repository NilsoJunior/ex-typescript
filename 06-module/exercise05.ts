class DataStore<T> {
    private _data: Array<T> = new Array(10);

    AddOrUpdate(index: number, item: T) {
        if(index >=0 && index <10) {
            this._data[index] = item;
        }
    }
}