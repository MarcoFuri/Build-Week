/* 
1 pagina welcome

- Sfondo sul body

<header>
- Logo in alto nel suo div dimensione fissa
</header>

<div>
<main>
- H1 3-4 rem "welcome span>to your exam <span"
- H2"instructions"
- p "we don't.."
- UL con all'interno qualche span con il grassetto. classe unica;
</main>

<footer>
- checkbox REQUIRED. Quando è checked, il pulsante "proceed" si illumina e diventa utilizzabile.
- H4/H5 (o p con CSS)
- Button con addEventListener per capire quando il checkbox è checked e modificarsi.
Azione cambio pagina. (anchor per andare nell'HTML creato.)
</footer>
</div>


2 pagina quiz

- Sfondo sul body

<header>
- Logo in alto nel suo div dimensione fissa
- timer radius 100% template. setInterval.(progress bar)
</header>

<div>
<main>
- domanda h1. Span per grassetto.

- 4 button delle risposte. Azione che manda alla pagina successiva. Logica risposta corretta /sbagliata. 
Border radius e stile bordo color gradient. 
Logica della risposta corretta/sbagliata classe giusta e sbagliata. Selezione domanda cambia colore viola. Cambia gradient bordo bianco e viola.
Box transparent.
Scritta bottone h4/h5.
- scritta numero domanda h3. js domanda 1, 2 ecc stampa la domanda e il 10 rimane fisso(viola).

logiche JS:
- JS: dom manipulazione per il contenuto del bottone e cambio domanda
- timer (lacrime amare)

logiche HTML:
- scheletro HTML e CSS
- stampa numero domanda
- h3 domanda, span che viene riempito da js col numero della ndomanda a cui siamo. un altro span con "/10" scritto in viola.
</main>
</div>



3 pagina results

- Sfondo sul body

<header>
- Logo in alto nel suo div dimensione fissa
</header>

<div>
<main>
- h1 Results
- h2/h3 the...(sottotiltolo). fontweight più leggero di h1.
- h2 correct e wrong. - Logo in alto nel suo div dimensione fissa
- percentuali: h2 bold
- risultati domande giuste e sbagliate h3/h4
- grafico (cerca libreria).
Oppure: div border radius 50%. background-color transparent. border-color colleghiamo le percentuali. testo in mezzo: p/h6. Percentuale superamento del test stampi un testo anziché un altro(stile css del testo proprio)
</main>

<footer>
- Button link. background-color transparent. 
</footer>
</div>




4 pagina feedback

- Sfondo sul body

<header>
- Logo in alto nel suo div dimensione fissa
</header>

<main>
- h1 tell us 
- h2/h3 sottotitolo fontweight più leggero di h1.
- stelline rating, ognuna ha il uso div(10) e switch case con cambio classe colori (da 1 a 4 un colore, da 5 a 10 un altro)

-  h2/h3 leave us... fontweight più leggero di h1.
- input-text type:text con 80% width, con bottom-border, background-color transparent. placeholder. padding a sinistra'
</main>

<footer>
- button finto con shadow stesso colore del backgroud-color del button(per fare effetto alone fluorescente)
</footer>
*/


//classi e id
/* button css unico class:button



*/