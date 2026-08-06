const supportedLanguages = ['zh-CN', 'en', 'ja', 'fr', 'de'];

const translations = {
  en: {
    'meta.title': 'Code2PDF — Turn source code into polished documents',
    'meta.description': 'Code2PDF is a Mac app that scans code projects locally, formats documents, and exports them as PDF.',
    'language.label': 'Language', 'brand.name': 'Code2PDF', 'footer.copyright': '© 2026 Code2PDF. All rights reserved.',
    'nav.features': 'Features', 'nav.workflow': 'Workflow', 'nav.privacy': 'Privacy', 'nav.support': 'Support',
    'hero.eyebrow': 'Made for macOS', 'hero.title': 'Make code documentation<br>effortless',
    'hero.lead': 'Scan projects, filter content, and export PDFs<br>in one flow—entirely on your Mac.',
    'hero.note': 'No account · No ads · No tracking',
    'intro.eyebrow': 'Focused on one thing', 'intro.title': 'From source code to polished documents.<br>Less repetition, more focus.',
    'intro.body': 'Code2PDF brings the tedious documentation workflow into one clean, intuitive macOS app.',
    'intro.pill.scan': 'Smart scanning', 'intro.pill.filter': 'Flexible filters', 'intro.pill.preview': 'Live preview', 'intro.pill.export': 'PDF export',
    'scan.eyebrow': 'Scan projects', 'scan.title': 'Drop in a folder.<br>We handle the rest.',
    'scan.body': 'Quickly read project structures and count files and lines of code. Works with projects from Xcode, VS Code, IntelliJ, and more.',
    'scan.item.gitignore': 'Respects .gitignore rules', 'scan.item.skip': 'Skips binaries, hidden files, and symbolic links', 'scan.item.select': 'Select individual folders and files',
    'style.eyebrow': 'Set the style', 'style.title': 'Every page,<br>exactly your way.',
    'style.body': 'Choose the submission range, lines per page, and Markdown rendering. The page preview updates as you make changes.',
    'style.lines': 'Lines of code per page', 'style.live': 'Live', 'style.preview': 'Page style preview',
    'export.eyebrow': 'Generate and export', 'export.title': 'Review the result.<br>Then deliver with ease.',
    'export.body': 'Review the finished document page by page, choose a file name and save location, then export your organized code as a PDF.',
    'export.cta': 'See the full workflow',
    'privacyBand.title': 'Your code stays yours.',
    'privacyBand.body': 'Scanning, filtering, generation, and preview all happen on your device. No accounts, ads, analytics, or remote uploads.',
    'privacyBand.cta': 'Read the privacy policy',
    'workflow.eyebrow': 'Three simple steps', 'workflow.title': 'Open. Organize. Export.',
    'workflow.step1.title': 'Choose a project', 'workflow.step1.body': 'Drop in a project folder and the app reads its structure and source files.',
    'workflow.step2.title': 'Adjust the rules', 'workflow.step2.body': 'Filter content, choose the submission range, and set the document layout.',
    'workflow.step3.title': 'Export a PDF', 'workflow.step3.body': 'Preview the result and save it to any local location you choose.',
    'gallery.eyebrow': 'Product tour', 'gallery.title': 'A familiar Mac experience.',
    'gallery.body': 'Designed around macOS conventions for a clear interface and natural workflow.',
    'gallery.item1': 'Choose a project and filtering rules', 'gallery.item2': 'See the project structure clearly', 'gallery.item3': 'Edit and preview side by side',
    'footer.tagline': 'Make code documentation effortless.', 'footer.contact': 'Contact us',
    'policy.metaTitle': 'Privacy Policy — Code2PDF', 'policy.metaDescription': 'Privacy policy for Code2PDF',
    'policy.back': '← Back to home', 'policy.backPlain': 'Back to home',
    'policy.heroTitle': 'Privacy is not an option.<br>It is the default.', 'policy.heroBody': 'All core processing in Code2PDF happens locally on your device.',
    'policy.title': 'Privacy Policy', 'policy.updated': 'Last updated: August 6, 2026',
    'policy.intro': 'Code2PDF values and protects your privacy. This policy explains how the app accesses and processes your information.',
    'policy.s1.title': 'Information collection', 'policy.s1.p1': 'Code2PDF does not collect, upload, transmit, or sell your personal information.',
    'policy.s1.p2': 'The app requires no account, contains no advertising, tracking, or behavioral analytics, and does not build user profiles.',
    'policy.s2.title': 'File access and processing', 'policy.s2.p1': 'Code2PDF reads files only from folders you explicitly select in order to:',
    'policy.s2.li1': 'Scan project folders and source code files;', 'policy.s2.li2': 'Count files and lines of code;', 'policy.s2.li3': 'Filter files using your selected rules;', 'policy.s2.li4': 'Generate, preview, and export PDF documents.',
    'policy.s2.p2': 'All processing happens locally on your device. Your source code, file contents, file names, and software information are never uploaded to the developer or any remote server.',
    'policy.s3.title': 'File storage', 'policy.s3.p1': 'Code2PDF does not copy or upload your source files to another location.',
    'policy.s3.p2': 'PDFs generated by the app are saved only to a local location you choose. You can view or delete them at any time using the system file manager.',
    'policy.s4.title': 'System permissions', 'policy.s4.p1': 'The app uses the macOS file picker to access folders you explicitly select. It does not access other files or folders without your authorization.',
    'policy.s4.p2': 'You can manage or revoke file access permissions in macOS System Settings.',
    'policy.s5.title': 'Third-party services', 'policy.s5.p1': 'Code2PDF does not integrate third-party services for advertising, analytics, tracking, or user data collection, and does not share your data with third parties.',
    'policy.s6.title': "Children's privacy", 'policy.s6.p1': 'The app is not designed to collect personal information from children and does not intentionally collect personal information from any user.',
    'policy.s7.title': 'Changes to this policy', 'policy.s7.p1': 'This policy may be updated if the app or its data processing changes. The revised policy and its latest update date will be published on this page.',
    'policy.s8.title': 'Contact us', 'policy.s8.p1': 'If you have any questions about this privacy policy, contact us at:', 'policy.email': 'Email: '
  },
  ja: {
    'meta.title': 'Code2PDF — コード資料の整理をもっと簡単に',
    'meta.description': 'Code2PDFは、Mac上でコードプロジェクトをローカルにスキャンし、文書を整えてPDFに書き出すアプリです。',
    'language.label': '言語', 'brand.name': 'Code2PDF', 'footer.copyright': '© 2026 Code2PDF. All rights reserved.',
    'nav.features': '機能', 'nav.workflow': '使い方', 'nav.privacy': 'プライバシー', 'nav.support': 'サポート',
    'hero.eyebrow': 'macOSのために設計', 'hero.title': 'コード資料の整理を<br>もっと簡単に',
    'hero.lead': 'プロジェクトのスキャン、内容の絞り込み、PDF書き出しまで。<br>すべてをMac上で完結できます。',
    'hero.note': 'アカウント不要 · 広告なし · トラッキングなし',
    'intro.eyebrow': 'ひとつのことに集中', 'intro.title': 'ソースコードから整った文書へ。<br>繰り返しを減らし、集中を増やす。',
    'intro.body': 'Code2PDFは、手間のかかる資料整理を、すっきり直感的なmacOSアプリにまとめました。',
    'intro.pill.scan': 'スマートスキャン', 'intro.pill.filter': '柔軟な絞り込み', 'intro.pill.preview': 'ライブプレビュー', 'intro.pill.export': 'PDF書き出し',
    'scan.eyebrow': 'プロジェクトをスキャン', 'scan.title': 'フォルダをドロップ。<br>あとはおまかせ。',
    'scan.body': 'プロジェクト構成をすばやく読み取り、ファイル数とコード行数を集計。Xcode、VS Code、IntelliJなどのプロジェクトに対応します。',
    'scan.item.gitignore': '.gitignoreルールに従う', 'scan.item.skip': 'バイナリ、隠しファイル、シンボリックリンクを除外', 'scan.item.select': 'フォルダとファイルを細かく選択',
    'style.eyebrow': 'スタイルを設定', 'style.title': 'すべてのページを、<br>あなたの思いどおりに。',
    'style.body': '提出範囲、1ページあたりのコード行数、Markdownの表示方法を設定。変更に合わせてプレビューも更新されます。',
    'style.lines': '1ページあたりのコード行数', 'style.live': 'リアルタイム', 'style.preview': 'ページスタイルのプレビュー',
    'export.eyebrow': '生成と書き出し', 'export.title': '確認して、<br>かんたんに仕上げる。',
    'export.body': '完成した文書をページごとに確認し、ファイル名と保存先を指定して、整理したコード資料をPDFに書き出します。',
    'export.cta': '使い方を見る',
    'privacyBand.title': 'あなたのコードは、いつでもあなたのもの。',
    'privacyBand.body': 'スキャン、絞り込み、生成、プレビューはすべて端末上で処理されます。アカウント、広告、解析、リモートアップロードはありません。',
    'privacyBand.cta': 'プライバシーポリシーを読む',
    'workflow.eyebrow': 'かんたん3ステップ', 'workflow.title': '開く。整理する。書き出す。',
    'workflow.step1.title': 'プロジェクトを選択', 'workflow.step1.body': 'プロジェクトフォルダをドロップすると、構成とソースファイルを自動で読み取ります。',
    'workflow.step2.title': 'ルールを調整', 'workflow.step2.body': '内容の絞り込み、提出範囲、文書レイアウトを設定します。',
    'workflow.step3.title': 'PDFを書き出し', 'workflow.step3.body': '生成結果を確認し、選択したローカルの保存先へ保存します。',
    'gallery.eyebrow': '製品紹介', 'gallery.title': '使い慣れたMacの体験。',
    'gallery.body': 'macOSの操作習慣に沿った、分かりやすく自然なインターフェースです。',
    'gallery.item1': 'プロジェクトと絞り込みルールを選択', 'gallery.item2': 'プロジェクト構成を見やすく表示', 'gallery.item3': '設定しながらプレビュー',
    'footer.tagline': 'コード資料の整理をもっと簡単に。', 'footer.contact': 'お問い合わせ',
    'policy.metaTitle': 'プライバシーポリシー — Code2PDF', 'policy.metaDescription': 'Code2PDFのプライバシーポリシー',
    'policy.back': '← ホームへ戻る', 'policy.backPlain': 'ホームへ戻る',
    'policy.heroTitle': 'プライバシーは選択肢ではなく、<br>標準設定です。', 'policy.heroBody': 'Code2PDFの主要な処理はすべて端末上で行われます。',
    'policy.title': 'プライバシーポリシー', 'policy.updated': '更新日：2026年8月6日',
    'policy.intro': 'Code2PDFはお客様のプライバシーを尊重し、保護します。本ポリシーでは、アプリが情報へアクセスし処理する方法を説明します。',
    'policy.s1.title': '情報の収集', 'policy.s1.p1': 'Code2PDFは個人情報を収集、アップロード、送信、販売しません。',
    'policy.s1.p2': 'アカウント登録は不要で、広告、ユーザー追跡、行動分析、ユーザープロファイルの作成も行いません。',
    'policy.s2.title': 'ファイルへのアクセスと処理', 'policy.s2.p1': 'Code2PDFは、お客様が明示的に選択したフォルダ内のファイルのみを次の目的で読み取ります：',
    'policy.s2.li1': 'プロジェクトフォルダとソースコードをスキャンする；', 'policy.s2.li2': 'ファイル数とコード行数を集計する；', 'policy.s2.li3': '設定したルールでファイルを絞り込む；', 'policy.s2.li4': 'PDF文書を生成、プレビュー、書き出す。',
    'policy.s2.p2': 'すべての処理は端末上で行われます。ソースコード、ファイル内容、ファイル名、ソフトウェア情報が開発者やリモートサーバーへ送信されることはありません。',
    'policy.s3.title': 'ファイルの保存', 'policy.s3.p1': 'Code2PDFはソースファイルを別の場所へコピーまたはアップロードしません。',
    'policy.s3.p2': '生成したPDFは、お客様が選択したローカルの保存先にのみ保存されます。システムのファイル管理機能でいつでも確認・削除できます。',
    'policy.s4.title': 'システム権限', 'policy.s4.p1': 'macOSのファイル選択機能を使い、お客様が選択したフォルダにアクセスします。許可なく他のファイルやフォルダへアクセスしません。',
    'policy.s4.p2': 'ファイルアクセス権限は、macOSのシステム設定から管理または取り消せます。',
    'policy.s5.title': '第三者サービス', 'policy.s5.p1': '広告、解析、追跡、ユーザーデータ収集を目的とする第三者サービスは利用せず、データを第三者と共有しません。',
    'policy.s6.title': '子どものプライバシー', 'policy.s6.p1': '本アプリは子どもの個人情報を収集する目的で作られておらず、いかなるユーザーの個人情報も意図的に収集しません。',
    'policy.s7.title': 'ポリシーの変更', 'policy.s7.p1': 'アプリの機能やデータ処理方法が変わる場合、本ポリシーを更新することがあります。更新版と最新の更新日は本ページに掲載します。',
    'policy.s8.title': 'お問い合わせ', 'policy.s8.p1': '本ポリシーについてご質問がある場合は、次の連絡先までお問い合わせください：', 'policy.email': 'メール：'
  },
  fr: {
    'meta.title': 'Code2PDF — Simplifiez la préparation de vos documents de code',
    'meta.description': 'Code2PDF analyse localement vos projets sur Mac, met en forme vos documents et les exporte en PDF.',
    'language.label': 'Langue', 'brand.name': 'Code2PDF', 'footer.copyright': '© 2026 Code2PDF. Tous droits réservés.',
    'nav.features': 'Fonctions', 'nav.workflow': 'Utilisation', 'nav.privacy': 'Confidentialité', 'nav.support': 'Assistance',
    'hero.eyebrow': 'Conçu pour macOS', 'hero.title': 'Simplifiez vos<br>documents de code',
    'hero.lead': 'Analyse, filtrage et export PDF en un seul flux,<br>entièrement sur votre Mac.',
    'hero.note': 'Sans compte · Sans publicité · Sans suivi',
    'intro.eyebrow': 'Une mission unique', 'intro.title': 'Du code source à un document soigné.<br>Moins de répétition, plus de concentration.',
    'intro.body': 'Code2PDF réunit les tâches fastidieuses de préparation dans une application macOS claire et intuitive.',
    'intro.pill.scan': 'Analyse intelligente', 'intro.pill.filter': 'Filtres flexibles', 'intro.pill.preview': 'Aperçu en direct', 'intro.pill.export': 'Export PDF',
    'scan.eyebrow': 'Analyser un projet', 'scan.title': 'Déposez un dossier.<br>Nous faisons le reste.',
    'scan.body': 'Lisez rapidement la structure du projet et comptez fichiers et lignes de code. Compatible avec Xcode, VS Code, IntelliJ et bien plus.',
    'scan.item.gitignore': 'Respecte les règles .gitignore', 'scan.item.skip': 'Ignore les binaires, fichiers masqués et liens symboliques', 'scan.item.select': 'Sélection précise des dossiers et fichiers',
    'style.eyebrow': 'Définir le style', 'style.title': 'Chaque page,<br>à votre façon.',
    'style.body': 'Choisissez la plage à déposer, le nombre de lignes par page et le rendu Markdown. L’aperçu se met à jour instantanément.',
    'style.lines': 'Lignes de code par page', 'style.live': 'En direct', 'style.preview': 'Aperçu du style de page',
    'export.eyebrow': 'Générer et exporter', 'export.title': 'Vérifiez le résultat.<br>Puis livrez sans effort.',
    'export.body': 'Vérifiez le document page par page, choisissez son nom et son emplacement, puis exportez votre code organisé en PDF.',
    'export.cta': 'Voir le processus complet',
    'privacyBand.title': 'Votre code reste le vôtre.',
    'privacyBand.body': 'Analyse, filtrage, génération et aperçu ont lieu sur votre appareil. Aucun compte, publicité, analyse comportementale ou envoi distant.',
    'privacyBand.cta': 'Lire la politique de confidentialité',
    'workflow.eyebrow': 'Trois étapes simples', 'workflow.title': 'Ouvrez. Organisez. Exportez.',
    'workflow.step1.title': 'Choisissez un projet', 'workflow.step1.body': 'Déposez son dossier : l’application lit automatiquement sa structure et ses sources.',
    'workflow.step2.title': 'Ajustez les règles', 'workflow.step2.body': 'Filtrez le contenu et définissez la plage et la mise en page du document.',
    'workflow.step3.title': 'Exportez en PDF', 'workflow.step3.body': 'Vérifiez le résultat et enregistrez-le à l’emplacement local de votre choix.',
    'gallery.eyebrow': 'Aperçu du produit', 'gallery.title': 'Une expérience Mac familière.',
    'gallery.body': 'Une interface claire et naturelle, fidèle aux habitudes de macOS.',
    'gallery.item1': 'Choisir un projet et ses règles', 'gallery.item2': 'Visualiser clairement sa structure', 'gallery.item3': 'Régler et prévisualiser côte à côte',
    'footer.tagline': 'Simplifiez vos documents de code.', 'footer.contact': 'Nous contacter',
    'policy.metaTitle': 'Politique de confidentialité — Code2PDF', 'policy.metaDescription': 'Politique de confidentialité de Code2PDF',
    'policy.back': '← Retour à l’accueil', 'policy.backPlain': 'Retour à l’accueil',
    'policy.heroTitle': 'La confidentialité n’est pas une option.<br>C’est le réglage par défaut.', 'policy.heroBody': 'Tous les traitements essentiels de Code2PDF sont effectués localement sur votre appareil.',
    'policy.title': 'Politique de confidentialité', 'policy.updated': 'Dernière mise à jour : 6 août 2026',
    'policy.intro': 'Code2PDF respecte et protège votre vie privée. Cette politique explique comment l’application accède à vos informations et les traite.',
    'policy.s1.title': 'Collecte des informations', 'policy.s1.p1': 'Code2PDF ne collecte, ne téléverse, ne transmet et ne vend aucune information personnelle.',
    'policy.s1.p2': 'Aucun compte n’est requis. L’application ne contient ni publicité, ni suivi, ni analyse comportementale, et ne crée aucun profil utilisateur.',
    'policy.s2.title': 'Accès aux fichiers et traitement', 'policy.s2.p1': 'Code2PDF lit uniquement les fichiers des dossiers que vous sélectionnez explicitement afin de :',
    'policy.s2.li1': 'Analyser les dossiers de projet et les fichiers source ;', 'policy.s2.li2': 'Compter les fichiers et les lignes de code ;', 'policy.s2.li3': 'Filtrer les fichiers selon vos règles ;', 'policy.s2.li4': 'Générer, prévisualiser et exporter des documents PDF.',
    'policy.s2.p2': 'Tous les traitements ont lieu localement sur votre appareil. Votre code source, le contenu et le nom des fichiers ainsi que les informations logicielles ne sont jamais envoyés au développeur ni à un serveur distant.',
    'policy.s3.title': 'Stockage des fichiers', 'policy.s3.p1': 'Code2PDF ne copie ni ne téléverse vos fichiers source vers un autre emplacement.',
    'policy.s3.p2': 'Les PDF générés sont enregistrés uniquement à l’emplacement local que vous choisissez. Vous pouvez les consulter ou les supprimer à tout moment avec le gestionnaire de fichiers.',
    'policy.s4.title': 'Autorisations système', 'policy.s4.p1': 'L’application utilise le sélecteur de fichiers macOS pour accéder aux dossiers choisis. Elle n’accède à aucun autre fichier ou dossier sans votre autorisation.',
    'policy.s4.p2': 'Vous pouvez gérer ou révoquer ces autorisations dans les Réglages Système de macOS.',
    'policy.s5.title': 'Services tiers', 'policy.s5.p1': 'Code2PDF n’intègre aucun service tiers de publicité, d’analyse, de suivi ou de collecte de données et ne partage pas vos données avec des tiers.',
    'policy.s6.title': 'Vie privée des enfants', 'policy.s6.p1': 'L’application n’est pas conçue pour collecter les données personnelles des enfants et ne collecte volontairement les informations personnelles d’aucun utilisateur.',
    'policy.s7.title': 'Modification de cette politique', 'policy.s7.p1': 'Cette politique peut être mise à jour si l’application ou son traitement des données évolue. La version révisée et sa date de mise à jour seront publiées sur cette page.',
    'policy.s8.title': 'Nous contacter', 'policy.s8.p1': 'Pour toute question concernant cette politique, contactez-nous à l’adresse suivante :', 'policy.email': 'E-mail : '
  },
  de: {
    'meta.title': 'Code2PDF — Code-Unterlagen einfacher aufbereiten',
    'meta.description': 'Code2PDF scannt Codeprojekte lokal auf dem Mac, formatiert Dokumente und exportiert sie als PDF.',
    'language.label': 'Sprache', 'brand.name': 'Code2PDF', 'footer.copyright': '© 2026 Code2PDF. Alle Rechte vorbehalten.',
    'nav.features': 'Funktionen', 'nav.workflow': 'Ablauf', 'nav.privacy': 'Datenschutz', 'nav.support': 'Support',
    'hero.eyebrow': 'Für macOS entwickelt', 'hero.title': 'Code-Unterlagen<br>einfacher aufbereiten',
    'hero.lead': 'Projekte scannen, Inhalte filtern und PDFs exportieren –<br>in einem Ablauf, vollständig auf deinem Mac.',
    'hero.note': 'Kein Konto · Keine Werbung · Kein Tracking',
    'intro.eyebrow': 'Auf eine Aufgabe fokussiert', 'intro.title': 'Vom Quellcode zum sauberen Dokument.<br>Weniger Wiederholung, mehr Fokus.',
    'intro.body': 'Code2PDF bündelt die mühsame Dokumentaufbereitung in einer klaren, intuitiven macOS-App.',
    'intro.pill.scan': 'Intelligenter Scan', 'intro.pill.filter': 'Flexible Filter', 'intro.pill.preview': 'Live-Vorschau', 'intro.pill.export': 'PDF-Export',
    'scan.eyebrow': 'Projekt scannen', 'scan.title': 'Ordner ablegen.<br>Den Rest erledigen wir.',
    'scan.body': 'Projektstruktur schnell einlesen und Dateien sowie Codezeilen zählen. Unterstützt Projekte aus Xcode, VS Code, IntelliJ und mehr.',
    'scan.item.gitignore': 'Berücksichtigt .gitignore-Regeln', 'scan.item.skip': 'Überspringt Binärdateien, versteckte Dateien und symbolische Links', 'scan.item.select': 'Ordner und Dateien gezielt auswählen',
    'style.eyebrow': 'Stil festlegen', 'style.title': 'Jede Seite,<br>genau nach deinen Vorstellungen.',
    'style.body': 'Lege Einreichungsumfang, Codezeilen pro Seite und Markdown-Darstellung fest. Die Vorschau wird sofort aktualisiert.',
    'style.lines': 'Codezeilen pro Seite', 'style.live': 'Live', 'style.preview': 'Seitenstil-Vorschau',
    'export.eyebrow': 'Erstellen und exportieren', 'export.title': 'Ergebnis prüfen.<br>Dann mühelos übergeben.',
    'export.body': 'Prüfe das fertige Dokument Seite für Seite, wähle Dateinamen und Speicherort und exportiere den aufbereiteten Code als PDF.',
    'export.cta': 'Vollständigen Ablauf ansehen',
    'privacyBand.title': 'Dein Code bleibt dein Code.',
    'privacyBand.body': 'Scannen, Filtern, Erstellen und Vorschau finden auf deinem Gerät statt. Keine Konten, Werbung, Analysen oder Remote-Uploads.',
    'privacyBand.cta': 'Datenschutzerklärung lesen',
    'workflow.eyebrow': 'Drei einfache Schritte', 'workflow.title': 'Öffnen. Ordnen. Exportieren.',
    'workflow.step1.title': 'Projekt auswählen', 'workflow.step1.body': 'Lege einen Projektordner ab; die App liest Struktur und Quelldateien automatisch ein.',
    'workflow.step2.title': 'Regeln anpassen', 'workflow.step2.body': 'Filtere Inhalte und lege Einreichungsumfang und Dokumentlayout fest.',
    'workflow.step3.title': 'PDF exportieren', 'workflow.step3.body': 'Prüfe das Ergebnis und speichere es an einem lokalen Ort deiner Wahl.',
    'gallery.eyebrow': 'Produktübersicht', 'gallery.title': 'Ein vertrautes Mac-Erlebnis.',
    'gallery.body': 'Klare Oberfläche und natürliche Bedienung nach den Konventionen von macOS.',
    'gallery.item1': 'Projekt und Filterregeln auswählen', 'gallery.item2': 'Projektstruktur klar überblicken', 'gallery.item3': 'Einstellen und gleichzeitig prüfen',
    'footer.tagline': 'Code-Unterlagen einfacher aufbereiten.', 'footer.contact': 'Kontakt',
    'policy.metaTitle': 'Datenschutzerklärung — Code2PDF', 'policy.metaDescription': 'Datenschutzerklärung von Code2PDF',
    'policy.back': '← Zurück zur Startseite', 'policy.backPlain': 'Zurück zur Startseite',
    'policy.heroTitle': 'Datenschutz ist keine Option.<br>Er ist die Standardeinstellung.', 'policy.heroBody': 'Alle Kernfunktionen von Code2PDF werden lokal auf deinem Gerät ausgeführt.',
    'policy.title': 'Datenschutzerklärung', 'policy.updated': 'Zuletzt aktualisiert: 6. August 2026',
    'policy.intro': 'Code2PDF achtet und schützt deine Privatsphäre. Diese Erklärung beschreibt, wie die App auf Informationen zugreift und sie verarbeitet.',
    'policy.s1.title': 'Erhebung von Informationen', 'policy.s1.p1': 'Code2PDF erhebt, lädt, überträgt oder verkauft keine personenbezogenen Daten.',
    'policy.s1.p2': 'Die App erfordert kein Konto, enthält keine Werbung, kein Tracking und keine Verhaltensanalyse und erstellt keine Nutzerprofile.',
    'policy.s2.title': 'Dateizugriff und Verarbeitung', 'policy.s2.p1': 'Code2PDF liest ausschließlich Dateien aus Ordnern, die du ausdrücklich auswählst, um:',
    'policy.s2.li1': 'Projektordner und Quellcodedateien zu scannen;', 'policy.s2.li2': 'Dateien und Codezeilen zu zählen;', 'policy.s2.li3': 'Dateien nach deinen Regeln zu filtern;', 'policy.s2.li4': 'PDF-Dokumente zu erstellen, anzuzeigen und zu exportieren.',
    'policy.s2.p2': 'Die gesamte Verarbeitung findet lokal auf deinem Gerät statt. Quellcode, Dateiinhalte, Dateinamen und Softwareinformationen werden weder an den Entwickler noch an einen Remote-Server übertragen.',
    'policy.s3.title': 'Dateispeicherung', 'policy.s3.p1': 'Code2PDF kopiert oder lädt deine Quelldateien nicht an einen anderen Ort hoch.',
    'policy.s3.p2': 'Erstellte PDFs werden nur an dem von dir gewählten lokalen Ort gespeichert. Du kannst sie jederzeit mit der Dateiverwaltung ansehen oder löschen.',
    'policy.s4.title': 'Systemberechtigungen', 'policy.s4.p1': 'Die App greift über die macOS-Dateiauswahl auf ausdrücklich gewählte Ordner zu. Andere Dateien oder Ordner werden ohne deine Zustimmung nicht geöffnet.',
    'policy.s4.p2': 'Dateizugriffsrechte kannst du in den macOS-Systemeinstellungen verwalten oder widerrufen.',
    'policy.s5.title': 'Dienste von Drittanbietern', 'policy.s5.p1': 'Code2PDF bindet keine Drittanbieterdienste für Werbung, Analyse, Tracking oder Datenerhebung ein und gibt deine Daten nicht an Dritte weiter.',
    'policy.s6.title': 'Datenschutz von Kindern', 'policy.s6.p1': 'Die App ist nicht für die Erhebung personenbezogener Daten von Kindern ausgelegt und erhebt bewusst keine personenbezogenen Daten von Nutzern.',
    'policy.s7.title': 'Änderungen dieser Erklärung', 'policy.s7.p1': 'Diese Erklärung kann bei Änderungen der App oder ihrer Datenverarbeitung aktualisiert werden. Die neue Fassung und das Aktualisierungsdatum erscheinen auf dieser Seite.',
    'policy.s8.title': 'Kontakt', 'policy.s8.p1': 'Bei Fragen zu dieser Datenschutzerklärung erreichst du uns unter:', 'policy.email': 'E-Mail: '
  }
};

const originalText = new Map();
document.querySelectorAll('[data-i18n]').forEach((element) => originalText.set(element.dataset.i18n, element.innerHTML));
const originalContent = new Map();
document.querySelectorAll('[data-i18n-content]').forEach((element) => originalContent.set(element.dataset.i18nContent, element.getAttribute('content')));
const originalAria = new Map();
document.querySelectorAll('[data-i18n-aria]').forEach((element) => originalAria.set(element.dataset.i18nAria, element.getAttribute('aria-label')));

function normalizeLanguage(language) {
  if (!language) return 'zh-CN';
  if (language.toLowerCase().startsWith('zh')) return 'zh-CN';
  const base = language.toLowerCase().split('-')[0];
  return supportedLanguages.includes(base) ? base : 'zh-CN';
}

function applyLanguage(language, persist = true) {
  const locale = normalizeLanguage(language);
  const dictionary = translations[locale] || {};
  document.documentElement.lang = locale;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    element.innerHTML = dictionary[key] ?? originalText.get(key) ?? element.innerHTML;
  });
  document.querySelectorAll('[data-i18n-content]').forEach((element) => {
    const key = element.dataset.i18nContent;
    element.setAttribute('content', dictionary[key] ?? originalContent.get(key) ?? '');
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    const key = element.dataset.i18nAria;
    element.setAttribute('aria-label', dictionary[key] ?? originalAria.get(key) ?? '');
  });
  document.querySelectorAll('.language-select').forEach((select) => { select.value = locale; });
  if (persist) localStorage.setItem('preferred-language', locale);
}

const requestedLanguage = new URLSearchParams(window.location.search).get('lang');
const storedLanguage = localStorage.getItem('preferred-language');
const browserLanguage = navigator.language;
applyLanguage(requestedLanguage || storedLanguage || browserLanguage, Boolean(requestedLanguage || storedLanguage));

document.querySelectorAll('.language-select').forEach((select) => {
  select.addEventListener('change', (event) => applyLanguage(event.target.value));
});
