-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.7.11 - MySQL Community Server (GPL)
-- Server OS:                    Win32
-- HeidiSQL Version:             9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for db_d3
CREATE DATABASE IF NOT EXISTS `db_d3` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `db_d3`;

-- Dumping structure for table db_d3.d3_search
CREATE TABLE IF NOT EXISTS `d3_search` (
  `id` int(50) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `style` varchar(30) NOT NULL,
  `ease` int(50) NOT NULL,
  `reach` int(50) NOT NULL,
  `speed` int(50) NOT NULL,
  `weapon` varchar(50) NOT NULL,
  `attack_rate` int(50) NOT NULL,
  `power` int(50) NOT NULL,
  `images` varchar(255) NOT NULL,
  `thumb` varchar(255) DEFAULT NULL,
  `defence` int(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=33 DEFAULT CHARSET=latin1;

-- Dumping data for table db_d3.d3_search: 32 rows
/*!40000 ALTER TABLE `d3_search` DISABLE KEYS */;
REPLACE INTO `d3_search` (`id`, `name`, `style`, `ease`, `reach`, `speed`, `weapon`, `attack_rate`, `power`, `images`, `thumb`, `defence`) VALUES
	(1, 'Armor King', 'Aikido', 20, 60, 60, 'Knives', 80, 10, 'armorking.png', 'armorking_thumb.png', 33),
	(2, 'Asuka', 'Judo', 85, 25, 90, 'Sickle', 70, 90, 'asuka.png', 'asuka_thumb.png', 55),
	(3, 'Baek', 'Jujutsu', 25, 98, 90, 'Pugio', 50, 70, 'baek.png', 'baek_thumb.png', 65),
	(4, 'Bob', 'Kendo', 70, 66, 88, 'Acinaces', 49, 20, 'bob.png', 'bob_thumb.png', 12),
	(5, 'Bruce', 'Kenjutsu', 33, 72, 65, 'Spear', 55, 88, 'bruce.png', 'bruce_thumb.png', 88),
	(6, 'Bryan', 'Kendo', 80, 96, 55, 'Knives', 68, 87, 'bryan.png', 'bryan_thumb.png', 88),
	(7, 'Christie', 'Kenpo', 70, 85, 80, 'Acinaces', 77, 52, 'christie.png', 'christie_thumb.png', 90),
	(8, 'Jack6', 'Kyudo', 65, 48, 75, 'Pugio', 88, 36, 'jack6.png', 'jack6_thumb.png', 44),
	(9, 'Kazuya', 'Naginatajutsu', 88, 90, 70, 'Knives', 44, 55, 'kazuya.png', 'kazuya_thumb.png', 66);
/*!40000 ALTER TABLE `d3_search` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
