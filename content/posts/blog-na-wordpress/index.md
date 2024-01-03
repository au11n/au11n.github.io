---
title: "Создание блога на WordPress. AWS + Apache + PHP + MySQL."
date: 2023-11-09T11:30:03+00:00
tags: ["Блог", "Apache", "Linux", "MySQL", "PHP", "WordPress", "AWS"]
author: "Aull Nikita"
showToc: true
TocOpen: false
draft: false
hidemeta: false
comments: false
#description: "Desc Text."
canonicalURL: "https://canonical.url/to/page"
disableHLJS: true # to disable highlightjs
disableShare: false
disableHLJS: false
hideSummary: false
searchHidden: true
ShowReadingTime: true
ShowBreadCrumbs: true
ShowPostNavLinks: true
ShowWordCount: true
ShowRssButtonInSectionTermList: true
UseHugoToc: true
cover:
    image: "<image path/url>" # image path/url
    alt: "<alt text>" # alt text
    caption: "<text>" # display caption under cover
    relative: false # when using page bundles set this to true
    hidden: true # only hide on current single page
---

Идея создания блога родилась случайно, я увидел красивый домен на domain.com, который совпадал с моей фамилией, cтоил он 3.99$. При оплате домена мне предложили множество дополнительных решений, таких, как почта от Google, хостинг, всевозможные конструкторы сайтов в том числе на WordPress.

Я понимал, что все эти доп. возможности подключаются в одно касание, и подумал, что это “неспортивно” и не принесет никакого удовольствия от настройки. Задумался о том, чтобы поднять свой почтовый сервер и обеспечить всех родственников красивыми почтовыми адресами вида {name}@aull.me. Поэтому решил хостинг от domain не брать, а сделать всё вручную на VPS от Amazon.

C AWS работаю уже давно, поэтому запустить новый инстанс не знанимает больше пары минут. Выбрал под блог инстанс t4g.micro в Северной Вирджинии, этот регион дешевле всего, как я знаю. t4g.micro инстанс на процессоре ARM, 1 Гб оперативной памяти, два ядра, ОС Ubuntu. Инстансы на ARM значительно дешевле, чем на х86 процах, иногда разница доходит до двух – двух с половиной раз. Выбранный мной инстанс стоит около 6$ в месяц. Его думаю хватит на блог, почтовый сервер и еще какие-нибудь шалости.

После запуска нового инстанса всегда запускую в баше команду комплексного обновления:

sudo apt update && sudo apt upgrade && sudo apt autoremove && sudo apt autopurge && sudo apt autoclean

Далее по привычке ставлю стандартный набор утилит и библиотек для моих Python-поделок, если вам Python не нужен, пропускайте эту команду:

```sudo apt install -y make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm libncurses5-dev libncursesw5-dev xz-utils tk-dev libffi-dev liblzma-dev git sudo apt install python3-venv sudo apt-get install -y python3-pip sudo apt-get install build-essential libssl-dev libffi-dev python-dev-is-python3 sudo apt install build-essential libssl-dev libffi-dev python3-dev sudo apt install python3-venv -y```

 
 
Установка и настройка WordPress, необходимых утилит и компонентов.
Cтавим и запускаем Apache:

```sudo apt install apache2 apache2-utils sudo systemctl enable apache2 sudo systemctl start apache2```

Ставим PHP:

```sudo apt install php sudo apt install libapache2-mod-php sudo apt install php-curl php-memcached php-mysql php-pgsql php-gd php-imagick php-intl php-mcrypt php-xml php-zip php-mbstring sudo apt-get install php-curl php-gd php-mbstring php-xml php-xmlrpc php-curl php-gd php-imagick php-zip php-intl```

Ставим MySQL и найстраиваем первичную безопасность:

```sudo apt install mysql-server sudo mysql_secure_installation```

Перезапускаем Apache:

```sudo a2enmod rewrite sudo systemctl restart apache2```

Качаем и устанавливаем последюю версию WordPress:

```wget -c http://wordpress.org/latest.tar.gz tar -xzvf latest.tar.gz sudo rsync -av wordpress/* /var/www/html/ sudo chown -R www-data:www-data /var/www/html/ sudo chmod -R 755 /var/www/html/```

Удаляем index.html:

```sudo rm /var/www/html/index.html```

Запускаем MySQL и создаем базу, пользователя и раздаем права пароль придумайте сами, еще желательно префиксы “wp_” сразу заменить на что-то, так безопаснее:

```sudo mysql -u root -p mysql> CREATE DATABASE wp_database; mysql> CREATE USER 'wp_user'@'localhost' IDENTIFIED BY 'password'; mysql> GRANT ALL PRIVILEGES ON wp_database.* TO 'wp_user'@'localhost'; mysql> FLUSH PRIVILEGES; mysql> EXIT;```

По адресу /var/www/html переименовываем файл wp-config-sample.php в wp-config.php и в нем прописываем пароли и явки от базы данных.

Ставим утилиту и перезапускаем Apache:

```sudo apt-get install php-mysqli sudo systemctl restart apache2```

Ради повышения безопасности меняем разрешения для файлов в папке /var/www/html:

```chmod 600 .htaccess chmod 600 wp-config.php```

Так же рекомендую прочитать пост и коментарии под ним по вопросу найстроки безопасности вашего блога:

```https://habr.com/ru/companies/first/articles/664004/```

Это очень важно, так как я запустил блог со второга раза, в первый раз я не озаботился вопросами безопасности и у меня угнали виртуалку с блогом в первые 5 минут ее работы:)

Встретился с проблемой постоянных ссылок, чтобы были красивые ссылки вида: aull.me/blog-wordpress/ вместо aull.me/index.php/blog-wordpress/.

Перепробовал все способы которые нашел интернете, но так и не смог ее победить, если кто-то знает решение проблемы сообщите пожалуйста)

В эко-системе WP множество плагинов, и для SEO и для безопасности, и для оптимизации можно про каждый плагин отдельную статью писать.

В целом, было очень инетересно во всём этом поковыряться, в прошлый раз я занимался такими вопросами лет 7 назад когда делал сайт для своей компании, но это уже совсем другая история:)

Для обсуждения приглашаю в Telegram канал https://t.me/aullblog
