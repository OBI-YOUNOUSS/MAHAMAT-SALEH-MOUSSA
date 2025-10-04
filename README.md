# Site Web Portfolio - Mahamat Saleh Moussa

Site web officiel de **Mahamat Saleh Moussa**, Député du 5e Arrondissement de N'Djamena et Coordinateur de la plateforme "Tchad d'Abord".

---

## 🎯 Aperçu du site

### Accueil
![Accueil](./src/assets/captures/accueil.png)

---

## 🛠 Technologies utilisées

- **React** avec **TypeScript** : pour une architecture moderne et robuste
- **Tailwind CSS** : pour un design professionnel et responsive  
- **React Router DOM** : pour la navigation entre les pages

---

## 📁 Structure du projet

src/
├── assets/ # Images et ressources
├── components/ # Composants réutilisables
├── layouts/ # Layout principal
├── pages/ # Pages du portfolio
├── hooks/ # Custom hooks
├── App.tsx # Configuration des routes
└── main.tsx # Point d'entrée
text


---

## ✨ Fonctionnalités principales

- **Page d'accueil** avec présentation et actualités récentes
- **Biographie** complète et parcours politique
- **Engagements** et plateforme "Tchad d'Abord"
- **Actualités** et activités parlementaires
- **Avis & Réflexions** sur les enjeux nationaux
- **Galerie** photos et médias
- **Contact** professionnel

---

## 🚀 Installation

```bash
# Installation des dépendances
npm install

# Lancement du serveur de développement
npm run dev



### **2. Vérification et nettoyage des derniers fichiers**

**Dans `components/Header.tsx`** - Vérifier que le logo et le titre sont bien pour Mahamat Saleh Moussa :

```tsx
<Link to="/" className="flex items-center">
  <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
    <img src={logo} alt="Mahamat Saleh Moussa" className="w-30 h-30"/>
  </span>
</Link>
