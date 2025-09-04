Hooks.on("renderCompendiumDirectory", async () => {
	if (game.folders.getName("Rough Nights & Hard Days")) {
		await game.folders.getName("Rough Nights & Hard Days").update({"name":  "Noches agitadas y días difíciles"  })
		await game.folders.getName("A Rough Night At The Three Feathers").update({"name":  "Una noche agitada en Las Tres Plumas"  })
		await game.folders.getName("A Day At The Trials").update({"name":  "Un día en los juzgados"  })
		await game.folders.getName("Nastassia's Wedding").update({"name":  "La boda de Nastassia"  })
		await game.folders.getName("A Night At The Opera").update({"name":  "Una noche en la ópera"  })
		await game.folders.getName("Lord of Ubersreik").update({"name":  "El señor de Ubersreik"  })
	}
})