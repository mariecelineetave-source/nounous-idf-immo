# La base de nounous.idf.immo

Il n'y en a pas en propre : **ce site partage la base de toute la famille
idf.immo**, avec gardiens, étudiants, associations et pros. Elle est décrite
et maintenue dans le dépôt [`app-idf-immo`](https://github.com/mariecelineetave-source/app-idf-immo),
qui sert aussi le back-office **app.idf.immo**.

| | |
|---|---|
| Socle | `base/socle.sql` du dépôt `app-idf-immo` |
| Vue `nounous` | créée par `base/correctif-1.sql` du même dépôt |
| Coordonnées publiques | `config.js`, ici |

## Ce que ce site lit

- la vue **`nounous`** — sa fiche (identifiant, prénom, nom, e-mail,
  téléphone, résidence, commune, IBAN) ;
- les tables communes **`opportunites`**, **`evenements`** et **`primes`**,
  filtrées par la base elle-même : une nounou ne voit que les siennes.

## L'erreur à ne pas refaire

Ce site a été ouvert le 20 août 2026 sur un projet Supabase à lui
(`bhyshzolavkgcdtdfrkj`). Conséquence : ses fiches et ses opportunités
n'arrivaient pas dans le back-office, et la vue `nounous` du socle ne
recevait rien. Raccordé au socle commun le 21 août 2026.

**Jamais un second projet Supabase pour un site de la famille.**
