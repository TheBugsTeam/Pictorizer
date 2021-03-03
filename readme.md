# cloudified ☁️🎮

## 📙 Tartalomjegyzék
- [Leírás](#%EF%B8%8F-le%C3%ADr%C3%A1s)
- [Dokumentáció](#-dokument%C3%A1ci%C3%B3)
  - [Funkcionális követelmények](#funkcion%C3%A1lis-k%C3%B6vetelm%C3%A9nyek)
  - [Nem funkcionális követelmények](#nem-funkcion%C3%A1lis-k%C3%B6vetelm%C3%A9nyek)
  - [Use-case diagram](#use-case-diagram)
- [Használt technológiák](#-haszn%C3%A1lt-technol%C3%B3gi%C3%A1k)
- [Használt eszközök](#-haszn%C3%A1lt-eszk%C3%B6z%C3%B6k)

## 🖊️ Leírás

Manapság egyre elterjedtebb a cloudgaming fogalma, mely lehetővé teszi a videojáték távoli szerveren történő futtatását. Ehhez elég megfelelő internetkapcsolat és egy *potato* pc *(ppc)*. 

A különböző szolgáltatók más-más játékokat *hostolnak* a szervereiken. Ennek a weboldalnak a célja, hogy megnézzük, melyik játékot, melyik szolgáltatónál tudjuk játszani.

## 📄 Dokumentáció

### Funkcionális követelmények:
- Játékok keresése regisztráció nélkül
- Ha elérhető a játék, listázzuk ki, hogy hol
- Ha nem érhető el a játék semelyik szolgálatnál azt közöljük a felhasználóval
- Lehessen regisztrálni, így akár a saját steam, epic, gog, origin stb. könyvtárunkat automatikusan be tudjuk rakni a library-be
- Fel tudjunk venni játékot saját library-ba
- Legyen link a játékhoz hogy meg tudjuk venni, azon a platformon, ahol akarjuk
- *Fórum*
- Véleményzés a játékokhoz

### Nem funkcionális követelmények:
 - A program ne sértse meg az etikai kódexet (web scraping)
 - Felhasználók jelszavainak titkosítása (bcryt)
 - A felhasználói felület könnyen átlátható legyen
 - Ne fagyjon le a program hibás bemenetek esetén sem
 - Ne töltsön keresésnél sokat (mondjuk napi 2x-i scrape)

### Use-case diagram:

<img src="https://github.com/TheBugsTeam/cloudified/blob/main/Documentation/images/cloudified-use-case.png" width="700">


## 🔧 Használt technológiák:
 - [Node.js](https://nodejs.org/en/)
<p align="left">
  <img width=200px src="https://raw.githubusercontent.com/TheBugsTeam/cloudified/main/Documentation/images/Node.js_logo.svg">
</p>

 - [Express.js](https://expressjs.com/)
<p align="left">
  <img width=200px src="https://raw.githubusercontent.com/TheBugsTeam/cloudified/main/Documentation/images/Expressjs.png">
</p>

 - [mongoDB](https://www.mongodb.com/)
<p align="left">
  <img width=200px src="https://raw.githubusercontent.com/TheBugsTeam/cloudified/main/Documentation/images/MongoDB_Logo.svg">
</p>

 - [React.js](https://reactjs.org/)
<p align="left">
  <img width=200px src="https://raw.githubusercontent.com/TheBugsTeam/cloudified/main/Documentation/images/React-icon.svg">
</p>

 ***További használt package-ek a [`package.json`](https://github.com/TheBugsTeam/cloudified/blob/main/package.json) fájlban találhatók meg***

## 🔨 Használt eszközök:
 - [Visual Studio Code](https://code.visualstudio.com/)
 
<p align="left">
  <img width=100px src="https://raw.githubusercontent.com/TheBugsTeam/cloudified/main/Documentation/images/Visual_Studio_Code_1.35_icon.svg">
</p>

- [Figma](https://www.figma.com/)
<p align="left">
  <img height=100px src="https://raw.githubusercontent.com/TheBugsTeam/cloudified/main/Documentation/images/Figma-logo.svg">
</p>

 - [Postman](https://www.postman.com/)
<p align="left">
  <img width=150px src="https://raw.githubusercontent.com/TheBugsTeam/cloudified/main/Documentation/images/Postman.png">
</p>

Sorry for the long post, here's a potato 🥔
