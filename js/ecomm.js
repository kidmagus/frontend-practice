const sizes = document.querySelectorAll(".sizes")

sizes.forEach((size) => {
    const chosenSizes = size.querySelectorAll(".size")

    chosenSizes.forEach((chosenSize) => {
        chosenSize.addEventListener("click", () => {
            console.log(chosenSize)
        })
    })
    
})

