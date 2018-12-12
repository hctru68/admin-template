//All function return value is boolean type
export function isNullOrEmptyObject(obj) {
    if (obj) return JSON.stringify(obj) === JSON.stringify({});
    else return true;
}

export function removeItemFromItems(item, items) {
    if (items && items.length > 0 && item) {
        const index = items.indexOf(item);
        if (index > -1) {
            items.splice(index, 1);
        }
    }
    return items;
}