-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema RestoManagment
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema RestoManagment
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `RestoManagment` DEFAULT CHARACTER SET utf8 ;
USE `RestoManagment` ;

-- -----------------------------------------------------
-- Table `RestoManagment`.`resto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `RestoManagment`.`resto` (
  `idresto` INT NOT NULL AUTO_INCREMENT,
  `restaurentName` VARCHAR(45) NOT NULL,
  `restaurentPasword` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idresto`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `RestoManagment`.`orderr`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `RestoManagment`.`orderr` (
  `idorder` INT NOT NULL AUTO_INCREMENT,
  `redyStatus` VARCHAR(45) NOT NULL,
  `Ordered` VARCHAR(45) NOT NULL,
  `resto_idresto` INT NOT NULL,
  PRIMARY KEY (`idorder`, `resto_idresto`),
  INDEX `fk_orderr_resto1_idx` (`resto_idresto` ASC) VISIBLE,
  CONSTRAINT `fk_orderr_resto1`
    FOREIGN KEY (`resto_idresto`)
    REFERENCES `RestoManagment`.`resto` (`idresto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `RestoManagment`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `RestoManagment`.`orders` (
  `idorders` INT NOT NULL AUTO_INCREMENT,
  `resto_idresto` INT NOT NULL,
  `whattoorder` VARCHAR(45) NOT NULL,
  `price` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idorders`, `resto_idresto`),
  INDEX `fk_orders_resto1_idx` (`resto_idresto` ASC) VISIBLE,
  CONSTRAINT `fk_orders_resto1`
    FOREIGN KEY (`resto_idresto`)
    REFERENCES `RestoManagment`.`resto` (`idresto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
