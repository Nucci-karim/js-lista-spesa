const listaSpesa = ['verdure', 'carne', 'pasta', 'snaks']

let i = 0

const containerLista = document.getElementById('lista-spesa')

while (i < listaSpesa.length){

    const item = listaSpesa[i]
    const listItem = document.createElement('li')
    listItem.innerText = item
    containerLista.append(listItem)

    i++
}