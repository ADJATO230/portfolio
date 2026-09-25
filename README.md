# Mon Portfolio Web

Bienvenue ! Ceci est un template de portfolio web moderne et responsive, créé avec HTML5, CSS3 et JavaScript.

## 📋 Contenu

- **Accueil** : Section héroïque avec appel à l'action
- **À Propos** : Présentation et compétences
- **Projets** : Galerie de projets réalisés ou en cours (à personnaliser)
- **Contact** : Formulaire de contact et informations
- **Responsive Design** : Adaptés à tous les appareils (mobile, tablette, desktop)

## 🚀 Fonctionnalités

✅ Design moderne et épuré  
✅ Navigation responsive avec menu hamburger  
✅ Animations fluides au scroll  
✅ Formulaire de contact avec validation  
✅ Conception mobile-first  
✅ Icônes Font Awesome  
✅ Performance optimisée  

## 📝 Comment personnaliser votre portfolio

### 1. **Informations Personnelles**

Ouvrez `index.html` et modifiez ces sections :

- **Titre et description** : Dans la section `.hero`
- **Biographie** : Section `.about-text`
- **Email et téléphone** : Section `.contact-info`

### 2. **Ajouter vos projets**

Dupliquez cette structure dans `.projects-grid` :

```html
<div class="project-card">
    <div class="project-image" style="background: linear-gradient(135deg, #votre-couleur 0%, #autre-couleur 100%);"></div>
    <div class="project-info">
        <h3>Votre Projet</h3>
        <p>Description du projet</p>
        <div class="project-tags">
            <span class="tag">Technologie 1</span>
            <span class="tag">Technologie 2</span>
        </div>
        <a href="votre-lien" class="btn btn-small">En savoir plus</a>
    </div>
</div>
```

### 3. **Lien des réseaux sociaux**

Modifiez les liens dans la section `.social-links` :

```html
<a href="https://github.com/votre-profil" class="social-link">
    <i class="fab fa-github"></i>
</a>
```

### 4. **Couleurs personnalisées**

Modifiez les variables CSS dans `styles.css` (au début du fichier) :

```css
:root {
    --primary-color: #667eea;      /* Couleur principale */
    --secondary-color: #764ba2;    /* Couleur secondaire */
}
```

## 📱 Structure des fichiers

```
Portefolio/
├── index.html          # Page HTML principale
├── styles.css          # Feuille de styles
├── script.js           # Fonctionnalités JavaScript
├── images/              # Photos et visuels du portfolio
└── README.md           # Ce fichier
```

## 🎨 Personnalisation avancée

### Changer la police d'écriture

Dans `styles.css`, modifiez :

```css
body {
    font-family: 'Votre Police', sans-serif;
}
```

Trouvez des polices gratuites sur [Google Fonts](https://fonts.google.com/)

### Ajouter un favicon

Ajoutez cette ligne dans la section `<head>` du HTML :

```html
<link rel="icon" href="chemin/vers/favicon.ico">
```

## 🔧 Déployer votre portfolio

### Option 1 : GitHub Pages (Gratuit)
1. Créez un dépôt public nommé `portfolio` sur votre compte GitHub `ADJATO230` (sans README supplémentaire).
2. Ouvrez un terminal dans le dossier du portfolio et exécutez :

```bash
cd /home/victorin/Public/Portefolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/ADJATO230/portfolio.git
git push -u origin main
```

3. Sur GitHub, ouvrez **Settings → Pages**.
4. Dans **Build and deployment**, choisissez **Deploy from a branch**.
5. Sélectionnez la branche `main`, le dossier `/ (root)`, puis cliquez sur **Save**.
6. Après quelques instants, votre site sera disponible à l'adresse :
   `https://adjato230.github.io/portfolio/`

Si vous choisissez un autre nom de dépôt, remplacez `portfolio` dans les commandes et dans l'adresse finale.

### Option 2 : Netlify (Gratuit)
1. Visitez [netlify.com](https://netlify.com)
2. Drag & drop votre dossier
3. Votre site est en ligne !

### Option 3 : Vercel (Gratuit)
1. Visitez [vercel.com](https://vercel.com)
2. Importez votre repo GitHub
3. Déployez automatiquement

## 📧 Configurer le formulaire de contact

Le formulaire actuel affiche un message de succès. Pour vraiment recevoir les emails, utilisez :

- **Formspree** : https://formspree.io/
- **EmailJS** : https://www.emailjs.com/
- **Netlify Forms** : Intégré si hébergé sur Netlify

## 🎯 Conseils pour votre portfolio

1. **Qualité avant quantité** : 3-5 projets bien présentés valent mieux que 10 projets bâclés
2. **Descriptions claires** : Expliquez le challenge, votre approche et les résultats
3. **Photos/screenshots** : Ajoutez des visuels pour chaque projet
4. **Appel à l'action** : Facilitez le contact avec les visiteurs
5. **À jour** : Mettez à jour regulièrement vos projets

## 🤝 Support

Des questions ? Consultez :
- [MDN Web Docs](https://developer.mozilla.org/)
- [W3Schools](https://www.w3schools.com/)
- [Stack Overflow](https://stackoverflow.com/)

## 📄 Licence

Ce template est libre d'utilisation. Personnalisez-le selon vos besoins !

---

Le fond animé combine des orbes, une grille en perspective et des particules. Les utilisateurs qui préfèrent réduire les animations sont automatiquement respectés grâce à `prefers-reduced-motion`.

**Bon courage pour votre portfolio ! 🚀**
