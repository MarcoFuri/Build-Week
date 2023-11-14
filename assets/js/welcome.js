/* 1- pagina introduttiva:

HEADER 
- Sfondo sul body
- Logo in alto nel suo div dimensione fissa 
HEADER

DIV
MAIN 
- H1 3-4 rem "welcome span>to your exam <span"
- H2 ìinstructions
-p 'we don't'
-UL con all'interno qualche span con il grassetto. classe unica.
MAIN

FOOTER
- Checkbox Required. Quando è checked, il pulsante "proceed" si illumina e diventa utilizzabbile. 
- h4/h5 (o p con css)
- Button con addEventListener per capire quando il checkbox è checked e modificarsi.
Azione cambio pagina (ancor per  andare all'html creato)
FOOTER
DIV

--2 pagina quiz--
HEADER
- Logo in alto nel suo div dimensione fissa
- timer radius 100%. template. setInterval. box shadow.
HEADER

DIV
MAIN 
- domanda h1. Span per grassetto.
- 4 button delle risposte. Azione che manda alla pagina successiva. 
Logica risposta corretta/sabagiata classe giusta e sbagliata.
Box base transparent.
Selezione domanda cambia colorore voiola. Cambia gradient bordo bianco e viola.
Border radius e stile bordo colore gradient.
Scritta bottone h4/h5.

logiche js:
-scheletro html e css 
-js dom manipolazione per il contenuto bottone e cambio domanda
- timer (lacrime amare)

logiche html
-stampa numero domanda
-h3 domanda span riempito da js con numero domanda a cui siamo
 altro span  con numero viola
MAIN 

FOOTER
- scritta numero domanda h3. js domanda 1, 2 ecc stampa la domanda e il 10 rimane fisso(viola).
FOOTER
DIV

--3 pagina results--
HEADER
-logo in alto div dimensione fissa
HEADER

DIV
MAIN
-h1 results
-h2/h3 the..(sottotitolo). fonweight più leggero di h1.
-h2 correct e wrong. ridotto fontweight
-percentuali: h2 bold
-risultati domande giuste e sbagliate h3/h4
-grafico (cerca libreria) div border radius 50%. background color transparent. 
border color colleghiamo le percentuali. testo in mezzo: p/h6
- percentuale superamento test stampi un testo anziche un altro (css testo)
MAIN

FOOTER
- bottone rate us link. background color transparent.
FOOTER
DIV

--4  pagina feedback--
HEADER
- sfondo body
-logo in alto div dimensione fissa 
HEADER

DIV
MAIN
- h1 tell us
-h2 from 0 to...font-weight più leggero di h1
- stelline: ogni stella ha il suo div (10) e switch case con cambio classe colore
(da 1 a 4 un colore, da 5 a ..ecc)
-h2 live.. font.weight più leggero di h1
- input type text. (80% width) bordo in basso. background transparent. palceolder.
(paddign a sinistra)
MAIN

FOOTER
- button finto more info. shadow. colore fluo. 
FOOTER
DIV