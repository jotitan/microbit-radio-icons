# Mini teams par radio

L'objectif de cet exercice est de permettre à plusieurs micro:bit de communiquer par radio aux moyens d'icône.
Nous détaillons les étapes à réaliser pour y arriver.

# Fonctionnement

Le programme se décompose en plusieurs parties
* La sélection du canal du groupe
* La sélection de l'icône à envoyer 
* L'envoi de l'icône
* L'affichage d'une icône reçue

# Etapes

* Initialisation
    * Au démarrage, générer aléatoirement un identifiant entre 0 et 9999
* Canal radio
    * Créer une fonction permettant d'incrémenter un numéro de canal et changer le canal radio avec cette valeur
    * Relier cette action à l'action d'appui sur le logo
* Sélection d'icône
    * Créer une fonction permettant d'incrémenter le logo courant et l'afficher.
        / ! \ Il n'y a que 40 icônes configurées
    * Relier cette action lors de l'appui sur le bouton A 
* Envoi de l'icône
    * Créer une function qui envoie un message radio avec l'identifiant et le numéro de l'icône séparé par un séparateur de votre choix
    * Relier cette fonction lors de l'appui sur le bouton B
* Réception d'une icône
    * Créer une fonction qui recoit un message, récupère l'identifiant et le numéro d'icône et affiche l'identifiant, fait une pause puis affiche l'icône
    * Relier cette fonction à la réception d'un message

# Astuces
* Le message le plus simple à envoyer est une chaîne de caractères. 
    / ! \ Attention, le message est limité à 19 caractères


> Ouvrir cette page à [https://jotitan.github.io/microbit-radio-icons/](https://jotitan.github.io/microbit-radio-icons/)

## Utiliser comme extension

Ce dépôt peut être ajouté en tant qu'**extension** dans MakeCode.

* ouvrir [https://makecode.microbit.org/](https://makecode.microbit.org/)
* cliquez sur **Nouveau projet**
* cliquez sur **Extensions** dans le menu engrenage
* recherchez **https://github.com/jotitan/microbit-radio-icons** et importez

## Éditer ce projet

Éditer ce dépôt dans MakeCode.

* ouvrir [https://makecode.microbit.org/](https://makecode.microbit.org/)
* cliquez sur **Importer** puis cliquez sur **Importer l'URL **
* collez **https://github.com/jotitan/microbit-radio-icons** et cliquez sur importer

#### Métadonnées (utilisées pour la recherche, le rendu)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
