

const container = document.querySelector('.products')
const productBox = document.createElement('div')
container.appendChild(productBox)
productBox.className = 'product-container'

const info = data[0]
productBox.innerHTML = `
<div>${info.title}</div>
<div>${info.price}</div>
<div>${info.category}</div>
<div>${info.image}</div>
<div>${info.description}</div>

`
