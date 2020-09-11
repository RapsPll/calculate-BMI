{
    const test = () => {
        console.log("test podpięcia js do index.html");
    }

    updateTextResult = (bmi) => {
        const bmiElement = document.querySelector(".js-bmi");

        bmiElement.innerText = bmi;
    }

    const calculateBmi = (event) => {
        event.preventDefault(); //blokowanie formularza przed wysłaniem

        const weightElement = document.querySelector(".js-weight");
        const heightElement = document.querySelector(".js-height");

        const height = heightElement.value; // pobieranie wartości z pola wzrost i przypisanie go do zmiennej height
        const weight = weightElement.value; // pobieranie wartości z pola waga i przypisanie go do zmiennej weight

        bmi = weight / ((height / 100) ** 2); // wzór na obliczenie BMI i przymisanie go do zmiennej bmi

        updateTextResult(bmi);
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", calculateBmi);
        test();
    }
    init();

    console.log(typeof init === "function");

    
}