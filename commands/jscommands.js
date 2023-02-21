const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

const exampleEmbed = new EmbedBuilder()
	.setColor("Yellow")
	.setTitle("Comandos do JavaScript")
	.addFields(
        { name: '\u200B', value: '\u200B' },
		{ name: 'const', value: 'Cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura.', inline: true },
		{ name: 'for', value: 'Cria um loop que consiste em três expressões opcionais, dentro de parênteses e separadas por ponto e vírgula, seguidas por uma declaração ou uma sequência de declarações executadas em sequência.', inline: true },
		{ name: 'if...else', value: 'A condicional if é uma estrutura condicional que executa a afirmação, dentro do bloco, se determinada condição for verdadeira. Se for falsa, executa as afirmações dentro de else.', inline: true },
	)

module.exports = {
    data: new SlashCommandBuilder()
        .setName("javascript")
        .setDescription("Relembrar comandos do JS"),

    async execute(interaction) {
        await interaction.reply({ embeds: [exampleEmbed] })
    }
}