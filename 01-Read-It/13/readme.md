# READ IT
## Oefening 13
* Bekijk de parseMovieData functie. Wat is er hier anders? Waarom hier geen forEach? Bekijk de documentatie van for...in

The big differce is less code. Instead of adding wrap with tag every time, in the excersise 13, we just the ``(empty backticks) which automaticly adds everything in the array.
More efficiant way to work.

* Waarom staat er geen 'return' bij de parseMovieData functie?

Because the code already says to show al the movies, there is no need for that. (I think)



* Bekijk de documentatie van de .sort() functie. Leg uit hoe die hier is toegepast.

In eigen woorden: deze methode sorteert als het ware de arrays terug op zijn plaats en keert dan terug naar de array.

The sort() method sorts the elements of an array in place and returns the array. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.




* Merk de 2 console.table() functies op. Log in oef10 ook eens de movies array voor en na het aanroepen van de createList functie. Wat is het verschil? Kan je verklaren waarom?

The createList maakt een lijst met alle functies/bestanden die je we verder zouden willen gebruiken.
In de toekomst kunnen we dan createList aanroepen in de plaats van al die dingen op nieuw te documenteren.
