const Counter2 = (el) => {

    const counter2Node = document.querySelector(el);
    const plusNode = counter2Node.querySelector('[data-event="plus"]');
    const minusNode = counter2Node.querySelector('[data-event="minus"]');
    const valueNode = counter2Node.querySelector('.counter2__value');
    let count = 0;

    function plusHandler () {
        count++

        valueNode.innerHTML = count
    }

    function minusHandler () {
        count--

        valueNode.innerHTML = count
    }

    plusNode.addEventListener('click', plusHandler);
    minusNode.addEventListener('click', minusHandler);
}

export default Counter2

