import Counter from "../components/counter";
import Counter2 from "../components/counter2";
import '../components/link-icon/link-icon.scss'

const Main = () => {
    const counter = new Counter('.counter');
    const clicked = document.querySelector('.text');

    clicked.addEventListener('click', function () {
        counter.plus();
    });

    Counter2('.counter2')
}

export default Main;