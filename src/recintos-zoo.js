//código solução

class RecintosZoo {
    constructor() {
        // Define todos os recintos com capacidade e espaço atual disponível
        this.recintos = [
            { id: 1, capacidade: 10, animais: [] },
            { id: 2, capacidade: 5, animais: [] },
            { id: 3, capacidade: 7, animais: [] },
            { id: 4, capacidade: 8, animais: [] }
        ];
        
        // Define os tamanhos dos animais
        this.animais = {
            'MACACO': { tamanho: 2 },
            'CROCODILO': { tamanho: 3 }
        };
    }

    analisaRecintos(animal, quantidade) {
        // Valida o tipo de animal
        if (!this.animais[animal.toUpperCase()]) {
            return { erro: "Animal inválido", recintosViaveis: [] };
        }

        // Valida a quantidade
        if (quantidade <= 0) {
            return { erro: "Quantidade inválida", recintosViaveis: [] };
        }

        const tamanhoAnimal = this.animais[animal.toUpperCase()].tamanho;
        const recintosViaveis = this.recintos
            .filter(r => r.capacidade >= quantidade * tamanhoAnimal) // essa parte verifica se o recinto pode acomodar a quantidade de animais
            .map(r => `Recinto ${r.id} (espaço livre: ${r.capacidade - quantidade * tamanhoAnimal} total: ${r.capacidade})`);

        if (recintosViaveis.length === 0) {
            return { erro: "Não há recinto viável", recintosViaveis: [] };
        }

        return { erro: null, recintosViaveis };
    }
}

export { RecintosZoo as RecintosZoo };

