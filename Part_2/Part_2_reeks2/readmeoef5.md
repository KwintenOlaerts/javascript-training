
b = 2

I++ is known, it adds 1 to I, maar voegt dan toch de oospronkelijke waarde toe.
++b: doet ook +1, maar geeft het meteen terug.

b--: trekt 1 af van, maar geeft dat niet meteen weer.
--b trekt 1 af, en geeft dat meteen weer.



a=b++;  Waarde is 3, maar eerste keer zal hij de orginele waarde 2 teruggeven.
a=++b;  waarde is 3
a=b--;  waarde is 1, maar eerste keer zal hij de orginele waarde 2 teruggeven. 
a=--b;  waarde is 1
a+=b++; Waarde is 2, aangezien a een lege waarde is. Orgineel doet a+ het volgende: het voegt de waarde van de optelsom op.
a=1; a+=++b; 1+3= 4 (a is 1, ++b is 3)
a=1; a-=b++; a- is hetzelfde als a - b++, dus hier 1-3.
a=1; a-=++b; 1-3= -2
a=1; a+=b--; 1 voor elk van de bewerkingen de uitgevoerde formule, de waarde van a na de bewerking en de waarde van b na de bewerking weer 1+2
a=1; a+=--b; = a + b -1 dus in dat geval is het 1 + 1