/* 1 - pagina introduttiva:

HEADER
- Sfondo sul body
- Logo in alto nel suo div dimensione fissa

DIV
MAIN
- H1 3-4 rem "welcome span>to your exam <span"
- H2 "instructions"
- p "we don't.."
- UL con all'interno qualche span con il grassetto. classe unica.

FOOTER
- Checkbox REQUIRED. Quando è checked, il pulsante "proceed" si illumina e diventa 
utilizzabile.
- H4/H5 (o p con CSS)
- Button con addEventListener per capire quando il checkbox è checked e modificarsi.
Azione cambio pagina. (anchor per andare nell'HTML creato.)
DIV

2 - pagina Quiz:

HEADER
- Logo in HTML
- H1 gestito da css (domanda)
- timer radius 100%. template. setInterval.

DIV
MAIN
- 4 button delle risposte. Azione che manda alla pagina successiva. 
Box base transparent.
Logica risposta corretta/sbagliata classe giusta e sbagliata.
Seleziona domanda cambia colore in viola. Cambia gradient border e viola.
Border radius e stile bordo colore gradient.
Scritta bottone h4/h5.

- LOGICHE JS:
-Scheletro HTML e css
-JS dom manipulation per il contenuto bottone e cambio domanda.

FOOTER
- scritta numero domanda H3. Js domanda 1, 2 ecc stampa la domanda e il 10 rimane fisso(viola).
DIV

3 - Pagina results:

HEADER
- Logo in alto fisso

DIV
MAIN
- H1 results
- H2/H3 "the summary..". font weight 
- H2 correct/wrong. fontweight più leggero di H1
- Pencentuali: H2 bold
- risultati domande giuste e sbagliate h3/h4
- grafico cerca libreria. oppure: div border radius 50%. background-color transparent. border-color colleghiamo le percentuali.
testo in mezzo: p/h6. Percentuale superamento test stampi un testo anziche un altro (stile css del testo proprio)
MAIN
FOOTER
- Button link anchor. background-color transparent.
DIV

4 - Pagina feedbacks:

- Sfondo sul body

HEADER
- Logo in alto dimensione fissa.

DIV
MAIN
- H1 "tell us.."
- H2 "from 0 to.." font-weight più leggero
- ogni stella ha il suo div (10) e switch case cambio classi colori (da 1 a 4 un colore, da 5 a.. ecc)
- H2 "Leave.." font-weight più leggero
- input type text con bordo basso, background color transparent e placeholder (percentuale disposizione circa 80% width)

FOOTER
- button finto con shadow e colore fluo
DIV
