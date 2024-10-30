// 1.El programa tiene que elegir una palabra para adivnarla 
// array de palbra a adivinar 

   const LlistatParaules = ["latigo","sandia","pollo","chocolate","gas"];

// como elegir un elemento aleatorio de un vector

   let ParaulaSecreta;

// array con lineas de la palabra a adivinar (tantas lineas como letras)

   const ArrayParaulaGuions = [];

// Numero de fallos y aciertos

   let ArrayParaulaSecreta;

   let NumErrades=0;
   let NumEncerts=0;

// lista de letras ya dichas

   const LlistatLletres = [];

   
   function Inicialitzar () {
      var input = document.getElementById("letra");
      input.addEventListener("keypress", function(event) {
         if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("boton").click();
         }
      });

       // seleccio de la paraula de manera aleatoria
       // returns random integer from 0 to 9:
       //
       
       let posicion = Math.floor(Math.random() * LlistatParaules.length);
   

       // triem la paraula de l'array diccionario

       ParaulaSecreta = LlistatParaules[posicion];


       ArrayParaulaSecreta = Array.from(ParaulaSecreta);

       document.getElementById("paraula_secreta").innerHTML = ParaulaSecreta ;

       let num_guions = ArrayParaulaSecreta.length;
       for (let i=0;i<num_guions;i++) {
               ArrayParaulaGuions[i] = '_';
       }

       for (let i=0;i<num_guions;i++) {
         document.getElementById("paraula").innerHTML += 
         `${ArrayParaulaGuions[i]} `;
       }

      }

    function Enviar(){
      let encert = false;

      let lletra_escrita = document.getElementById("letra").value;
      
      // 2.- afegim la lletra a la llista per pantalla
      // i al array de llistatlletres

      LlistatLletres.push(lletra_escrita);
      document.getElementById("llistat_lletres").innerHTML += `${lletra_escrita} <br>`;
      // esborrem la lletra introduida al formulari
      
      document.getElementById("formulario").reset();

      for (let i = 0; i< ArrayParaulaSecreta.length; i++) {

      if (ArrayParaulaSecreta[i] == lletra_escrita) {
               ArrayParaulaGuions[i] = lletra_escrita;
               encert = true;
               NumEncerts++;
         }
      }

      
      if(!encert) {
         NumErrades++;
      }

      document.getElementById("paraula").innerHTML = "";


      for (let i=0;i<ArrayParaulaSecreta.length;i++) {
         document.getElementById("paraula").innerHTML += 
         `${ArrayParaulaGuions[i]} `;
       }

       document.getElementById("letra").focus();
      
       Dibuixar(NumErrades, NumEncerts);
    }

    function Dibuixar (errades, encerts) {
      // capturar id de la imatge mostrada

      let imatge = document.getElementById("imagen"); 

      switch(errades){
         case 0: 
            imatge.src = "./IMG/A0.png";
            break;

         case 1:
            imatge.src = "./IMG/A1.png";
            break;

         case 2:
            imatge.src = "./IMG/A2.png";
            break;

         case 3:
            imatge.src = "./IMG/A3.png";
            break;

         case 4:
            imatge.src = "./IMG/A4.png";
            break;

         case 5:
            imatge.src = "./IMG/A5.png";
            break;
         
         case 6:
            imatge.src = "./IMG/A6.png";
            break;

         default:
            imatge.src = "./IMG/A6.png";
            break;
  
      }
      if(NumEncerts>= ArrayParaulaSecreta.length){
         document.getElementById("ganar").style.display="block";
         document.getElementById("fraseencert").innerHTML =`Has guanyat. Ho has aconseguit en ${LlistatLletres.length} intents`;
      }
    
      else if(NumErrades>=6){
         document.getElementById("perder").style.display="block";
         document.getElementById("fraseerrada").innerHTML =`Has perdut. La resposta era ${ParaulaSecreta}`;
      }
    }
