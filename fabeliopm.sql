-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 31, 2020 at 04:44 AM
-- Server version: 10.1.16-MariaDB
-- PHP Version: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fpm`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(10) NOT NULL,
  `id_product` int(10) NOT NULL DEFAULT '0',
  `name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `id_product`, `name`) VALUES
(1, 1, 'Ruang Tamu'),
(2, 1, 'Sofa'),
(3, 5, 'Ruang Tamu'),
(4, 5, 'Sofa'),
(5, 5, 'Sofa 2 Seater'),
(6, 8, 'Ruang Tamu'),
(7, 8, 'Sofa');

-- --------------------------------------------------------

--
-- Table structure for table `color`
--

CREATE TABLE `color` (
  `id` int(10) NOT NULL,
  `id_product` int(10) NOT NULL DEFAULT '0',
  `label` varchar(100) DEFAULT NULL,
  `code` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `color`
--

INSERT INTO `color` (`id`, `id_product`, `label`, `code`) VALUES
(1, 1, 'Dark Grey Daphnee', '#575557'),
(2, 1, 'Mystic Daphnee', '#435975'),
(3, 1, 'Fire Daphnee', '#7d3030'),
(4, 1, 'Silver Black Daphnee', '#21314d'),
(5, 1, 'Cream Daphnee', '#fffdd0'),
(6, 2, 'Blue', '#0000ff'),
(7, 2, 'Brown', '#c8b560'),
(8, 2, 'Cream', '#f0ddce'),
(9, 2, 'Dark Red', '#8b0000'),
(10, 3, 'Custard Vienna', '#fffdd0'),
(11, 4, 'Dark Grey Daphnee', '#575557'),
(12, 4, 'Mystic Daphnee', '#435975'),
(13, 4, 'Fire Daphnee', '#7d3030'),
(14, 4, 'Silver Black Daphnee', '#21314d'),
(15, 4, 'Cream Daphnee', '#fffdd0'),
(16, 5, 'Dark Grey Daphnee', '#575557'),
(17, 5, 'Mystic Daphnee', '#435975'),
(18, 5, 'Fire Daphnee', '#7d3030'),
(19, 5, 'Light Blue', '#82b6f5'),
(20, 5, 'Silver Black Daphnee', '#21314d'),
(21, 5, 'Cream Daphnee', '#fffdd0'),
(22, 6, 'Cream', '#f0ddce'),
(23, 6, 'Dark Blue', '#003585'),
(24, 7, 'Mid Grey Vienna', '#696969'),
(25, 8, 'Red', '#ff0000');

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE `location` (
  `id` int(10) NOT NULL,
  `id_product` int(10) NOT NULL DEFAULT '0',
  `name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `location`
--

INSERT INTO `location` (`id`, `id_product`, `name`) VALUES
(1, 1, 'Alam Sutera'),
(2, 1, 'Bekasi Summarecon'),
(3, 1, 'BSD'),
(4, 1, 'Kebon Jeruk'),
(5, 1, 'Bintaro'),
(6, 1, 'Gading Serpong'),
(7, 1, 'Depok'),
(8, 1, 'Bogor Padjajaran'),
(9, 1, 'Bandung Setiabudi'),
(10, 1, 'Kemang'),
(11, 1, 'Taman Palem'),
(12, 1, 'Bekasi Galaxy City'),
(13, 1, 'Tebet'),
(14, 1, 'Sunter'),
(15, 1, 'Pantai Indah Kapuk'),
(16, 1, 'Citra Raya'),
(17, 1, 'Bandung Antapani'),
(18, 2, 'Bandung Naripan'),
(19, 2, 'Bandung Antapani'),
(20, 3, 'Alam Sutera'),
(21, 3, 'Bekasi Summarecon'),
(22, 3, 'Bandung Naripan'),
(23, 3, 'Cibubur'),
(24, 3, 'Kebon Jeruk'),
(25, 3, 'Bintaro'),
(26, 3, 'Depok'),
(27, 3, 'Bogor Padjajaran'),
(28, 3, 'Lebak Bulus'),
(29, 3, 'Taman Palem'),
(30, 3, 'Bekasi Galaxy City'),
(31, 3, 'Tebet'),
(32, 3, 'Sunter'),
(33, 3, 'Pantai Indah Kapuk'),
(34, 3, 'Citra Raya'),
(35, 3, 'Bandung Antapani'),
(36, 4, 'Alam Sutera'),
(37, 4, 'Bekasi Summarecon'),
(38, 4, 'BSD'),
(39, 4, 'Kebon Jeruk'),
(40, 4, 'Bintaro'),
(41, 4, 'Gading Serpong'),
(42, 4, 'Depok'),
(43, 4, 'Bogor Padjajaran'),
(44, 4, 'Bandung Setiabudi'),
(45, 4, 'Kemang'),
(46, 4, 'Taman Palem'),
(47, 4, 'Bekasi Galaxy City'),
(48, 4, 'Tebet'),
(49, 4, 'Sunter'),
(50, 4, 'Pantai Indah Kapuk'),
(51, 4, 'Citra Raya'),
(52, 4, 'Bandung Antapani'),
(53, 5, 'Alam Sutera'),
(54, 5, 'Bandung Naripan'),
(55, 5, 'Gading Serpong'),
(56, 5, 'Bogor Padjajaran'),
(57, 5, 'Kemang'),
(58, 5, 'Tebet'),
(59, 5, 'Sunter'),
(60, 5, 'Pantai Indah Kapuk'),
(61, 5, 'Citra Raya'),
(62, 5, 'Bandung Antapani'),
(63, 6, 'Bekasi Summarecon'),
(64, 6, 'Depok'),
(65, 6, 'Bogor Padjajaran'),
(66, 6, 'Bekasi Galaxy City'),
(67, 6, 'Tebet'),
(68, 6, 'Sunter'),
(69, 7, 'Alam Sutera'),
(70, 7, 'Bintaro'),
(71, 7, 'Pantai Indah Kapuk');

-- --------------------------------------------------------

--
-- Table structure for table `photo`
--

CREATE TABLE `photo` (
  `id` int(10) NOT NULL,
  `id_product` int(10) NOT NULL DEFAULT '0',
  `url` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `photo`
--

INSERT INTO `photo` (`id`, `id_product`, `url`) VALUES
(1, 1, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/2/m/2mg3.jpg'),
(2, 1, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/m/a/manu_2s_darkgrey_nonshadow_edit_warna_-_2.jpg'),
(3, 1, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/2/m/2mg4.jpg'),
(4, 1, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/m/a/manu_2s_darkgrey_nonshadow_edit_warna_-_1.jpg'),
(5, 1, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/m/a/manu_2s_darkgrey_nonshadow_edit_warna_-_3.jpg'),
(6, 2, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/z/o/Zoey_3_Seater_Sofa_(Blue_Jay)_0.jpg'),
(7, 2, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/z/o/Zoey_3_Seater_Sofa_(Blue_Jay)_1.jpg'),
(8, 2, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/z/o/Zoey_3_Seater_Sofa_(Blue_Jay)_2.jpg'),
(9, 2, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/z/o/Zoey_3_Seater_Sofa_(Blue_Jay)_3.jpg'),
(10, 2, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/z/o/Zoey_3_Seater_Sofa_(Blue_Jay)_4.jpg'),
(11, 2, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/z/o/Zoey_3_Seater_Sofa_(Blue_Jay)_5.jpg'),
(12, 2, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/z/o/Zoey_3_Seater_Sofa_(Blue_Jay)_6.jpg'),
(13, 2, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/1/0/107.-zoey-3-seater-sofa---blue-jay-a.jpg'),
(14, 2, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/1/0/107.-zoey-3-seater-sofa---blue-jay-b.jpg'),
(15, 3, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/e/t/Eton_2_Seater_Sofa_(Blue_Jay)_1.jpg'),
(16, 3, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/e/t/Eton_2_Seater_Sofa_(Blue_Jay)_2.jpg'),
(17, 3, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/e/t/Eton_2_Seater_Sofa_(Blue_Jay)_3.jpg'),
(18, 3, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/e/t/Eton_2_Seater_Sofa_(Blue_Jay)_4.jpg'),
(19, 3, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/e/t/Eton_2_Seater_Sofa_(Blue_Jay)_5.jpg'),
(20, 3, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/e/t/Eton_2_Seater_Sofa_(Blue_Jay)_6.jpg'),
(21, 3, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/e/t/Eton_2_Seater_Sofa_(Blue_Jay)_7.jpg'),
(22, 3, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/e/t/Eton_2_Seater_Sofa_(Blue_Jay)_8.jpg'),
(23, 4, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/m/a/manu_2s_mystic_nonshadow_edit_warna_-_1_2.jpg'),
(24, 4, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/m/a/manu_2s_mystic_nonshadow_edit_warna_-_1_3.jpg'),
(25, 4, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/m/a/manu_2s_mystic_nonshadow_edit_warna_-_1_1.jpg'),
(26, 5, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/d/e/deni_2s_dark_grey_no_shadow_-_edit_warna_-_2_1.jpg'),
(27, 5, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/d/e/deni_2s_dark_grey_no_shadow_-_edit_warna_-_3_1.jpg'),
(28, 5, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/d/e/deni_2s_dark_grey_no_shadow_-_edit_warna_-_1_1_1.jpg'),
(29, 5, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/d/e/deni-2-seater-light-blue_1_1_4.jpg'),
(30, 5, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/2/_/2_grey1_1.jpg'),
(31, 6, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/d/e/deacon_white_1_1_1.jpg'),
(32, 6, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/d/e/deacon_white_2_1.jpg'),
(33, 6, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/d/e/deacon_white_3_1.jpg'),
(34, 6, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/d/e/deacon_1_1.jpg'),
(35, 7, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/c/e/Cello_Sofa_Bed_(Ruby)_0.jpg'),
(36, 7, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/c/e/Cello_Sofa_Bed_(Ruby)_1.jpg'),
(37, 7, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/c/e/Cello_Sofa_Bed_(Ruby)_2.jpg'),
(38, 7, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/c/e/Cello_Sofa_Bed_(Ruby)_3.jpg'),
(39, 7, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/c/e/Cello_Sofa_Bed_(Ruby)_5.jpg'),
(40, 7, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/c/e/Cello_Sofa_Bed_(Ruby)_7.jpg'),
(41, 7, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/c/e/Cello_Sofa_Bed_(Ruby)_9.jpg'),
(42, 7, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/c/e/Cello_Sofa_Bed_(Ruby)_11.jpg'),
(43, 7, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/c/e/Cello_Sofa_Bed_(Ruby)_13.jpg'),
(44, 7, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/c/e/Cello_Sofa_Bed_(Ruby)_14.jpg'),
(45, 7, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/c/e/Cello_Sofa_Bed_(Ruby)_15.jpg'),
(46, 7, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/5/7/57.-cello-sofa-bed---ruby-a.jpg'),
(47, 7, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/5/7/57.-cello-sofa-bed---ruby-b.jpg'),
(48, 8, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/c/a/cahil_1_1.jpg'),
(49, 8, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/c/a/cahil_2_1.jpg'),
(50, 8, 'https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/c/a/cahil_3_1.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(10) NOT NULL,
  `url` varchar(250) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `sku` varchar(100) DEFAULT NULL,
  `description` text,
  `price_current` varchar(30) DEFAULT NULL,
  `price_old` varchar(30) DEFAULT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `url`, `name`, `sku`, `description`, `price_current`, `price_old`, `created`) VALUES
(1, 'https://fabelio.com/ip/sofa-2-dudukan-manu.html', 'Sofa 2 Dudukan Manu', 'F32FD50-3KH000MN-KIT', 'Sofa Tebaik Untuk Santai dan Istirahat Bersama&nbsp;<br/>Menikmati waktu liburan sambil bersantai memang paling pas dilakukan di rumah. Suasana rumah yang nyaman dan tenang akan membuat liburan semakin sempurna. Waktu santai di rumah akan membuat tubuh semakin rileks bila disempurnakan dengan furnitur yang pas. sofa 2 Kursi Manu hadir sebagai penyempurna waktu santai Anda di rumah.. Ukurannya yang pas dapat menampung hingga 2 orang. Sangat pas ditempatkan di apartemen ataupun hunian minimalis. Warna yang ditawarkan juga banyak menjadikan sofa 2 Kursi Manu dapat kalian kombinasikan dengan perabotan yang sudah ada, kayu solid serta natural open pore sebagai finishing serta dimensi 140cmx74x78cm membuat Sofa 2 Kursi Manu menjadi furnitur yang eksklusif.<br/>NB:&nbsp;Untuk produk yang memerlukan perakitan, akan dilakukan beberapa hari setelah produk dikirim. Apabila telah melebih dari 7 (tujuh) hari setelah produk dikirim belum ada tim kami yang menghubungi jadwal perakitan, Mohon segera hubungi tim Customer Service kami.', 'Rp 2.499.000', NULL, '2020-05-31 06:37:53'),
(2, 'https://fabelio.com/ip/zoey-3-seater-sofa.html', 'Sofa 3 Dudukan Zoey', 'FMPSIMSO003', 'Zoey berasal dari bahasa Yunani ""Zoey"" yang berarti kehidupan. Seperti namanya, Zoey 3 Seater dirancang untuk menghidupkan suasana di ruang keluarga Anda. Permukaan cotton fabric yang terjahit rapi membungkus bantalan indoor foam cocok digunakan untuk bermain game atau bermalas-malasan bersama di akhir pekan siang. Desain modern bantalan peluk juga nyaman untuk tidur siang si kecil. Apapun aktivitasnya, suasana keluarga yang hidup yang akan Anda dan keluarga rasakan.', 'Rp 6.499.000', NULL, '2020-05-31 06:40:32'),
(3, 'https://fabelio.com/ip/eton-2-seater-sofa-4632.html', 'Sofa 2 Dudukan Eton', 'F32FD21', 'Tidak seharusnya rumah menjadi tempat yang membosankan. Anda bisa menghadirkan suasana yang lebih menarik dengan Eton 2 Seater yang dinamis dengan warna yang menonjol. Tidak hanya membunuh gaya interior yang membosankan dengan gaya skandinavian-nya, kursi dengan bantalan luas bisa jadi tempat yang nyaman untuk berbagai aktivitas.<br/>Tentunya, ukurannya yang minimalis juga cocok mengisi ruang-ruang minimalis di hunian Anda. Jadikan ruang keluarga bagian yang ceria dan hidup dengan menghadirkan Eton 2 Seater ke tengah-tengah aktivitas Anda dan pasangan.', 'Rp 2.249.250', 'Rp 2.999.000', '2020-05-31 06:40:54'),
(4, 'https://fabelio.com/ip/sofa-2-dudukan-manu.html?fabric_color=14108', 'Sofa 2 Dudukan Manu', 'F32FD50-3KH000MN-KIT', 'Sofa Tebaik Untuk Santai dan Istirahat Bersama&nbsp;<br/>Menikmati waktu liburan sambil bersantai memang paling pas dilakukan di rumah. Suasana rumah yang nyaman dan tenang akan membuat liburan semakin sempurna. Waktu santai di rumah akan membuat tubuh semakin rileks bila disempurnakan dengan furnitur yang pas. sofa 2 Kursi Manu hadir sebagai penyempurna waktu santai Anda di rumah.. Ukurannya yang pas dapat menampung hingga 2 orang. Sangat pas ditempatkan di apartemen ataupun hunian minimalis. Warna yang ditawarkan juga banyak menjadikan sofa 2 Kursi Manu dapat kalian kombinasikan dengan perabotan yang sudah ada, kayu solid serta natural open pore sebagai finishing serta dimensi 140cmx74x78cm membuat Sofa 2 Kursi Manu menjadi furnitur yang eksklusif.<br/>NB:&nbsp;Untuk produk yang memerlukan perakitan, akan dilakukan beberapa hari setelah produk dikirim. Apabila telah melebih dari 7 (tujuh) hari setelah produk dikirim belum ada tim kami yang menghubungi jadwal perakitan, Mohon segera hubungi tim Customer Service kami.', 'Rp 2.499.000', NULL, '2020-05-31 06:41:17'),
(5, 'https://fabelio.com/ip/sofa-2-dudukan-deni.html', 'Sofa 2 Dudukan Deni', 'F32FD51-3KH000DN-KIT', 'Kesan Klasik dan Effortless untuk Ruang Tamu<br/>Bosan dengan kursi atau bangku di rumah ? ingin memberi kesan klasik dan membeli kursi rotan tetapi tidak terlalu nyaman walaupun sudah dikaitkan dengan busa tambahan. Sofa 2 Kursi Deni memiliki model yang klasik layaknya sofa, serta bentuk yang effotless. Warna yang ditawarkan juga beragam serta harga yang sangat reasonable. Dilapisi natural open pore untuk menjaga material utama yaitu kayu solid serta bantalan busa pada segala sisinya dan berdimensi 140cm x 75cm x 78cm sofa 2 kursi deni menjadikan momen di ruang tamu lebih menyenangkan.<br/><br/>NB:&nbsp;Untuk produk yang memerlukan perakitan, akan dilakukan beberapa hari setelah produk dikirim. Apabila telah melebih dari 7 (tujuh) hari setelah produk dikirim belum ada tim kami yang menghubungi jadwal perakitan, Mohon segera hubungi tim Customer Service kami.', 'Rp 2.249.000', NULL, '2020-05-31 06:41:34'),
(6, 'https://fabelio.com/ip/sofa-bed-deacon.html', 'Sofa Tempat Tidur Deacon', 'F57FD14-3KH0000DCN', 'Tetap Santai &amp; Nyaman Tanpa Ribet<br/>Hai kenalin, namaku sofa bed Deacon, aku anggota baru di keluarga sofa bed. Meskipun aku anak baru, tapi aku bisa membuat kamu nyaman sampai ketiduran. Seluruh tubuhku dilapisi lapisan fabric yang lembut dan berkualitas. Ukuranku cukup lebar dan panjang, sehingga bisa kamu gunakan sendiri ataupun bersama pasangan. Aku memiliki berbagai warna dan motif sederhana nan elegan. Miliki aku sekarang, yuk, agar waktu santaimu makin lengkap!', 'Rp 1.979.100', 'Rp 2.199.000', '2020-05-31 09:04:34'),
(7, 'https://fabelio.com/ip/cello-sofa-bed-9751.html?fabric_color=653', 'Sofa Bed Cello', 'FMPDLCSB001', 'Pernahkah Anda tertidur di sofa dan bangun dengan leher dan otot yang kaku? Bukannya merasa segar, Anda malah merasa lelah dan butuh pijatan. Untuk menghindari kejadian tersebut, Cello Sofa Bed adalah solusi yang tepat.<br/>Sofa multiwarna ini dapat dengan mudah disulap menjadi ranjang empuk untuk beristirahat sambil mendengarkan alunan musik dan angin semilir di sore hari. Baik berbentuk sofa maupun kasur, bantalan Cello dijamin nyaman menopang tubuh Anda dan membantu memberikan istirahat yang lebih tentram. Sofa lipat ini juga berguna ketika Anda hendak menjamu tamu atau kerabat dekat yang menginap singkat.', 'Rp 3.229.150', 'Rp 3.799.000', '2020-05-31 09:15:08'),
(8, 'https://fabelio.com/ip/sofa-lantai-cahil.html', 'Sofa Lantai Cahil', 'FMP-IPI-002', 'Merupakan kursi lesehan yang memiliki konsep Jepang Modern sangat cocok digunakan untuk bersantai di ruang keluarga. Kursi ini terbuat dari busa INOAC Medium Soft Firm yang terbukti berkualitas &amp; tahan kempes. Reclining atau tingkat kemiringan pada sandaran belakang dapat diatur kemiringannya hingga 5x sampai dengan posisi datar. Kursi ini tersedia dalam berbagai pilihan warna.', 'Rp 1.750.000', 'Rp 2.100.000', '2020-05-31 09:15:37');

-- --------------------------------------------------------

--
-- Table structure for table `specification`
--

CREATE TABLE `specification` (
  `id` int(10) NOT NULL,
  `id_product` int(10) NOT NULL DEFAULT '0',
  `label` varchar(250) DEFAULT NULL,
  `point` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `specification`
--

INSERT INTO `specification` (`id`, `id_product`, `label`, `point`) VALUES
(1, 1, 'Dimensi', '<li>Dimensi Keseluruhan: 140cm x 75cm x 81cm</li><li>Ketebalan Dudukan: 13cm</li><li>Kedalaman Dudukan: 51cm</li><li>Tinggi Sandaran Lengan: 42cm</li><li>Lebar Sandaran Lengan: 10cm</li><li>Tinggi Kaki: 18cm</li>'),
(2, 1, 'Finish/Material', '<li>Kerangka: Kayu Solid</li><li>Bantalan Punggung: Busa</li><li>Bantalan Dudukan: Busa</li><li>Bantalan Lengan: Busa</li><li>Lapisan Bantalan: Fabric</li><li>Kaki: Kayu Solid</li><li>Finishing: Natural Open Pore</li>'),
(3, 1, 'Instruksi Perawatan', 'Berbahan Kain / Fabric Cover :<br/>-Bersihkan dengan menggunakan vacuum cleaner atau dengan dry clean.<br/>Kerangka Besi / Steel Frame :<br/>-Bersihkan dengan kain lembab seperti, microfiber atau kanebo.<br/>-Produk material besi dapat digunakan di luar ruangan yang terlindungi atap.<br/>Material Plastik / Plastic Material :<br/>-Bersihkan dengan lap basah dan keringkan dengan kain kering.<br/>Material Kayu / Wooden Material :<br/>-Hindari kontak dengan air, bahan kimia, dan sinar matahari.<br/>-Bersihkan dengan lap kering (khusus noda membandel dapat menggunakan lap basah dan harus segera dikeringkan).<br/>-Produk material kayu tidak disarankan digunakan di luar ruangan.<br/>Penampang Kaca / Glass Top :<br/>-Bersihkan dengan cairan khusus pembersih kaca dan lap dengan kain pembersih.<br/>-Apabila terkena air atau cairan, segera lap dengan kain kering.<br/>'),
(4, 1, 'Pengiriman/Pengembalian', 'Pengembalian Produk<br/>Anda berhak atas 30 hari masa perkenalan atas produk yang dibeli. Apabila Anda merasa kurang puas atau terdapat kerusakan pabrik atas produk yang dibeli, produk dapat dikembalikan pada jangka waktu yang ditentukan selama tidak ada kerusakan dari customer.<br/>Pengembalian produk gratis untuk wilayah JABODETABEK.<br/>Pengembalian Dana<br/>Anda juga memiliki pilihan untuk mengajukan pengembalian dana (refund) untuk 30 hari setelah barang diterima apabila terdapat kecacatan produksi oleh pabrik. Bentuk pengembalian dana yang diberikan adalah kredit toko (store credit) atau uang tunai*.<br/>*Pengembalian uang tunai memiliki proses maksimal 3 hari kerja.<br/>Untuk informasi lebih lanjut mengenai syarat dan ketentuan pengembalian dapat mengakses www.fabelio.com/kebijakan-pengembalian.<br/>'),
(5, 2, 'Dimensi', '<li>Dimensi: 200 cm x 85 cm x 85 cm</li>'),
(6, 2, 'Finish/Material', '<li>Kerangka: Kayu Eucalyptus</li><li>Bantalan dudukan: Foam</li><li>Lapisan dudukan: Polyester</li><li>Kaki: Solid wood</li>'),
(7, 2, 'Instruksi Perawatan', 'Berbahan Kain / Fabric Cover :<br/>-Bersihkan dengan menggunakan vacuum cleaner atau dengan dry clean.<br/>Kerangka Besi / Steel Frame :<br/>-Bersihkan dengan kain lembab seperti, microfiber atau kanebo.<br/>-Produk material besi dapat digunakan di luar ruangan yang terlindungi atap.<br/>Material Plastik / Plastic Material :<br/>-Bersihkan dengan lap basah dan keringkan dengan kain kering.<br/>Material Kayu / Wooden Material :<br/>-Hindari kontak dengan air, bahan kimia, dan sinar matahari.<br/>-Bersihkan dengan lap kering (khusus noda membandel dapat menggunakan lap basah dan harus segera dikeringkan).<br/>-Produk material kayu tidak disarankan digunakan di luar ruangan.<br/>Penampang Kaca / Glass Top :<br/>-Bersihkan dengan cairan khusus pembersih kaca dan lap dengan kain pembersih.<br/>-Apabila terkena air atau cairan, segera lap dengan kain kering.<br/>'),
(8, 2, 'Pengiriman/Pengembalian', 'Pengembalian Produk<br/>Anda berhak atas 30 hari masa perkenalan atas produk yang dibeli. Apabila Anda merasa kurang puas atau terdapat kerusakan pabrik atas produk yang dibeli, produk dapat dikembalikan pada jangka waktu yang ditentukan selama tidak ada kerusakan dari customer.<br/>Pengembalian produk gratis untuk wilayah JABODETABEK.<br/>Pengembalian Dana<br/>Anda juga memiliki pilihan untuk mengajukan pengembalian dana (refund) untuk 30 hari setelah barang diterima apabila terdapat kecacatan produksi oleh pabrik. Bentuk pengembalian dana yang diberikan adalah kredit toko (store credit) atau uang tunai*.<br/>*Pengembalian uang tunai memiliki proses maksimal 3 hari kerja.<br/>Untuk informasi lebih lanjut mengenai syarat dan ketentuan pengembalian dapat mengakses www.fabelio.com/kebijakan-pengembalian.<br/>'),
(9, 3, 'Dimensi', '<li>Dimensi keseluruhan: 120 x 77 x 80 cm</li><li>Dimensi dudukan: 60 x 10 cm</li><li>Dimensi tumpuan lengan: 5,5 x 32 cm</li><li>Tinggi kaki: 35 cm</li>'),
(10, 3, 'Finish/Material', '<li>Kerangka: Kayu Solid</li><li>Bantalan: Foam</li><li>Lapisan bantalan: Fabric</li><li>Tumpuan lengan: Kayu Solid</li><li>Kaki: Kayu Solid</li><li>Finishing: Natural Open Pore</li>'),
(11, 3, 'Instruksi Perawatan', '<li>Minimalisir kontak dengan air, bahan kimia dan sinar matahari.: </li><li>Bersihkan furniture dengan lap kering,: </li><li>Apabila noda membandel boleh gunakan air kemudian langsung seka dengan lap kering.: </li>'),
(12, 3, 'Pengiriman/Pengembalian', 'Pengembalian ProdukPermintaan pengembalian produk dapat dilakukan dalam 30 hari sejak hari produk tersebut tiba. Produk harus dalam kondisi prima dan akan dicek oleh tim kami.<br/>Pengembalian DanaPengembalian dana dapat berupa kredit toko (store credit) atau uang tunai.Pengembalian dalam bentuk kredit toko dapat dilakukan secara langsung oleh agen customer service kami.Pengembalian dana dalam bentuk tunai dapat dilakukan selama dalam waktu 30 hari sejak hari produk tersebut tiba dan prosesnya akan memakan waktu selama maksimal 3 hari kerja.<br/>'),
(13, 4, 'Dimensi', '<li>Dimensi Keseluruhan: 140cm x 75cm x 81cm</li><li>Ketebalan Dudukan: 13cm</li><li>Kedalaman Dudukan: 51cm</li><li>Tinggi Sandaran Lengan: 42cm</li><li>Lebar Sandaran Lengan: 10cm</li><li>Tinggi Kaki: 18cm</li>'),
(14, 4, 'Finish/Material', '<li>Kerangka: Kayu Solid</li><li>Bantalan Punggung: Busa</li><li>Bantalan Dudukan: Busa</li><li>Bantalan Lengan: Busa</li><li>Lapisan Bantalan: Fabric</li><li>Kaki: Kayu Solid</li><li>Finishing: Natural Open Pore</li>'),
(15, 4, 'Instruksi Perawatan', 'Berbahan Kain / Fabric Cover :<br/>-Bersihkan dengan menggunakan vacuum cleaner atau dengan dry clean.<br/>Kerangka Besi / Steel Frame :<br/>-Bersihkan dengan kain lembab seperti, microfiber atau kanebo.<br/>-Produk material besi dapat digunakan di luar ruangan yang terlindungi atap.<br/>Material Plastik / Plastic Material :<br/>-Bersihkan dengan lap basah dan keringkan dengan kain kering.<br/>Material Kayu / Wooden Material :<br/>-Hindari kontak dengan air, bahan kimia, dan sinar matahari.<br/>-Bersihkan dengan lap kering (khusus noda membandel dapat menggunakan lap basah dan harus segera dikeringkan).<br/>-Produk material kayu tidak disarankan digunakan di luar ruangan.<br/>Penampang Kaca / Glass Top :<br/>-Bersihkan dengan cairan khusus pembersih kaca dan lap dengan kain pembersih.<br/>-Apabila terkena air atau cairan, segera lap dengan kain kering.<br/>'),
(16, 4, 'Pengiriman/Pengembalian', 'Pengembalian Produk<br/>Anda berhak atas 30 hari masa perkenalan atas produk yang dibeli. Apabila Anda merasa kurang puas atau terdapat kerusakan pabrik atas produk yang dibeli, produk dapat dikembalikan pada jangka waktu yang ditentukan selama tidak ada kerusakan dari customer.<br/>Pengembalian produk gratis untuk wilayah JABODETABEK.<br/>Pengembalian Dana<br/>Anda juga memiliki pilihan untuk mengajukan pengembalian dana (refund) untuk 30 hari setelah barang diterima apabila terdapat kecacatan produksi oleh pabrik. Bentuk pengembalian dana yang diberikan adalah kredit toko (store credit) atau uang tunai*.<br/>*Pengembalian uang tunai memiliki proses maksimal 3 hari kerja.<br/>Untuk informasi lebih lanjut mengenai syarat dan ketentuan pengembalian dapat mengakses www.fabelio.com/kebijakan-pengembalian.<br/>'),
(17, 5, 'Dimensi', '<li>Dimensi Keseluruhan: 140cm x 75cm x 78cm</li><li>Ketebalan Dudukan: 13cm</li><li>Kedalaman Dudukan: 45cm</li><li>Tinggi Kaki: 15cm</li>'),
(18, 5, 'Finish/Material', '<li>Kerangka: Kayu Solid</li><li>Bantalan Punggung: Busa</li><li>Bantalan Dudukan: Busa</li><li>Bantalan Lengan: Busa</li><li>Lapisan Bantalan: Fabric</li><li>Kaki: Kayu Solid</li><li>Finishing: Natural Open Pore</li>'),
(19, 5, 'Instruksi Perawatan', 'Berbahan Kain / Fabric Cover :<br/>-Bersihkan dengan menggunakan vacuum cleaner atau dengan dry clean.<br/>Kerangka Besi / Steel Frame :<br/>-Bersihkan dengan kain lembab seperti, microfiber atau kanebo.<br/>-Produk material besi dapat digunakan di luar ruangan yang terlindungi atap.<br/>Material Plastik / Plastic Material :<br/>-Bersihkan dengan lap basah dan keringkan dengan kain kering.<br/>Material Kayu / Wooden Material :<br/>-Hindari kontak dengan air, bahan kimia, dan sinar matahari.<br/>-Bersihkan dengan lap kering (khusus noda membandel dapat menggunakan lap basah dan harus segera dikeringkan).<br/>-Produk material kayu tidak disarankan digunakan di luar ruangan.<br/>Penampang Kaca / Glass Top :<br/>-Bersihkan dengan cairan khusus pembersih kaca dan lap dengan kain pembersih.<br/>-Apabila terkena air atau cairan, segera lap dengan kain kering.<br/>'),
(20, 5, 'Pengiriman/Pengembalian', 'Pengembalian Produk<br/>Anda berhak atas 30 hari masa perkenalan atas produk yang dibeli. Apabila Anda merasa kurang puas atau terdapat kerusakan pabrik atas produk yang dibeli, produk dapat dikembalikan pada jangka waktu yang ditentukan selama tidak ada kerusakan dari customer.<br/>Pengembalian produk gratis untuk wilayah JABODETABEK.<br/>Pengembalian Dana<br/>Anda juga memiliki pilihan untuk mengajukan pengembalian dana (refund) untuk 30 hari setelah barang diterima apabila terdapat kecacatan produksi oleh pabrik. Bentuk pengembalian dana yang diberikan adalah kredit toko (store credit) atau uang tunai*.<br/>*Pengembalian uang tunai memiliki proses maksimal 3 hari kerja.<br/>Untuk informasi lebih lanjut mengenai syarat dan ketentuan pengembalian dapat mengakses www.fabelio.com/kebijakan-pengembalian.<br/>'),
(21, 6, 'Dimensi', 'Sofa: 179 x 92 x 78 cm<br/>Bed: 179 x 108 x 37 cm<br/>'),
(22, 6, 'Instruksi Perawatan', 'Berbahan Kain / Fabric Cover :<br/>-Bersihkan dengan menggunakan vacuum cleaner atau dengan dry clean.<br/>Kerangka Besi / Steel Frame :<br/>-Bersihkan dengan kain lembab seperti, microfiber atau kanebo.<br/>-Produk material besi dapat digunakan di luar ruangan yang terlindungi atap.<br/>Material Plastik / Plastic Material :<br/>-Bersihkan dengan lap basah dan keringkan dengan kain kering.<br/>Material Kayu / Wooden Material :<br/>-Hindari kontak dengan air, bahan kimia, dan sinar matahari.<br/>-Bersihkan dengan lap kering (khusus noda membandel dapat menggunakan lap basah dan harus segera dikeringkan).<br/>-Produk material kayu tidak disarankan digunakan di luar ruangan.<br/>Penampang Kaca / Glass Top :<br/>-Bersihkan dengan cairan khusus pembersih kaca dan lap dengan kain pembersih.<br/>-Apabila terkena air atau cairan, segera lap dengan kain kering.<br/>'),
(23, 6, 'Finish/Material', 'Dudukan: Fabric<br/>Kaki: Kayu Solid<br/>'),
(24, 6, 'Pengiriman/Pengembalian', 'Pengembalian Produk<br/>Anda berhak atas 30 hari masa perkenalan atas produk yang dibeli. Apabila Anda merasa kurang puas atau terdapat kerusakan pabrik atas produk yang dibeli, produk dapat dikembalikan pada jangka waktu yang ditentukan selama tidak ada kerusakan dari customer.<br/>Pengembalian produk gratis untuk wilayah JABODETABEK.<br/>Pengembalian Dana<br/>Anda juga memiliki pilihan untuk mengajukan pengembalian dana (refund) untuk 30 hari setelah barang diterima apabila terdapat kecacatan produksi oleh pabrik. Bentuk pengembalian dana yang diberikan adalah kredit toko (store credit) atau uang tunai*.<br/>*Pengembalian uang tunai memiliki proses maksimal 3 hari kerja.<br/>Untuk informasi lebih lanjut mengenai syarat dan ketentuan pengembalian dapat mengakses&nbsp;www.fabelio.com/kebijakan-pengembalian.<br/>'),
(25, 7, 'Dimensi', '<li>Dimensi Sofa : Panjang&nbsp;: 181 cm x Lebar 87 cm x Tinggi 74 cm</li><li>Dimensi Kasur : Panjang&nbsp;: 181 cm x Lebar 107 cm x Tinggi 41 cm</li>'),
(26, 7, 'Finish/Material', '<li>Rangka: Kayu Mindi</li><li>Bantalan dudukan: Foam</li><li>Lapisan dudukan: Fabric</li><li>Kaki: Kayu Mindi</li>'),
(27, 7, 'Instruksi Perawatan', '<li>Jangan terkena air berwarna, bara api, asam/bahan kimia, benda tajam: </li><li>Bersihkan menggunakan kain microviber dan cuci kering: </li><li>Lap dengan kain lembab ikuti arah alur kayu: </li>'),
(28, 7, 'Pengiriman/Pengembalian', 'Pengembalian ProdukPermintaan pengembalian produk dapat dilakukan dalam 30 hari sejak hari produk tersebut tiba. Produk harus dalam kondisi prima dan akan dicek oleh tim kami.<br/>Pengembalian DanaPengembalian dana dapat berupa kredit toko (store credit) atau uang tunai.Pengembalian dalam bentuk kredit toko dapat dilakukan secara langsung oleh agen customer service kami.Pengembalian dana dalam bentuk tunai dapat dilakukan selama dalam waktu 30 hari sejak hari produk tersebut tiba dan prosesnya akan memakan waktu selama maksimal 3 hari kerja.<br/>'),
(29, 8, 'Dimensi', 'Dimensi produk: 75 x 70 x 75 cm<br/>'),
(30, 8, 'Instruksi Perawatan', 'Tidak untuk penggunaan luar ruangan/teras<br/>Jangan kontak dengan air, bahan kimia dan sinar matahari.<br/>Bersihkan furniture dengan lap kering,<br/>Apabila noda membandel boleh gunakan air kemudian langsung seka dengan lap kering.<br/>'),
(31, 8, 'Finish/Material', 'Metal frame, INOAC Scrub foam, KOYO Engineering reclining gear, Fabric<br/>'),
(32, 8, 'Pengiriman/Pengembalian', '<li>Pengembalian Produk: </li><li>Pengembalian Dana: </li>');

-- --------------------------------------------------------

--
-- Table structure for table `updated`
--

CREATE TABLE `updated` (
  `id` int(10) NOT NULL,
  `id_product` int(10) NOT NULL DEFAULT '0',
  `type` varchar(30) DEFAULT NULL,
  `price_before` varchar(30) DEFAULT NULL,
  `price_after` varchar(30) DEFAULT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `color`
--
ALTER TABLE `color`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `photo`
--
ALTER TABLE `photo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `specification`
--
ALTER TABLE `specification`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `updated`
--
ALTER TABLE `updated`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `color`
--
ALTER TABLE `color`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
--
-- AUTO_INCREMENT for table `location`
--
ALTER TABLE `location`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;
--
-- AUTO_INCREMENT for table `photo`
--
ALTER TABLE `photo`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;
--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `specification`
--
ALTER TABLE `specification`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
--
-- AUTO_INCREMENT for table `updated`
--
ALTER TABLE `updated`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
