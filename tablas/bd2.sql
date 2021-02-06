

CREATE TABLE `electroventas`.`categorias` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NULL,
  `habilitado` TINYINT NULL DEFAULT 0,
  `ts_create` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `ts_update` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `nombre_UNIQUE` (`nombre` ASC) VISIBLE);


--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idCategoria` int(11) DEFAULT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `habiitado` tinyint(4) DEFAULT '0',
  `ts_create` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `ts_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--insert into productos(nombre,precio,marca,stock,idCategoria,habilitado) values ('lamparas de led',100,'general Electric',500,1,1);
--insert into categorias(nombre,habilitado)values('lamparas',1);
--insert into categorias(nombre,habilitado)values('cables',2);
--insert into categorias(nombre,habilitado)values('iluminacion',3);


--delete from categorias where id=1;
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `correo` varchar(45) DEFAULT NULL,
  `telefono` varchar(45) DEFAULT NULL,
  `habilitado` tinyint(4) DEFAULT '0',
  `usuario` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `ts_create` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `ts_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-12 16:08:33
