import 'core-js/stable'
import 'regenerator-runtime/runtime'
import './assets/style/new.css'
import './assets/style/some.scss'
import './assets/img/pages/img1.jpg'
import Main from "./pages/main";

// const $counter = document.querySelector('.counter');
//
// $counter.addEventListener('click', function () {
//     console.log(111, 'do some')
// })

Main();

async function start() {
    return await Promise.resolve('async is working')
}

start().then(console.log)
// const img = document.querySelector('.img');
//
// img.setAttribute('src', imgPath)