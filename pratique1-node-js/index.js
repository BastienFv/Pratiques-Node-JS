const fs = require('fs/promises');

async function write(firstname, lastname, resiliationService, date, duration) {

    console.log("Veuillez patienter.");

  try {
    const content = `Madame, Monsieur,

    Par la présente, je vous demande de bien vouloir mettre fin au contrat de ${resiliationService}, dès le
    ${date}.` 
    
    + 

    `${duration <1 ? "La possibilité de résilier ce contrat m’est offerte puisque le présent contrat est sans engagement." : 
    "La possibilité de résilier ce contrat m’est offerte car la durée d'engagement de " + `${duration}` + " an est dépassée. "}` 
    
    +
     
    `J’ai bien noté, qu‘en application des dispositions contractuelles qui nous lient, cette résiliation devrait
    prendre effet immédiatement ou selon les délais prévus dans le cas d’une résiliation anticipée.

    Bien cordialement,
    ${firstname} ${lastname}`;

    await fs.writeFile(`./courrier-${resiliationService}.txt`, content);
    console.log("Le fichier a été créé avec succès.");
  } catch (err) {
    console.log(err);
  };
};

const arguments = process.argv;
const lastname = arguments[2];
const firstname = arguments[3];
const resiliationService = arguments[4];
const date = arguments[5];
const duration = arguments[6];

write(firstname, lastname, resiliationService, date, duration);