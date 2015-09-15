-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Sep 15, 2015 at 09:25 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `musicstore`
--

-- --------------------------------------------------------

--
-- Table structure for table `albums`
--

CREATE TABLE IF NOT EXISTS `albums` (
  `album_id` int(9) NOT NULL AUTO_INCREMENT,
  `album_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `album_artist` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `album_duration` varchar(6) COLLATE utf8_unicode_ci NOT NULL,
  `album_release_year` varchar(4) COLLATE utf8_unicode_ci NOT NULL,
  `album_description` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `album_long_description` text COLLATE utf8_unicode_ci,
  `album_created` timestamp NOT NULL,
  `album_price` double DEFAULT NULL,
  PRIMARY KEY (`album_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=26 ;

--
-- Dumping data for table `albums`
--

INSERT INTO `albums` (`album_id`, `album_name`, `album_artist`, `album_duration`, `album_release_year`, `album_description`, `album_long_description`, `album_created`, `album_price`) VALUES
(1, 'Ballbreaker', 'ACDC', '120', '1970', 'Quisque maximus, sapien ut scelerisque sodales, urna erat condimentum lacus, id imperdiet purus quam in lorem. Aenean ut auctor ipsum.', 'Etiam malesuada egestas dapibus. Nulla accumsan lorem sapien, ac mattis enim aliquam tempus. Sed pulvinar aliquam iaculis. Duis luctus, lorem eget condimentum congue, elit mauris tincidunt lorem, ut finibus nisi justo quis mi. Etiam commodo, dui vitae dignissim ultrices, augue diam dapibus sem, in fringilla neque arcu aliquet est. Nulla enim mauris, volutpat vel maximus fringilla, fermentum ut metus. Sed fermentum, elit et dapibus facilisis, augue lorem blandit ipsum, in auctor lectus lacus a risus. Aenean velit neque, aliquam et erat et, elementum gravida mi. Vivamus scelerisque risus ac gravida lacinia. Class aptent taciti sociosqu ad litora torquent per conubia.', '2015-08-26 21:10:15', 43),
(2, 'Iron Man', 'ACDC', '120', '1980', 'Quisque maximus, sapien ut scelerisque sodales, urna erat condimentum lacus, id imperdiet purus quam in lorem. Aenean ut auctor ipsum.', 'Etiam malesuada egestas dapibus. Nulla accumsan lorem sapien, ac mattis enim aliquam tempus. Sed pulvinar aliquam iaculis. Duis luctus, lorem eget condimentum congue, elit mauris tincidunt lorem, ut finibus nisi justo quis mi. Etiam commodo, dui vitae dignissim ultrices, augue diam dapibus sem, in fringilla neque arcu aliquet est. Nulla enim mauris, volutpat vel maximus fringilla, fermentum ut metus. Sed fermentum, elit et dapibus facilisis, augue lorem blandit ipsum, in auctor lectus lacus a risus. Aenean velit neque, aliquam et erat et, elementum gravida mi. Vivamus scelerisque risus ac gravida lacinia. Class aptent taciti sociosqu ad litora torquent per conubia.', '2015-08-27 00:15:29', 35),
(3, 'Fistful of Metal', 'Anthrax', '120', '1956', 'Quisque maximus, sapien ut scelerisque sodales, urna erat condimentum lacus, id imperdiet purus quam in lorem. Aenean ut auctor ipsum.', 'Etiam malesuada egestas dapibus. Nulla accumsan lorem sapien, ac mattis enim aliquam tempus. Sed pulvinar aliquam iaculis. Duis luctus, lorem eget condimentum congue, elit mauris tincidunt lorem, ut finibus nisi justo quis mi. Etiam commodo, dui vitae dignissim ultrices, augue diam dapibus sem, in fringilla neque arcu aliquet est. Nulla enim mauris, volutpat vel maximus fringilla, fermentum ut metus. Sed fermentum, elit et dapibus facilisis, augue lorem blandit ipsum, in auctor lectus lacus a risus. Aenean velit neque, aliquam et erat et, elementum gravida mi. Vivamus scelerisque risus ac gravida lacinia. Class aptent taciti sociosqu ad litora torquent per conubia.', '2015-08-24 23:15:31', 37),
(4, 'Black eyed Peas', 'Black eyed Peas', '120', '1993', 'urpis augue malesuada id scelerisqueis', 'Etiam malesuada egestas dapibus. Nulla accumsan lorem sapien, ac mattis enim aliquam tempus. Sed pulvinar aliquam iaculis. Duis luctus, lorem eget condimentum congue, elit mauris tincidunt lorem, ut finibus nisi justo quis mi. Etiam commodo, dui vitae dignissim ultrices, augue diam dapibus sem, in fringilla neque arcu aliquet est. Nulla enim mauris, volutpat vel maximus fringilla, fermentum ut metus. Sed fermentum, elit et dapibus facilisis, augue lorem blandit ipsum, in auctor lectus lacus a risus. Aenean velit neque, aliquam et erat et, elementum gravida mi. Vivamus scelerisque risus ac gravida lacinia. Class aptent taciti sociosqu ad litora torquent per conubia.', '2015-08-21 02:05:47', 40),
(5, 'A Birds Nest In Your Hair', 'BoB Dylan', '120', '1987', 'Quisque maximus, sapien ut scelerisque sodales, urna erat condimentum lacus, id imperdiet purus quam in lorem. Aenean ut auctor ipsum.', 'Etiam malesuada egestas dapibus. Nulla accumsan lorem sapien, ac mattis enim aliquam tempus. Sed pulvinar aliquam iaculis. Duis luctus, lorem eget condimentum congue, elit mauris tincidunt lorem, ut finibus nisi justo quis mi. Etiam commodo, dui vitae dignissim ultrices, augue diam dapibus sem, in fringilla neque arcu aliquet est. Nulla enim mauris, volutpat vel maximus fringilla, fermentum ut metus. Sed fermentum, elit et dapibus facilisis, augue lorem blandit ipsum, in auctor lectus lacus a risus. Aenean velit neque, aliquam et erat et, elementum gravida mi. Vivamus scelerisque risus ac gravida lacinia. Class aptent taciti sociosqu ad litora torquent per conubia.', '2015-08-26 05:12:34', 32),
(6, 'One Night Only', 'BoB Dylan', '120', '1976', 'Quisque maximus, sapien ut scelerisque sodales, urna erat condimentum lacus, id imperdiet purus quam in lorem. Aenean ut auctor ipsum.', 'Etiam malesuada egestas dapibus. Nulla accumsan lorem sapien, ac mattis enim aliquam tempus. Sed pulvinar aliquam iaculis. Duis luctus, lorem eget condimentum congue, elit mauris tincidunt lorem, ut finibus nisi justo quis mi. Etiam commodo, dui vitae dignissim ultrices, augue diam dapibus sem, in fringilla neque arcu aliquet est. Nulla enim mauris, volutpat vel maximus fringilla, fermentum ut metus. Sed fermentum, elit et dapibus facilisis, augue lorem blandit ipsum, in auctor lectus lacus a risus. Aenean velit neque, aliquam et erat et, elementum gravida mi. Vivamus scelerisque risus ac gravida lacinia. Class aptent taciti sociosqu ad litora torquent per conubia.', '2015-08-27 03:09:34', 25),
(7, 'Greatest Hits The Ultimate collect', 'Bon Jovi', '120', '2000', 'Quisque maximus, sapien ut scelerisque sodales, urna erat condimentum lacus, id imperdiet purus quam in lorem. Aenean ut auctor ipsum.', 'Etiam malesuada egestas dapibus. Nulla accumsan lorem sapien, ac mattis enim aliquam tempus. Sed pulvinar aliquam iaculis. Duis luctus, lorem eget condimentum congue, elit mauris tincidunt lorem, ut finibus nisi justo quis mi. Etiam commodo, dui vitae dignissim ultrices, augue diam dapibus sem, in fringilla neque arcu aliquet est. Nulla enim mauris, volutpat vel maximus fringilla, fermentum ut metus. Sed fermentum, elit et dapibus facilisis, augue lorem blandit ipsum, in auctor lectus lacus a risus. Aenean velit neque, aliquam et erat et, elementum gravida mi. Vivamus scelerisque risus ac gravida lacinia. Class aptent taciti sociosqu ad litora torquent per conubia.', '2015-08-22 23:14:31', 23),
(8, 'Broken Social Scene Presents', 'Brendan Canning', '120', '1970', 'Quisque maximus, sapien ut scelerisque sodales, urna erat condimentum lacus, id imperdiet purus quam in lorem. Aenean ut auctor ipsum.', 'Etiam malesuada egestas dapibus. Nulla accumsan lorem sapien, ac mattis enim aliquam tempus. Sed pulvinar aliquam iaculis. Duis luctus, lorem eget condimentum congue, elit mauris tincidunt lorem, ut finibus nisi justo quis mi. Etiam commodo, dui vitae dignissim ultrices, augue diam dapibus sem, in fringilla neque arcu aliquet est. Nulla enim mauris, volutpat vel maximus fringilla, fermentum ut metus. Sed fermentum, elit et dapibus facilisis, augue lorem blandit ipsum, in auctor lectus lacus a risus. Aenean velit neque, aliquam et erat et, elementum gravida mi. Vivamus scelerisque risus ac gravida lacinia. Class aptent taciti sociosqu ad litora torquent per conubia.', '2015-08-25 10:03:00', 40),
(9, 'Bundy Country', 'Bundy Country', '120', '1980', 'Quisque maximus, sapien ut scelerisque sodales, urna erat condimentum lacus, id imperdiet purus quam in lorem. Aenean ut auctor ipsum.', 'Etiam malesuada egestas dapibus. Nulla accumsan lorem sapien, ac mattis enim aliquam tempus. Sed pulvinar aliquam iaculis. Duis luctus, lorem eget condimentum congue, elit mauris tincidunt lorem, ut finibus nisi justo quis mi. Etiam commodo, dui vitae dignissim ultrices, augue diam dapibus sem, in fringilla neque arcu aliquet est. Nulla enim mauris, volutpat vel maximus fringilla, fermentum ut metus. Sed fermentum, elit et dapibus facilisis, augue lorem blandit ipsum, in auctor lectus lacus a risus. Aenean velit neque, aliquam et erat et, elementum gravida mi. Vivamus scelerisque risus ac gravida lacinia. Class aptent taciti sociosqu ad litora torquent per conubia.', '2015-08-02 18:32:00', 27),
(10, 'Born with the blues', 'Chris Aaron', '120', '1996', 'Quisque maximus, sapien ut scelerisque sodales, urna erat condimentum lacus, id imperdiet purus quam in lorem. Aenean ut auctor ipsum.', 'Etiam malesuada egestas dapibus. Nulla accumsan lorem sapien, ac mattis enim aliquam tempus. Sed pulvinar aliquam iaculis. Duis luctus, lorem eget condimentum congue, elit mauris tincidunt lorem, ut finibus nisi justo quis mi. Etiam commodo, dui vitae dignissim ultrices, augue diam dapibus sem, in fringilla neque arcu aliquet est. Nulla enim mauris, volutpat vel maximus fringilla, fermentum ut metus. Sed fermentum, elit et dapibus facilisis, augue lorem blandit ipsum, in auctor lectus lacus a risus. Aenean velit neque, aliquam et erat et, elementum gravida mi. Vivamus scelerisque risus ac gravida lacinia. Class aptent taciti sociosqu ad litora torquent per conubia.', '2015-08-25 09:10:00', 22),
(11, 'In Orbit', 'clark Terry', '120', '1988', 'Quisque maximus, sapien ut scelerisque sodales, urna erat condimentum lacus, id imperdiet purus quam in lorem. Aenean ut auctor ipsum.', 'Etiam malesuada egestas dapibus. Nulla accumsan lorem sapien, ac mattis enim aliquam tempus. Sed pulvinar aliquam iaculis. Duis luctus, lorem eget condimentum congue, elit mauris tincidunt lorem, ut finibus nisi justo quis mi. Etiam commodo, dui vitae dignissim ultrices, augue diam dapibus sem, in fringilla neque arcu aliquet est. Nulla enim mauris, volutpat vel maximus fringilla, fermentum ut metus. Sed fermentum, elit et dapibus facilisis, augue lorem blandit ipsum, in auctor lectus lacus a risus. Aenean velit neque, aliquam et erat et, elementum gravida mi. Vivamus scelerisque risus ac gravida lacinia. Class aptent taciti sociosqu ad litora torquent per conubia.', '2015-08-24 01:33:40', 15),
(12, 'The Final Frontier', 'Iron Maiden', '50', '1977', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque augue sed sollicitudin fermentum. Aliquam consequat lorem eget sollicitudin interdum. Cras placerat purus tellus, et.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac mi purus. Fusce fermentum diam sed sem blandit, non consectetur orci porta. Vestibulum tempor ante eu diam placerat, vel molestie nisi maximus. Vivamus nisi elit, vestibulum sit amet porta ac, eleifend quis erat. Donec luctus nunc iaculis, facilisis orci id, vestibulum felis. Cum sociis natoque.', '2015-08-04 07:56:13', 25),
(13, 'Alejandro The Remixes', 'Lady Gaga', '44', '2010', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac mi purus. Fusce fermentum diam sed sem blandit, non consectetur orci porta. Vestibulum tempor ante eu diam placerat, vel molestie nisi maximus. Vivamus nisi elit, vestibulum sit amet porta', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim velit at ante lobortis cursus. Phasellus mi quam, pellentesque at hendrerit sed, congue nec mauris. Duis quis sagittis sapien. Sed fermentum volutpat sodales. Integer iaculis orci vel ipsum sollicitudin ultricies. Maecenas porttitor velit erat, pharetra laoreet quam consectetur eget. Praesent rhoncus enim non felis egestas, vitae volutpat justo imperdiet. Fusce sed justo ut dui sagittis placerat ac nec elit. Vivamus eget venenatis purus, id semper augue. Cras et laoreet quam. Nullam malesuada vel enim quis.', '2015-08-04 08:01:46', 29.5),
(14, 'My World 2.0', 'Justin Bieber', '42', '1985', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac mi purus. Fusce fermentum diam sed sem blandit, non consectetur orci porta. Vestibulum tempor ante eu diam placerat, vel molestie nisi maximus. Vivamus nisi elit, vestibulum sit amet porta', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim velit at ante lobortis cursus. Phasellus mi quam, pellentesque at hendrerit sed, congue nec mauris. Duis quis sagittis sapien. Sed fermentum volutpat sodales. Integer iaculis orci vel ipsum sollicitudin ultricies. Maecenas porttitor velit erat, pharetra laoreet quam consectetur eget. Praesent rhoncus enim non felis egestas, vitae volutpat justo imperdiet. Fusce sed justo ut dui sagittis placerat ac nec elit. Vivamus eget venenatis purus, id semper augue. Cras et laoreet quam. Nullam malesuada vel enim quis.', '2015-08-21 12:02:41', 51),
(15, 'Foo Fighters', 'One by one', '422', '1986', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac mi purus. Fusce fermentum diam sed sem blandit, non consectetur orci porta. Vestibulum tempor ante eu diam placerat, vel molestie nisi maximus. Vivamus nisi elit, vestibulum sit amet porta', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim velit at ante lobortis cursus. Phasellus mi quam, pellentesque at hendrerit sed, congue nec mauris. Duis quis sagittis sapien. Sed fermentum volutpat sodales. Integer iaculis orci vel ipsum sollicitudin ultricies. Maecenas porttitor velit erat, pharetra laoreet quam consectetur eget. Praesent rhoncus enim non felis egestas, vitae volutpat justo imperdiet. Fusce sed justo ut dui sagittis placerat ac nec elit. Vivamus eget venenatis purus, id semper augue. Cras et laoreet quam. Nullam malesuada vel enim quis.', '2015-08-21 12:03:20', 40),
(16, 'Joy Division', 'End', '42', '2002', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac mi purus. Fusce fermentum diam sed sem blandit, non consectetur orci porta. Vestibulum tempor ante eu diam placerat, vel molestie nisi maximus. Vivamus nisi elit, vestibulum sit amet porta', 'hmhmhm', '2015-08-21 12:03:51', 30),
(17, 'Yello', 'Touch', '41', '1985', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac mi purus. Fusce fermentum diam sed sem blandit, non consectetur orci porta. Vestibulum tempor ante eu diam placerat, vel molestie nisi maximus. Vivamus nisi elit, vestibulum sit amet porta', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim velit at ante lobortis cursus. Phasellus mi quam, pellentesque at hendrerit sed, congue nec mauris. Duis quis sagittis sapien. Sed fermentum volutpat sodales. Integer iaculis orci vel ipsum sollicitudin ultricies. Maecenas porttitor velit erat, pharetra laoreet quam consectetur eget. Praesent rhoncus enim non felis egestas, vitae volutpat justo imperdiet. Fusce sed justo ut dui sagittis placerat ac nec elit. Vivamus eget venenatis purus, id semper augue. Cras et laoreet quam. Nullam malesuada vel enim quis.', '2015-08-21 12:04:11', 23),
(18, 'Vanhalen', 'Balance', '82', '1999', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac mi purus. Fusce fermentum diam sed sem blandit, non consectetur orci porta. Vestibulum tempor ante eu diam placerat, vel molestie nisi maximus. Vivamus nisi elit, vestibulum sit amet porta', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim velit at ante lobortis cursus. Phasellus mi quam, pellentesque at hendrerit sed, congue nec mauris. Duis quis sagittis sapien. Sed fermentum volutpat sodales. Integer iaculis orci vel ipsum sollicitudin ultricies. Maecenas porttitor velit erat, pharetra laoreet quam consectetur eget. Praesent rhoncus enim non felis egestas, vitae volutpat justo imperdiet. Fusce sed justo ut dui sagittis placerat ac nec elit. Vivamus eget venenatis purus, id semper augue. Cras et laoreet quam. Nullam malesuada vel enim quis.', '2015-08-21 12:04:29', 22),
(19, 'Burning Bright', 'Two Fires', '25', '1967', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac mi purus. Fusce fermentum diam sed sem blandit, non consectetur orci porta. Vestibulum tempor ante eu diam placerat, vel molestie nisi maximus. Vivamus nisi elit, vestibulum sit amet porta', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim velit at ante lobortis cursus. Phasellus mi quam, pellentesque at hendrerit sed, congue nec mauris. Duis quis sagittis sapien. Sed fermentum volutpat sodales. Integer iaculis orci vel ipsum sollicitudin ultricies. Maecenas porttitor velit erat, pharetra laoreet quam consectetur eget. Praesent rhoncus enim non felis egestas, vitae volutpat justo imperdiet. Fusce sed justo ut dui sagittis placerat ac nec elit. Vivamus eget venenatis purus, id semper augue. Cras et laoreet quam. Nullam malesuada vel enim quis.', '2015-08-21 12:04:56', 22),
(20, 'Top Gear', 'Full Throttle', '25', '1997', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac mi purus. Fusce fermentum diam sed sem blandit, non consectetur orci porta. Vestibulum tempor ante eu diam placerat, vel molestie nisi maximus. Vivamus nisi elit, vestibulum sit amet porta', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim velit at ante lobortis cursus. Phasellus mi quam, pellentesque at hendrerit sed, congue nec mauris. Duis quis sagittis sapien. Sed fermentum volutpat sodales. Integer iaculis orci vel ipsum sollicitudin ultricies. Maecenas porttitor velit erat, pharetra laoreet quam consectetur eget. Praesent rhoncus enim non felis egestas, vitae volutpat justo imperdiet. Fusce sed justo ut dui sagittis placerat ac nec elit. Vivamus eget venenatis purus, id semper augue. Cras et laoreet quam. Nullam malesuada vel enim quis.', '2015-08-21 12:05:17', 25),
(21, 'Willie Williams', 'Can''t help but have the blues', '24', '1973', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac mi purus. Fusce fermentum diam sed sem blandit, non consectetur orci porta. Vestibulum tempor ante eu diam placerat, vel molestie nisi maximus. Vivamus nisi elit, vestibulum sit amet porta', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim velit at ante lobortis cursus. Phasellus mi quam, pellentesque at hendrerit sed, congue nec mauris. Duis quis sagittis sapien. Sed fermentum volutpat sodales. Integer iaculis orci vel ipsum sollicitudin ultricies. Maecenas porttitor velit erat, pharetra laoreet quam consectetur eget. Praesent rhoncus enim non felis egestas, vitae volutpat justo imperdiet. Fusce sed justo ut dui sagittis placerat ac nec elit. Vivamus eget venenatis purus, id semper augue. Cras et laoreet quam. Nullam malesuada vel enim quis.', '2015-08-21 12:05:36', 34),
(22, 'The Who', 'Greatest Hits', '14', '1983', ' vel molestie nisi maximus. Vivamus nisi elit, vestibulum sit amet porta', 'Cras et laoreet quam. Nullam malesuada vel enim quis.', '2015-09-07 15:05:15', 24),
(23, 'One', 'Ultimate Dance', '4', '1973', ' vel molestie nisi maximus. Vivamus nisi elit, vestibulum sit amet porta', 'Cras et laoreet quam. Nullam malesuada vel enim quis.', '2015-09-07 15:20:54', 34),
(24, 'Greatest Hits', 'Pink', '32', '2010', ' vel molestie nisi maximus. Vivamus nisi elit, vestibulum sit amet porta', 'Cras et laoreet quam. Nullam malesuada vel enim quis.', '2015-09-07 16:26:07', 22),
(25, 'The Remix', 'Lady Gaga', '3232', '2012', ' vel molestie nisi maximus. Vivamus nisi elit, vestibulum sit amet porta', 'Cras et laoreet quam. Nullam malesuada vel enim quis.', '2015-09-07 16:29:55', 25.5);

-- --------------------------------------------------------

--
-- Table structure for table `albums_stock`
--

CREATE TABLE IF NOT EXISTS `albums_stock` (
  `album_id` int(9) NOT NULL,
  `album_stock` smallint(3) DEFAULT '0',
  PRIMARY KEY (`album_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `albums_stock`
--

INSERT INTO `albums_stock` (`album_id`, `album_stock`) VALUES
(1, 4),
(2, 11),
(9, 22);

-- --------------------------------------------------------

--
-- Table structure for table `fb_users`
--

CREATE TABLE IF NOT EXISTS `fb_users` (
  `user_id` int(9) NOT NULL,
  `user_fb_uid` bigint(13) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_fb_uid` (`user_fb_uid`),
  KEY `user_fb_uid_2` (`user_fb_uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `genres`
--

CREATE TABLE IF NOT EXISTS `genres` (
  `genre_id` int(7) NOT NULL AUTO_INCREMENT,
  `genre_parent_id` int(7) NOT NULL DEFAULT '0',
  `genre_name` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`genre_id`),
  KEY `genre_parent_id` (`genre_parent_id`),
  KEY `genre_name` (`genre_name`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=11 ;

--
-- Dumping data for table `genres`
--

INSERT INTO `genres` (`genre_id`, `genre_parent_id`, `genre_name`) VALUES
(1, 1, 'Pop'),
(2, 2, 'Rock'),
(3, 2, 'Blues'),
(4, 2, 'Box-Sets'),
(5, 2, 'Classical'),
(6, 2, 'Country'),
(7, 2, 'Dance'),
(8, 2, 'Heavy-Metal'),
(9, 2, 'Jazz'),
(10, 1, 'Rock-Pop');

-- --------------------------------------------------------

--
-- Table structure for table `genres_to_albums`
--

CREATE TABLE IF NOT EXISTS `genres_to_albums` (
  `album_id` int(9) NOT NULL,
  `genre_id` int(7) NOT NULL,
  PRIMARY KEY (`album_id`),
  KEY `genre_id` (`genre_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `genres_to_albums`
--

INSERT INTO `genres_to_albums` (`album_id`, `genre_id`) VALUES
(4, 1),
(8, 1),
(14, 1),
(24, 1),
(1, 2),
(2, 2),
(5, 2),
(6, 2),
(15, 2),
(19, 2),
(22, 2),
(10, 3),
(17, 3),
(21, 3),
(20, 4),
(23, 4),
(9, 6),
(13, 7),
(25, 7),
(3, 8),
(12, 8),
(18, 8),
(11, 9),
(7, 10),
(16, 10);

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE IF NOT EXISTS `images` (
  `image_id` bigint(12) NOT NULL AUTO_INCREMENT,
  `image_path` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `image_title` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`image_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=26 ;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`image_id`, `image_path`, `image_title`) VALUES
(1, 'acdc_-_ballbreaker_1.png', 'ACDC'),
(2, 'acdc_s_iron_man_2_soundtrack_1.png', 'ACDC'),
(3, 'anthrax_-_fistful_of_metal_1.png', 'Fistful of Metal'),
(4, 'black_eyed_peas_-_black_eyed_peas_triple_pack_box_1.png', 'Black eyed Peas'),
(5, 'bob_dylan_-_a_bird_s_nest_in_your_hair_1.png', 'BoB Dylan'),
(6, 'bob_dylan_-_one_night_only_1.png', 'BoB Dylan'),
(7, 'bon_jovi_-_greatest_hits_the_ultimate_collect_music_1.png', 'Greatest Hits The Ultimate collect'),
(8, 'broken_social_scene_presents_brendan_canning_1.png', 'Brendan Canning'),
(9, 'bundy_country_2007_1.png', 'Bundy Country'),
(10, 'chris_aaron_-_born_with_the_blues_1.png', 'Chris Aaron'),
(11, 'clark_terry_with_thelonious_monk_-_in_orbit_1.png', 'clark Terry'),
(12, 'iron_maiden_-_the_final_frontier_1.png', 'Iron Maiden The Final Frontier'),
(13, 'lady_gaga_-_alejandro_the_remixes_1.png', 'Lady Gaga - Alejandro'),
(14, 'justin_bieber_-_my_world_2.0_1.png', 'biber'),
(15, 'foo_fighters_-_one_by_one_1.png', 'foo_fighters'),
(16, 'joy_division_-_london_1979_1.png', 'joy_division'),
(17, 'yello_-_touch_yello_1.png', 'yellow'),
(18, 'van_halen_-_balance_1.png', 'van_halen'),
(19, 'two_fires_-_burning_bright_1.png', 'two_fires'),
(20, 'top_gear_-_full_throttle_1.png', 'top_gear'),
(21, 'willie_willis_-_can_t_help_but_have_the_blues_1.png', 'willie_willis'),
(22, 'the_who_-_greatest_hits_and_more_cd_1.png', 'the_who_-_greatest_hits'),
(23, 'ultimate_dance_party_1.png', 'ultimate_dance_party'),
(24, 'pink_-_greatest_hits_so_far_1.png', 'Pink - Greatest Hits'),
(25, 'lady_gaga_-_the_remix_1.png', 'Lady Gaga-The Remix');

-- --------------------------------------------------------

--
-- Table structure for table `images_to_albums`
--

CREATE TABLE IF NOT EXISTS `images_to_albums` (
  `image_id` bigint(12) NOT NULL,
  `album_id` int(9) NOT NULL,
  PRIMARY KEY (`image_id`),
  KEY `album_id` (`album_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `images_to_albums`
--

INSERT INTO `images_to_albums` (`image_id`, `album_id`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10),
(11, 11),
(12, 12),
(13, 13),
(14, 14),
(15, 15),
(16, 16),
(17, 17),
(18, 18),
(19, 19),
(20, 20),
(21, 21),
(22, 22),
(23, 23),
(24, 24),
(25, 25);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE IF NOT EXISTS `orders` (
  `order_id` bigint(12) NOT NULL AUTO_INCREMENT,
  `user_id` int(9) NOT NULL,
  `order_created` timestamp NOT NULL,
  `order_shipping_address` varchar(120) COLLATE utf8_unicode_ci NOT NULL,
  `order_shipping_city` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `order_shipping_zipcode` varchar(6) COLLATE utf8_unicode_ci NOT NULL,
  `order_shipping_phone` varchar(11) COLLATE utf8_unicode_ci NOT NULL,
  `order_payment_method` varchar(11) COLLATE utf8_unicode_ci NOT NULL,
  `order_total` double NOT NULL,
  PRIMARY KEY (`order_id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=8 ;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `user_id`, `order_created`, `order_shipping_address`, `order_shipping_city`, `order_shipping_zipcode`, `order_shipping_phone`, `order_payment_method`, `order_total`) VALUES
(1, 1, '0000-00-00 00:00:00', '1554', 'PTI', '054682', '', '', 34),
(2, 2, '0000-00-00 00:00:00', '15545', 'Jerusalem', '054151', '', '', 59),
(3, 1, '0000-00-00 00:00:00', '133', 'aaa', '025654', '', '', 59),
(4, 1, '0000-00-00 00:00:00', '123', 'aas', '054546', '', '', 59),
(5, 1, '0000-00-00 00:00:00', 'aad 1', 'aas', '123', '05454664664', 'check', 59),
(6, 1, '0000-00-00 00:00:00', 'aaa 1', 'aaa', '1515', '0266565656', 'check', 23),
(7, 1, '0000-00-00 00:00:00', 'Perets Berdksldkls 4', 'Jerusalem', '123', '0256464646', 'check', 23);

-- --------------------------------------------------------

--
-- Table structure for table `orders_to_albums`
--

CREATE TABLE IF NOT EXISTS `orders_to_albums` (
  `order_id` bigint(12) NOT NULL,
  `album_id` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `orders_to_albums`
--

INSERT INTO `orders_to_albums` (`order_id`, `album_id`) VALUES
(1, 21),
(2, 21),
(2, 20),
(3, 21),
(3, 20),
(4, 21),
(4, 20),
(5, 21),
(5, 20),
(6, 7),
(7, 7);

-- --------------------------------------------------------

--
-- Table structure for table `songs`
--

CREATE TABLE IF NOT EXISTS `songs` (
  `song_id` bigint(12) NOT NULL AUTO_INCREMENT,
  `song_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `song_duration` varchar(5) COLLATE utf8_unicode_ci NOT NULL,
  `song_path` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`song_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `songs_to_albums`
--

CREATE TABLE IF NOT EXISTS `songs_to_albums` (
  `song_id` bigint(12) NOT NULL,
  `album_id` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `special_albums`
--

CREATE TABLE IF NOT EXISTS `special_albums` (
  `album_id` int(9) NOT NULL,
  PRIMARY KEY (`album_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int(9) NOT NULL AUTO_INCREMENT,
  `user_email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `user_password` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `user_firstname` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_lastname` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_email` (`user_email`),
  KEY `user_email_2` (`user_email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
