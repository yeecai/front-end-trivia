https://abdulapopoola.com/2017/02/27/what-you-didnt-know-about-json-stringify/

Only the common types allowed


let foo = [Symbol(), undefined, function(){}, NaN, Infinity, null, 200, 'ok']
JSON.stringify(foo);
// "[null,null,null,null，null, null, 'ok']"
