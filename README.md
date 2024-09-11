# Descrição do Desafio RECINTOS DO ZOO

O desafio propõe o desenvolvimento de uma lógica para alocar animais nos recintos de um zoológico, garantindo que cada animal seja inserido em um ambiente adequado, respeitando a capacidade e o espaço disponível de cada recinto. Os recintos possuem uma capacidade máxima e os animais ocupam diferentes quantidades de espaço de acordo com seu tamanho. A solução deve:

1. Validar a entrada de dados — garantir que a quantidade e o tipo de animal sejam válidos.
2. Verificar a disponibilidade de espaço — certificar que há espaço suficiente em um ou mais recintos para acomodar os animais solicitados.
3. Retornar os recintos viáveis — indicar quais recintos podem abrigar os animais com base na capacidade restante.

O objetivo é fornecer uma resposta precisa sobre a viabilidade de acomodar os animais, respeitando as limitações do zoológico.

# Ferramentas Utilizadas
* Node.js: Plataforma utilizada para o desenvolvimento da aplicação.
* Jest: Framework de testes utilizado para garantir o correto funcionamento da lógica implementada.

# VALIDANDO A SOLUÇÃO
Para testar a solução com o seguinte comando:
```bash
npm test
```

# TESTES
Para garantir que a lógica funcione corretamente, foram criados testes automatizados usando o Jest. Os testes verificam:

* Entrada inválida de animais — garante que animais não reconhecidos sejam rejeitados.
* Validação de quantidade — garante que quantidades inválidas (zero ou negativas) sejam rejeitadas.
* Espaço suficiente nos recintos — verifica se o zoológico consegue alocar corretamente os animais de acordo com o espaço disponível.
* Recintos disponíveis — valida que os recintos viáveis são retornados corretamente para diferentes tipos e quantidades de animais.
