/* =====================================================================
   nounous.idf.immo — coordonnées de la base

   La base n'appartient pas à ce site : c'est celle de toute la famille
   idf.immo, la même que gardiens, étudiants, associations et pros,
   pilotée depuis app.idf.immo (dépôt app-idf-immo). On ne crée JAMAIS un
   second projet Supabase pour un site de la famille : Marie-Céline doit
   voir tous les réseaux au même endroit.

   Ce site a justement vécu l'erreur : ouvert le 20 août 2026 sur un projet
   à lui (bhyshzolavkgcdtdfrkj), ses fiches et ses opportunités
   n'arrivaient pas dans le back-office. Raccordé au socle commun le
   21 août 2026.

   Ces deux valeurs sont PUBLIQUES par conception : elles voyagent dans le
   navigateur de chaque visiteuse, et Supabase les qualifie lui-même de
   « safe to use in a browser ». Les voir ne donne accès à rien. Ce qui
   protège les données, ce sont les règles par ligne du socle : la base
   refuse de servir à une nounou autre chose que ses propres opportunités.

   La clé secrète (sb_secret_…) n'a sa place ni ici ni dans aucun fichier.

   La vue « nounous » que ce site interroge est créée par le fichier
   base/correctif-1.sql du dépôt app-idf-immo.
   ===================================================================== */

window.CONFIG_BASE = {
  url: "https://uiciolavnalimrjlpesx.supabase.co",
  cle: "sb_publishable_rCVYAzc9PyppEfijDMdHzg_C--mKXj1"
};
