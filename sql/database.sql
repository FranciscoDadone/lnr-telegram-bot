CREATE DATABASE IF NOT EXISTS lnrtelegram;

USE lnrtelegram;

CREATE TABLE usuarios (
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(20) DEFAULT NULL,
  apellido VARCHAR(20) DEFAULT NULL,
  username VARCHAR(20) DEFAULT NULL,
  telegram_username VARCHAR(30),
  rol VARCHAR(10) DEFAULT 'ESPECTADOR',
  PRIMARY KEY (id)
);

CREATE TABLE robots (
  id NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(20) NOT NULL,
  foto VARCHAR(40),
  peso_grs INT(10),
  capitan_id INT(10),
  ayudantes_id VARCHAR(40),
  PRIMARY KEY (id)
);

CREATE TABLE competencias (

);

CREATE TABLE historial_robots (
  id NOT NULL AUTO_INCREMENT,
  cambio TEXT NOT NULL,
  id_robot INT(10) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE historial_usuarios (
  id NOT NULL AUTO_INCREMENT,
  cambio TEXT NOT NULL,
  id_usuario INT(10) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE historial_competencias (
  id NOT NULL AUTO_INCREMENT,
  cambio TEXT NOT NULL,
  PRIMARY KEY (id)
);
