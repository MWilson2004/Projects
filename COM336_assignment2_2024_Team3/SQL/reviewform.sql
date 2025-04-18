-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: sql302.infinityfree.com
-- Generation Time: Apr 18, 2025 at 08:37 AM
-- Server version: 10.6.19-MariaDB
-- PHP Version: 7.2.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `if0_38692919_reviewformdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `reviewform`
--

CREATE TABLE `reviewform` (
  `id` int(11) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `surname` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `rating` int(11) NOT NULL,
  `review` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `reviewform`
--

INSERT INTO `reviewform` (`id`, `firstname`, `surname`, `email`, `rating`, `review`) VALUES
(15, 'Keelan', 'Archibald', 'archiekeelan@gmail.com', 5, 'Excellent website'),
(14, 'Mark', 'Doherty', 'MD@Ulster', 1, 'Bad'),
(13, 'Matthew', 'Wilson', 'Test1@Test', 4, 'I like the website');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `reviewform`
--
ALTER TABLE `reviewform`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `reviewform`
--
ALTER TABLE `reviewform`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
