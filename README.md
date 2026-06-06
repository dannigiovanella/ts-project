# Projekt Angular: Universitetsplattform med kursfiltering och eget ramschema

## Länk till webbplats
https://ohara-university.netlify.app/


### Fiktivt universitet: Oharas Universitetet
Beskrivning

Oharas Kurskatalog är en webbapplikation utvecklad i Angular. Applikationen gör det möjligt för användaren att söka, filtrera och sortera kurser samt skapa ett personligt ramschema genom att spara valda kurser.

Projektet är utvecklat som en Single Page Application där navigering sker utan sidomladdning. Kursdata hämtas från en lokal JSON-fil och presenteras dynamiskt i användargränssnittet.  

Projektet är utvecklat för att möta grundkraven för projektet men med ytterligare funktioner för möjlighet att nå högre betyg.  
 Ytterligare funktioner/design:
 - Startsida för att presentera webbplats
 - Feedbackmeddelande vid interaktion med kurser i kurslistan
 - Totalt sparade poäng/antal kurser sparade i ramschema visas i realtid i navbaren

## Grundkrav och funktioner:  

 - Visa kursutbud från JSON-fil
 - Fritextsökning på kurskod och kursnamn
 - Filtrering efter ämne
 - Sortering efter:
     - Kurskod
    - Kursnamn
    - Ämne
    - Högskolepoäng
 - Spara kurser till eget ramschema
 - Ta bort kurser från ramschemat
 - Beräkning av totalt antal högskolepoäng
 - Spara valda kurser i localStorage
 - Dynamisk uppdatering med Angular Signals
 - Responsiv design

## Tekniker
Projektet är utvecklat med:
HTML
Angular
TypeScript
SCSS
Router
Signals
HttpClient
LocalStorage

### Kursinformation/API
Kursinformationen finns i filen:

public/miun_courses.json

### HttpClieent och service
Data hämtas via Angular HttpClient och hanteras genom en separat service (courses.service).  
Ramschema hanteras med egen service (my-schedule-service)

### Statehantering

Applikationen använder Signals för lokal statehantering.

Signals används bland annat för:

 - Kursdata
 - Filtrering
 - Sortering
 - Ramschema
 - Feedbackmeddelanden

Computed signals används för:

 - Filtrerade kurslistor
 - Lista över unika ämnen
 - Total mängd högskolepoäng


