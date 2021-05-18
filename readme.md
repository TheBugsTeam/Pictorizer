# cloudified ☁️

# 🎮 [CLOUDIFIED](https://cloudified.herokuapp.com/)

## 💾 Telepítés

**`$ git clone https://github.com/TheBugsTeam/cloudified.git`**

**`$ cd cloudified`**

**`$ npm install`**
_a klins mappában lévőt is_

**`$ npm run dev`**

## 📙 Tartalomjegyzék

- [Leírás](#%EF%B8%8F-le%C3%ADr%C3%A1s)
- [Dokumentáció](#-dokument%C3%A1ci%C3%B3)
  - [Funkcionális követelmények](#funkcion%C3%A1lis-k%C3%B6vetelm%C3%A9nyek)
  - [Nem funkcionális követelmények](#nem-funkcion%C3%A1lis-k%C3%B6vetelm%C3%A9nyek)
  - [Use-case diagram](#use-case-diagram)
  - [Use-case táblázatok](https://github.com/TheBugsTeam/cloudified/tree/main/Documentation/use-case%20tables)
    - [Regisztráció](https://github.com/TheBugsTeam/cloudified/blob/main/Documentation/use-case%20tables/Registration.md)
    - [Keresés](https://github.com/TheBugsTeam/cloudified/blob/main/Documentation/use-case%20tables/Search.md)
    - [Komment írása](https://github.com/TheBugsTeam/cloudified/blob/main/Documentation/use-case%20tables/Write%20a%20comment.md)
- [Használt technológiák](#-haszn%C3%A1lt-technol%C3%B3gi%C3%A1k)
- [Használt eszközök](#-haszn%C3%A1lt-eszk%C3%B6z%C3%B6k)

## 🖊️ Leírás

Manapság egyre elterjedtebb a cloudgaming fogalma, mely lehetővé teszi a videojáték távoli szerveren történő futtatását. Ehhez elég megfelelő internetkapcsolat és egy _potato_ pc _(ppc)_.

A különböző szolgáltatók más-más játékokat _hostolnak_ a szervereiken. Ennek a weboldalnak a célja, hogy megnézzük, melyik játékot, melyik szolgáltatónál tudjuk játszani.

## 📄 Dokumentáció

### Funkcionális követelmények:

- Játékok keresése regisztráció nélkül
- Ha elérhető a játék, listázzuk ki, hogy hol
- Ha nem érhető el a játék semelyik szolgálatnál azt közöljük a felhasználóval
- Lehessen regisztrálni, így akár a saját steam, epic, gog, origin stb. könyvtárunkat automatikusan be tudjuk rakni a library-be
- Fel tudjunk venni játékot saját library-ba
- Legyen link a játékhoz hogy meg tudjuk venni, azon a platformon, ahol akarjuk
- _Fórum_
- Véleményzés a játékokhoz

### Nem funkcionális követelmények:

- A program ne sértse meg az etikai kódexet (web scraping)
- Felhasználók jelszavainak titkosítása (bcryt)
- A felhasználói felület könnyen átlátható legyen
- Ne fagyjon le a program hibás bemenetek esetén sem
- Ne töltsön keresésnél sokat (mondjuk napi 2x-i scrape)

### Use-case diagram:

<p align="center">
  <img src="https://github.com/TheBugsTeam/cloudified/blob/main/Documentation/images/cloudified-use-case.png" width="700">
</p>

## 🔧 Használt technológiák:

|   Mire    |                                                                                Mit                                                                                 |                 Link                 |
| :-------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------: |
| Back-end  |  <a href="https://nodejs.org/en/"><img width=50px src="https://raw.githubusercontent.com/TheBugsTeam/cloudified/main/Documentation/images/Node.js_logo.svg"></a>   |  [Node.js](https://nodejs.org/en/)   |
|  Routing  |   <a href="https://expressjs.com/"><img width=100px src="https://raw.githubusercontent.com/TheBugsTeam/cloudified/main/Documentation/images/Expressjs.png"></a>    | [Express.js](https://expressjs.com/) |
|    DB     | <a href="https://www.mongodb.com/"><img width=100px src="https://raw.githubusercontent.com/TheBugsTeam/cloudified/main/Documentation/images/MongoDB_Logo.svg"></a> | [mongoDB](https://www.mongodb.com/)  |
| Front-end |    <a href="https://reactjs.org/"><img width=50px src="https://raw.githubusercontent.com/TheBugsTeam/cloudified/main/Documentation/images/React-icon.svg"></a>     |   [React.js](https://reactjs.org/)   |

**_További használt package-ek a [`package.json`](https://github.com/TheBugsTeam/cloudified/blob/main/package.json) fájlban találhatók meg_**

## 🔨 Használt eszközök:

|       Mire       |                                                                                           Mit                                                                                           |                         Link                         |
| :--------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------: |
|     Kódolás      | <a href="https://code.visualstudio.com/"><img width=50px src="https://raw.githubusercontent.com/TheBugsTeam/cloudified/main/Documentation/images/Visual_Studio_Code_1.35_icon.svg"></a> | [Visual Studio Code](https://code.visualstudio.com/) |
|     Látvány      |             <a href="https://www.figma.com/"><img height=40px src="https://raw.githubusercontent.com/TheBugsTeam/cloudified/main/Documentation/images/Figma-logo.svg"></a>              |           [Figma](https://www.figma.com/)            |
| Testing requests |              <a href="https://www.postman.com/"><img width=90px src="https://raw.githubusercontent.com/TheBugsTeam/cloudified/main/Documentation/images/Postman.png"></a>               |         [Postman](https://www.postman.com/)          |

Sorry for the long post, here's a potato [🥔](https://www.youtube.com/watch?v=dQw4w9WgXcQ)
