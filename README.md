Database Backup for WordPress
============

Contributors: deliciousbrains
Tags: mysql, database, backup, cron
Requires at least: 3.6.0
Tested up to: 5.7
Stable tag: 2.4
Requires PHP: 5.3

On-demand backup of your WordPress database.

Description
-----------

WP-DB-Backup allows you easily to backup your core WordPress database tables.  You may also backup other tables in the same database.

Released under the terms of the GNU GPL, version 2.

[Source Code on GitHub](https://github.com/deliciousbrains/wp-db-backup)

Installation
------------

1. Extract the wp-db-backup/ folder file to /wp-content/plugins/
1. Activate the plugin at your blog's Admin -> Plugins screen
1. The plugin will attempt to create a directory /wp-content/backup-*/ inside your WordPress directory.
1. You may need to make /wp-content writable (at least temporarily) for it to create this directory. 
   For example:
   `$ cd /wordpress/`
   `$ chgrp www-data wp-content` (where "`www-data`" is the group your FTP client uses)
   `$ chmod g+w wp-content`

Frequently Asked Questions 
--------------------------

How do I restore my database from a backup? 
-------------------------------------------

Briefly, use phpMyAdmin, which is included with most hosting control panels. More details and links to further explanations are [here](http://codex.wordpress.org/Restoring_Your_Database_From_Backup).

My backup stops or hangs without completing. 
--------------------------------------------

If you edit the text of wp-db-backup.php in a text editor like Notepad, you’ll see around line 50 the following:

`/**
* Set DBBWP_MOD_EVASIVE_OVERRIDE to true
* and increase DBBWP_MOD_EVASIVE_DELAY
* if the backup stops prematurely.
*/
// define('DBBWP_MOD_EVASIVE_OVERRIDE', false);
define('DBBWP_MOD_EVASIVE_DELAY', '500');`

Do what it says: un-comment DBBWP_MOD_EVASIVE_OVERRIDE and set it to true like so:

`define('DBBWP_MOD_EVASIVE_OVERRIDE', true);`

That will slow down the plugin, and you can slow it even further by increasing the DBBWP_MOD_EVASIVE_DELAY number from 500.

Better yet, put the lines that define the `DBBWP_MOD_EVASIVE_OVERRIDE` and `DBBWP_MOD_EVASIVE_DELAY` constants in your wp-config.php file, so your settings don't get erased when you upgrade the plugin.

What is wp-db-backup.pot for? 
-----------------------------

This files is used by non-English users to translate the display into their native language.  Translators are encouraged to submit translated files, which will be made available to others here:
http://plugins.trac.wordpress.org/browser/wp-db-backup/i18n/

Why are only the core database files backed up by default? 
----------------------------------------------------------

Because it's a fairly safe bet that the core WordPress files will be successfully backed up.  Plugins vary wildly in the amount of data that they store.  For instance, it's not uncommon for some statistics plugins to have tens of megabytes worth of visitor statistics.  These are not exactly essential items to restore after a catastrophic failure. Most poeple can reasonably live without this data in their backups.

Usage 
-----

1. Click the Tools or Manage menu in your WordPress admin area.
1. Click the Backup sub-menu.

1. The plugin will look for other tables in the same database.  You may elect to include other tables in the backup.
  ** NOTE **
  Including other tables in your backup may substantially increase the size of the backup file!
  This may prevent you from emailing the backup file because it's too big.

1. Select how you'd like the backup to be delivered:
 * Download to your computer : this will send the backup file to your browser to be downloaded
 * Email : this will email the backup file to the address you specify

1. Click "Backup!" and your database backup will be delivered to you.

The filename of the backup file will be of the form
   DB_prefix_date.sql
DB = the name of your WordPress database, as defined in wp-config.php
prefix = the table prefix for this WordPress blog, as defined in wp-config.php
date = CCYYmmdd_B format:  20050711_039
       the "B" is the internet "Swatch" time.  
       See the PHP date() function for details.

When having the database backup emailed or sent to your browser for immediate download, the backup file will be _deleted_ from the server when the transfer is finished.

Changelog
---------

2.5.2
-----
* Security: "Scheduled Backup" form now has nonce check

2.5.1
-----
* Security: Make sure table exists before attempting backup

2.5
-----
* New: Brand new user interface
* Improvement: Compatibility with WordPress 5.8

2.4
-----
* Compatibility with PHP 8 and WordPress 5.7
* Fix email backup functionality
* Fix for bug where backup file would be gzipped twice
* Fixes for several PHP notices
* Add `DBBWP_` prefix to global constants

2.3
-----
* Remove backup directory use

2.2.4
-----
* Remove deprecated functionality
* Do not attempt to delete non-existent files

2.2.3
-----
* Nonce check fix for localized WP users from Sergey Biryukov
* Fix for gzipped files' incorrect size.
* Some styling improvements.
* Fix for JS multiple checkbox selection.

2.3.3
-----
* Sanitize user-supplied data

Upgrade Notice
--------------

2.2.3
-----
* Fixes problems users had when using localized WordPress installations.
* Fixes a bug that caused the size of gzipped backup files to be reported incorrectly.

Advanced
--------
If you are using WordPress version 2.1 or newer, you can schedule automated backups to be sent to the email address 
of your choice.

Translators
-----------
Thanks to following people for providing translation files for WP-DB-Backup:

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

Past Contributors
-----------------
filosofo, skippy, Firas, LaughingLizard, MtDewVirus, Podz, Ringmaster
