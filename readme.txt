=== Database Backup for WordPress ===
Contributors: deliciousbrains
Tags: mysql, database, backup, database backup
Requires at least: 3.6.0
Tested up to: 5.9.3
Stable tag: 2.5.2
Requires PHP: 5.3

Database Backup for WordPress is your one-stop database backup solution for WordPress.

== Description ==

Backup your database instantly, send the backup via email, or schedule backups to run automatically.

Database Backup for WordPress allows you to quickly back up your core WordPress database tables, and either download the backup as a gzipped file, or send it via email to an address you choose.

By default, the plugin will always back up all the core WordPress database tables. However, you may also selectively back up any custom tables that might be created by other plugins

Additional options include the ability to exclude spam comments from the comments table, or post revisions from the posts table, saving you space and bandwidth.

You can also enable scheduled backups to run automatically at set intervals, and configure the email address to send the scheduled backups to.

= Backup Before You Mess Up =

Backups are the one thing you don’t think of until you need them. You might have the best web host, the most secure server, and a tried and tested process for running plugin, theme, or core updates. But all it takes is one little thing to go wrong, and you lose your entire website.

You need a reliable and automated solution which backs up your WordPress data and sends it to an off-site location. Database Backup for WordPress is that solution.

= Why You Should Back Up Your Website =

As much planning as you do, any CMS like WordPress that stores its data in a database is vulnerable. Hardware, software, and security hiccups are rare, but they do happen. Even the best enterprise systems in the world have multiple levels of backup in place.

Think about the data you store in your WordPress site. Your blog posts since the day you launched the site. Your customers, products, and order history if you run an ecommerce site. Backups are like implementing an insurance policy for your data. With backups, you have a reliable way of restoring that data if anything goes wrong.

Simple, automated backups save you time and give you peace of mind that you are prepared for the worst case scenario, even if you never need it. Better to have it and not need it, than to not have it and suddenly need it.

= Scheduled Backups =

Depending on your needs, you might want to back up your database every few minutes, hourly, daily, weekly, or monthly. You’ll want to automate this process, or it becomes another possible point of failure.

Scheduled backups give you peace of mind that your data is being backed up as much or as little as you need, without your intervention. By emailing the backups to an email address you choose, you can verify that the backup has run, and store it in a safe location.

== Installation ==

From your WordPress dashboard

1. **Visit** Plugins > Add New
1. **Search** for "Database Backup for WordPress"
1. **Install and Activate** Database Backup for WordPress from your Plugins page
1. **Click** on **Backup** in the "Tools" menu item, to select your backup settings, or schedule a backup to run automatically

== Frequently Asked Questions ==

= How do I restore my database from a backup? =

The backup file is a gzipped MySQL database export, which can be used to restore with MySQL applications like phpMyAdmin, included with most hosting control panels. If you are comfortable with the command line, you can also restore the database using the `mysql` command. More info on how to restore databases is available [here](https://wordpress.org/support/article/restoring-your-database-from-backup/).

= Why does my backup stop or hang without completing? =

If the backup stops prematurely, you can enable a plugin setting that will implement a small delay after each table is backed up. To do this, add the following line to your `wp-config.php` file, just above the `/* That's all, stop editing! Happy publishing. */` line:

`
define( 'DBBWP_MOD_EVASIVE_OVERRIDE', true );
`

If you are still experiencing problems, you can also increase the delay, by defining the `DBBWP_MOD_EVASIVE_DELAY` constant in your `wp-config.php` file and giving it a value higher than 500 (which is the default).

`
define( 'DBBWP_MOD_EVASIVE_DELAY', '600' );
`

We recommend incrementing the value by 100 each time, until the process completes successfully.

= What is `wp-db-backup.pot` for? =

This file is used by non-English users to translate the user interface text into their native language. Translators are encouraged to submit translated files, which will be made available to others [here](http://plugins.trac.wordpress.org/browser/wp-db-backup/i18n/).

= Why are only the core database files backed up by default? =

Generally the most important site data is stored in the core WordPress tables. It's not uncommon for some plugins to have a bunch of visitor statistics stored in their custom tables that aren’t usually considered essential data that needs to be restored after a catastrophic failure. However, it’s possible that some important data is stored in these additional tables, and you may want to back them up. We recommend reviewing the current tables in your database, and deciding which ones you would need in the case of a catastrophic failure.

= Why aren’t my backups being generated correctly? =

The plugin will attempt to create a directory `/wp-content/backup-*/` inside your WordPress directory. You may need to make `/wp-content writable` (at least temporarily) for it to create this directory. For example:

1. `$ cd /wordpress/`
1. `$ chgrp www-data wp-content` (where "`www-data`" is the group your FTP client uses)
1. `$ chmod g+w wp-content`


== Screenshots ==

1. Backup tables
1. Backup options
1. Scheduled backup

== Changelog ==

= 2.5.2 - 2022-05-09 =
* Security: "Scheduled Backup" form now has nonce check

= 2.5.1 - 2022-01-17 =
* Security: Make sure table exists before attempting backup

= 2.5 - 2021-12-17 =
* New: Brand new user interface
* Improvement: Compatibility with WordPress 5.8

= 2.4 =
* Compatibility with PHP 8 and WordPress 5.7
* Fix email backup functionality
* Fix for bug where backup file would be gzipped twice
* Fixes for several PHP notices
* Add `DBBWP_` prefix to global constants

= 2.3 =
* Remove backup directory use

= 2.2.4 =
* Remove deprecated functionality
* Do not attempt to delete non-existent files

= 2.2.3 =
* Nonce check fix for localized WP users from Sergey Biryukov
* Fix for gzipped files' incorrect size
* Some styling improvements
* Fix for JS multiple checkbox selection

== Upgrade Notice ==

= 2.2.3 =
* Fixes problems users had when using localized WordPress installations
* Fixes a bug that caused the size of gzipped backup files to be reported incorrectly

= 2.3.3 =
* Sanitize user-supplied data

== Translators ==
Thanks to the following people for providing translation files for Database Backup for WordPress:

* Abel Cheung
* Alejandro Urrutia
* Alexander Kanakaris
* Angelo Andrea Iorio
* Calle
* Daniel Erb
* Daniel Villoldo
* Diego Pierotto
* Eilif Nordseth
* Eric Lassauge
* Friedlich
* Gilles Wittezaele
* Icemanpro
* İzzet Emre Erkan
* Jong-In Kim
* Kaveh
* Kessia Pinheiro
* Kuratkoo
* Majed Alotaibi
* Michał Gołuński
* Michele Spagnuolo
* Paopao
* Philippe Galliard
* Robert Buj
* Roger
* Rune Gulbrandsøy
* Serge Rauber
* Sergey Biryukov
* Tai
* Timm Severin
* Tzafrir Rehan
* 吴曦

== Past Contributors ==
filosofo, skippy, Firas, LaughingLizard, MtDewVirus, Podz, Ringmaster