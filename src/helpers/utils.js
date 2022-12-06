export function mapObject(obj, fn, ctx) {
    return Object.keys(obj).reduce((a, b) => {
        a[b] = fn.call(ctx || null, b, obj[b]);
        return a;
    }, {});
}




