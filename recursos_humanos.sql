-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-06-2023 a las 04:13:56
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `recursos_humanos`
--
CREATE DATABASE IF NOT EXISTS `recursos_humanos` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `recursos_humanos`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `datos`
--

CREATE TABLE `datos` (
  `ID` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Apellidos` varchar(50) NOT NULL,
  `Correo` varchar(70) NOT NULL,
  `Clave` varchar(50) NOT NULL,
  `Telefono` varchar(12) NOT NULL,
  `Direccion` varchar(65) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `datos`
--

INSERT INTO `datos` (`ID`, `Nombre`, `Apellidos`, `Correo`, `Clave`, `Telefono`, `Direccion`) VALUES
(1, 'Saul ', 'Zapata', 'saul@gmail.com', '12345', '4422715714', 'Blvd. De las Ciencias, Juruiquilla, Qro.'),
(3, 'Edgar', 'Alvarado Castillo', 'edgar@express.mx', '', '4429045189', 'Misioneros #45, Corregidora, Qro.'),
(4, 'Luis', 'Torres', 'luis@express.mx', '', '4420094671', 'Lagos de Moreno #35, Centro, Qro.'),
(5, 'Omar', 'Zapata Perez Garcia', 'omar@express.mx', '', '4423838345', 'Juriquilla'),
(9, 'Miguel Angel', 'Ortiz', 'miguel@express.mx', '', '4449084438', 'Valle #23, Los Silos, SLP'),
(10, 'Mauricio', 'Corona', 'mau@uaq.mx', '12345uaq', '4428894561', 'Facultad de Informatica #33, Juriquilla, Qro');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `datos`
--
ALTER TABLE `datos`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `datos`
--
ALTER TABLE `datos`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
