
| Név | Regisztráció |
|--|--|
| Követelmény | internet |
|Cél|Felhasználó regisztrálása|
|Előfeltétel| A felhasználó kitölti a mezőket
|Sikeres lefutás| Felhasználó rendelkezik egy fiókkal
|Sikertelen lefutás | A felhasználó nem kerül regisztrálásra
|Elsődleges aktor| Felhasználó
|Kiváltó esemény| Regisztráció gombra való kattintás
|Fő lépések|
||1.Regisztráció gombra kattintás
||2.Adatok kitöltése
||3.A felhasználó elindítja a regisztrációkérelmet a szerver felé
|Elágazó tevékenységek|
||2.1 Hibás adatok esetén nem engedjük tovább a felhasználót
||3.1 Szerverhiba esetén közöljük a felhasználóval, hogy a regisztráció sikertelen eredménnyel zárult