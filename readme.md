# cloudified

Manapság egyre elterjedtebb a cloudgaming fogalma, mely lehetővé teszi a videojáték távoli szerveren történő futtatását. Ehhez elég megfelelő internetkapcsolat és egy *potato* pc *(ppc)*. 

A különböző szolgáltatók más-más játékokat *hostolnak* a szervereiken. Ennek a weboldalnak a célja, hogy megnézzük, melyik játékot, melyik szolgáltatónál tudjuk játszani.

**Funkcionális követelmények:**
- Játékok keresése regisztráció nélkül
- Ha elérhető a játék, kilistázzuk ki, hogy hol
- Ha nem érhető el a játék semelyik szolgálatnál az közöljük a felhasználóval
- Lehessen regisztrálni, így akár a saját steam, epic, gog, origin stb. könyvtárunkat automatikusan be tudjuk rakni a library-be
- Fel tudjunk venni játékot saját library-ba
- Legyen link a játékhoz hogy meg tudjuk venni, azon a platformon, ahol akarjuk

**Nem funkcionális követelmények:**
 - A program ne sértse meg az etikai kódexet (web scraping)
 - Felhasználók jelszavainak titkosítása (bcryt)
 - A felhasználói felület könnyen átlátható legyen
 - Ne fagyjon le a program hibás bemenetek esetén sem
 - Ne töltsön keresésnél sokat (mondjuk napi 2x-i scrape)

**Use-case diagram:**

![alt text](https://github.com/TheBugsTeam/cloudified/blob/main/Documentation/images/cloudified-use-case.png)
