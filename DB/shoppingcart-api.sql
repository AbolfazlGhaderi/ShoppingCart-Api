-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 23, 2023 at 03:52 PM
-- Server version: 8.2.0
-- PHP Version: 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shoppingcart-api`
--

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE IF NOT EXISTS `orders` (
  `order_id` varchar(100) COLLATE utf8mb4_persian_ci NOT NULL,
  `create_date` datetime NOT NULL,
  `total_amount` int NOT NULL,
  `Total` int NOT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_persian_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `create_date`, `total_amount`, `Total`) VALUES
('010750046486', '2023-12-23 14:38:26', 3295, 5),
('882645615133', '2023-12-23 15:33:11', 2498, 2),
('909392342445', '2023-12-23 15:37:20', 2397, 3),
('234599024184', '2023-12-23 15:42:08', 1996, 4),
('384777789896', '2023-12-23 15:44:04', 1897, 3),
('358776988099', '2023-12-23 15:49:03', 3892, 8);

-- --------------------------------------------------------

--
-- Table structure for table `order_detail`
--

DROP TABLE IF EXISTS `order_detail`;
CREATE TABLE IF NOT EXISTS `order_detail` (
  `order_detail_id` int NOT NULL AUTO_INCREMENT,
  `order_fk` varchar(100) COLLATE utf8mb4_persian_ci NOT NULL,
  `product_fk` int NOT NULL,
  PRIMARY KEY (`order_detail_id`),
  KEY `fk_order_id` (`order_fk`),
  KEY `fk_product_id` (`product_fk`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_persian_ci;

--
-- Dumping data for table `order_detail`
--

INSERT INTO `order_detail` (`order_detail_id`, `order_fk`, `product_fk`) VALUES
(1, '10750046486', 4),
(2, '10750046486', 2),
(3, '882645615133', 2),
(4, '882645615133', 3),
(5, '909392342445', 3),
(6, '909392342445', 1),
(7, '234599024184', 6),
(8, '234599024184', 8),
(9, '384777789896', 8),
(10, '384777789896', 5),
(11, '358776988099', 4),
(12, '358776988099', 1),
(13, '358776988099', 7);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_persian_ci NOT NULL,
  `price` int NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_persian_ci DEFAULT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_persian_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `title`, `price`, `image`) VALUES
(1, 'ایرپادز', 199, 'http://localhost:3000/images/airpods.jpg'),
(2, 'آیپد', 499, 'http://localhost:3000/images/ipad.jpg'),
(3, 'مک‌بوک', 1999, 'http://localhost:3000/images/macbook.jpg'),
(4, 'آیفون', 899, 'http://localhost:3000/images/phone.jpg'),
(5, 'هدفون', 599, 'http://localhost:3000/images/headphone.jpg'),
(6, 'ماوس', 299, 'http://localhost:3000/images/mouse.jpg'),
(7, 'اپل واچ', 499, 'http://localhost:3000/images/watch.jpg'),
(8, 'میکروفون', 699, 'http://localhost:3000/images/mic.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
