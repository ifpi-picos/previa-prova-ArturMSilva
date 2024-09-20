// Função 1 - (maiorNumero): Retorna o maior número da lista usando Math.max(). 
// Se a lista for vazia ou inválida, retorna null.
export function maiorNumero(lista) {
    if(lista.length === 0 || typeof lista == "string") return null;
    
    return Math.max(...lista)
}

// Função 2 - (verificarParOuImpar): Verifica se um número é par ou ímpar usando o operador %.
export function verificarParOuImpar(numero) {
    if(typeof numero != "number") return null;

    const resto = numero % 2
    if(resto === 0){
        return "Par"
    } return "Ímpar"
}

// Função 3 - (contarCaracterA): Conta quantas vezes o caractere 
// 'a' ou 'A' aparece em uma string usando um loop while.
export function contarCaracterA(palavra, letra) {
    if (typeof palavra !== "string") return null

    let i = 0
    let quantidade = 0
    while(i < palavra.length){
        if(palavra[i].toLowerCase() === letra.toLowerCase()){
            quantidade++
        }
        i++
    } return quantidade
}

// Função 4 - (atualizarPropriedade): Atualiza o valor de uma 
// propriedade existente em um objeto. Se a chave não existir, retorna null.
export function atualizarPropriedade(objeto, propriedade, valor) {
    if (propriedade in objeto){
        objeto[propriedade] = valor
        return objeto
    } return null
}