const swipe = document.getElementById('swipe');

swipe.oninput = () => {
    const pageViews = document.getElementById('pageviews')
    const price = document.getElementById('price')
    const term = document.getElementById('choicePaiement')
    var toggle = document.getElementById('toggle')

    if (toggle.checked == true) {
        term.textContent = '/year'

        if(Number(swipe.value) > 0 && Number(swipe.value) < 1 ) {
            pageViews.textContent = '10K'
            price.textContent = '$96 '
        } else if(Number(swipe.value) > 1 && Number(swipe.value) < 2) {
            pageViews.textContent = '50K'
            price.textContent = '$144 '
        } else if(Number(swipe.value) > 2 && Number(swipe.value) < 3) {
            pageViews.textContent = '100K'
            price.textContent = '$192 '
        } else if(Number(swipe.value) > 3 && Number(swipe.value) < 4) {
            pageViews.textContent = '500K'
            price.textContent = '$288 '
        } else if(Number(swipe.value) > 4) {
            pageViews.textContent = '1M'
            price.textContent = '$432 '
        }
    } else {
        term.textContent = '/month'
        if(Number(swipe.value) > 0 && Number(swipe.value) < 1 ) {
            pageViews.textContent = '10K'
            price.textContent = '$8 '
        } else if(Number(swipe.value) > 1 && Number(swipe.value) < 2) {
            pageViews.textContent = '50K'
            price.textContent = '$12 '
        } else if(Number(swipe.value) > 2 && Number(swipe.value) < 3) {
            pageViews.textContent = '100K'
            price.textContent = '$16 '
        } else if(Number(swipe.value) > 3 && Number(swipe.value) < 4) {
            pageViews.textContent = '500K'
            price.textContent = '$24 '
        } else if(Number(swipe.value) > 4) {
            pageViews.textContent = '1M'
            price.textContent = '$36 '
        }
    }


}
