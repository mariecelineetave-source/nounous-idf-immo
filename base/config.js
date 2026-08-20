/* =====================================================================
   nounous.idf.immo — coordonnées de la base

   Ces deux valeurs sont PUBLIQUES par conception : elles voyagent dans le
   navigateur de chaque visiteuse, et Supabase les qualifie lui-même de
   « safe to use in a browser ». Les voir ne donne accès à rien.

   Ce qui protège réellement les données, ce sont les règles installées par
   base/schema.sql : la base refuse de servir à une nounou autre chose que
   ses propres opportunités, quelle que soit la requête qu'on lui adresse.

   La clé « secrète » (sb_secret_…), elle, n'a jamais sa place dans ce dépôt
   ni dans aucun fichier du site.

   Projet Supabase « nounous-idf-immo » — organisation idf.immo, région
   West EU (Paris, eu-west-3). Renseigné le 20 août 2026.
   ===================================================================== */

window.CONFIG_BASE = {
  url: "https://bhyshzolavkgcdtdfrkj.supabase.co",
  cle: "sb_publishable_RoGz-PEaVBcQw51Wt7xiZg_REJDmlQ2"
};
