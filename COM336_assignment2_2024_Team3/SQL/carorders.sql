-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: sql302.infinityfree.com
-- Generation Time: Apr 18, 2025 at 08:38 AM
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
-- Database: `if0_38692919_stockdetailsdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `carorders`
--

CREATE TABLE `carorders` (
  `id` int(11) NOT NULL,
  `carType` varchar(50) NOT NULL,
  `personalizedPlate` varchar(20) NOT NULL,
  `color` varchar(30) NOT NULL,
  `budgetPrice` decimal(10,2) NOT NULL,
  `budgetMileage` int(11) NOT NULL,
  `fuelType` varchar(20) NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `telephone` varchar(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `carorders`
--

INSERT INTO `carorders` (`id`, `carType`, `personalizedPlate`, `color`, `budgetPrice`, `budgetMileage`, `fuelType`, `firstName`, `lastName`, `email`, `city`, `telephone`) VALUES
(28, 'Sport_Cars', 'AB12C3', 'Magenta', '5.00', 5000, 'gasoline', 'Maurice', 'Pickleston', 'maurice@pickleston.com', 'Beijing', '6160181456'),
(27, 'Sport_Cars', 'n70 goc ', 'red', '6000.00', 19000, 'diesel', 'Keelan ', 'Archibald ', 'archiekeelan@gmail.com', 'Dungiven', '07935137539');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `carorders`
--
ALTER TABLE `carorders`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `carorders`
--
ALTER TABLE `carorders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
