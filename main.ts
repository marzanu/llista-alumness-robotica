input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= lista_de_texto.length - 1; index++) {
        basic.showString("" + (lista_de_texto[index]))
        basic.pause(1000)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (lista_de_texto[0]))
    basic.pause(1000)
    basic.showString("" + (lista_de_texto[1]))
    basic.pause(1000)
    basic.showString("" + (lista_de_texto[2]))
    basic.pause(1000)
})
let lista_de_texto: string[] = []
lista_de_texto = [
"Marc Z",
"Oriol",
"Giorgi",
"Bernat",
"Dayana",
"Nayeli",
"Maria clara",
"Marc E"
]
let lista = [
0,
1,
2,
3,
4,
5,
6,
7
]
basic.forever(function () {
	
})
