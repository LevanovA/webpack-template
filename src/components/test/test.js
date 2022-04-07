import './test.scss'

export default async function test() {
    const s = await bar();
    console.log(s);
}

function bar() {
    return "bar";
}